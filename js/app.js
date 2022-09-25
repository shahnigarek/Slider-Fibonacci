let mySlider= [
    "images/img1.jpg" ,
    "images/img2.jpg", 
    "images/img3.jpg" ,
    "images/img4.jpg", 
]

let img=document.querySelector('#slider img');
let index=0;
img.src=mySlider[index]
let next=document.querySelector('.next')
let previous=document.querySelector('.previous')

next.addEventListener('click',function(){
 index++;
 if(index > mySlider.length-1){
    index=0;
 }
 img.src=mySlider[index]
})

previous.addEventListener('click',function(){
    index--;
    if(index < 0){
        index=mySlider.length-1;
     }
    img.src=mySlider[index]
})

function autoPlay() {
    {
        index++;
        if(index > mySlider.length-1){
           index=0;
        }
        img.src=mySlider[index]
    }
}
setInterval( () => {
    autoPlay();
},1500);



// FIBONACCI
// const number = parseInt(prompt('Enter the number of terms '));
// let n1 = 0, n2 = 1, nextTerm                         ;

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }