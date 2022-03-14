const frame = document.querySelector('.frame');
const cover = document.querySelector('.cover');

frame.addEventListener('mousemove', (e)=>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    if(mouseY>=430 && mouseY<=620){
        cover.style.top=(mouseY-620)/4+'%';
    }
    else{
        cover.style.top='-50%';
    }
})