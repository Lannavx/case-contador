document.addEventListener("DOMContentLoaded", () => {
    const valueElement = document.getElementById("value");
    const btnIncrease = document.getElementById("btnIncrease");
    const btnReduce = document.getElementById("btnReduce");
    const btnReset = document.getElementById("btnReset");

    let counter = 0

    // Função para aumentar o valor do contador em 1
    function increaseValue() {
        counter += 1
        valueElement.innerText = counter
    }

    // Função para reduzir o valor do contador em 1, até o mínimo de 0
    function reduceValue() {
        if(counter == 0){
            counter = 0
        } else {
            counter -= 1
        }
        valueElement.innerText = counter
    }
    
    // Função para resetar o valor do contador para 0
    function resetValue() {
        counter = 0
        valueElement.innerText = counter
    }

    btnIncrease.addEventListener("click", increaseValue); 
    btnReduce.addEventListener("click", reduceValue); 
    btnReset.addEventListener("click", resetValue);
});