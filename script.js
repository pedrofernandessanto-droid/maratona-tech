function mostrarResposta(numero) {

    const resposta = document.getElementById("resposta" + numero);

    if (resposta.style.display === "block") {
        resposta.style.display = "none";
    } else {
        resposta.style.display = "block";
    }
}


// ===============================
// QUIZ
// ===============================

const perguntas = [

    {
        pergunta: "Você recebeu uma notícia dizendo: \"URGENTE! Cientistas descobriram que todo alimento do agronegócio brasileiro faz mal à saúde!\" Qual seria a melhor atitude?",
        respostas: [
            "Compartilhar imediatamente",
            "Verificar a fonte e procurar outras fontes confiáveis",
            "Acreditar porque muitas pessoas compartilharam",
            "Ignorar qualquer notícia sobre o assunto"
        ],
        correta: 1
    },

    {
        pergunta: "Por que uma manchete sensacionalista merece atenção antes de ser compartilhada?",
        respostas: [
            "Porque notícias verdadeiras não usam manchetes chamativas",
            "Porque toda manchete sensacionalista é falsa",
            "Porque manchetes não possuem nenhuma importância",
            "Porque pode apresentar uma informação fora do contexto"
        ],
        correta: 3
    },

    {
        pergunta: "Qual atitude ajuda a identificar uma informação falsa?",
        respostas: [
            "Verificar a fonte da informação",
            "Compartilhar rapidamente",
            "Acreditar somente no título",
            "Confiar apenas no número de curtidas"
        ],
        correta: 0
    },

    {
        pergunta: "O que devemos fazer quando uma notícia apresenta uma informação muito surpreendente?",
        respostas: [
            "Compartilhar imediatamente",
            "Verificar a informação em outras fontes",
            "Acreditar porque parece importante",
            "Mandar para todos os contatos"
        ],
        correta: 1
    },

    {
        pergunta: "Por que comparar uma notícia com outras fontes é importante?",
        respostas: [
            "Para verificar se a informação também aparece em fontes confiáveis",
            "Para encontrar mais pessoas para compartilhar",
            "Porque todas as fontes sempre possuem a mesma opinião",
            "Para deixar a notícia mais chamativa"
        ],
        correta: 0
    },

    {
        pergunta: "Qual dessas situações pode ser um sinal de alerta em uma notícia?",
        respostas: [
            "Apresentar fontes e dados verificáveis",
            "Informar quem publicou a notícia",
            "Usar linguagem exagerada e pedir compartilhamento urgente",
            "Apresentar informações de órgãos oficiais"
        ],
        correta: 2
    },

    {
        pergunta: "Uma publicação nas redes sociais tem milhares de compartilhamentos. Isso significa que ela é verdadeira?",
        respostas: [
            "Sim, porque muitas pessoas compartilharam",
            "Sim, porque conteúdos populares são verdadeiros",
            "Não. A quantidade de compartilhamentos não prova que a informação é verdadeira",
            "Sim, principalmente quando possui muitas curtidas"
        ],
        correta: 2
    },

    {
        pergunta: "Qual é uma boa maneira de verificar uma informação sobre o agronegócio?",
        respostas: [
            "Procurar fontes confiáveis e dados oficiais",
            "Confiar apenas em vídeos curtos",
            "Acreditar em qualquer mensagem recebida",
            "Compartilhar antes de verificar"
        ],
        correta: 0
    },

    {
        pergunta: "O que pode acontecer quando uma fake news sobre o agronegócio é compartilhada?",
        respostas: [
            "Ela pode causar desinformação e prejudicar a compreensão sobre o setor",
            "Ela automaticamente se torna verdadeira",
            "Ela deixa de ser uma fake news",
            "Nada pode acontecer"
        ],
        correta: 0
    },

    {
        pergunta: "Antes de compartilhar uma notícia, qual conjunto de atitudes é mais adequado?",
        respostas: [
            "Ler apenas o título e compartilhar",
            "Verificar a fonte, ler o conteúdo e comparar com outras fontes",
            "Verificar somente o número de curtidas",
            "Perguntar apenas para amigos"
        ],
        correta: 1
    }

];


let perguntaAtual = 0;
let pontuacao = 0;


// Iniciar o quiz
function iniciarQuiz() {

    perguntaAtual = 0;
    pontuacao = 0;

    mostrarPergunta();
}


// Mostrar pergunta
function mostrarPergunta() {

    const quizArea = document.getElementById("quiz-area");

    const pergunta = perguntas[perguntaAtual];

    let html = `
        <div class="question">

            <h3>
                Pergunta ${perguntaAtual + 1} de ${perguntas.length}
            </h3>

            <p style="margin-top: 15px;">
                ${pergunta.pergunta}
            </p>
    `;


    pergunta.respostas.forEach(function(resposta, indice) {

        html += `
            <button onclick="responder(${indice})">
                ${resposta}
            </button>
        `;

    });


    html += `
            <div id="resultado"></div>

        </div>
    `;


    quizArea.innerHTML = html;
}


// Responder pergunta
function responder(respostaEscolhida) {

    const pergunta = perguntas[perguntaAtual];

    const resultado = document.getElementById("resultado");

    if (respostaEscolhida === pergunta.correta) {

        pontuacao++;

        resultado.innerHTML = `
            <p style="
                margin-top:20px;
                padding:15px;
                background:#dff0d8;
                color:#286329;
                border-radius:8px;
            ">
                🎉 Resposta correta!
            </p>

            <button onclick="proximaPergunta()">
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
                ❌ Resposta incorreta!
                <br><br>
                A resposta correta era:
                <strong>${pergunta.respostas[pergunta.correta]}</strong>
            </p>

            <button onclick="proximaPergunta()">
                Próxima pergunta →
            </button>
        `;
    }

}


// Próxima pergunta
function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultadoFinal();

    }

}


// Resultado final
function mostrarResultadoFinal() {

    const quizArea = document.getElementById("quiz-area");

    quizArea.innerHTML = `

        <div class="question">

            <h2>🏆 Quiz concluído!</h2>

            <p style="font-size: 20px; margin-top: 15px;">
                Você acertou
                <strong>${pontuacao}</strong>
                de
                <strong>${perguntas.length}</strong>
                perguntas.
            </p>

            <p style="margin-top: 15px;">
                ${mensagemFinal()}
            </p>

            <button onclick="iniciarQuiz()">
                🔄 Fazer o quiz novamente
            </button>

        </div>

    `;

}


// Mensagem final
function mensagemFinal() {

    const porcentagem = (pontuacao / perguntas.length) * 100;

    if (porcentagem >= 80) {

        return "🎉 Excelente! Você demonstra saber identificar sinais de desinformação.";

    } else if (porcentagem >= 50) {

        return "👍 Bom trabalho! Continue verificando as fontes antes de compartilhar.";

    } else {

        return "📚 Continue aprendendo! Verificar as fontes é fundamental antes de compartilhar uma informação.";

    }

}