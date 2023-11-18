const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');


// item.addEventListener('dragstart',()=>{
// console.log("drag start..");
// });

boxes.forEach((box)=>{

    box.addEventListener("dragover",(e)=>{
        e.preventDefault();
        box.classList.add('drag-over');
    });
    box.addEventListener("dragleave",e=>{
       
        box.classList.remove('drag-over');
    });
    box.addEventListener("drop",e=>{
        e.preventDefault();
        box.appendChild(item);
        box.classList.remove('drag-over');
    });
   
});