<style>
    #chat-container {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 0 30px rgba(0,0,0,0.16);
      width: 360px;
      max-width: 90vw;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    #messages {
      flex: 1;
      padding: 14px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #f0f0f0;
      min-height: 340px;
    }
    .message {
      max-width: 70%;
      padding: 10px 18px;
      border-radius: 20px;
      font-size: 16px;
      line-height: 1.3;
      word-break: break-word;
      box-shadow: 0px 1px 3px rgba(0,0,0,0.07);
      position: relative;
      margin-bottom: 2px;
      margin-top: 2px;
    }
    .user {
      align-self: flex-end;
      background: #007aff;
      color: #fff;
      border-bottom-right-radius: 6px;
    }
    .computer {
      align-self: flex-start;
      background: #e8e8ea;
      color: #1c1c1e;
      border-bottom-left-radius: 6px;
    }
    form {
      display: flex;
      border-top: 1px solid #e0e0e0;
      background: #fff;
      padding: 10px;
    }
    input[type="text"] {
      flex: 1;
      padding: 10px 14px;
      font-size: 16px;
      border: 1px solid #dadada;
      border-radius: 18px;
      outline: none;
      transition: border .17s;
    }
    input[type="text"]:focus {
      border-color: #007aff;
    }
  </style>

  <div id="chat-container">
    <div id="messages"></div>
    <form id="input-form">
      <input type="text" id="input" autocomplete="off" placeholder="iMessage" required>
      <button type="submit">Send</button>
    </form>
  </div>

  <script type="module" src="main.js"></script>