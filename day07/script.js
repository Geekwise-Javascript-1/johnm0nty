// btn.addEventListener('click',once);
//
// function once(){
//   console.log('Removed!');
//   btn.removeEventListener('click',once);
// }

// btn.addEventListener('mouseup',function(e){
//   console.log(e);
//   if(e.which == 1){
//     console.log('left click')
//   }else if(e.which == 2){
//     console.log('middle click')
//   }else if(e.which == 3){
//     console.log('right click')
//   }else{
//     console.log('other')
//   }
// });

// google.addEventListener('click',function(e){
//   e.preventDefault();
//   console.log('Denied!');
//   console.log(e);
// });

// addEventListener('keydown',function(e){
//   console.log(e);
//   if(e.keyCode == 86){
//     document.body.style = 'background-color:violet';
//   }
// });
// addEventListener('keyup',function(e){
//   console.log(e);
//   if(e.keyCode == 86){
//     document.body.style = 'background-color:';
//   }
// });

// addEventListener('mousemove',function(e){
//   console.log(e.pageX+'px, '+e.pageY+'px');
// });

// addEventListener('click',function(e){
//   var dot = document.createElement('div');
//   dot.className = 'dot';
//   dot.style.left = e.pageX+'px';
//   dot.style.top = e.pageY+'px';
//   document.body.appendChild(dot);
// });

// addEventListener('scroll',function(e){
//   if(e.pageY>60){
//     head.classList.add('fixed');
//   }else{
//     head.classList.remove('fixed');
//   }
// });

// addEventListener('focus',function(e){
//   console.log(e);
// });
// addEventListener('blur',function(e){
//   console.log(e);
// });
