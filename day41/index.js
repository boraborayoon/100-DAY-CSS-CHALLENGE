let box = document.querySelector('.box');
let dismissButton = document.querySelector('.bottom');
let status=true;
dismissButton.onclick = function(){
    if(status){
        box.classList.add('hide')
    }
    else{
        box.classList.remove('hide')
    }
}