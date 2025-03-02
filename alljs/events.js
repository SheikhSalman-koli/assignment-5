

const allBtn = document.querySelectorAll(".completed-btn")
for (let btn of allBtn){
    btn.addEventListener('click',function(){

       let plus  = document.getElementById('plus').innerText;
       let convertedPlus = parseInt(plus)
       let minus = document.getElementById('minus').innerText;
       let convertedMinus = parseInt(minus)
       convertedPlus++;
       convertedMinus--;
       plus.innerText = convertedPlus++
       minus.innerText = convertedMinus--;

        btn.setAttribute('disabled','true');
        btn.style.opacity = "0.3"
        if(btn.lendth<6){
            return alert('Board updated Successfully');
        }
    })
}

document.getElementById('GoToBlog').addEventListener('click',function(){
    window.location.href = './discover.html'
})

const currentDate = document.getElementById('currentDate');
const mydate = new Date();
const presentDate = mydate.toDateString();
const p = document.createElement('p');
p.innerText = presentDate;
currentDate.appendChild(p);


