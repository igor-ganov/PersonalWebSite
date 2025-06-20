import {TimelinesPart} from "../_configuration";

const keyValues = [
    "greeting-container",
    "avatar",
    "intro-one",
    "intro-two",
    "intro-free",
] as const;


type ChildrenKey = (typeof keyValues)[number];
const greetingChildrenKeys = Object.fromEntries(
    keyValues.map(key => [key, key])
) as Record<ChildrenKey, ChildrenKey>;


export const childrenAnimations: Record<ChildrenKey, {
    start: { [key: string]: string | number },
    states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    mobile?: {
        start: { [key: string]: string | number },
        states: Partial<Record<TimelinesPart, { [key: string]: string | number }>>,
    }
    timeline?: string
}> = {
    avatar: {
        start: {transform: 'translateX(-100%)'},
        states: {
            part2: {transform: 'translateX(0)'},
            part4: {
                transform: 'translate(-50%, calc(-100vh/2)) scale(0.2) translate(calc(50% + 3em), calc(50%  + 3em))'
            },
        },
        mobile: {
            start: {transform: 'translateY(-100%)'},
            states: {
                part2: {transform: 'translateY(0)'},
                part4: {transform: 'translateY(-100%)'},
            }
        }
    },
    "greeting-container": {
        start: {'grid-template-columns': '0 1fr'},
        states: {
            part2: {'grid-template-columns': '485.3px 1fr'},
            part4: {'grid-template-columns': '0 1fr'}
        },
        mobile: {
            start: {
                'grid-template-columns': '1fr',
                'grid-template-rows': '0 1fr'
            },
            states: {
                part2: {'grid-template-rows': '400px 1fr'},
                part4: {'grid-template-rows': '0 1fr'}
            },
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
    "intro-free": {
        start: {opacity: 0},
        states: {
            part3: {opacity: 1},
            part4: {opacity: 0}
        }
    },

}

const intro = {
    one: "Hello there!",
    two: "My name is Igor",
    free: "I'm a Senior Full-stack Developer",
};

const Avatar = () => (
    <div
        className={`${greetingChildrenKeys["greeting-container"]} avatar-container fixed`}
    >
        <picture
            className={`${greetingChildrenKeys["avatar"]} avatar`}
        >
            <img src="assets/avatar.jpg" alt="My avatar"/>
        </picture>
        <div className="intro-text">
            <h1
                className={`${greetingChildrenKeys["intro-one"]} intro`}
            >
                {intro.one}
            </h1>

            <h1
                className={`${greetingChildrenKeys["intro-two"]} intro`}
            >
                {intro.two}
            </h1>
            
            <h1
                className={`${greetingChildrenKeys["intro-free"]} intro`}
            >
                {intro.free}
            </h1>
        </div>
    </div>
)

export default Avatar;