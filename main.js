var circles = document.querySelectorAll('.circle');
var popups = document.querySelectorAll('.pop-up');
var right = document.querySelector('.right');
var closes = document.querySelectorAll('.close');

var scroll = document.querySelector('.container_scroll');
var hideScroll = false;

var positions = [0, 700, 800, 1000];
var open = false;

for(let i=0; i < circles.length; i++) {
    let circle = circles[i];
    let popup = popups[i];
    let position = positions[i];
    circle.addEventListener('click', function(){
    if(!open) {
        popup.classList.add('activate');
        right.scrollTo({top: position, behavior: 'smooth'});
        open = true;
    
 } else if (popup.classList.contains('activate') && open) {
     popup.classList.remove('activate');
     open = false;
 } else {
    for(k = 0; k < popups.length; k++) {
        popups[k].classList.remove('activate');
    }
    popup.classList.add('activate');
    right.scrollTo({top: position, behavior: 'smooth'});
 }
})
}

for(let i = 0; i < closes.length; i++) {
    let close = closes[i];
    let popup = popups[i];
    close.addEventListener('click', function(){
        popup.classList.remove('activate');
    })
}


right.addEventListener('wheel', function(event) {
    if(event.deltaY > 0) {
        document.querySelector('.container_scroll').classList.add('hidden')
        state = 1;
    }
})

document.querySelector('.image--10').addEventListener('click', function(){
    document.querySelector('.slider').style.display = 'flex';
    document.querySelector('.opac').style.display = "initial";
});

document.querySelector('.opac').addEventListener('click', function(){
    document.querySelector('.slider').style.display = 'none';
    document.querySelector('.opac').style.display = "none";
})

var initial = true;
window.addEventListener('keypress', function (e) {
    if(initial) {
        if (e.keyCode === 32) {
        document.querySelector('.right').style.opacity = 0;
        document.querySelector('.rightAlt').style.display = 'flex';
        initial = false;
        }
    } else {
        if (e.keyCode === 32) {
            document.querySelector('.right').style.opacity = 1;
            document.querySelector('.rightAlt').style.display = 'none';
            initial = true;
            }
    }
    
}, false);

let none = () => {
    var delay = 4800;
            setTimeout(function() {
                document.querySelector('.screen').style.display = 'none';
              }, delay);
    
}

none();