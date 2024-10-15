// *** IF ***

let idade1 = 18

if (idade1 == 18) {
    console.log("Pode Entrar")   
} 



//  *** Else *** ( Usado junto com IF ,como uma opção caso o IF noa seja atendido)
let velocidade = 100

if (velocidade <=80) {
    console.log(" Você esta no limite, Parabens")
} else{
    console.log("Excesso de Velocidade, você foi multado")
}



//  *** else if  ****(uado para mais de duas opções)
país = "Alemanha"
nome ="Anderson"
if (país == "Brasil") {
    console.log(`${nome} você é Brasileiro`)
}else if (país == "Portugual"){
    console.log(`${nome} você é Portugues`)
} else if(país == "Cuba"){
    console.log(`${nome} você é Cubano`)
} else{
    console.log("nenhuma das opções acima")
}
