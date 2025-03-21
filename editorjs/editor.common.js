import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

export function initializeEditor(holder) {
    return new EditorJS({
        holder: holder,
        tools: {
            header: Header,
            list: List,
        },
    });
}
