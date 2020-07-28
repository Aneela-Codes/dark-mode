

let sun=document.getElementById('sun');

function change(){
 let paras=document.getElementsByTagName('p');
 let links=document.getElementsByTagName('a');
 let header=document.getElementsByTagName("header");
 let headings=document.getElementsByTagName("h1");
 for(let i=0; i<headings.length; i++)
   {
    headings[i].style.color="yellow";   
   }


   for(let i=0; i<paras.length; i++){
      paras[i].style.color="#f1f1f1";
   }
   for(let i=0; i<links.length; i++){
      links[i].style.color="red"
   }
   document.body.style.backgroundColor="#000";
   header.style.backgroundColor="black";
   
}
