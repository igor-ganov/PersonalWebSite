import {TimelinesPart} from "../_configuration";

const keyValues = [
    "greeting-container",
    "avatar",
    "intro-one",
    "intro-two",
] as const;


type ChildrenKey = (typeof keyValues)[number];
const greetingChildrenKeys = Object.fromEntries(
    keyValues.map(key => [key, key])
) as Record<ChildrenKey, ChildrenKey>;


export const childrenAnimations: Record<ChildrenKey, {
    start: { [key: string]: string | number },
    states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    timeline?: string
}> = {
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
            part2: {'grid-template-columns': '485.3px 1fr'},
            part4: {'grid-template-columns': '0 1fr'}
        }
    },
    "intro-one": {
        start: {opacity: 0},
        states: {
            part1: {opacity: 1},
            part2: {opacity: 0}
        }
    },
    "intro-two": {
    start: {opacity: 0},
    states: {
        part2: {opacity: 1},
        part3: {opacity: 0}
    }
},
    
}

const intro = {
    one: "Hello there!",
    two: "My name is Igor",
};

const Avatar = () => (
    <div
        className={`${greetingChildrenKeys["greeting-container"]} avatar-container animated animation-greeting-container fixed`}
    >
        <picture
            className={`${greetingChildrenKeys["avatar"]} avatar animated animation-greeting-avatar`}
        >
            <img src="assets/avatar.jpg" alt="My avatar"/>
        </picture>
        <div className="intro-text">
            <h1
                className={`${greetingChildrenKeys["intro-one"]} intro animated animation-greeting starting-animation-greeting`}
            >
                {intro.one}
            </h1>

            <h1
                className={`${greetingChildrenKeys["intro-two"]} intro animated animation-intro`}
            >
                {intro.two}
            </h1>
        </div>
    </div>
)

export default Avatar;