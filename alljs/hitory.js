
document.getElementById('History').addEventListener('click',function(){
    const container = document.getElementById('inbox');
    container.remove();
    const allBtn = document.querySelectorAll(".completed-btn")
    for(const btn of allBtn){
            btn.disabled = false
            btn.style.opacity = "0.9"
        }
        location.reload();
    })

