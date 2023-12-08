let a=1;
let b=1;
let c=1;
let d=1;
function clickmenu(){
  if(a==1){
    $('#menu').animate({
      backgroundColor: 'rgb(230, 230, 230)'
    }, 500)
    $('#hide:hidden').show(800)
    a=a+1;
  }
  else if(a==2){
    $('#menu').animate({
      backgroundColor: 'rgba(255, 0, 0, 0.0)'
    }, 500)
    $('#hide').hide(800);
    $('#hide2').hide(800);
    $('#hide3').hide(800);
    $('#hide4').hide(800);
    a=1;
    b=1;
    c=1;
    d=1;
  }
}
function clickabout(){
  if(b==1){
    $('#hide2:hidden').show(800)
    b=b+1;
  }
  else if(b==2){
    $('#hide2').hide(800)
    b=1;
  }
}
function clickl(){
  if(c==1){
    $('#hide3:hidden').show(800)
    c=c+1;
  }
  else if(c==2){
    $('#hide3').hide(800)
    c=1;
  }
}
function clickkatalog(){
  if(d==1){
    $('#hide4:hidden').show(800)
    d=d+1;
  }
  else if(d==2){
    $('#hide4').hide(800)
    d=1;
  }
}
let a1=1;
let b1=1;
let c1=1;
let d1=1;
function clickmenu1(){
  if(a1==1){
    $('#menu1').animate({
      backgroundColor: '#1a1a1a'
    }, 500)
    $('#hide01').animate({
      backgroundColor: '#1a1a1a'
    }, 500)
    $('rect').animate({
      fill: 'rgb(0, 0, 0)'
    }, 500)
    $('#hide01:hidden').show(800)
    a1=a1+1;
  }
  else if(a1==2){
    $('#menu1').animate({
      backgroundColor: 'rgba(0, 0, 0, 0.0)'
    }, 500)
    $('rect').animate({
      fill: 'black'
    }, 500)
    $('#hide01').hide(800);
    $('#hide02').hide(800);
    $('#hide03').hide(800);
    $('#hide04').hide(800);
    a1=1;
    b1=1;
    c1=1;
    d1=1;
  }
}
