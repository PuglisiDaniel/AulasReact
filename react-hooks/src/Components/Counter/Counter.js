function Counter(){

    let couter =10;

    function aumentar(){
        couter++;
        document.getElementById('count').innerHTML = couter;
        console.log(couter)
    }
    return(
        <>
            <h1 id="count">{couter}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </>
        

    );
}

export default Counter;