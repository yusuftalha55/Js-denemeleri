import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const checkPasswordStrength = () => {
    // Şifre kontrolü
    if (password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
      setResult("Şifre güçlü");
    } else {
      setResult("Şifre güçsüz");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h3>Şifre Gir:</h3>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkPasswordStrength}>Şifre Kontrol Et</button>
      <h3>{result && `Durum: ${result}`}</h3>
    </div>
  );
};

export default PasswordStrengthChecker;

