function iniciarQuiz() {
const quizArea = document.getElementById("quiz-area");

```
quizArea.innerHTML = `
    <h2>🎯 Quiz funcionando!</h2>

    <p>Qual é a melhor atitude antes de compartilhar uma notícia?</p>

    <button onclick="alert('Você escolheu verificar a fonte!')">
        Verificar a fonte
    </button>

    <button onclick="alert('Essa não é a melhor atitude!')">
        Compartilhar imediatamente
    </button>
`;
```

}
