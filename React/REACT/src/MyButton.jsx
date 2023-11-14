function MyButton() {
  return (
    <div>
      <button onClick={alertClick}>MY BUTTON</button>
    </div>
  );
}

function alertClick() {
  alert("Butona bastınız!!!");
}

export default MyButton;
