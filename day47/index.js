const frame = document.querySelector('.frame');
const array = [86,106,126,146,166,186,206,226,246,266,286,306,326,87,88,89,90,91,207,208,209,210,211,112,133,153,173,192]
for(let i=0;i<400;i++){
    let status=true;
    const pixel = document.createElement('input');
    pixel.style.float='left';
    pixel.style.display='none';
    pixel.type='checkbox';
    
    const label = document.createElement('label');
    label.onclick=function(){
        if(status){
            label.style.background='rgb(216, 188, 248)';
            status=!status;
        }
        else{
            label.style.background='purple';
            status=!status;
        }
    };
    label.style.boxSizing = 'border-box';
    label.style.width='20px';
    label.style.height='20px';
    label.style.borderWidth='0.5px';
    label.style.borderColor='rgb(179,179,179)';
    label.style.borderStyle='solid';
    label.style.cursor='pointer';
    label.style.margin='0';
    label.style.fontSize='1px';
    if(array.includes(i)){
        label.style.background='purple';
        label.style.borderStyle='none';
    }
    frame.appendChild(label);
}
