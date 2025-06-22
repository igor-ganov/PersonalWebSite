import {Animations} from "../types";

const keyValues = [
    "technologies-title",
    "technology-1",
    "technology-2",
    "technology-3",
    "technology-4",
    "technology-5",
    "technology-6",
    "technology-7",
    "technology-8",
    "technologies-container"
] as const;


type ChildrenKey = (typeof keyValues)[number];
export const technologiesKeys = Object.fromEntries(
    keyValues.map(key => [key, key])
) as Record<ChildrenKey, ChildrenKey>;

export const technologiesAnimations: Animations<ChildrenKey> = {
    'technologies-title': {
        start: {
            transform: 'translateY(-50%)',
            opacity: 0,
        },
        states: {
            part4: {
                transform: 'translateY(0)',
                opacity: 1,
            },
        }
    },
    'technology-1': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part5: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-2': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part6: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-3': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part7: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-4': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part8: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-5': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part9: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-6': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part10: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-7': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part11: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technology-8': {
        start: {
            transform: 'translateX(50vw)',
            opacity: 0,
        },
        states: {
            part12: {
                transform: 'translateX(0)',
                opacity: 1,
            },
        }
    },
    'technologies-container': {
        start: {
            rotate: '0 1 0 0deg'
        },
         states: {
            part13: {
                rotate: '0 1 0 90deg'
            }
         }
    }
}

const Technologies = () => (
    <div className={technologiesKeys['technologies-container']}>
        <h2 className={technologiesKeys['technologies-title']}>I have worked with technologies such as...</h2>
        <ul className="technologies-list">
            <ol className={technologiesKeys['technology-1']}>C#,</ol>
            <ol className={technologiesKeys['technology-2']}>TypeScript,</ol>
            <ol className={technologiesKeys['technology-3']}>Angular,</ol>
            <ol className={technologiesKeys['technology-4']}>Asp .NET Core,</ol>
            <ol className={technologiesKeys['technology-5']}>Azure Cloud,</ol>
            <ol className={technologiesKeys['technology-6']}>Firebase,</ol>
            <ol className={technologiesKeys['technology-7']}>PostgreSQL,</ol>
            <ol className={technologiesKeys['technology-8']}>And many others</ol>
        </ul>
    </div>
);

export default Technologies;