

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
       minus.innerText = convertedMinus--

       const container = document.getElementById('inbox')
       const p = document.createElement('p')
       p.innerText = "You Have Completed The Task Fix Mobile Button Issue at :- ",
       p.classList.add('bg-purple-100','p-2','rounded-xl')

       const mydate = new Date()
       const hours = mydate.getHours();
       const p2 = document.createElement('span')
       p2.innerText = hours;
       const colon = document.createElement('span');
       colon.innerText = ":"
       const minutes = mydate.getMinutes();
       const p3 = document.createElement('span');
       p3.innerText = minutes;
       const colon2 = document.createElement('span');
       colon2.innerText = ":"
       const seconds = mydate.getSeconds();
       const p4 = document.createElement('span');
       p4.innerText = seconds ;
        container.appendChild(p);
        p.appendChild(p2);
        p.appendChild(colon)
        p.appendChild(p3);
        p.appendChild(colon2)
        p.appendChild(p4);

        btn.setAttribute('disabled','true');
        btn.style.opacity = "0.3"
        return alert('Board updated Successfully');
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


