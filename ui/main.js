console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'NEW VALUE';

var img=document.getElementById('img');
img.onclick=function(){
  img.style.marginLeft='100px';  
};