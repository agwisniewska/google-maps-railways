import { mapDataToMarker } from "./map-station-to-marker"

const station = {
    geometry: {type: '', coordinates: [76, 70]},
    recordid: '12',
    datasetid: '1',
    
}

interface Scenario {
    description: string;
    data: Parameters<typeof mapDataToMarker>,
    result: ReturnType<typeof mapDataToMarker>,
}

const scenarios: Scenario[] = [{
    description: 'empty string if argument is typeof number',
    data: ['1', {lat: 76, lng: 70}],
    result: {
        id: '1',
        position: {
          lat: 76,
          lng: 70
        }
      }
}, {
    description: 'empty string if argument is typeof null',
    data: ['2', {lat: 50, lng: 100}],
    result: {
        id: '2',
        position: {
          lat: 50,
          lng: 100
        }
      }
}]



describe.each(scenarios)('mapDataToMarker', ({data, result, description}) => {
    it(`${description}`, () => {
        expect(mapDataToMarker(...data)).toEqual(result);
    })
})