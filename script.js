// script.js

// Function to hide the loading screen and show the chat
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    // Hide the loading screen with a fade-out effect
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        chatContainer.classList.add('show');
    }, 500);  // Delay to match the fade-out transition time
}

// Wait 5 seconds, then show the chat
setTimeout(showChat, 5000);

// Chat form submission logic
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form submission

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Add user message to the chat
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById('user-input').value = '';

    // Scroll chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
});
