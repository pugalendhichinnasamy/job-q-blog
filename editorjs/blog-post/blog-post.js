import { initializeEditor } from '../editor.common.js';

const editor = initializeEditor('editorjs');

document.getElementById('save-button').addEventListener('click', () => {
    editor.save().then((outputData) => {
        console.log('Blog Post Data:', outputData);
    }).catch((error) => {
        console.error('Saving failed:', error);
    });
});
