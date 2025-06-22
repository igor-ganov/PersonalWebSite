import {Animations} from "../types";

const keyValues = [
    "header",
] as const;


type HeaderChildrenKey = (typeof keyValues)[number];
export const headerKeys = Object.fromEntries(
    keyValues.map(key => [key, key])
) as Record<HeaderChildrenKey, HeaderChildrenKey>;

export const headerAnimations: Animations<HeaderChildrenKey> = {
    header: {
        start: {
            transform: 'translateY(-100%)',
        },
        states: {
            part4: {
                transform: 'translateY(0)',
            },
        }
    },
}

const Header = () => (
    <header className="header">
        <h1>Senior Full-stack developer</h1>
    </header>
);

export default Header;