

const allBtn = document.querySelectorAll(".completed-btn")
// const count = 0
for (let btn of allBtn){
    btn.addEventListener('click',function(event){
        const plus = document.getElementById('plus').innerText;
        const converted = parseInt(plus)
        if (converted===Number){
            console.log('ok')
            // const res = converted ;
            // plus.innerText = res
        }
        // console.log(converted)

        btn.setAttribute('disabled','true');
        btn.style.opacity = "0.1"
        return alert('Board updated Successfully');
    })
}

