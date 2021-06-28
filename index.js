function oppener() {
    let d = new Date();
    comment = !comment;
    document.getElementById('list').innerHTML += (
        `<div class='${comment ? 'list' : 'list-2'}' onclick='this.style.textDecoration = "line-through"'>
                <button class='cancel' id='style' onclick='this.parentElement.style.display = "none";'>Remove</button>
                <span class='text'> Todo-List </span>
        </div>`
    );
    document.getElementById('input-todo').value = '';
}