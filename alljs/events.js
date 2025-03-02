

const allBtn = document.querySelectorAll(".completed-btn")
// const count = 0
for (let btn of allBtn){
    btn.addEventListener('click',function(event){
        // const plus = document.getElementById('plus').innerText;
        // const converted = parseInt(plus)
       const container = document.getElementById('inbox')
    //    const D = document.createElement('p')
    //    D.innerText = 
    //    console.log(D)
       const p = document.createElement('p')
       p.innerText = 'You Have Completed The Task Fix Mobile Button Issue'
       p.classList.add('bg-purple-100','p-2','rounded-xl')
        container.appendChild(p)

        btn.setAttribute('disabled','true');
        btn.style.opacity = "0.1"

        return alert('Board updated Successfully');
    })
}

document.getElementById('GoToBlog').addEventListener('click',function(){
    window.location.href = './discover.html'
})

// const date = setTime(2025)
// console.log(date)
