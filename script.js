
function handleUserInput() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;
    
    if (userInput.trim() !== "") {
        const chatLog = document.getElementById('chat-log');
        const userMessage = `<div class="user-message"><strong>You:</strong> ${userInput}</div>`;
        
        chatLog.innerHTML += userMessage;
        chatLog.scrollTop = chatLog.scrollHeight;  
        // For now, simulate AI response (replace this with actual chatbot logic)
        setTimeout(() => {
            const botMessage = `<div class="bot-message"><strong>EcoEngage AI:</strong> This is a sample response to your input: "${userInput}"</div>`;
            chatLog.innerHTML += botMessage;
            chatLog.scrollTop = chatLog.scrollHeight;  
        }, 1000);
        
       
        inputField.value = '';
    }
    
    return false; 
