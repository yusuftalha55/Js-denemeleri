import React,{useState, useEffect} from "react";

const PasswordControl = () => {
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        const passwordStrength = () => {
            if(password.length>=6 && 
               /\d/.test(password) &&
               /[a-zA-Z]/.test(password) )
            {
                setResult("Şifre Güçlü")
            }
            else{
                setResult("Şifre Güçsüz")
            }
        };
        passwordStrength();
    }, [password]);

    return (
        <div style={{marginLeft:500 , backgroundColor:"#ececec"}}>
          <div style={{ margin: "50px" }}>
            <h3>Şifre Gir:</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3>Durum: {result}</h3>
          </div>
        </div>
      );
};

// export default PasswordControl;