const form = document.querySelector('.form');

for(let i=1;i<=18;i++){
    const ellipse = document.createElement('div');
    
    ellipse.style.boxSizing = 'border-box';
    ellipse.style.position = 'absolute';
    ellipse.style.top = '0';
    ellipse.style.left = (150-(150 * 0.6)/2) + 'px';
    ellipse.style.width = 150*0.6+'px';
    ellipse.style.height = 300+'px';
    ellipse.style.borderWidth = '1px';
    ellipse.style.borderStyle = 'solid';
    ellipse.style.borderColor = 'white';
    ellipse.style.borderRadius = '50%';
    ellipse.style.transitionProperty ='all';
    ellipse.style.transitionDuration ='0.5s';
    ellipse.style.transitionTimingFunction = 'ease-in-out';
    ellipse.style.animation ='ellipse-'+i;
    ellipse.style.animationDuration = '5s';
    ellipse.style.animationTimingFunction = 'ease-in-out';
    ellipse.style.animationIterationCount ='infinite';

    form.appendChild(ellipse);
    
}