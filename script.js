// estrutura do array de perguntas
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

// elemento HTML que representa o quiz
const quiz = document.querySelector('#quiz')

// elemento HTML que contém o template
const template = document.querySelector('template')

// loop ou laço de repetição para cada pergunta no array
for(const item of perguntas) {

    // clona o template para criar uma nova instância
    const quizItem = template.content.cloneNode(true)

    // troca o título da pergunta no HTML com o texto da pergunta no array
    quizItem.querySelector('h3').textContent = item.pergunta

    // loop para cada resposta no array
    for(let resposta of item.respostas ) {

        // clona o elemento dt do template para criar uma nova instância
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        // troca o texto da resposta no HTML com o texto da resposta no array
        dt.querySelector('span').textContent = resposta

        // adiciona index da pergunta nas opções de resposta para se referir apenas à pergunta em questão, não ao todo
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

        // adiciona value na resposta para poder verificar se é a correta
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        // função para monitorar mudança no input e executar
        dt.querySelector('input').onchange = (event) => {

            // compara se a resposta se parece com a resposta correta relacionando string e number
            const verificaResposta = event.target.value == item.correta
            alert(verificaResposta)
        }



        // adiciona a instância do elemento dt ao elemento dl no HTML
        quizItem.querySelector('dl').appendChild(dt)
    }

    // remove o elemento dt original do template (foi usado apenas como modelo)
    quizItem.querySelector('dl dt').remove()

    // adiciona a pergunta e suas respostas ao elemento HTML do quiz
    quiz.appendChild(quizItem)
}