import {Animations} from "../types";

const keyValues = [
    "greeting-container",
    "avatar",
    "avatar-img",
    "intro-one",
    "intro-two",
    "intro-free",
] as const;


type GreetingChildrenKey = (typeof keyValues)[number];
export const greetingChildrenKeys = Object.fromEntries(
    keyValues.map(key => [key, key])
) as Record<GreetingChildrenKey, GreetingChildrenKey>;

export const greetingAnimations: Animations<GreetingChildrenKey> = {
    avatar: {
        start: {
            transform: 'translateX(-100%)',
            opacity: 0,
        },
        states: {
            part2: {
                transform: 'translateX(0)',
                opacity: 1,
            },
            part4: {
                transform: 'translate(-50%, calc(-50vh)) scale(0.2) translate(calc(50% + 3em), calc(50%  + 2em))',
                opacity: 1,
            },
        },
        mobile: {
            start: {
                transform: 'translateY(-100%)',
                opacity: 0,
            },
            states: {
                part2: {
                    transform: 'translateY(0)',
                    opacity: 1,
                },
                part4: {
                    transform: 'translate(-50vw, -50%) scale(0.2) translate(calc(50% + 3em), calc(50% + 2em))',
                    opacity: 1,
                },
            }
        }
    },
    "avatar-img": {
        start: {
            'clip-path': 'circle(100% at 50% 55%)',
        },
        states: {
            part4: {
                'clip-path': 'circle(40% at 50% 55%)',
            }
        },
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
        start: {
            opacity: 0,
            transform: 'translateY(50%)'
        },
        states: {
            part1: {opacity: 1},
            part2: {opacity: 0}
        }
    },
    "intro-two": {
        start: {
            opacity: 0,
            transform: 'translateY(50%)'
        },
        states: {
            part2: {
                opacity: 1,
                transform: 'translateY(0)'
            },
            part3: {opacity: 0}
        }
    },
    "intro-free": {
        start: {
            opacity: 0,
            transform: 'translateY(50%)'
        },
        states: {
            part3: {
                opacity: 1,
                transform: 'translateY(0)'
            },
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
            <img className={`${greetingChildrenKeys["avatar-img"]}`} src="assets/avatar.jpg" alt="My avatar"/>
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