// ���������� ������� QA �� ������� ����� (�����������, ��� ��� �������������� ��� qaPairs)
const allQAPairs = [
    ...greetingsFarewellsQA,
    ...generalKnowledgeQA,
    ...scienceQA,
    ...animalsQA,
    ...artCultureQA,
    ...natureQA,
    ...philosophyPsychologyQA,
    ...healthFitnessQA,
    ...techInternetQA
];

// ������� ��� ������ ������ �� �������� ������
function findAnswer(question) {
    const lowerCaseQuestion = question.toLowerCase();
    const foundPair = allQAPairs.find(pair => pair.question.toLowerCase() === lowerCaseQuestion);
    return foundPair ? foundPair.answer : "Sorry, I don't understand your question.";
}

// �������� "�������" AI ����� �������
function simulateThinking() {
    const aiMessage = document.getElementById('ai-thinking');
    aiMessage.classList.add('show');

    return new Promise(resolve => {
        setTimeout(() => {
            aiMessage.classList.remove('show');
            resolve();
        }, 2000);  // �������� � 2 ������� ��� �������� �������
    });
}

// ��������� ����� � ����������� ���������
document.getElementById('send-btn').addEventListener('click', async function () {
    const userQuery = document.getElementById('query-input').value;

    // ���� ������ ������, ������ �� ������
    if (!userQuery) return;

    // ���������� ��������� ������������
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userQuery}`;
    userMessage.classList.add('message', 'user');
    document.querySelector('.chat-box').appendChild(userMessage);

    // ��������� ���� � ���������� ���������
    document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;

    // ��������� ������� AI ����� �������
    await simulateThinking();

    // ������� �����
    const response = findAnswer(userQuery);

    // ���������� ��������� �� AI
    const aiMessage = document.createElement('div');
    aiMessage.textContent = `PicAI: ${response}`;
    aiMessage.classList.add('message', 'ai');
    document.querySelector('.chat-box').appendChild(aiMessage);

    // ��������� ���� � ���������� ���������
    document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;

    // ������� ���� �����
    document.getElementById('query-input').value = '';
});

// ������� ������������ ������ �������� � ��������� ����
window.onload = function () {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        document.querySelector('.loading-screen').style.visibility = 'hidden';

        // ���������� ���
        document.getElementById('chat-container').classList.add('show');
    }, 5000); // �������� � 5 ������
};
