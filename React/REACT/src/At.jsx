import { useState } from "react";

function At() {
  const [gorunur, setGorunur] = useState(false);
  return (
    <div>
      <h1>At kafası</h1>
      <button
        onClick={() => {
          if (gorunur === false) {
            setGorunur(true);
          } else {
            setGorunur(false);
          }

          // eğer gorunur false ise gorunuru true yapıyoruz
          //değil ise gorunuru false yapalım
        }}
      >
        Ata bak
      </button>

      {gorunur ? <LookAt /> : null}

      <p>at kafası</p>
    </div>
  );
}

function LookAt() {
  return (
    <img
      src="https://vetrehberi.com/wp-content/uploads/2021/05/arap-at-irki-ve-ozellikleri-1100x570.jpg"
      alt=""
    />
  );
}

export default At;
