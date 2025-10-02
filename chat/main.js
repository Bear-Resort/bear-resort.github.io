const messagesDiv = document.getElementById("messages");
    const inputForm = document.getElementById("input-form");
    const inputField = document.getElementById("input");

    function appendMessage(text, isUser) {
      const div = document.createElement('div');
      div.classList.add('message');
      div.classList.add(isUser ? 'user' : 'computer');
      div.textContent = text;
      messagesDiv.appendChild(div);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function getComputerResponse(userText) {
      // Simple keyword-based responses
      const text = userText.trim().toLowerCase();

      if (text.includes("hi") || text.includes("hello")) {
        return "Hey! How are you?";
      } else if (text.includes("how are you")) {
        return "Doing well bro!";
      } else if (text.includes("weather")) {
        return "My spring will never come!";
      } else if (text.includes("bye")) {
        return "Goodbye! See you later.";
      } else if (text.includes("thanks") || text.includes("thank you")) {
        return "You're welcome";
      } else if (text.includes("name")) {
        return "I'm a chat bot!";
      } else if (text.includes("joke")) {
        return "Why are we a group but not ring, since we do not have ideal!";
      } else if (text.includes("help")) {
        return "I can't help.";
      } else if (text.length < 2) {
        return "Could you write a bit more?";
      } else if (text.includes("why")) {
        return "Piss yourself.";
      } else {
        // Default response
        return "...";
      }
    }

    inputForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const userInput = inputField.value;
      if (userInput.trim() === "") return;

      appendMessage(userInput, true);
      inputField.value = "";

      setTimeout(() => {
        const response = getComputerResponse(userInput);
        appendMessage(response, false);
      }, 500);
    });

    // Focus input on page load
    inputField.focus();