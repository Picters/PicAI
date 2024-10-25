// script.js

// ����������� �������� � ������� �� ������� �����
import { qaPairs } from './questions-answers.js';

// ������� ��� ������� ������������ ������ � ������ ����
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        chatContainer.classList.add('show');
    }, 500);
}

// ����� 5 ������ �������� ���
setTimeout(showChat, 5000);

// ������ �������� ���������
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // ���������� ��������� ������������
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

        // ������������� �����
        const aiMessage = document.createElement('div');
        const response = getAIResponse(userInput);
        aiMessage.textContent = response;
        aiMessage.classList.add('message', 'ai');
        chatBox.appendChild(aiMessage);

        // ��������� ����
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000);
});

// ������� ��� ��������� ������ �� ������ ���� ������ ��������-�������
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // ����� ������ �� ������ ���������� ������
    for (let i = 0; i < qaPairs.length; i++) {
        if (lowerInput.includes(qaPairs[i].question.toLowerCase())) {
            return qaPairs[i].answer;
        }
    }
    return "I'm sorry, I don't know the answer to that.";
}
