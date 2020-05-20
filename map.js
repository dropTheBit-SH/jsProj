let scrollPosition;
window.addEventListener('scroll', catmove)


function catmove() {
    let char = document.getElementById('char');
    scrollPosition = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    if (0.33 < scrollPosition && scrollPosition < 0.43) {
        char.style.top = (2270 + ((scrollPosition - 0.33) * 6000) + 'px');
        char.style.left = '120PX;'
        char.style.transform = 'scaleX(-1)';
    }
    if (0.43 < scrollPosition && scrollPosition < 0.56) {
        char.style.top = '2710px'
        char.style.left = (148 + ((scrollPosition - 0.43) * 12200) + 'px');
        char.style.transform = 'scaleX(1)';
    }
    if (0.58 < scrollPosition && scrollPosition < 0.72) {
        char.style.top = '3287px'
        char.style.left = (2000 - ((scrollPosition - 0.58) * 9900) + 'px');
        char.style.transform = 'scaleX(-1)';
    }

    if (0.72 < scrollPosition && scrollPosition < 0.85) {
        char.style.top = (3287 + ((scrollPosition - 0.72) * 10000) + 'px');
        char.style.left = '700px';
        char.style.transform = 'scaleX(1)';
    }
    if (0.85 < scrollPosition && scrollPosition < 0.94) {
        char.style.top = '4580.72px'
        char.style.left = (700 - ((scrollPosition - 0.85) * 10000) + 'px');
        char.style.transform = 'scaleX(-1)';
    }
    if (0.94 < scrollPosition) {
        char.style.top = '5090PX'
        char.style.left = (0 + ((scrollPosition - 0.94) * 22000) + 'px');
        char.style.transform = 'scaleX(1)';
    }
}

let wakingChar = setInterval(changeImg, 450);

function changeImg() {
    var cat = document.getElementById("char");
    cat.src = "media/main/cha2.png";
    setTimeout(function() {
        cat.src = "media/main/cha3.png";
    }, 150);
    setTimeout(function() {
        cat.src = "media/main/cha1.png";
    }, 300)
}