
  ////////////////////////////////////////////////////////////팀의 js 시작///////////////////////////////////////////////////////////////

  //팝업 업 버튼 .팀1
  var btn = document.getElementById('saybtnT');

  //버튼 누르면 팝업 보이기.팀
  btn.onclick = function () {
    document.getElementById('popupBoxT').style.display = 'block'
  }

  //클로즈버튼 닫는부분.팀
  var closeBtn = document.getElementById('closeT');

  //클로즈버튼 클릭시.팀

  closeBtn.onclick = function () {
    document.getElementById('popupBoxT').style.display = 'none';
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("in-view"); //      timeline 초기화  
    }
  }

  /////////////////////////////////////////////////////

  //팝업 업 버튼 .팀2
  var btn2 = document.getElementById('saybtnPf');

  //버튼 누르면 팝업 보이기.팀
  btn2.onclick = function () {
    document.getElementById('popupBoxPf').style.display = 'block'
  }

  //클로즈버튼 닫는부분.팀
  var closeBtn2 = document.getElementById('closePf');

  closeBtn2.onclick = function () {
    document.getElementById('popupBoxPf').style.display = 'none';
  }


  /////////////////////////////////////////////////////

  //팝업 업 버튼 .팀3
  var btn3 = document.getElementById('saybtnf');

  //버튼 누르면 팝업 보이기.팀
  btn3.onclick = function () {
    document.getElementById('popupBoxf').style.display = 'block'
  }

  //클로즈버튼 닫는부분.팀
  var closeBtn3 = document.getElementById('closef');

  closeBtn3.onclick = function () {
    document.getElementById('popupBoxf').style.display = 'none';
  }

  //팝업 업 버튼 .팀
  var btn3 = document.getElementById('saybtnf');

  //버튼 누르면 팝업 보이기.팀
  btn3.onclick = function () {
    document.getElementById('popupBoxf').style.display = 'block';


    //미라가 추가한부분
    repeatType();
  }


  //클로즈버튼 닫는부분.팀
  var closeBtn3 = document.getElementById('closef');

  closeBtn3.onclick = function () {
    document.getElementById('popupBoxf').style.display = 'none';

  }



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //팝업 업 버튼 .팀4
  var btn4 = document.getElementById("saybtnG");

  //버튼 누르면 팝업 보이기.팀
  btn4.onclick = function () {
    document.getElementById("popupBoxG").style.display = "flex";
    createGraph();
  };

  //클로즈버튼 닫는부분.팀
  var closeBtn4 = document.getElementById("closeG");

  closeBtn4.onclick = function () {
    document.getElementById("popupBoxG").style.display = "none";
  };



  ////////////////////////////////////////////////////////////팀의 js 끝/////////////////////////////////////////////////////////////////












  ////////////////////////////////////////////////////////////timeline 시작 by JW////////////////////////////////////////////////////////

  var items = document.querySelectorAll(".timeline ul li");


  window.onwheel = function () {
    console.log("마우스이동")
    for (var i = 0; i < items.length; i++) {
      items[i].classList.add("in-view");
    }
  }


  // 제이쿼리로 구현시 필요한 코드 by JW //

  // $(window).bind('mousewheel', function (event) { //마우스휠 감지
  //     if (event.originalEvent.wheelDelta >= 0) { //마우스휠 위로 돌릴때 이벤트  
  //         for (var i = 0; i < items.length; i++) {
  //             if (isElementInViewport(items[i])) {
  //                 items[i].classList.remove("in-view");
  //             }
  //         }
  //     } else { //마우스휠 아래로 돌릴때 이벤트
  //         for (var i = 0; i < items.length; i++) {
  //             if (isElementInViewport(items[i])) {
  //                 items[i].classList.add("in-view");
  //             }
  //         }
  //     }
  // });

  ////////////////////////////////////////////////////////////end of. timeline by JW//////////////////////////////////////////////////

////////////////////////////////////////////////////////////ProgressBar 시작///////////////////////////////////////////////////////



 
  var $tto = $(".top");
  var $about = $(".rodeImg");
  var $ProgressBar = $(".ProgressBar");

  $(window).on("scroll", function () {

    var scrollH = $(window).scrollTop(); //현재 스크롤탑 값

    if (scrollH > $("#background-wrap").height()) {
      $tto.addClass("n-fixed");
    
    } else {
      $tto.removeClass("n-fixed");
   
    }

  });


