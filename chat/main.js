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
      } else if (text.toLowerCase().includes("beary")) {
        return "Beary is a senior technician and associate professor in the BIAS (Bear Institute of Aeronautics and Space), where he serves as a faculty of pure mathematics and astrophysics. His research interests are upon the application of algebraic topology on multiscale structure in the universe.";
      } else if (text.toLowerCase().includes("little bear")) {
        return "Little Bear is a problem kid in the Bear Resort, as he always causes troubles around. However, every time when he messes around, his innocent eyes and adorable emotions always condone him from penalties.";
      } else if (text.toLowerCase().includes("dr. b")) {
        return "Dr. B is a workout fanatic and is also a doctor (although we don’t know if he possesses a medical degree, or Doctor of Philosophy, or both). He enjoys and struggles to be the big guy. He also has a benzene reactor on his chest that he rarely takes off…";
      } else if (text.toLowerCase().includes("meow-sieur")) {
        return "Meow-sieur Chef is a cook, and he makes dishes for all the carnivores and bears in the Bear Resort. Absolutely marvelous control of knifes, so one should naturally suspect what he does before becoming a chief. FYI: You’d better call him by Big Justin (which appeared to be on his ID, probably) rather than Meow-sieur (his nickname), unless you are absolutely sure that you will not become his breakfast tomorrow.";
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