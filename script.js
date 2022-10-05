


let onsite = document.getElementById("onsite");

function showonsite() {
	alert ("You are currently on the Website");
}

onsite.addEventListener("click", showonsite);



// for Slick carousel

$('.post-wrapper').slick({
	slidesToShow: 3 ,
	slidesToScroll: 1,
	autoplay: true ,
	autoplaySpeed: 1500 ,

	nextArrow: $('.next'),
	prevArrow: $('.prev'),
	responsive: [
			{
			breakpoint: 1024 ,
			settings: {
			slidesToShow: 2 ,
			slidesToScroll: 1 ,
			infinite: true ,
			dots: false
			}
			},
			{
			breakpoint: 600,
			settings: {
			slidesToShow: 1 ,
			slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
			slidesToShow: 1 ,
			slidesToScroll: 1
			}
			}
			// You can unslick at a given breakpoint now by adding;
			// settings: "unslick"
			// instead of a settings object
			]
	});


	

let button = document.getElementById("open");
let body = document.getElementById("f1");
let back = document.getElementById("close");
let button2 = document.getElementById("pre-b");
let body2 = document.getElementById("f2");
let back2 = document.getElementById("close2");
let button3 = document.getElementById("pre-c");
let body3 = document.getElementById("f3");
let back3 = document.getElementById("close3");

let button4 = document.getElementById("pre-d");
let body4 = document.getElementById("f4");
let back4 = document.getElementById("close4");
let button5 = document.getElementById("pre-e");
let body5 = document.getElementById("f5");
let back5 = document.getElementById("close5");
let button6 = document.getElementById("pre-f");
let body6 = document.getElementById("f6");
let back6 = document.getElementById("close6");


function preview() {
	body.style.display =
	    "flex"
}
function goback() {
	body.style.display =
	"none"
	}
function preview2() {
	body2.style.display =
	    "flex"
}
function goback2() {
	body2.style.display =
	"none"
	}
function preview3() {
	body3.style.display =
			"flex"
}
function goback3() {
	body3.style.display =
	"none"
	}
function preview4() {
	body4.style.display =
			"flex"
}
function goback4() {
	body4.style.display =
	"none"
	}
function preview5() {
	body5.style.display =
			"flex"
}
function goback5() {
	body5.style.display =
	"none"
	}
function preview6() {
	body6.style.display =
			"flex"
}
function goback6() {
	body6.style.display =
	"none"
	}



function nexttemplate() {
	goback();
	preview2();
}
function nexttemplate2() {
	goback2();
	preview3();
}
function nexttemplate3() {
	goback3();
	preview4();
}
function nexttemplate4() {
	goback4();
	preview5();
}
function nexttemplate5() {
	goback5();
	preview6();
}



button.addEventListener("click", preview);
back.addEventListener("click", goback);

button2.addEventListener("click", preview2);
back2.addEventListener("click", goback2);

button3.addEventListener("click", preview3);
back3.addEventListener("click", goback3);

button4.addEventListener("click", preview4);
back4.addEventListener("click", goback4);

button5.addEventListener("click", preview5);
back5.addEventListener("click", goback5);

button6.addEventListener("click", preview6);
back6.addEventListener("click", goback6);



let next = document.getElementById("next");
next.addEventListener("click", nexttemplate);

let next2 = document.getElementById("next2");
next2.addEventListener("click", nexttemplate2);

let next3 = document.getElementById("next3");
next3.addEventListener("click", nexttemplate3);

let next4 = document.getElementById("next4");
next4.addEventListener("click", nexttemplate4);

let next5 = document.getElementById("next5");
next5.addEventListener("click", nexttemplate5);

