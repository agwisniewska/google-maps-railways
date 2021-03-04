import { mapServiceToIcon } from "./map-service-to-icon"

const testIconsMap = {
    luggage: {
        className: 'luggage',
        img: '@/assets/images/Groupe 4.svg'
    },
    money: {
        className: 'money',
        img: '@/assets/images/Groupe 5.svg'
    },
    lunge: {
        className: 'lunge',
        img: '@/assets/images/Groupe 6.svg'
    }
}

interface Scenario {
    serviceName: string;
    data: Parameters<typeof mapServiceToIcon>,
    result: ReturnType<typeof mapServiceToIcon>
}

const scenarios: Scenario[] = [{
    serviceName: 'luggage',
    data: [testIconsMap, 'luggage'],
    result: {
        className: 'luggage',
        img: "@/assets/images/Groupe 4.svg"
    },
}, {
    serviceName: 'money',
    data: [testIconsMap, 'money'],
    result: {
        className: 'money',
        img: "@/assets/images/Groupe 5.svg"
    },
}, {
    serviceName: 'lunge',
    data: [testIconsMap, 'lunge'],
    result: {
        className: 'lunge',
        img: "@/assets/images/Groupe 6.svg"
    },
}, {
    serviceName: 'passport',
    data: [testIconsMap, 'passport'],
    result: null
}
]

describe.each(scenarios)('mapServiceToIcon', ({ serviceName, data, result }) => {
    it(`returns icon if service: ${serviceName} is on on supported list and null otherwise`, () => {
        expect(mapServiceToIcon(...data)).toEqual(result)
    })
})