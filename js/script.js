
window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})

function dropdown() {
  document.getElementById("droplist").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}