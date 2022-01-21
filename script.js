//criar uma função que exibe uma mensagem no console

function menssagem(oi){
    console.log(oi)
}

menssagem("Olá")

//criar uma função que recebe um nome como parâmetro e o exiba no console

function nome(name){
    console.log(`Olá ${name}`)
}
nome("gabriel")

//criar uma função que receba seu nome, profissão, e cidade como parâmetros e exiba uma mensagem no console

function usuario(idade, musica){
        console.log(`sua idade é ${idade}, e seu estilo musical é ${musica}`)
}
usuario("17", "Rock")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function usuario2(filme, musica){
    console.log(`seu filme escolhido foi ${filme}, Sua musica escolhida foi ${musica}`)
}
usuario2("your name", "Pouca-pausa")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function soma(num){
    return num * 3
}
console.log(soma(3))