var english = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];

var hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];

var count=0;
var x,t,flag1=1;
var text=" ";
function languagechange()
{var node;
 node=document.getElementById("p0");
node.querySelectorAll('*').forEach(n => n.remove());
node=document.getElementById("p4");
node.querySelectorAll('*').forEach(n => n.remove());
node=document.getElementById("p5");
node.querySelectorAll('*').forEach(n => n.remove());
document.getElementById("p2").innerHTML=" ";
node=document.getElementById("p1").innerHTML=" ";
count=0;
}
function toggle()
{
if(flag1==0)
{t.nodeValue="Get Answers";flag1=1;document.getElementById("p7").innerHTML=" ";}
else
{
flag1=0;
t.nodeValue="Hide the Correct Sentence";
}
}

function reset()
{count=0;
document.getElementById("p1").innerHTML=" ";
var node=document.getElementById("p2");
document.getElementById("p0").querySelectorAll('*').forEach(n => (n.style.display="initial"));
node.querySelectorAll('*').forEach(n => n.remove());
document.getElementById("p2").innerHTML=" ";
document.getElementById("p6").innerHTML=" ";
document.getElementById("p7").innerHTML=" ";
text=" ";
}
function engrandom()
{
document.getElementById("p3").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br/>";
var r=Math.floor(Math.random()*(english.length-1));
var ar=english[r][0].split(" ");
for(var i=0;i<ar.length;i++)
{
j=Math.floor(Math.random()*(ar.length-1));
temp=ar[i];
ar[i]=ar[j];
ar[j]=temp;
}

var flag=0;
var q=[];
for(var i=0;i<ar.length;i++)
{x = document.createElement("BUTTON");
 x.value=ar[i];
x.style.fontSize = '20px';
x.style.paddingLeft='15px';
x.style.paddingRight='15px';
//x.style.margin-right='16px';
 t = document.createTextNode(ar[i]);
  x.appendChild(t);
document.getElementById("p0").appendChild(x);
}

x = document.createElement("BUTTON");
t = document.createTextNode("Reform sentence");
x.style.fontSize = '15px';
x.appendChild(t);
document.getElementById("p4").appendChild(x);
var d=document.getElementById("p4").childNodes;
var l = document.createElement("BUTTON");
var k = document.createTextNode("Check the correctness of the sentence");
l.style.fontSize = '15px';
l.style.paddingLeft='15px';
l.appendChild(k);
document.getElementById("p5").appendChild(l);
var correct=document.getElementById("p5").childNodes;

var c = document.getElementById("p0").childNodes;

var x="";
var z=" ";
var flag=0;
for(var i=0;i<c.length;i++)
{
c[i].onclick=function()
{d[0].onclick=function(){reset();}
correct[0].onclick=function()
{
for(var i=0;i<english.length;i++)
{
for(var j=0;j<english[i].length;j++)
{
if(((x.trim()).localeCompare(english[i][j]))==0)
{document.getElementById("p6").innerHTML="Correct Answer!!!";flag=1;break;
}
}
if(flag==1)
break;
}
if(flag==0)
{document.getElementById("p6").innerHTML="Wrong Answer!!!"+"<br/>"+"<br/>";
x = document.createElement("BUTTON");
x.value="correctans";
x.style.fontSize = '20px';
x.style.paddingLeft='15px';
x.style.paddingRight='15px';
//x.style.margin-right='16px';
 t = document.createTextNode("Get the correct Sentence");
  x.appendChild(t);
document.getElementById("p6").appendChild(x);
x.onclick=function(){
toggle();
var y="";
for(var i=0;i<english[r].length;i++)
{
y=y+english[r][i]+"<br/>";
}

if(flag1==0)
{alert("Scroll down view answer");
document.getElementById("p7").innerHTML=y;}
}
}
}
var flag2=0;
count++;
if(count==c.length)
{document.getElementById("p1").innerHTML="Formed Sentence(after selecting words)";

document.getElementById("p1").onclick=function(){reset();document.getElementById("p2").innerHTML=" ";flag2=1;}
}
else
{document.getElementById("p1").innerHTML="The number of words used are "+count;}
this.style.display="none";
/*var node = document.createElement("BUTTON");                 
var textnode = document.createTextNode(this.value);         
node.appendChild(textnode); 
node.style.fontSize = '20px';
node.style.paddingLeft = "15px";
node.style.paddingRight = "15px";                            
document.getElementById("p2").appendChild(node); */
//document.getElementById("p2").appendChild(c[i]);
if(flag2==0)
{text=text+this.value+z;//alert(x);
document.getElementById("p2").innerHTML=text;
}
}

}

}
function hinrandom()
{
document.getElementById("p3").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br/>"+"दिए गए शब्दों में से एक वाक्य (डिक्लेरेटिव या इंट्रोगेटिव या किसी अन्य प्रकार)";
var r=Math.floor(Math.random()*(hindi.length-1));
var ar=hindi[r][0].split(" ");
for(var i=0;i<ar.length;i++)
{
j=Math.floor(Math.random()*(ar.length-1));
temp=ar[i];
ar[i]=ar[j];
ar[j]=temp;
}

var flag=0;
var q=[];
for(var i=0;i<ar.length;i++)
{x = document.createElement("BUTTON");
 x.value=ar[i];
x.style.fontSize = '20px';
x.style.paddingLeft='15px';
x.style.paddingRight='15px';
//x.style.margin-right='16px';
 t = document.createTextNode(ar[i]);
  x.appendChild(t);
document.getElementById("p0").appendChild(x);
}

x = document.createElement("BUTTON");
t = document.createTextNode("Reform Sentence");
x.style.fontSize = '15px';
x.appendChild(t);
document.getElementById("p4").appendChild(x);
var d=document.getElementById("p4").childNodes;
var l = document.createElement("BUTTON");
var k = document.createTextNode("Check the correctness of the sentence");
l.style.fontSize = '15px';
l.style.paddingLeft='15px';
l.appendChild(k);
document.getElementById("p5").appendChild(l);
var correct=document.getElementById("p5").childNodes;

var c = document.getElementById("p0").childNodes;

var x="";
var z=" ";
var flag=0;
for(var i=0;i<c.length;i++)
{
c[i].onclick=function()
{d[0].onclick=function(){reset();}
correct[0].onclick=function()
{
for(var i=0;i<hindi.length;i++)
{
for(var j=0;j<hindi[i].length;j++)
{
if(((x.trim()).localeCompare(hindi[i][j]))==0)
{document.getElementById("p6").innerHTML="Correct Answer!!!";flag=1;break;
}
}
if(flag==1)
break;
}
if(flag==0)
{document.getElementById("p6").innerHTML="Wrong Answer!!!"+"<br/>"+"<br/>";
x = document.createElement("BUTTON");
x.value="correctans";
x.style.fontSize = '20px';
x.style.paddingLeft='15px';
x.style.paddingRight='15px';
//x.style.margin-right='16px';
 t = document.createTextNode("Get the correct Sentence");
  x.appendChild(t);
document.getElementById("p6").appendChild(x);
x.onclick=function(){
toggle();
var y="";
for(var i=0;i<hindi[r].length;i++)
{
y=y+hindi[r][i]+"<br/>";
}

if(flag1==0)
{alert("Scroll down view answer");
document.getElementById("p7").innerHTML=y;}
}
}
}
var flag2=0;
count++;
if(count==c.length)
{document.getElementById("p1").innerHTML="Formed Sentence(after selecting words)";

document.getElementById("p1").onclick=function(){reset();document.getElementById("p2").innerHTML=" ";flag2=1;}
}
else
{document.getElementById("p1").innerHTML="The number of words used are "+count;}
this.style.display="none";
//document.getElementById("p2").appendChild(c[i]);
if(flag2==0)
{x=x+this.value+z;
document.getElementById("p2").innerHTML=x;}
}

}

}

function p()
{
var x;
x=document.getElementById("language").value;
//alert(x);
if(x.localeCompare("english")==0)
{
languagechange();
engrandom();
}
else
{languagechange();
hinrandom();
}
}

