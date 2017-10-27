function Save(){

window.localStorage['fname'] = document.getElementById('fname') .value;
document.getElementById('fname').value=null
window.localStorage['lname'] = document.getElementById('lname') .value;
document.getElementById('lname').value=null
	
window.localStorage['email'] = document.getElementById('email') .value;
document.getElementById('email').value=null
window.localStorage['num'] = document.getElementById('num') .value;
document.getElementById('num').value=null

window.localStorage['add'] = document.getElementById('add') .value;
document.getElementById('add').value=null

window.localStorage['Report'] = document.getElementById('Report') .value;
document.getElementById('Report').value=null