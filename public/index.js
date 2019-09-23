document.getElementById('home-button').addEventListener('click', home_click)

let phone_on = false;
let on_home_screen = false;
let on_apps = false;

function display_home() {
    let screen = document.getElementById('screen')
    screen.innerHTML = home_screen_html

    screen.style.backgroundImage = 'url("beach.png")' 

    let header = screen.children[0]
    header.style.display = 'block'
    header.style.color = 'white'

    let now = new Date()

    let time = document.getElementById('time')
    let hours = (now.getHours() == 12 ? 12 : now.getHours()%12)
    let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
    time.innerHTML = hours + ':' + minutes;

    let date = document.getElementById('date')
    date.innerHTML = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate()

    let left_dot = document.getElementById('left-dot')
    let camera = document.getElementsByClassName('fa-camera')[0]
    left_dot.style.color = 'lightgrey'
    camera.style.color = 'lightgrey'

    let footer = screen.children[screen.children.length - 1]
    footer.style.display = 'block'

    setTimeout(function() {
        if (on_home_screen) {
            let unlock_msg = document.getElementById('unlock-msg');
            unlock_msg.style.display = 'block';
        }
    }, 3000)

    phone_on = true;
}

function down_num(e) {
    let num = e.target;

    while (num.tagName != 'TD') {
        num = num.parentElement
    }

    num.style.background = 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4))'
}

let nums_pressed = 0;
let correct_passcode = '1020'
let passcode = '';

function up_num(e) {
    let num = e.target;

    while (num.tagName != 'TD') {
        num = num.parentElement
    }

    num.style.background = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'

    let dots = document.getElementById('passcode-dots').children;
    dots[nums_pressed].innerHTML = '●';

    nums_pressed += 1
    passcode += e.target.innerHTML[0]

    if (passcode == correct_passcode) {
        display_unlocked();

        passcode = ''
        nums_pressed = 0
    }
    else if (nums_pressed == 4) {
        let dot_wrapper = document.getElementById('passcode-dots')
        dot_wrapper.style.animation = 'shake 1s'

        setTimeout(()=>{
            for (let i = 0; i < dots.length; ++i) {
                dots[i].innerHTML = '◯';
            }
        }, 500)

        setTimeout(() => {
            dot_wrapper.style.animation = ''
        }, 1000)

        passcode = ''
        nums_pressed = 0
    }
}

function display_passcode() {
    on_home_screen = false;
    let screen = document.getElementById('screen')
    screen.style.backgroundImage = 'url("beach_blurred.png")'
    screen.innerHTML = passcode_screen_html
    document.getElementsByClassName('cancel')[0].addEventListener('click', cancel_click)
    document.getElementById('emergency').addEventListener('click', emergency_click)
    let nums = document.querySelectorAll('#dial-pad td')
    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        num.addEventListener('mousedown', down_num)
        num.addEventListener('mouseup', up_num)
    }

    let header = screen.children[0]
    header.style.display = 'block'
}

function display_emergency() {
    on_home_screen = false;
    let screen = document.getElementById('screen')
    screen.style.backgroundColor = 'WhiteSmoke'
    screen.style.backgroundImage = '';
    screen.innerHTML = emergency_screen_html
    document.getElementsByClassName('cancel')[0].addEventListener('click', cancel_click)

    let header = screen.children[0]
    header.style.display = 'block'
    header.style.color = 'black'
}

function display_unlocked() {
    on_home_screen = false;
    on_apps = true;

    let screen = document.getElementById('screen');
    screen.style.backgroundImage = 'url("beach.png")'

    screen.innerHTML = unlocked_screen_html;

    let header = screen.children[0]
    header.style.display = 'block'
}

function home_click(e) {
    if (on_apps) {
        on_home_screen = true;
        display_home();
    }
    else if (phone_on) {
        on_home_screen = false;
        display_passcode();
    }
    else {
        on_home_screen = true;
        display_home();
    }
    on_apps = false;
}

function cancel_click(e) {
    display_home();
    on_home_screen = true;
}

function emergency_click(e) {
    on_home_screen = false;
    display_emergency()
}