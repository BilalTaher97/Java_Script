

let LastScroll = window.scrollY;



let Div_Image = document.getElementById('Up');
let One_Image = document.getElementById('Image-up');

window.addEventListener('scroll', function () {


    let currentScroll = window.scrollY;



    if (currentScroll > LastScroll) {
        Div_Image.style.display = 'block';
    }
    else {
        Div_Image.style.display = 'none';
    }

})


One_Image.addEventListener('click',function()
{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
   
})