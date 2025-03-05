// for this you have to find parantNode & then title
document.getElementById('btn-1').addEventListener('click',function(){
    const container = document.getElementById('inbox')
    const p = document.createElement('p')
    p.innerText = "you have completed the task fix mobile button :- ",
    p.classList.add('bg-purple-100','p-2','rounded-xl')
    container.appendChild(p)
    
    const mydate = new Date()
    const t = mydate.toLocaleString().split(',')[1];
    const mytime = document.createElement('span')
    mytime.innerText = t
    p.appendChild(mytime);
})
document.getElementById('btn-2').addEventListener('click',function(){
    const container = document.getElementById('inbox')
    const p = document.createElement('p')
    p.innerText = "you have completed the task add dark mode :- ",
    p.classList.add('bg-purple-100','p-2','rounded-xl')
    container.appendChild(p)

    const mydate = new Date()
    const t = mydate.toLocaleString().split(',')[1];
    const mytime = document.createElement('span')
    mytime.innerText = t
    p.appendChild(mytime);
})
document.getElementById('btn-3').addEventListener('click',function(){
    const container = document.getElementById('inbox')
    const p = document.createElement('p')
    p.innerText = "you have completed the task optimize home page :- ",
    p.classList.add('bg-purple-100','p-2','rounded-xl')
    container.appendChild(p)

    const mydate = new Date()
    const t = mydate.toLocaleString().split(',')[1];
    const mytime = document.createElement('span')
    mytime.innerText = t
    p.appendChild(mytime);
})
document.getElementById('btn-4').addEventListener('click',function(){
    const container = document.getElementById('inbox')
    const p = document.createElement('p')
    p.innerText = "you have completed the task add new emoji :- ",
    p.classList.add('bg-purple-100','p-2','rounded-xl')
    container.appendChild(p)

    const mydate = new Date()
    const t = mydate.toLocaleString().split(',')[1];
    const mytime = document.createElement('span')
    mytime.innerText = t
    p.appendChild(mytime);
})
document.getElementById('btn-5').addEventListener('click',function(){
    const container = document.getElementById('inbox')
    const p = document.createElement('p')
    p.innerText = "you have completed the task integrate openAI API :- ",
    p.classList.add('bg-purple-100','p-2','rounded-xl')
    container.appendChild(p)

    const mydate = new Date()
    const t = mydate.toLocaleString().split(',')[1];
    const mytime = document.createElement('span')
    mytime.innerText = t
    p.appendChild(mytime);
})
document.getElementById('btn-6').addEventListener('click',function(){
    const container = document.getElementById('inbox')
    const p = document.createElement('p')
    p.innerText = "you have completed the task Improve job searching :- ",
    p.classList.add('bg-purple-100','p-2','rounded-xl')
    container.appendChild(p)

   const mydate = new Date()
    const t = mydate.toLocaleString().split(',')[1];
    const mytime = document.createElement('span')
    mytime.innerText = t
    p.appendChild(mytime);
})