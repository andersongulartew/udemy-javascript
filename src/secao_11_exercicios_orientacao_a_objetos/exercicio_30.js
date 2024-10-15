// * ATIVIDADE 8
// crie uma classe cnta bancaria;
// com as propriedades de saldo na conta corrente,saldo na conta poupança e juros da poupança;
// crie os metodos de deposito e saque,tambem um metodo para transferir dinheiro da poupança para a conrrente;
// alem disso crie uma conta especial que herda da conta normal;
// na conta especial os juros são dobrado da conta normal



class Conta {
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros
    }

    deposito(valor){
        this.saldoCC += valor
    }

    saque(valor){
        this.saldoCC -= valor

    }

    transferenciaCP(valor) {
        this.saldoCP -= valor;
        this.saldoCC += valor;
      }

    jurosPagar(){
        let juros = (this.saldoCP += this.juros)/ 100;
            this.saldoCP += juros;
        }
    
}

class contaEspecial extends Conta{
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }

}

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.deposito(500);
console.log(conta);

conta.saque(100);
console.log(conta);

conta.transferenciaCP(3000)
console.log(conta);

conta.jurosPagar()
console.log(conta);

let conta2 = new contaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(5000);

console.log(conta2);

conta2.jurosPagar();

console.log(conta2);
