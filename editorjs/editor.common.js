// Include Editor.js using CDN
import EditorJS from 'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest';
import Header from 'https://cdn.jsdelivr.net/npm/@editorjs/header@latest';
import List from 'https://cdn.jsdelivr.net/npm/@editorjs/list@latest';

export function initializeEditor(holder) {
    return new EditorJS({
        holder: holder, // ID of the container where the editor will render
        tools: {
            header: Header, // Header tool for titles
            list: List, // List tool for bullet points or ordered lists
        },
        placeholder: 'Write your content here...', // Placeholder text
    });
}
