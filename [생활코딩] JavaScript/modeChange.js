const $body = document.body;
const $day_or_night_button = document.querySelector('#day-or-night');
const $status = document.querySelector('#status');
const $links = document.querySelectorAll('a');

const Body = {
    setColor: function(color) {
        $body.style.color = color;
    }, 
    setBackgroundColor: function(color) {
        $body.style.backgroundColor = color;
    }
}

const Links = {
    setColor: function(color) {
        let i = 0;
        while (i < $links.length) {
            $links[i].style.color = color;
            i++;        
        }
    }
}

let day_or_night = 'day';

function onClickDayAndNight() {
    if (day_or_night == 'day') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        this.value = '🌞';
        if ($status) {
            $status.textContent = 'Night';
        }
        day_or_night = 'night';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        this.value = '🌚';
        if ($status) {
            $status.textContent = 'Day';
        }
        day_or_night = 'day'
    } 
}

function changeLinkColor(color) {
    let i = 0;
    while (i < $alist.length) {
        $alist[i].style.color = color;
        i++;        
    }
}

$day_or_night_button.addEventListener('click', onClickDayAndNight);    