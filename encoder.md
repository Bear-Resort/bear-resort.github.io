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
    <h2 id="output"></h2>
</div>

<script>
    function handleEncrypt() {
        const input = document.getElementById('inputBox').value;

        if (!input.trim()) {
            document.getElementById('output').textContent = "Please enter text.";
            return;
        }

        try {
            const encryptedText = hashDeterministically(input);
            document.getElementById('output').textContent = encryptedText;
        } catch (err) {
            console.error("Encryption failed:", err);
            document.getElementById('output').textContent = "Encryption error.";
        }
    }
</script>