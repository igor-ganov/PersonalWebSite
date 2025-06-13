export type TimelinesPart = keyof typeof timelines;
export const timelines = {
    part1: 100,
    part2: 100,
    part3: 100,
    part4: 100,
}
export const animations: Record<ChildrenKey, {
    start: { [key: string]: string | number },
    states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    timeline?: string
}> = {
    hello: {
        start: {opacity: 0},
        states: {
            part1: {opacity: 1},
            part3: {opacity: 0}
        }
    },
    avatar: {
        start: {transform: 'translateX(-100%)'},
        states: {
            part2: {transform: 'translateX(0)'},
            part4: {transform: 'translateX(-100%)'},
        }
    },
    "greeting-container": {
        start: {'grid-template-columns': '0 1fr'},
        states: {
            part2: {'grid-template-columns': '150px 1fr'},
            part4: {'grid-template-columns': '0 1fr'}
        }
    }
}

const keyValues = [
    "greeting-container",
    "avatar",
    "hello"
] as const;


export type ChildrenKey = (typeof keyValues)[number];
const childrenKeys = Object.fromEntries(
    keyValues.map(key => [key, key])
) as Record<ChildrenKey, ChildrenKey>;



export const children = [
    <div key={childrenKeys["greeting-container"]} className={"greeting-container dum-block-container"}>
        <div key={childrenKeys.avatar} className={"avatar dum-block"}></div>
        <div key={childrenKeys.hello} className={"hello dum-block"}></div>
    </div>
];