$(document).ready(function() {


  var arrContH = new Array();


  var $top = $(".rodeImg"); //top으로 쳐야하는 요소
  var top_size = $top.size();
  var topH = 68;//탑메뉴 높이값 저장 변수

  var scrollH = $(this).scrollTop();	// 스크롤의 높이값
  console.log("scrollH=",scrollH); //scrollH= 2200

  for(var i=0;i<top_size;i++){
			
    if(scrollH >= arrContH[i]-topH){
      console.log("작동");
      
    }

  }//스크롤 높이값에 따른 메뉴의 롤오버 색상 변화 - 경우의 수


  console.log("$top.size() =", $top.size());


  const win = $(window);
  const doc = $(document);

  var top = 2200;
  scrollTop = top;

  // const winST = 2263;
  const progressBar = $('progress');
  const progressLabel = $('.progress-label');
  const setValue = () => (win.scrollTop()-2200);
  const setMax = () => (doc.height()-2200) - win.height();
  const setPercent = () => Math.round((win.scrollTop() -2200) / (doc.height() - win.height()) * 186);


function setP() {
    if (setPercent() < 0) {
        return 0;
    } else {
        return setPercent();
    }

}

progressLabel.text(setP() + '%');
progressBar.attr({ value: setValue(), max: setMax() });

doc.on('scroll', () => {
    progressLabel.text(setP() + '%');
    progressBar.attr({ value: setValue() });
});

win.on('resize', () => {
    progressLabel.text(setP() + '%');
    progressBar.attr({ value: setValue(), max: setMax() });
})
});

 ////////////////////////////////////////////////////////////end of. ProgressBar by JW//////////////////////////////////////////////////




////////////////////////////////////////////////////////////Portfolio 시작 by SH/////////////////////////////////////////////////////////////

var pfIndex = 1; //프로젝트 순서
pfShowDivs(pfIndex);

function pfPlusDivs(n) { //순서를 변경한다
  pfShowDivs(pfIndex += n);
}

function pfCurrentDivs(n) { //현재 순서를 알려준다
  pfShowDivs(pfIndex = n);
}

function pfShowDivs(n) { //해당 순서의 프로젝를 보여준다
  let slides = document.getElementsByClassName("pfSlides"); //선택된 프로젝트의 이미지와 설명
  let list = document.getElementsByClassName("pfList"); //하단부의 프로젝트 리스트

  //슬라이드 순서 순환
  if (n > slides.length) pfIndex = 1
  if (n < 1) pfIndex = slides.length

  //선택된 슬라이드 보여주기
  for (let i = 0; i < slides.length; i++)
    slides[i].style.display = "none";
  for (let i = 0; i < list.length; i++)
    list[i].className = list[i].className.replace(" pf-opacity-off", "");
  slides[pfIndex - 1].style.display = "block";
  list[pfIndex - 1].className += " pf-opacity-off";
}

////////////////////////////////////////////////////////////end of. Portflio by SH///////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////form 시작 by MR///////////////////////////////////////////////////////////////



// 타이핑효과
var i = 0;
var txt = '“See things in the present, even if they are in the future. ” ';
var speed = 50;

// document.getElementById('middle1MR').onload = 

function repeatType() {
  typeWriterMR();
  setInterval(function () {
    document.getElementById("typingMR").innerHTML = "";
    i = 0;
    typeWriterMR();
  }, 5000);
}

function typeWriterMR() {
  if (i < txt.length) {
    document.getElementById("typingMR").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterMR, speed);
  }
}



////////////////////////////////////////////////////////////end of. form by MR///////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////Chart 시작 by SR/////////////////////////////////////////////////////////////

// 바 그래프를 그리는 canvas.세린
var canvas = document.getElementById("myChart");

var yLabels = {
  0: "Biginner",
  2: "Elementary",
  4: "Intermediate",
  6: "Upper-intermediate",
  8: "Advanced"
};

/* eslint-disable no-undef */
//Chart.defaults.global.defaultFontFamily = "Black Han Sans";  << 안먹음
//Chart.defaults.global.defaultFontSize ="15";

function createGraph() {
  new Chart(canvas, {
    type: "bar",
    data: {
      //바 그래프 x축
      labels: ["Java", "jQuery", "Javascript", "HTML", "CSS"],
      datasets: [{
        //x축에 올라갈 그래프
        data: [6, 8, 6, 4, 4],
        backgroundColor: [
          "#0f4c81",
          "#5781a7",
          "#cfdbe6",
          "#5781a7",
          "#87a5c0"
        ],
        borderColor: ["#0f4c81", "#5781a7", "#cfdbe6", "#5781a7", "#87a5c0"],
        borderWidth: 1
      }]
    },
    options: {
      layout: {
        padding: {
          left: 150,
          right: 150,
          top: 100,
          bottom: 200
        }
      },
      legend: {
        display: false
      },
      //바가 올라오는 속도
      animation: {
        duration: 2000,
        easing: "easeOutQuart"
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function (value, index, values) {
              return yLabels[value];
            },
            max: 8,
            min: 0,
            stepSize: 2
          }
        }]
      }
    }
  });
}
////////////////////////////////////////////////////////////end of. Chart by SR///////////////////////////////////////////////////////////////



