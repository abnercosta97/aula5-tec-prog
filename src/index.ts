//Exemplos na Aula Interface
interface Props {
    a:number;
    b:number;
}

interface CalcProps {
    dados: Props;
    func : (p:Props) => number;
}

function calc(p:CalcProps){
    return p.func(p.dados);
}

function somar(p:Props):number{
    return p.a + p.b;
}

const r = calc({dados:{a:2,b:3}, func:somar});
console.log(r);