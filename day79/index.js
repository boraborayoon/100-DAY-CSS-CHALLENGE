const center = document.querySelector('.center');

for(let i=1;i<=10;i++){
    const line = document.createElement('div');
    line.classList.add('line-'+i);
    line.style.boxSizing = 'border-box';
    line.style.position = 'absolute';
    line.style.width='40px';
    line.style.height='40px';
    line.style.top='0';
    line.style.left='0';
    line.style.background='white';
    line.style.animationName='line-'+i;
    line.style.animationDuration='10s';
    line.style.animationTimingFunction='ease-in-out';
    line.style.animationIterationCount = 'infinite';
    center.appendChild(line);
}