const view = document.querySelector('.background');
function getRandom(min,max){
    return Math.floor(Math.random() * (max-min))+min
}

for(let i=0;i<300;i++){
    const star = document.createElement('div');
    const x = getRandom(0,280) + 'px';
    const y = getRandom(0,280) + 'px';
    const size = getRandom(0,100)/100 + 'px';
    const second= getRandom(1,40)/10 + 's';
    star.style.left = x;
    star.style.top = y;
    star.style.width = size;
    star.style.height = size;
    star.style.borderRadius = '50%';
    star.style.background = 'white';
    star.style.position = 'relative';
    star.style.animationName = 'flicker';
    star.style.animationDuration = second;
    star.style.animationIterationCount = 'infinite';

    view.appendChild(star);
}

for(let i=0;i<3;i++){
    const shooting = document.createElement('div');
    const top = getRandom(1,100)-30+'px';
    const start = getRandom(1,4)+'s';
    const delay = getRandom(1,6)+'s';
    shooting.style.position = 'absolute';
    shooting.style.left='-120px';
    shooting.style.top='0';
    shooting.style.width='120px';
    shooting.style.height='2px';
    shooting.style.background = 'url(https://100dayscss.com/codepen/shooting-star.png)';
    shooting.style.backgroundSize = '100%';
    shooting.style.animationName = 'shooting'
    shooting.style.animationDuration = start;
    shooting.style.animationDelay = delay;
    shooting.style.animationIterationCount= 'infinite';

    view.appendChild(shooting);
}
