function openTab(evt, tabName) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("chocolates");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("min-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
}

function notify(){
    alert("Order Placed!");
    window.location.href = "index.html";
}

function openTabad(evt, tabName) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("adminpage");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("min-link-ad");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function login() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (username.trim() !== "" && password.trim() !== "") {
      window.location.href = "index.html";
  } else {
      alert("Please enter both username and password.");
  }
}

document.getElementById("submit").addEventListener("click", login);
