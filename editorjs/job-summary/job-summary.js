// Import the shared Editor.js initialization function
import { initializeEditor } from '../editor.common.js';  // Ensure the relative path is correct

// Initialize Editor.js on the container with ID 'editorjs'
const editor = initializeEditor('editorjs');

// Add Save button functionality
document.getElementById('save-button').addEventListener('click', () => {
    editor.save().then((outputData) => {
        console.log('Job Summary Data:', outputData);  // Log the saved content
        alert('Job Summary saved! Check the console for the saved data.');
    }).catch((error) => {
        console.error('Saving failed:', error);
        alert('Failed to save Job Summary.');
    });
});
