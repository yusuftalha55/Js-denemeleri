function Square ({value}) {
    return (
        <button className="square" onClick={squareClick}>
            {value}
        </button>
    ); 
}

export default Square