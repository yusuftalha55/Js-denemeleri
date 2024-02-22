import { useContext } from "react";
import {LevelContext} from './LevelContext.tsx';

export default function Heading( {children} ) {
    const level = useContext(LevelContext);
    switch (level) {
        case 0:
            throw Error ("Heading must be inside a section!");
        case 1:
            return <h1>{children}</h1>;
    }
}