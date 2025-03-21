// script.js

function toggleEditors(selectedCheckbox) {
    const editorFrame = document.getElementById('editor-frame');
    
    // Uncheck other checkboxes except the selected one
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) checkbox.checked = false;
    });

    // Load the appropriate editor page inside the iframe
    if (selectedCheckbox.checked) {
        if (selectedCheckbox.id === 'job-summary') {
            editorFrame.src = './editorjs/job-summary/job-summary.html';
        } else if (selectedCheckbox.id === 'blog-post') {
            editorFrame.src = './editorjs/blog-post/blog-post.html';
        } else if (selectedCheckbox.id === 'question-paper') {
            editorFrame.src = './editorjs/question-paper/question-paper.html';
        }
    } else {
        editorFrame.src = '';
    }
}
