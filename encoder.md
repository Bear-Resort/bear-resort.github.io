---
layout: default
title: "Public Hashing Encoder"
---

This Public Hashing Encoder encodes the cipher based on the public key.

<div style="text-align: center">
    <textarea id="inputBox" placeholder="Enter text here..." style="font-size: 16px"></textarea><br>
    <button onclick="handleEncrypt()" id="enc">Encrypt</button>
    <br>
    <br>
    <h2 id="output1"></h2>
    <h2 id="output2"></h2>
</div>

<script>
    function handleEncrypt() {
        const input = document.getElementById('inputBox').value;

        if (!input.trim()) {
            document.getElementById('output1').textContent = "Please enter text.";
            return;
        }

        try {
            const encryptedText = hashDeterministically(input);
            const encryptedText2 = stringToHash(input);
            document.getElementById('output1').textContent = encryptedText;
            document.getElementById('output2').textContent = encryptedText2;
        } catch (err) {
            console.error("Encryption failed:", err);
            document.getElementById('output1').textContent = "Encryption error.";
        }
    }
</script>