import { initializeEditor } from '../editor.common.js';

const editor = initializeEditor('editorjs'); // Initialize Editor.js for Blog Post

// Add Save button functionality
document.getElementById('save-button').addEventListener('click', () => {
    editor.save().then((outputData) => {
        console.log('Blog Post Data:', outputData);
        alert('Blog Post saved! Check the console for the data.');
    }).catch((error) => {
        console.error('Saving failed:', error);
        alert('Failed to save Blog Post.');
    });
});
