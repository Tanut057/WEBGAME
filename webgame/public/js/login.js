window.onload = pageLoad;

function pageLoad(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	// check error username pass
	if (urlParams.get("error")==1){
		if (window.location.href.split('/').pop()== "register.html"){
			document.getElementById('errordisplay').innerHTML = "Registration Error!"
		}else{
			document.getElementById('errordisplay').innerHTML = "Username or password does not match.";
		}
		
	}	
}