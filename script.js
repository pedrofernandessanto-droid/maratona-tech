function mostrarResposta(numero) {

    const resposta = document.getElementById("resposta" + numero);

    if (resposta.style.display === "block") {
        resposta.style.display = "none";
    } else {
        resposta.style.display = "block";
    }
}


function iniciarQuiz() {

    const quizArea = document.getElementById("quiz-area");

    quizArea.innerHTML = `
        <div class="question">

            <h3>
                Você recebeu uma notícia dizendo:
                "URGENTE! Cientistas descobriram que todo alimento
                do agronegócio brasileiro faz mal à saúde!"
            </h3>

            <p style="margin-top:15px;">
                Qual seria a melhor atitude?
            </p>

            <button onclick="responder(false)">
                Compartilhar imediatamente
            </button>

            <button onclick="responder(true)">
                Verificar a fonte e procurar outras fontes confiáveis
            </button>

            <button onclick="responder(false)">
                Acreditar porque muitas pessoas compartilharam
            </button>

            <div id="resultado"></div>

        </div>
    `;
}


function responder(correto) {

    const resultado = document.getElementById("resultado");

    if (correto) {

        resultado.innerHTML = `
            <p style="
                margin-top:20px;
                padding:15px;
                background:#dff0d8;
                color:#286329;
                border-radius:8px;
            ">
                🎉 Muito bem! Antes de compartilhar uma informação,
                procure verificar a fonte, os dados e outras fontes
                confiáveis.
            </p>
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
                ❌ Cuidado! O ideal é verificar a informação antes
                de acreditar ou compartilhar.
            </p>
        `;
    }
}
