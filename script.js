function mostrarResposta(numero) {

```
const resposta = document.getElementById("resposta" + numero);

if (resposta.style.display === "block") {
    resposta.style.display = "none";
} else {
    resposta.style.display = "block";
}
```

}

// ===============================
// QUIZ AGROVERDADE
// ===============================

const perguntas = [

```
{
    pergunta: "Você recebeu uma notícia dizendo: \"URGENTE! Cientistas descobriram que todo alimento do agronegócio brasileiro faz mal à saúde!\" Qual seria a melhor atitude?",
    alternativas: [
        "Compartilhar imediatamente",
        "Acreditar porque muitas pessoas compartilharam",
        "Verificar a fonte e procurar outras fontes confiáveis",
        "Acreditar porque a mensagem parece urgente"
    ],
    correta: 2
},

{
    pergunta: "Por que uma manchete sensacionalista merece atenção antes de ser compartilhada?",
    alternativas: [
        "Porque toda manchete curta é falsa",
        "Porque notícias verdadeiras nunca usam manchetes chamativas",
        "Porque notícias não precisam de fontes",
        "Porque pode apresentar uma informação fora do contexto"
    ],
    correta: 3
},

{
    pergunta: "Qual fonte é mais adequada para confirmar uma informação sobre uma regra oficial do setor agropecuário?",
    alternativas: [
        "Uma publicação anônima em uma rede social",
        "Um órgão público responsável pelo assunto",
        "Uma mensagem encaminhada sem identificação",
        "Um comentário sem fonte em um vídeo"
    ],
    correta: 1
},

{
    pergunta: "O que significa verificar uma informação em diferentes fontes independentes?",
    alternativas: [
        "Comparar a informação em fontes que não dependem umas das outras",
        "Copiar a mesma notícia de vários perfis",
        "Escolher a publicação com mais comentários",
        "Usar somente publicações que concordam com a primeira notícia"
    ],
    correta: 0
},

{
    pergunta: "Qual situação pode ser um sinal de alerta em uma publicação sobre o agro?",
    alternativas: [
        "A publicação apresenta a fonte dos dados",
        "A publicação explica de onde vieram os dados",
        "A publicação faz uma afirmação muito forte sem apresentar fonte ou evidência",
        "A publicação apresenta informações relacionadas ao assunto"
    ],
    correta: 2
},

{
    pergunta: "Por que imagens também precisam ser verificadas em uma notícia?",
    alternativas: [
        "Porque toda imagem publicada na internet é falsa",
        "Porque uma imagem pode ser verdadeira, mas estar associada a outro contexto",
        "Porque imagens não podem representar acontecimentos reais",
        "Porque imagens oficiais nunca podem ser usadas em notícias"
    ],
    correta: 1
},

{
    pergunta: "Qual comportamento ajuda a diminuir a circulação de fake news?",
    alternativas: [
        "Compartilhar tudo que parece importante",
        "Confiar somente no número de compartilhamentos",
        "Ignorar a fonte quando a mensagem parece convincente",
        "Verificar antes de compartilhar"
    ],
    correta: 3
},

{
    pergunta: "Qual é uma característica de uma informação apresentada de forma responsável?",
    alternativas: [
        "Apresenta fontes ou evidências que podem ser verificadas",
        "Afirma que não é necessário conferir os dados",
        "Usa somente frases alarmantes para chamar atenção",
        "Evita informar de onde os dados foram retirados"
    ],
    correta: 0
},

{
    pergunta: "Uma mensagem diz que uma determinada prática agrícola causa um efeito grave, mas não apresenta fonte. Qual é a atitude mais adequada?",
    alternativas: [
        "Compartilhar imediatamente porque o assunto parece urgente",
        "Considerar a mensagem verdadeira porque foi enviada por um conhecido",
        "Pesquisar evidências e consultar fontes confiáveis antes de acreditar ou compartilhar",
        "Excluir qualquer informação que não tenha fonte"
    ],
    correta: 2
},

{
    pergunta: "Qual é o principal objetivo de aprender a identificar fake news sobre o agronegócio?",
    alternativas: [
        "Fazer com que todas as pessoas concordem sobre o agro",
        "Impedir que qualquer notícia negativa seja publicada",
        "Compartilhar somente notícias que apoiem uma determinada opinião",
        "Tomar decisões com base em informações verificadas"
    ],
    correta: 3
}
```

];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarQuiz() {

```
perguntaAtual = 0;
pontuacao = 0;

mostrarPergunta();
```

}

