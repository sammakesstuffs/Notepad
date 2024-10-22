//Made by Samuel Setiawan
function saveFile() {
    const content = document.getElementById('editor').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.html';
    link.click();
}

function setFontName() {
    const fontName = document.getElementById('fontName').value;
    document.execCommand('fontName', false, fontName);
}function saveFile() {
    const content = document.getElementById('editor').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.html';
    link.click();
}

function setFontName() {
    const fontName = document.getElementById('fontName').value;
    document.execCommand('fontName', false, fontName);
}

function setFontSize() {
    const fontSize = document.getElementById('fontSize').value;
    document.execCommand('fontSize', false, fontSize);
}

function format(command) {
    document.execCommand(command, false, null);
}

function toggleTheme() {
    const body = document.body;
    const lightVideo = document.getElementById('light-video');
    const darkVideo = document.getElementById('dark-video');
    
    body.classList.toggle('dark');

    // Toggle video visibility based on theme
    if (body.classList.contains('dark')) {
        lightVideo.style.display = 'none';
        darkVideo.style.display = 'block';
    } else {
        lightVideo.style.display = 'block';
        darkVideo.style.display = 'none';
    }
}

function readFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const content = event.target.result;
        document.getElementById('editor').innerHTML = content;
    };
    
    if (file) {
        reader.readAsText(file);
    }
}

// Clipboard functionality
async function copyToClipboard() {
    const editor = document.getElementById('editor');
    const text = editor.innerText; // Get text content
    await navigator.clipboard.writeText(text); // Use Clipboard API
}

async function pasteFromClipboard() {
    const editor = document.getElementById('editor');
    const text = await navigator.clipboard.readText(); // Use Clipboard API
    editor.innerHTML += text; // Append the pasted text
}

// Update the buttons to use new functions
document.querySelector('.format-actions button:nth-child(1)').onclick = copyToClipboard; // Copy button
document.querySelector('.format-actions button:nth-child(2)').onclick = pasteFromClipboard; // Paste button

function setFontSize() {
    const fontSize = document.getElementById('fontSize').value;
    document.execCommand('fontSize', false, fontSize);
}

function format(command) {
    document.execCommand(command, false, null);
}

function toggleTheme() {
    const body = document.body;
    const lightVideo = document.getElementById('light-video');
    const darkVideo = document.getElementById('dark-video');
    
    body.classList.toggle('dark');

    // Toggle video visibility based on theme
    if (body.classList.contains('dark')) {
        lightVideo.style.display = 'none';
        darkVideo.style.display = 'block';
    } else {
        lightVideo.style.display = 'block';
        darkVideo.style.display = 'none';
    }
}

function readFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const content = event.target.result;
        document.getElementById('editor').innerHTML = content;
    };
    
    if (file) {
        reader.readAsText(file);
    }
}

// Clipboard functionality
async function copyToClipboard() {
    const editor = document.getElementById('editor');
    const text = editor.innerText; // Get text content
    await navigator.clipboard.writeText(text); // Use Clipboard API
}

async function pasteFromClipboard() {
    const editor = document.getElementById('editor');
    const text = await navigator.clipboard.readText(); // Use Clipboard API
    editor.innerHTML += text; // Append the pasted text
}

// Update the buttons to use new functions
document.querySelector('.format-actions button:nth-child(1)').onclick = copyToClipboard; // Copy button
document.querySelector('.format-actions button:nth-child(2)').onclick = pasteFromClipboard; // Paste button
