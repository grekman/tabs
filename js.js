
var tabUp = document.getElementsByClassName('tab-h');
var tabDown = document.getElementsByClassName('tab-b');

for (var i = 0; i < tabUp.length; i++) {
  tabUp[i].onclick = tabClose;
}

function tabClose() {
  for (var e = 0; e < tabDown.length; e++) {
    tabDown[e].style.display = "none"
  }
  var tabId = this.getAttribute('data-tab');
  document.querySelector('.tab-b[data-tab="' + tabId + '"]').style.display = "block";

  for (var i = 0; i < tabUp.length; i++) {
    if(tabUp[i].style.border != "" ) {
      tabUp[i].style.border = "";
    }
  }
  this.style.border = "2px solid red";
}
