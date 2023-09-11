
const sort = new Sortable(Id('sortable'), {
    handle: '.handle', // handle's class
    filter: '#background',
    animation: 150,
    onStart(evt) {
        document.querySelector('#background').style.opacity = '0';
    },
    onEnd(evt) {
        document.querySelector('#background').style.opacity = '1';
    }
});



function autoExpand(textareaElement) {
    // Reset textarea height to auto so its height shrinks to fit content
    textareaElement.style.height = 'auto';

    // Set the textarea height to its scrollHeight (full height of its content)
    textareaElement.style.height = textareaElement.scrollHeight + 'px';
}


document.addEventListener('input', function (e) {
    if (e.target.tagName.toLowerCase() === 'textarea') {
        autoExpand(e.target);
    }
}, false);

// To make sure all textareas are sized correctly on page load
window.addEventListener('DOMContentLoaded', (event) => {
    let textareas = document.querySelectorAll('textarea');
    textareas.forEach(autoExpand);
});
