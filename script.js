// script.js

// Функция для скрытия загрузочного экрана и отображения чата
function showChat() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('chat-container').classList.remove('hidden');
}

// Ожидаем 5 секунд, затем показываем чат
setTimeout(showChat, 5000);

// Логика отправки сообщений в чат
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Добавляем сообщение пользователя в чат
    const userMessage = document.createElement('div');
    userMessage.textContent = `Вы: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Очищаем поле ввода
    document.getElementById('user-input').value = '';

    // Прокрутка чата вниз
    chatBox.scrollTop = chatBox.scrollHeight;
});
