document.querySelectorAll('.nav-item').forEach(a=>{
    a.addEventListener('mouseenter',(e)=>{
        console.log(e.clientX);
    })
})