// [X] Iniciar o nosso app
// [X] Selecionar os valores do formulário
// [x] Calcular a área do triangulo
// [x] Mostrar o resultado na tela


let app = ()=>{
    let form = document.querySelector(".form")

    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        console.log("clicou")

        let b = document.querySelector("#base").value
        let h =  document.querySelector("#altura").value
        
        if(b == "" || h == ""){
            alert("Prencha todos os dados para calcular")
        }else{
            if(isNaN(parseInt(b)) || isNaN(parseInt(h))){
                alert("É um texto digite um numero")
            }else{
                 calc(b,h)
    
            }
        }
        
        
       
    })

    let calc = (base,altura)=>{

        let result = (parseInt(base) * parseInt(altura)) / 2
        showResultTouser(result)
    }
    let showResultTouser = (value)=>{
        let p = document.querySelector("#result")
        p.innerHTML = `${value}`
    }
}    

app();