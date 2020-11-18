var dark = true;
function changeColor(){
	document.documentElement.style.setProperty("transition-duration", "0.3s");
	if (dark){
		document.documentElement.style.setProperty("--main-bg-color", "#DDDDDD");
		document.documentElement.style.setProperty("--second-bg-color", "#CCCCCC");
		document.documentElement.style.setProperty("--font-color", "#000000");
		document.documentElement.style.setProperty("--main-glow-color", "rgba(256,256,256,0.2)");
		document.documentElement.style.setProperty("--second-glow-color", "rgba(0,0,0,0.2)");
		document.getElementById("moon").style.display = "none";
		document.getElementById("sun").style.display = "inherit";
	} else {
		document.documentElement.style.setProperty("--main-bg-color", "#222222");
		document.documentElement.style.setProperty("--second-bg-color", "#333333");
		document.documentElement.style.setProperty("--font-color", "#FFFFFF");
		document.documentElement.style.setProperty("--main-glow-color", "rgba(0,0,0,0.2)");
		document.documentElement.style.setProperty("--second-glow-color", "rgba(256,256,256,0.2)");
		document.getElementById("moon").style.display = "inherit";
		document.getElementById("sun").style.display = "none";
	}
	document.documentElement.style.setProperty("transition-duration", "0");
	dark = !dark;
	if(localStorage != null) {
		localStorage.setItem("theme", dark ? "black" : "white");
	}
}

if(localStorage != null) {
	var result = localStorage.getItem("theme");
	if(result == "white") {
		changeColor();
	}
}
