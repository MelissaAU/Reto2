
function arbol(id) {

    var max=18; //Este es el ancho del arbol
	
	var j=1,k=1;
	
    var result="";
    
	for(var h=1;h<3;h++)
	{ 
		for(var i=k;i<=max;i+=3)
		{
          if(k==1)
          { 
           i+=0;
          }    
          result+="<br>"+(Array((1+(Math.ceil(max/2))-j)).join(" ")+Array(i+1).join(getRandomInt()));
	      j=j+1;
		}
        console.log(h)
         k=11;
         j=5;
         max+= 10;
       	}
        k=20;
        j=5;
        max+= 0;
        for(var i=k;i<=max;i+=3)
		{
          if(k==1)
          { 
           i+=0;
          }    
          result+="<br>"+(Array((1+(Math.ceil(max/2))-j)).join(" ")+Array(i+1).join(getRandomInt()));
	      j=j+1;
		}

  
		result+="<br>"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(6).join(getRandomInt()));
        result+="<br>"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(6).join(getRandomInt()));
        result+="<br>"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(6).join(getRandomInt()));

 
	document.getElementById(id).innerHTML=result;
}

arbol("Arbol");


function getRandomInt(mini, maxi){
    var max = 2;
    var min = 0;
    return Math.floor(Math.random() * (max - min)) + min; 
     
 }
