const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red'];
body.style.backgroundColor='pink';
document.addEventListener('click',function(){
    const colorindex=parseInt(Math.random()*color.length);
   //document.write(colorindex);
   body.style.backgroundColor=color[colorindex];
   document.getElementById("btn").innerHTML=colorindex;
})