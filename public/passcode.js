let correct_passcode = '1020';

let passcode_form = document.getElementById('set-passcode'); 

passcode_form.addEventListener('input', check_empty);
passcode_form.onsubmit = set_passcode;

function check_empty(ev) {
    if (ev.target.value == '') {
        ev.target.style.border = 'none';
    }
}

function set_passcode(ev) {
    ev.preventDefault();
    
    let input = ev.target.children[0];
    let new_passcode = input.value;

    if (isNaN(new_passcode) || new_passcode.length != 4) {
        input.style.border = '2px solid red';
    }
    else {
        correct_passcode = new_passcode;
        input.style.border = '2px solid green';
        input.value = '';
    }

    setTimeout(() => {
        input.style.border = 'none'
    }, 2000)
}