function eval(){
var a=parseInt(document.getElementById("age").value);
var r=document.getElementById("requirement");
if(a==2)
	r.value=1;
else if(a==3||a==4||a==5)
	r.value=1.4;
else if(a==6||a==7||a==8)
	r.value=1.6;
else if(a==9||a==10)
	r.value=1.8;
else if(a==11)
	r.value=2;
else if(a==12||a==13)
	r.value=2.2;
else if(a==14)
	r.value=2.4;
else if(a==15)
	r.value=2.6;
else if(a>=16&&a<=25)
	r.value=2.8;
else if(a>=26&&a<=45)
	r.value=2.6;
else if(a>=46&&a<=65)
	r.value=2.4;
else if(a>=66)
	r.value=2.2;
}
function bmical()
{var h=parseInt(document.getElementById("height").value);
 var w=parseInt(document.getElementById("weight").value);
 var b=document.getElementById("bmi");
 var t=document.getElementById("rec");
 b.value=(w*10000)/(h*h);
 if(b.value<18.5)
 	t.value='Underweight';
 else if(b.value>=18.5&&b.value<=24.9)
 	t.value='Heathy';
 else if(b.value>=25&&b.value<=29.9)
 	t.value='Overweight';
 else if(b.value>=30)
 	t.value='Obese';
}
function calc(){
 	var c=parseInt(document.getElementById("carbohydrate").value);
 	var f=parseInt(document.getElementById("fat").value);
 	var p=parseInt(document.getElementById("protein").value);
 	var calo=document.getElementById("calories");
 	calo.value+=(4*(c+p)+9*f)/1000;
 }