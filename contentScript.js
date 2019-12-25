console.log('Hiding unncessary elements');


document.getElementById("docs-chrome").style.height=0;
document.getElementById("docs-chrome").style.width=0;
document.getElementById("docs-chrome").style.visibility="hidden";
document.getElementById("speakernotes-dragger").style.height=0;
document.getElementById("speakernotes-dragger").style.width=0;
document.getElementById("speakernotes-dragger").style.visibility="hidden";
document.getElementById("speakernotes").style.height=0;
document.getElementById("speakernotes").style.width=0;
document.getElementById("speakernotes").style.visibility="hidden";

function hideElements (elms) {
  elms.forEach(el => {
    el.style.height=0;
    el.style.width=0;
    el.style.visibility="hidden";
  });
};

function removeElements (elms) {
  elms.forEach(el => {
    el.remove()
  });
};

removeElements( document.querySelectorAll(".filmstrip") );
hideElements( document.querySelectorAll(".docs-ruler") );
hideElements( document.querySelectorAll(".docs-companion-app-switcher-container") );
hideElements( document.querySelectorAll(".docs-explore-widget") );
hideElements( document.querySelectorAll(".punch-theme-sidebar") );
