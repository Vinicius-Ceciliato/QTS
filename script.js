function somar(a, b) {
    return a + b;
}

function mensagemBoasVindas(nome) {
    return `Olá, ${nome}!`;
}

function maiorValor(a, b) {
    if (a>b){return alert(a)}
    else {return alert(b)}
}

function parImpar(a) {
    if(a%2==0) {
        return 'par'
    } else {return 'impar'};
};

function idade(i) {
    if(i>=18) {return 'pode votar'};
    if(i<18 && i>=16) {return 'voto opcional'}
    else {'não pode voltar'};
}

function positivoNegativo(a) {
    if (a>0) {return 'positivo'};
    if (a<0) {return 'negativo'};
    if (a==0) {return 'zero'};
}

function salario(dinheiro) {
    if(dinheiro<2000){
        bonus = dinheiro * 0.2;
        return bonus;
    };
    if(dinheiro>=2000 && dinheiro<=5000) {
        bonus = dinheiro * 0.1;
        return bonus;
    };
    if(dinheiro>5000) {
        bonus = dinheiro * 0.05;
        return bonus;
    };
    
}

function habilitacao(idade) {
        if(idade >= 18) {return 'pode dirigir'}
        else {return 'não pode dirigir'};
}

function semestre (mes) {
    mes.trim();
    if(mes=='janeiro') {return 'primeiro semestre'};
    if(mes=='fevereiro') {return 'primeiro semestre'};
    if(mes=='março' || mes=='marco') {return 'primeiro semestre'};
    if(mes=='abril') {return 'primeiro semestre'};
    if(mes=='maio') {return 'primeiro semestre'};
    if(mes=='junho') {return 'primeiro semestre'};
    if(mes=='julho') {return 'segundo semestre'};
    if(mes=='agosto') {return 'segundo semestre'};
    if(mes=='setembro') {return 'segundo semestre'};
    if(mes=='outubro') {return 'segundo semestre'};
    if(mes=='novembro') {return 'segundo semestre'};
    if(mes=='dezembro') {return 'segundo semestre'};
};

function vogalConsoante(letra) {
    if(letra== 'a' || letra=='e' || letra=='i' || letra=='o' || letra=='u') {
        return 'vogal';
    } else {return 'vogal'};
};

function media(array) {
    let array = []
}




module.exports = { somar, mensagemBoasVindas, maiorValor, parImpar, positivoNegativo, idade, salario, habilitacao, semestre, vogalConsoante};