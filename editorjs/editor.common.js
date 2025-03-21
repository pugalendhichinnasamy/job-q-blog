// Load Editor.js from a CDN
import EditorJS from 'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest';
import Header from 'https://cdn.jsdelivr.net/npm/@editorjs/header@latest';
import List from 'https://cdn.jsdelivr.net/npm/@editorjs/list@latest';

// Function to initialize Editor.js
export function initializeEditor(holder) {
    return new EditorJS({
        holder: holder,  // The container to attach Editor.js to
        tools: {
            header: Header,  // Header tool for titles
            list: List,      // List tool for bullet points and ordered lists
        },
        placeholder: 'Start writing your content here...', // Placeholder text
    });
}
