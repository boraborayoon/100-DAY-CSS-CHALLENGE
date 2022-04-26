const warp = document.querySelector('.warp')

for(let i=1;i<=30;i++){
    const ring = document.createElement('div');
    ring.style.position = 'absolute';
    ring.style.width = '200px';
    ring.style.height = '200px';
    ring.style.animationName='ring';
    ring.style.animationDuration = '4s';
    ring.style.animationDelay = (i-1) * (4/30) * -1+'s';
    ring.style.animationIterationCount = 'infinite';
    ring.style.animationTimingFunction='cubic-bezier(.98,.02,.97,.12)'
    for(let j=1;j<=24;j++){
        const stripe = document.createElement('div')
        stripe.style.position = 'absolute';
        stripe.style.width = '2px';
        stripe.style.height = '20px';
        stripe.style.top = '90px';
        stripe.style.left = '99px';
        stripe.style.background = '#C3DCEC';
        const degree = 360/24*(j-1)-Math.random()*10
        const offset = 100 - (Math.random() * 40)
        stripe.style.transform = 'rotate('+degree+'deg)'+ 'translate3d(0,'+offset+'px,0)' + 'scaleY('+offset/100+')';
        ring.appendChild(stripe)
    }
    warp.appendChild(ring)
}