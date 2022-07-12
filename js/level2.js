let comment1=document.getElementById('comment1'),
    comment2=document.getElementById('comment2'),
    comment3=document.getElementById('comment3'),
    button1=document.getElementById('button1'),
    button2=document.getElementById('button2'),
    button3=document.getElementById('button3');

button1.addEventListener('click',(e)=>{
    comment1.classList.toggle('hide')
});
button2.addEventListener('click',(e)=>{
    comment2.classList.toggle('hide')
});
button3.addEventListener('click',(e)=>{
    comment3.classList.toggle('hide')
})