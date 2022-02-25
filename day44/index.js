const view = document.querySelector('.frame');

for(let i=0;i<20;i++){
    const rect = document.createElement('div');
    const size = 210 - (i*10);
    const offset = (400 - size)/2;
    const color = 90+i*20;
    rect.style.left = offset+'px';
    rect.style.top = offset+'px';
    rect.style.width = size+'px';
    rect.style.height = size+'px';
    rect.style.zIndex = i;
    rect.style.position='absolute';
    rect.style.animationName = 'rotate';
    rect.style.animationDuration = '4s';
    rect.style.animationIterationCount = 'infinite';
    rect.style.animationTimingFunction = 'ease-in-out';
    rect.style.animationDelay = i/30+'s';
    rect.style.animationDirection='alternate';
    rect.style.borderColor=`rgb(${color},${color},${color})`;
    rect.style.borderWidth = '1px';
    rect.style.borderStyle = 'solid';

    view.appendChild(rect);
}