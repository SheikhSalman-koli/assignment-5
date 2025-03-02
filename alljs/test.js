
document.getElementById('them-btn').addEventListener('click',function(){
    const five = document.querySelectorAll('.themess')
    for(let one of five){
        one.classList.remove('hidden')
    }
})