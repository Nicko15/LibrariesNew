function range_func() {

var x = `function range(min, max) {

	var x = "";
	var result = "";
	var i;
	
	if(min != x && max != x) {
	
	if(min < max) {
	
		for(i=min;i<=max;i++) {
		
			if(result == x) {
			result += i;
			}
		 
					else if(result != x)  {
				 result += "," + i;
	   } 
			 
		}
		
   }
   
   
   if(max < min) {

   }
		
 }
	
	return result;
}`

var head = document.head;
var script = document.createElement("script");
script.type = "text/javascript";
script.appendChild(document.createTextNode(x));
head.appendChild(script);
}
range_func();
