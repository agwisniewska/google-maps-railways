import { defaultParams } from './../services/StationsService';
import { api } from './api';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Api', () => {
    it('fetch fetches successfully data from an API', async () => {
        const data = {
            stations: [
                {
                    stationId: '1',
                    name: 'a',
                },
                {
                    stationId: '2',
                    name: 'b',
                },
            ],
        };

        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(api.fetch('https://data.sbb.ch/api/records/1.0/search/')).resolves.toEqual(data);
    });

    it('fetch fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

        await expect(api.fetch('https://data.sbb.ch/api/records/1.0/search/')).rejects.toThrow(errorMessage);
    });
});