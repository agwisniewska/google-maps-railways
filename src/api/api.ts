import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const isDevelopment = process.env.NODE_ENV !== 'production';

class Api {
    public fetch = async (url: string, requestConfig?: AxiosRequestConfig) => {
        const response: Promise<AxiosResponse> = axios.get(url, requestConfig);
        response
            .then(result => result)
            .catch((err) => {
                (isDevelopment) ?
                    console.error(`[Api] Fetch error: ${err}`) :
                    console.warn(`[Api] Fetch error: ${err}`)
            })
        return response;
    }
}



export const api = new Api();