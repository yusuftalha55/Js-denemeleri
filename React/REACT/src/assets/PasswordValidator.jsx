import React, { useState, useEffect } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const checkPasswordStrength = () => {
      if (
        password.length >= 6 &&
        /\d/.test(password) &&
        /[a-zA-Z]/.test(password)
      ) {
        setResult("Şifre güçlü");
      } else {
        setResult("Şifre güçsüz");
      }
    };

    // Şifre değiştiğinde otomatik kontrol et
    checkPasswordStrength();
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

export default PasswordStrengthChecker;
