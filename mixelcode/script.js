const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle("dark")
	document.fa-moon.classList.toggle("dark")
})
	
const adiquirir = document.getElementById("aside");

adiquirir.addEventListener('click', () => {
	alert("asas");

})

var name;
do{
name = document.getElementById('textarena');


}while(!isNaN(name));