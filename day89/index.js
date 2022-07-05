const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

for(let i=1;i<=100;i++){
    const stripe = document.createElement('div')
    stripe.classList.add('stripe')
    horizontal.appendChild(stripe)
}


for(let i=1;i<=100;i++){
    const stripe = document.createElement('div')
    stripe.classList.add('stripe')
    vertical.appendChild(stripe)
}