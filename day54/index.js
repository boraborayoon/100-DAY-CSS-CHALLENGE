// const frame = document.querySelector('.frame');
// const wave=document.querySelector('.wave');

// for(let i=0;i<12;i++){
//     const circle1 = document.createElement('div');
//     circle1.style.background='#406384';
//     circle1.style.position = 'absolute';
//     circle1.style.width = '50px';
//     circle1.style.height = '50px';
//     circle1.style.left=20+i*50+'px';
//     circle1.style.zIndex='1';
//     if(i===1 || i===3|| i===5 || i===7 || i===9 ||i===11){
//         circle1.style.top ='330px';
//         circle1.style.borderRadius = '50px';
//     }
//     else{
//         circle1.style.top ='355px';
//         circle1.style.borderRadius=0;
//         circle1.style.width = '200px';
//     }
//     circle1.style.animationName='wave-back';
//     circle1.style.animationDuration = '4s';
//     circle1.style.animationTimingFunction = 'ease-in-out';
//     circle1.style.animationIterationCount = 'infinite';
//     circle1.style.animationDirection = 'alternate';

//     const circle2 = document.createElement('div');
//     circle2.style.background='#5D90BF';
//     circle2.style.position = 'absolute';
//     circle2.style.width = '50px';
//     circle2.style.height = '50px';
//     circle2.style.left=20+i*50+'px';
//     circle2.style.borderRadius = '50px';
//     circle2.style.zIndex='2';
//     if(i===1 || i===3|| i===5 || i===7 || i===9 ||i===11){
//         circle2.style.top ='240px';
        
//     }
//     else{
//         circle2.style.top ='335px';

//     }
//     circle2.style.animationName='wave-middle';
//     circle2.style.animationDuration = '4s';
//     circle2.style.animationTimingFunction = 'ease-in-out';
//     circle2.style.animationIterationCount = 'infinite';
//     circle2.style.animationDirection = 'alternate';


    
//     wave.appendChild(circle2)
//     wave.appendChild(circle1);
// }