function colors() {

var x = document.querySelectorAll("*");

for(var i=0;i<x.length;i++) {

		if(x[i].tagName[0] == "C" && x[i].tagName[1] == "_") {

		if(x[i].style.color == "") {

 x[i].style.color = x[i].tagName.replace("C_","#");

	  }
  }
}
}
colors();
