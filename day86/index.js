const cradle = document.querySelector('.cradle')
for(let i=1;i<=5;i++){
    const ball = document.createElement('div');
    ball.classList.add('ball')
    ball.classList.add('ball-'+`${i}`)
    cradle.appendChild(ball)
}