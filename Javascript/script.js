// getting modal opening buttons
var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".modal").style.display = "none");
  };
});

window.onclick = function (e) {
  if (e.target.className == "modal") {
    e.target.style.display = "none";
  }
};


// untuk scroll smooth behavior
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      }, 800);
  }
});

// untuk menu humburger pada mobile
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});




// untuk bagian event-sekolah 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



// button active to event-sekolah
var header = document.getElementById("choose-event");
var btns = header.getElementsByClassName("par");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// button active to jadwal sekolah
var jadwal = document.getElementById("choose-jadwal");
var btn_jadwal = jadwal.getElementsByClassName("par-jadwal");
for (var i = 0; i < btn_jadwal.length; i++) {
  btn_jadwal[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}



// dark mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



// scroll to top
let dataShow = false;
function scroll() {
  let scrollToTop = document.getElementById('scroll-to-top');

  if (window.scrollY > 50 && !dataShow) {
    scrollToTop.setAttribute('data-show', 'true');
    dataShow = true;
  }

  if (window.scrollY <= 50 && dataShow) {
    scrollToTop.setAttribute('data-show', 'false');
    dataShow = false;
  }

  console.log(window.scrollY);
}
function btnUp() {
  let scrollToTop = document.getElementById('scroll-to-top');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

