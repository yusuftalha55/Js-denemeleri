import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function section( {children} ) {
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}