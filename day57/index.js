const ikosaedron = document.querySelector('.ikosadron');

for(let i=0;i<20;i++){
    const side = document.createElement('div');
    const length = 80 +'px';
    const triangleHeight = length*1.732 +'px';
    const translate = 129.2;
    const degreeZ = '8deg';
    const degreeY = '35.264deg';
    const degreeX1 = '135deg';
    const degreeX2 = '45deg';
    side.style.position = 'absolute';
    side.style.width ='0';
    side.style.height='0';
    side.style.borderStyle='solid';
    side.style.borderWidth='0 '+length +' '+triangleHeight+' '+length;
    side.style.borderColor='transparent transparent #eee transparent';
    side.style.transformOrigin = '50% 100%';
    side.style.transitionProperty='all';
    side.style.transitionDuration='3s';
    side.style.transitionTimingFunction='ease-in-out';


    ikosaedron.appendChild(side);
}
