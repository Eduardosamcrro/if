//controle
function NotaAluno(nota){
    if (nota >= 7){
        console.log(`Aprovado com ` + nota)
    }
    if(nota < 7){
        console.log(`Reprovado com ` + nota)
    }
}
    NotaAluno(8.1)
    NotaAluno(5)
    NotaAluno(7)
    NotaAluno(3)