// script.js

// ������� ��� ������� ������������ ������ � ����������� ����
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    // ������ ����������� ����� � ������� ��������
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        chatContainer.classList.add('show'); // ������� ��������� ����
    }, 500);
}

// ����� 5 ������ ������� ���
setTimeout(showChat, 5000);

// ������ �������� ��������� � ���
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // ������������� �������� �����

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // ��������� ��������� ������������ � ���
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput;
    userMessage.classList.add('message', 'user');
    chatBox.appendChild(userMessage);

    // ��������� ������ AI
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.textContent = "This is AI's response.";
        aiMessage.classList.add('message', 'ai');
        chatBox.appendChild(aiMessage);

        // ������������� ����
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // ������� ���� �����
    document.getElementById('user-input').value = '';

    // ��������� ����
    chatBox.scrollTop = chatBox.scrollHeight;
});
