var color_func = `function colors() {

var x = document.querySelectorAll("*");

for(var i=0;i<x.length;i++) {

		if(x[i].tagName[0] == "C" && x[i].tagName[1] == "_") {

 x[i].style.color = x[i].tagName.replace("C_","#");

	  
    }
  }
}
colors();`;

var head = document.head;
var script = document.createElement("script");
script.type = "text/javascript";
script.appendChild(document.createTextNode(color_func));
head.appendChild(script);
