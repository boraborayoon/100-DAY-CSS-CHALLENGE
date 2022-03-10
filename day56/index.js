const frame = document.querySelector('.frame');
const flower = document.querySelector('.flower');

for(let i=0;i<12;i++){
    const leaf = document.createElement('div');
    leaf.style.background='white';
    leaf.style.position = 'absolute';
    leaf.style.width = '50px';
    leaf.style.height = '50px';
    leaf.style.borderRadius= '2px 50px';

    if(i%2===0){
        leaf.style.zIndex='2';
        
    }
    else{
        leaf.style.zIndex='1';

    }
    leaf.style.boxShadow='0 0 0 0 rgba(0,0,0,0)';
    leaf.style.opacity = '0.8';
    leaf.style.transitionProperty='all';
    leaf.style.transitionDuration = '.5s';
    leaf.style.transitionTimingFunction = 'ease-in-out';
    leaf.style.transform='rotate('+i*360/12+'deg) scale(2)';
    flower.appendChild(leaf);
    
}