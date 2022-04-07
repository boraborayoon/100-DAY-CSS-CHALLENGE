const center = document.querySelector('.center');

for(let i=1;i<=10;i++){
    const ring = document.createElement('div');
    ring.style.boxSizing = 'border-box';
    ring.style.position = 'absolute';
    ring.style.top = '0';
    ring.style.left = '0';
    ring.style.width = '200px';
    ring.style.height = '200px';
    ring.style.borderRadius = '50%';
    ring.style.borderWidth = '1px';
    ring.style.borderColor = 'white';
    ring.style.borderStyle = 'solid';
    ring.style.transformOrigin = '50% 50%';
    ring.style.animationName = 'ring'+i%5;
    ring.style.animationDuration = '5s';
    ring.style.animationTimingFunction = 'ease-in-out';
    ring.style.animationIterationCount = 'infinite';
    center.appendChild(ring)
}