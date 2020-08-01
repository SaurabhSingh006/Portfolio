//==================PAGE 1=======================

//===MENU CROSS
function cross(x){
    x.classList.toggle('cross');
    var menucon = x.nextElementSibling;
    if(x.classList.contains('cross')){
        menucon.style.width = "100%";
    }else{
        menucon.style.width = null;
    }
}

//====CLOSE NAVBAR====

var a = document.getElementsByClassName('close');
for(var i = 0; i < a.length; i++){
    a[i].addEventListener('click',function(){
        
        document.getElementById('menucon').style.width = null;
        document.getElementById('menu').classList.remove('cross');
    });
}


//========NAVBAR MOVEMENT====

var prevScroll = window.pageYOffset;
window.onscroll = function(){
    var curScroll = window.pageYOffset;
    if(curScroll > 600){
        document.getElementById('top').style.display = "block";
    }else{
        document.getElementById('top').style.display = null;
    }
    if(prevScroll > curScroll){
        document.getElementById('nav').style.top = "0px";
    }else{
        document.getElementById('nav').style.top = "-60px"
    }
    prevScroll = curScroll;
}

//=====TO TOP ICON=====

