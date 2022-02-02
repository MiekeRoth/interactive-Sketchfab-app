/* Set the width of the sidebar  */
function openNav() {
  document.getElementById("mySidepanel").style.width = "350px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
    hideAll(this);
  };
}

function hideAll(exceptThis) {
  for (var i = 0; i < accordions.length; i++) {
    if (accordions[i] !== exceptThis) {
      accordions[i].classList.remove("active");
      accordions[i].nextElementSibling.classList.remove("show");
    }
  }
}

var accordionsInner = document.querySelectorAll("button.accordion-inner");

for (var n = 0; n < accordionsInner.length; n++) {
  accordionsInner[n].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
    hideAllinner(this);
  };
}

function hideAllinner(exceptThis) {
  for (var n = 0; n < accordionsInner.length; n++) {
    if (accordionsInner[n] !== exceptThis) {
     accordionsInner[n].classList.remove("active");
     accordionsInner[n].nextElementSibling.classList.remove("show");
    }
  }
}
