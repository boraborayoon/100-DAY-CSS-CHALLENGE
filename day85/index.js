const wave = document.querySelector('.wave')

for(let i=1;i<=200;i++){
    const dot = document.createElement('div')
    dot.style.float = 'left';
    dot.style.width = '2px';
    dot.style.height = '2px';
    dot.style.borderRadius = '1px';
    dot.style.backgroundColor = 'white';
    dot.style.animationName = 'move';
    dot.style.animationDuration = i/20+'s';
    dot.style.animationTimingFunction = 'ease-in-out';
    dot.style.animationIterationCount = 'infinite';
    wave.appendChild(dot)
}