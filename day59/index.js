const frame = document.querySelector('.frame');
const slices = document.querySelector('.slices');

for(let i=1;i<=8;i++){
    const slice = document.createElement('div');
    slice.style.background='url(https://100dayscss.com/codepen/slice-image-2.jpg) center center no-repeat';
    slice.style.backgroundPosition = `${(i-1)*-50}px 0`;
    slice.style.position='relative';
    slice.style.zIndex='2';
    slice.style.float='left';
    slice.style.boxSizing='border-box';
    slice.style.width='50px';
    slice.style.height='400px';
    slice.style.backgroundSize='400px 400px';
    slice.style.transitionProperty='all';
    slice.style.transitionDuration='1s';
    slice.style.transitionTimingFunction='ease-in-out';
    const name = 'slice-'+i;
    slice.style.transform = 'translateY(-40px)';
    slice.classList.add('slice')
    if(i%2===0){
        slice.style.transform='translateY(40px)';
    }
    slice.style.opacity='0';
    slice.classList.add(name)
    slices.addEventListener('mouseover',function(){
        slice.style.transform='translateY(0)';
        slice.style.opacity='1';
    })
    slices.addEventListener('mouseout',function(){
        if(i%2===0){
            slice.style.transform='translateY(-40px)'
        }
        else{
            slice.style.transform='translateY(40px)'
        }
        slice.style.opacity='0';
    })
    slices.appendChild(slice);
}