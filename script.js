// array de perguntas
// const perguntas = [ //array 0
//     {
//         pergunta: "Pergunta 01",
//         respostas: [
//             "Resposta A", // opção 0
//             "Resposta B", // opção 1
//             "Resposta C", // opção 2
//         ],
//         correta: 2
//     }
// ]

// alert(perguntas[0].respostas[perguntas[0].correta])


// array de perguntas geradas pelo ChatGPT utilizando a estrutura criada

const perguntas = [
    {
        pergunta: "O que significa a sigla 'DOM' em JavaScript?",
        respostas: [
            "Documento de Objeto Móvel",
            "Modelo de Objeto de Documento",
            "Domínio de Operações Múltiplas",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Igualdade Estrita (valor e tipo)",
            "Atribuição",
            "Igualdade Solta (apenas valor)",
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "let myVar;",
            "variable myVar;",
            "myVar = variable;",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um closure em JavaScript?",
        respostas: [
            "Um método de fechar o navegador",
            "Uma função que tem acesso ao escopo externo",
            "Uma variável que não pode ser alterada",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'map()' em arrays?",
        respostas: [
            "Mapear um objeto",
            "Aplicar uma função a cada elemento do array e criar um novo array com os resultados",
            "Filtrar elementos de um array",
        ],
        correta: 1
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "JavaScript Object Notation - um formato de dados",
            "Um método de ordenação de arrays",
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama a estrutura de controle que permite executar código repetidamente?",
        respostas: [
            "If statement",
            "Switch statement",
            "Loop statement",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            "Um erro de sintaxe",
            "Um evento relacionado a clique do mouse",
            "Uma função interna",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade da função 'parseInt()' em JavaScript?",
        respostas: [
            "Converter uma string para um número inteiro",
            "Verificar se uma variável é um número",
            "Arredondar um número para o inteiro mais próximo",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o objeto 'window' em JavaScript?",
        respostas: [
            "Uma janela no navegador",
            "O objeto global que representa a janela do navegador",
            "Um método para criar janelas pop-up",
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// loop ou laço de repetição
for(const item of perguntas) {

    // cloca o template
    const quizItem = template.content.cloneNode(true)

    // troca os títulos das perguntas
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas ) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}