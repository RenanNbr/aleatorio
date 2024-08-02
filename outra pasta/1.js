class ContaB {
    constructor(saldoInicial){
        let Saldo = saldoInicial;
        this.getSaldo = function(){
            return Saldo;
    };
    this.depositar = function(valor){
        if (valor > 0){
            Saldo += valor;
            console.log(`Depositp de R$${valor} realizado com sucesso`)
        }else{
            console.log(`Valor de deposito inválido`)
        }
}
    this.sacar = function(valor){
        if (valor > 0 && valor <= saldo){
            
    }
}
}
}