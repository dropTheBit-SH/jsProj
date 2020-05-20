//메일 박스에 메일이 들어오는 애니메이션
let mailing = setInterval(receiveMail, 1200);
function receiveMail(){
    var mailbox= document.getElementById("mailbox");
    mailbox.src= "media/icons/mailbox2.png";
setTimeout(function(){
    mailbox.src= "media/icons/mailbox3.png"
}, 400);
setTimeout(function(){
    mailbox.src="media/icons/mailbox1.png"
},800)
}

//시계탑에 시계가 돌아가는 애니메이션
let ticktok= setInterval(clockTicking, 1200);
function clockTicking(){
    var clock= document.getElementById("clock");
    clock.src= "media/icons/clock2.png";
setTimeout(function(){
    clock.src= "media/icons/clock3.png"
}, 400);
setTimeout(function(){
    clock.src="media/icons/clock1.png"
},800)
}

//나무에 열매가 열리는 애니메이션
let growing= setInterval(bearingFruits, 1200);
function bearingFruits(){
    var tree= document.getElementById("tree");
    tree.src= "media/icons/tree2.png";
setTimeout(function(){
    tree.src= "media/icons/tree3.png"
}, 400);
setTimeout(function(){
    tree.src="media/icons/tree1.png"
},800)
}

//건물에 책이 쌓이는 애니메이션
let building= setInterval(pilingBooks, 1200);
function pilingBooks(){
    var school= document.getElementById("school");
    school.src= "media/icons/school2.png";
setTimeout(function(){
    school.src= "media/icons/school3.png"
}, 400);
setTimeout(function(){
    school.src="media/icons/school1.png"
},800)
}
