import { useContext } from "react";
import { LevelContext } from "./LevelContext.tsx";

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error("Heading must be inside a section!");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h1>{children}</h1>;

    case 3:
      return <h1>{children}</h1>;

    case 4:
      return <h1>{children}</h1>;

    case 5:
      return <h1>{children}</h1>;

    case 6:
      return <h1>{children}</h1>;
    default:
        throw Error ("Unkown level: " + level);  
  }
}
