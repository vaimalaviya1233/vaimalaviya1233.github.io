function AddList() {
    var x = document.getElementById('input-todo').value;
    if (x.length <= 0) {
        document.getElementById('input-todo').value = 'Too low !';
    } else if (x.length >= 20) {
        document.getElementById('input-todo').value = 'Too big !';
    } else {
        var comment = true;
        comment = !comment;
        document.getElementById('list').innerHTML += (
            `<div class='${comment ? 'list' : 'list-2'}' onclick='this.style.textDecoration = "line-through"'>
                <button class='cancel' id='style' onclick='this.parentElement.style.display = "none";'>Remove</button>
                <span class='text'>${x}</span>
            </div>`
        );
        document.getElementById('input-todo').value = '';
    }
}

/*Onclick add btn*/
document.getElementById('btn-send-todo').onclick = AddList;

var CurrentLk = window.location;