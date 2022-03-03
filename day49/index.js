const mouse = document.querySelector('.mouse');
const border = document.querySelector('.border')

document.querySelector('.frame').addEventListener('mousemove', (e)=>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    console.log(mouseY)
    if(mouseX>=280 && mouseX<670 && mouseY>=240 && mouseY<620){
        document.querySelector('.center').addEventListener('mousemove', (e)=>{
            mouse.style.left = mouseX-304 + 'px';
            mouse.style.top = mouseY-258 + 'px';
        })
    }
    else{
        mouse.style.left = '48%';
        mouse.style.top='45%';
    }
    
   
})
