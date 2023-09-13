

let items = [
    {
        type: 'image',
        content: 'assets/yellow.png'
    },
    {
        type: 'title',
        content: 'My Definitive Course'
    },
    {
        type: 'price',
        content: 9.99
    },
    {
        type: 'para',
        content: `Hey there, curious learner! Welcome to "My Definitive Course," where we're about to embark on a roller coaster of knowledge, fun, and some "aha!" moments. Forget those stiff, formal courses where you feel like you're back in a dreary classroom - this is a space where casual meets insightful, and you'll feel like you're learning from a friend, not a textbook.`
    },
    {
        type: 'para',
        content: `So, what's on the menu? We've got a buffet of bite-sized lessons, interactive exercises, and quirky anecdotes to make sure things stay fresh and engaging. And the best part? We're learning at your pace. Whether you're the hare or the tortoise, there's no rush or drag here. It's all about making the journey enjoyable and ensuring that every nugget of information sticks.`
    },
    {
        type: 'para',
        content: `Did I mention there's going to be a community of like-minded peeps? Yep, you won't be riding solo! Our course forum is buzzing with learners sharing insights, asking questions, and sometimes, just sharing a good meme or two. So, even on those days where you're feeling a bit lost or overwhelmed, there's always someone to reach out to.`
    },
    {
        type: 'para',
        content: `Ready to jump in? "My Definitive Course" isn't just a learning experience; it's an adventure. Whether you're here to upskill, find a new hobby, or just satiate that burning curiosity of yours, we've got you covered. Let's dive in and make learning the coolest thing you've done in a while! 🚀📚🎉`
    },
    {
        type: 'payment',
        content: 'Purchase This Product'
    },
    {
        type: 'button',
        content: 'Purchase'
    },
]

const sort = new Sortable(document.getElementById('elems'), {
    handle: '.handle', // handle's class
    filter: '#background',
    animation: 150,
});

document.addEventListener('input', function (e) {
    if (e.target.tagName.toLowerCase() === 'textarea') {
        autoExpand(e.target);
    }
}, false);

function autoExpand(textareaElement) {
    textareaElement.style.height = 'auto';
    textareaElement.style.height = textareaElement.scrollHeight + 'px';
}

document.getElementById('generate').addEventListener('click', () => {
    document.getElementById('elems').innerHTML = '';
    htmlTemplate();
});

function appendTextIncrementally(elem, content) {
    const words = content.split(' ');
    let currentText = '';

    words.forEach((word, idx) => {
        setTimeout(() => {
            currentText += word + ' ';
            elem.value = currentText.trim();
            autoExpand(elem);  // Adjust the textarea size as the text grows
        }, 80 * idx);
    });
}

function htmlTemplate() {
    items.forEach((item, i) => {
        let div = '';

        switch (item.type) {
            case 'title':
                div = `
                <div class='sortable'>
                    <div class='handle'>
                        <div class='bar'></div>
                        <div class='bar'></div>
                    </div>
                    <input class='title' placeholder='Untitled Page' value='${item.content}'>
                </div>`;
                break;

            case 'price':
                div = `
                <div class='sortable'>
                    <div class='handle'>
                        <div class='bar'></div>
                        <div class='bar'></div>
                    </div>
                    <textarea class='price' placeholder='Price'>$${item.content} </textarea>
                </div>`;
                break;

            case 'image':
                div = `
                <div class='sortable'>
                    <div class='handle'>
                        <div class='bar'></div>
                        <div class='bar'></div>
                    </div>
                    <img src = '${item.content}' alt = 'image'>
                </div>`;
                break;

            case 'para':
                div = `
                <div class='sortable'>
                    <div class='handle'>
                        <div class='bar'></div>
                        <div class='bar'></div>
                    </div>
                    <textarea class='text' placeholder='Start typing...'></textarea>
                </div>`;
                break;

            case 'button':
                div = `
                <div class='sortable'>
                    <div class='handle'>
                        <div class='bar'></div>
                        <div class='bar'></div>
                    </div>
                    <button>${item.content}</button>
                </div>`;
                break;

            case 'payment':
                div = `
                <div class='sortable'>
                    <div class='handle'>
                        <div class='bar'></div>
                        <div class='bar'></div>
                    </div>
                    <div class='payment'>
                        <h2>${item.content}</h2>
                        <input placeholder='1234 1234 1234 1234'>
                        <div class='flex'>
                            <input placeholder='MM/YY'>
                            <input placeholder='CVC'>
                        </div>
                    </div>
                </div>`;
                break;
        }
        setTimeout(() => {
            const elemContainer = document.getElementById('elems');
            elemContainer.insertAdjacentHTML('beforeend', div);

            if (item.type === 'para' || item.type === 'price') {
                // Immediately select the textarea after it has been added to the DOM
                const lastTextarea = elemContainer.lastElementChild.querySelector('textarea');

                if (lastTextarea) {  // This check ensures we found a textarea in the newly added content
                    appendTextIncrementally(lastTextarea, item.content);
                }
            }

        }, 400 * i);
    });
}
