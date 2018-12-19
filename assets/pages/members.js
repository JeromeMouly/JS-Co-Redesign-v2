/* ----- NAVIGATION MEMBERS PAGE ----- */

function myFunction() {
    let x = document.getElementById("navBar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
  }
  
  function closeOnClick() {
    let nav = document.getElementById("navBar");
    nav.className = nav.className.replace(" w3-show", "");
  
  }