document.getElementById('myform').addEventListener('submit', handleSubmitForm);
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.getElementById('myrext');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function addTodo(todo) {
    let ul = document.getElementById('myplace');
    let li = document.createElement('li');
    li.innerHTML = `
        <p>${todo}</p>
        `;
    
    ul.appendChild(li);
}