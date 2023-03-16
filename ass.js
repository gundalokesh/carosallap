// const slides =document.querySelectorAll(".slide");
// var counter = 0;
// slides.forEach(
//     (slide,index) => {
//         slide.style.left = `${index * 100}%`
//     }
// )



// const goPrev = () => {
//     counter--
   
//     slideImage()
// }


// const goNext = () => {
//     counter++
 
//     slideImage()
// }








// const slideImage = () =>{
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform = `translateX(-${counter * 100}%)`
//         }
//     )

// }
let flag = 0;
          
function controller(x){
    flag = flag + x;
    slideshow(flag)


}






slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName("slide");
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if( num < 0){
        flag = slides.length -1
        num = slides.length -1
    }
    for(let y of slides){
        y.style.display ="none";

    }
 slides[num].style.display = "block";   
}


