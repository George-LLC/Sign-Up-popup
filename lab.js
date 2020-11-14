
// get the Button that opens the popup
var myBtn = document.getElementById("myBtn");
var myPopUp = document.getElementById("myPopUp");

myBtn.onclick = function() {
	myPopUp.style.display = "block";
}

// get Email to change the background after click on it
var email = document.getElementsByClassName("email")[0];
email.onclick = function() {
	email.style.backgroundColor = "#ffffff";
}


// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
	if (event.target == myPopUp) {
		myPopUp.style.display = "none";
	}

// When the user clicks anywhere outside of the email input, the background color back to old color
	if (event.target !== email) {
		email.style.backgroundColor = "#383838";
	}
}