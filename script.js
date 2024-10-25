// script.js

// ������� ��� ������� ������������ ������ � ����������� ����
function showChat() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('chat-container').classList.remove('hidden');
}

// ������� 5 ������, ����� ���������� ���
setTimeout(showChat, 5000);

// ������ �������� ��������� � ���
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // ������������� �������� �����

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // ��������� ��������� ������������ � ���
    const userMessage = document.createElement('div');
    userMessage.textContent = `��: ${userInput}`;
    chatBox.appendChild(userMessage);

    // ������� ���� �����
    document.getElementById('user-input').value = '';

    // ��������� ���� ����
    chatBox.scrollTop = chatBox.scrollHeight;
});
