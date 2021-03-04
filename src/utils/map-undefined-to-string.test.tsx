import { mapUndefinedToString } from "./map-undefined-to-string"


interface Scenario {
    description: string;
    data: Parameters<typeof mapUndefinedToString>,
    result: ReturnType<typeof mapUndefinedToString>,
}

const scenarios: Scenario[] = [{
    description: 'empty string if argument is typeof number',
    data: [2],
    result: ''
}, {
    description: 'empty string if argument is typeof null',
    data: [undefined],
    result: ''
}, {
    description: 'string itself if argument is typeof string',
    data: ['text'],
    result: 'text'
}]



describe.each(scenarios)('mapUndefinedToString', ({data, result, description}) => {
    it(`${description}`, () => {
        expect(mapUndefinedToString(...data)).toEqual(result);
    })
})