function mostrarPergunta() {

```
const quizArea = document.getElementById("quiz-area");

const pergunta = perguntas[perguntaAtual];

quizArea.innerHTML = `

    <div class="question">

        <p style="
            margin-bottom:10px;
            font-weight:bold;
        ">
            Pergunta ${perguntaAtual + 1} de ${perguntas.length}
        </p>

        <h3>
            ${pergunta.pergunta}
        </h3>

        <div class="alternativas">

            ${pergunta.alternativas.map((alternativa, indice) => `

                <button
                    onclick="responder(${indice})"
                    class="quiz-option"
                >
                    ${alternativa}
                </button>

            `).join("")}

        </div>

        <div id="resultado"></div>

    </div>
`;
```

}

function responder(resposta) {

```
const resultado = document.getElementById("resultado");

const pergunta = perguntas[perguntaAtual];

const botoes = document.querySelectorAll(".quiz-option");

// Impede clicar em várias respostas
botoes.forEach(botao => {
    botao.disabled = true;
});


if (resposta === pergunta.correta) {

    pontuacao++;

    resultado.innerHTML = `

        <p style="
            margin-top:20px;
            padding:15px;
            background:#dff0d8;
            color:#286329;
            border-radius:8px;
        ">
            🎉 Muito bem! Você acertou!
        </p>

        <button
            onclick="proximaPergunta()"
            style="
                margin-top:10px;
                padding:10px 20px;
                border:none;
                border-radius:8px;
                cursor:pointer;
            "
        >
            Próxima pergunta →
        </button>
    `;

} else {

    resultado.innerHTML = `

        <p style="
            margin-top:20px;
            padding:15px;
            background:#f8d7da;
            color:#842029;
            border-radius:8px;
        ">
            ❌ Não foi dessa vez.
            A resposta correta é:
            <strong>${pergunta.alternativas[pergunta.correta]}</strong>
        </p>

        <button
            onclick="proximaPergunta()"
            style="
                margin-top:10px;
                padding:10px 20px;
                border:none;
                border-radius:8px;
                cursor:pointer;
            "
        >
            Próxima pergunta →
        </button>
    `;
}
```

}

function proximaPergunta() {

```
perguntaAtual++;

if (perguntaAtual < perguntas.length) {

    mostrarPergunta();

} else {

    mostrarResultadoFinal();

}
```

}

function mostrarResultadoFinal() {

```
const quizArea = document.getElementById("quiz-area");

let mensagem;

if (pontuacao === 10) {
    mensagem = "🏆 Excelente! Você está muito preparado para identificar fake news.";
} else if (pontuacao >= 7) {
    mensagem = "🎉 Muito bom! Você já sabe identificar muitos sinais de desinformação.";
} else if (pontuacao >= 5) {
    mensagem = "👍 Bom trabalho! Mas ainda vale revisar algumas formas de verificar informações.";
} else {
    mensagem = "📚 Continue estudando! Verificar fontes é essencial antes de compartilhar.";
}


quizArea.innerHTML = `

    <div class="question">

        <h2>🎯 Quiz finalizado!</h2>

        <p style="
            font-size:20px;
            margin-top:15px;
        ">
            Você acertou
            <strong>${pontuacao}</strong>
            de
            <strong>${perguntas.length}</strong>
            perguntas.
        </p>

        <p style="
            margin-top:15px;
            font-weight:bold;
        ">
            ${mensagem}
        </p>

        <button
            onclick="iniciarQuiz()"
            style="
                margin-top:20px;
                padding:12px 25px;
                border:none;
                border-radius:8px;
                cursor:pointer;
            "
        >
            🔄 Fazer novamente
        </button>

    </div>
`;
```

}

