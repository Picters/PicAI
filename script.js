// script.js

// ������� ��� ������� ������������ ������ � ������ ����
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    // ������� ������� ������������ ������
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // ��������� ������� �����
        chatContainer.classList.add('show'); // ������� ��������� ����
    }, 500); // �������, ���� �������� ���������� (0.5 �������)
}

// ����� 5 ������ �������� ���
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

    // ������� ���� �����
    document.getElementById('user-input').value = '';

    // ��������� ����
    chatBox.scrollTop = chatBox.scrollHeight;

    // �������� "�������" AI
    const aiThinking = document.createElement('div');
    aiThinking.id = 'ai-thinking';
    aiThinking.textContent = "PicAI is thinking...";
    chatBox.appendChild(aiThinking);

    // �������� �������� "�������"
    aiThinking.classList.add('show');

    // ����� 2 ������� AI �������
    setTimeout(() => {
        // ������ �������� "�������"
        aiThinking.classList.remove('show');
        aiThinking.remove(); // ������� �������

        // ������������� �����
        const aiMessage = document.createElement('div');
        const response = getAIResponse(userInput);
        aiMessage.textContent = response;
        aiMessage.classList.add('message', 'ai');
        chatBox.appendChild(aiMessage);

        // ��������� ����
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // ����� 2 ������� AI "������"
});

// ������� ��� ��������� ������ �� ������ ���� ������ ��������-�������
function getAIResponse(userInput) {
    // ������� ������
    return "��� ����� �� ��� ������!";
}
