// Manipulando arquivos com node js

const fs = require("fs");

// criando arquivos
fs.writeFile("./files/arquivo.txt", "Esse é meu primeiro arquivo", function(err) {
    if(err){
        return console.log('Algo deu errado: ${err}');
    }
    
})

// lendo arquivos

fs.readFile("./files/arquivo.txt", "utf-8", function(err, data) {
    if(err){
        return console.log('Algo deu errado: ${err}');
    }
    console.log(data);
    
})

// renomeando arquivos

fs.rename("./files/arquivo.txt", "./files/novo-nome.txt", function(err) {
    if(err){
        return console.log('Algo deu errado: ${err}');
    }
    console.log("Arquivo renomeado com sucesso");
    
})


// excluindo os arquivos
fs.unlink("./files/novo-nome.txt", function(err) {
    if(err){
        return console.log('Algo deu errado: ${err}');
    }
    console.log("Arquivo excluido com sucesso");
    
})