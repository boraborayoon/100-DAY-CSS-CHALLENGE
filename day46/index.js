const view = document.querySelector('.frame');
const array = [[0,50],[25,25],[50,0],[25,-25],[0,-50],[-25,-25],[-50,0],[-25,25]]
const deg=[0,0.125,.25,.375,.5,.625,.75,.875];
for(let i=0;i<8;i++){
    const ring = document.createElement('div');
    const radius = i;
    ring.style.left = array[i][0]+'px';
    ring.style.top = array[i][1]+'px';
    ring.style.width = 200+'px';
    ring.style.height =200+'px';
    ring.style.position='absolute';
    ring.style.opacity = (1-(radius/10));
    // ring.style.transform=`scale(${radius/10})`;
    ring.style.transform = 'rotate('+deg[i]+')turn';
    ring.style.animation = 'rotate';
    ring.style.animationDuration = '6s';
    ring.style.animationIterationCount = 'infinite';
    ring.style.animationTimingFunction = 'ease-in-out';

    for(let j=0;j<8;j++){
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width='10px';
        dot.style.height='10px';
        dot.style.background='white';
        dot.style.borderRadius = '50px';
        dot.style.top = array[j][0]+'px';
        dot.style.left = array[j][0]+'px';
        ring.appendChild(dot);
    }
    view.appendChild(ring);
}