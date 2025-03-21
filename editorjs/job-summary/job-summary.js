import { initializeEditor } from '../editor.common.js';

const editor = initializeEditor('editorjs'); // Pass the container ID to initialize Editor.js

// Add Save button functionality
document.getElementById('save-button').addEventListener('click', () => {
    editor.save().then((outputData) => {
        console.log('Job Summary Data:', outputData);
        alert('Job Summary saved! Check the console for the data.');
    }).catch((error) => {
        console.error('Saving failed:', error);
        alert('Failed to save Job Summary.');
    });
});
