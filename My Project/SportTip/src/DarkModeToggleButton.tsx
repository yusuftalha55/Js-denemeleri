// import React, { useState, createContext, useContext } from 'react';

// const  backGroundContext = createContext<string>("#faebd7");

// // export default backGroundContext;

// const ToggleButton: React.FC = () => {
//   const [backGroundColor, setBackGroundColor] = useState("#faebd7");
//   const [ChangeButtonName, setChangeButtonName] = useState("Aydınlık Mod");
//   const [textColor ,setTextColor] = useState("black");

//   function ChangeBackgroundFunction() {
//     setChangeButtonName(ChangeButtonName === "Karanlık Mod" ? "Aydınlık Mod" : "Karanlık Mod");
//     setBackGroundColor(backGroundColor === "#faebd7" ? "#404040" : "#faebd7");
//     setTextColor(textColor === "black" ? "white" : "black" );
//   }

//   return (
//     <div>
//       <button onClick={ChangeBackgroundFunction} 
//               style={{ backgroundColor: backGroundColor, color: textColor, height:50, borderRadius:15, boxShadow: "5px 3px 15px rgba(209, 1, 1, 0.5)"}}>
//         {ChangeButtonName}
//       </button>
//     </div>
//   );
// }

// export default ToggleButton;




