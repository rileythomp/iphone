let phone_on = false;
let on_home_screen = false;
let on_apps = false;

let passcode = '';
let typed_num = '';

let screen = document.getElementById('screen');

document.getElementById('home-button').addEventListener('click', home_click);

function delete_char(ev) {
    let target = ev.target;

    if (target.classList.contains('cancel')) {
        // delete passcode
        passcode = passcode.slice(0, -1);

        if (passcode.length == 0) {
            let cancel = document.getElementById('passcode-cancel');
            cancel.removeEventListener('click', delete_char);
            cancel.addEventListener('click', leave_click);
            cancel.innerHTML = 'Cancel';
        }

        let dots = document.getElementById('passcode-dots').children;
        dots[passcode.length].innerHTML = '◯';
    }
    else {
        // delete phone number
        typed_num = typed_num.slice(0, -1);

        if (typed_num.length == 4) {
            typed_num = typed_num.replace('-', '');
        }

        if (typed_num.length == 11) {
            typed_num = typed_num.replace('-', '');
            typed_num = typed_num.replace('(', '');
            typed_num = typed_num.replace(')', '');
            typed_num = typed_num.replace(' ', '-');
        }

        let number_view = document.getElementById('typed-num');
        number_view.innerHTML = typed_num;
    }
}

function number_down(ev) {
    let num = ev.target;

    while (num.tagName != 'TD') {
        num = num.parentElement;
    }

    if (num.classList.contains('number-pad')) {
        num.style.background = 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))';
    }
    else {
        num.style.backgroundColor = 'grey';

        let backspace = document.getElementById('backspace');
        backspace.style.display = 'table-cell';
        backspace.children[0].addEventListener('click', delete_char);
    }
}

function number_up(ev) {
    let num = ev.target;

    while (num.tagName != 'TD') {
        num = num.parentElement;
    }

    if (num.classList.contains('emergency-pad')) {
        num.style.backgroundColor = 'lightgrey';

        if (typed_num.length > 28) {
            return;
        }

        if (typed_num.length == 3) {
            typed_num += '-';
        }
        else if (typed_num.length == 8) {
            typed_num = '(' + typed_num.substring(0, 3) + ') ' + typed_num.substring(4, 7) + '-' + typed_num[7];
        }
        
        typed_num += num.innerHTML[0];
    
        let number_view = document.getElementById('typed-num');
        number_view.innerHTML = typed_num;

        return
    }
    
    let cancel = document.getElementById('passcode-cancel');
    cancel.removeEventListener('click', leave_click);
    cancel.addEventListener('click', delete_char);
    cancel.innerHTML = 'Delete';

    let dots = document.getElementById('passcode-dots').children;
    dots[passcode.length].innerHTML = '●';

    num.style.background = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))';

    passcode += ev.target.innerHTML[0];

    if (passcode == correct_passcode) {
        display_unlocked();
    }
    else if (passcode.length == 4) {
        passcode = '';

        let lock = document.getElementsByClassName('fa-lock')[0];
        let dot_wrapper = document.getElementById('passcode-dots');
        lock.style.animation = 'shake 1s';
        dot_wrapper.style.animation = 'shake 1s';

        setTimeout(()=>{
            for (let i = 0; i < dots.length; ++i) {
                dots[i].innerHTML = '◯';
            }
        }, 500)

        setTimeout(() => {
            dot_wrapper.style.animation = '';
        }, 1000)    
    }
}

function add_num_presses() {
    let nums = document.querySelectorAll('#dial-pad td');
    for (let i = 0; i < nums.length-1; ++i) {
        let num = nums[i];
        num.addEventListener('mousedown', number_down);
        num.addEventListener('mouseup', number_up);
    }
}

function set_screen(screen_html, background_image, set_color, header_color) {
    if (set_color) {
        screen.style.backgroundColor = 'WhiteSmoke';
    }

    screen.style.backgroundImage = background_image;
    screen.innerHTML = screen_html;

    let header = screen.children[0];
    header.style.display = 'block';
    header.style.color = header_color;
}

function display_home() {
    set_screen(home_screen, 'url("assets/beach.png")', false, 'white');

    setTimeout(function() {
        if (on_home_screen) {
            let unlock_msg = document.getElementById('unlock-msg');
            unlock_msg.style.display = 'block';
        }
    }, 3000)

    let now = new Date();
    let hours = (now.getHours() == 12 ? 12 : now.getHours()%12);
    let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    let time = document.getElementById('time');
    time.innerHTML = hours + ':' + minutes;

    let date = document.getElementById('date');
    date.innerHTML = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate();

    let left_dot = document.getElementById('left-dot');
    let camera = document.getElementsByClassName('fa-camera')[0];
    left_dot.style.color = 'lightgrey';
    camera.style.color = 'lightgrey';

    let footer = screen.children[screen.children.length - 1];
    footer.style.display = 'block';

    phone_on = true;
    on_home_screen = true;
}

function display_passcode() {
    set_screen(passcode_screen, 'url("assets/beach_blurred.png")', false, 'white');

    add_num_presses();

    let cancel = document.getElementById('passcode-cancel');
    cancel.addEventListener('click', leave_click);

    let emergency = document.getElementById('emergency');
    emergency.addEventListener('click', leave_click);

    on_home_screen = false;
}

function display_unlocked() {
    set_screen(unlocked_screen, 'url("assets/beach.png")', false, 'white');

    on_home_screen = false;
    on_apps = true;

    passcode = '';
}

function display_emergency() {
    set_screen(emergency_screen, '', true, 'black');

    add_num_presses();

    let cancel = document.getElementById('emergency-cancel');
    cancel.addEventListener('click', leave_click);

    on_home_screen = false;
}

function home_click() {
    if (!on_apps && phone_on) {
        display_passcode();
    }
    else {
        display_home();
    }

    on_apps = false;
}

function leave_click(ev) {
    if (ev.target.id == 'emergency') {
        display_emergency();
    }
    else {
        display_home();
    }

    typed_num = '';
    passcode = '';
}