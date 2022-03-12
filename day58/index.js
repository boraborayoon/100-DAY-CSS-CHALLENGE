const slice = document.querySelector('.slice');
const form = document.querySelector('.form');
slice.classList.add('slice-19');

for(let i=1;i<10;i++){
    const size = 200-(2*(i*i));
    const offset = (i*15)-((i*i)/2);
    let name = 'slice-'+i;
    const div = document.createElement('div');
    div.style.width = size+'px';
    div.style.height = size+'px';
    div.style.left = (200-size)/2 +'px';
    div.style.top = (200-size)/2 +'px';
    div.style.transform = 'translateY('+offset+'px) rotate(90deg)';
    div.style.animationName='slice-'+i;
    div.style.animationDuration='6s';
    div.style.animationTimingFunction='ease-in-out';
    div.style.animationIterationCount='infinite';
    div.classList.add('slice')
    div.classList.add(name)
    form.appendChild(div);
}
for(let i=10;i<19;i++){
    const size = 200-(2*((i-9)*(i-9)));
    const offset = ((i-9)*15)-(((i-9)*(i-9))/2);
    let name = 'slice-'+i;
    const div = document.createElement('div');
    div.style.width = size+'px';
    div.style.height = size+'px';
    div.style.left = (200-size)/2 +'px';
    div.style.top = (200-size)/2 +'px';
    div.style.transform = 'translateY('+(-1*offset)+'px) rotate(90deg)';
    div.style.animationName='slice-'+i;
    div.style.animationDuration='6s';
    div.style.animationTimingFunction='ease-in-out';
    div.style.animationIterationCount='infinite';
    div.classList.add('slice')
    div.classList.add(name)
    form.appendChild(div);
}