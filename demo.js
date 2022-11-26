/*--------slider---------------*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
/**------------------------ */

/* add to cart button */
var cart=document.getElementsByClassName("cart")
for(var i=0;i<cart.length;i++)
{
    cart[i].addEventListener('click',add)
}
let j=1;
function add(e){   
    e.preventDefault();
    document.getElementsByClassName("cart-hide")[0].style.display="block"
    document.getElementsByClassName("cart-hide")[1].style.display="block"

    document.getElementById("cartNum").innerText="("+ j++ +") item";
}
/*------------------------ */

/**---------filter-------------- */
const allFilterItems = document.querySelectorAll('.pro'); //each product
const allFilterBtns = document.querySelectorAll('.filter-btn'); //buttons

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});
allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "inline-block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}
/////////////////////////Go to Top Button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop =0// For Chrome, Firefox, IE and Opera -- taking number of pixels
}


//////////////////////////validation/////////////
function Submit(e)
{
    var validname=document.getElementById("validname")
    var validemail= document.getElementById("validemail")
    var validpassword=document.getElementById("validpassword")
    e.preventDefault();
//name
    var validName=document.getElementById("name")
    var regName = /^([a-zA-Z]+ ?([a-zA-Z]+ ?)?){3,30}$/; 
    if(!regName.test(validName.value))
    {
        document.getElementById("validname").innerText="-Name is Not Valid!"  
        document.getElementById("validname").style.display="block"              
    }
    else
    {
        document.getElementById("validname").style.display="none"
    }

//email
    var validEmail=document.getElementById('email')
    var emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!String(validEmail.value).match(emailPattern))
    {
        document.getElementById("validemail").innerText="-Email is not valid!"
        document.getElementById("validemail").style.display="block"
    }
    else
    {
        document.getElementById("validemail").style.display="none"
        
    }
//password
    var validPassword=document.getElementById('password')
    var regPassword=/^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if(!regPassword.test(validPassword.value))
    {
        document.getElementById("validpassword").innerText="-Password Should be 7 to 15 characters which contain at least one numeric digit and a special character"  
        document.getElementById("validpassword").style.display="block"     
    }
    else
    {
        document.getElementById("validpassword").style.display="none" 
    }
//textarea
    var validTextarea=document.getElementById("textarea")
    var len = validTextarea.value.split("\n")
    var flen=[]
    for(var i=0;i<len.length;i++)
    {
        
        flen.push(len[i].split(" "))
    }
    var textarealength=0
    for(var i=0;i<flen.length;i++)
    {
        
        textarealength += flen[i].length
    }
    //console.log(textarealength)
    if(textarealength<20)
    {
        document.getElementById("validTextarea").innerText="-Message Should be 20 words at least !"
        document.getElementById("validTextarea").style.display="block"
    }
    else
    {
        document.getElementById("validTextarea").style.display="none"
    }

//submition succes message
    var submitMess=document.getElementById("FormSubmitMess")
    if(validname.style.display=="none"&&validemail.style.display=="none"&&validpassword.style.display=="none"&&validTextarea.style.display=="none")
    {
        submitMess.style.display="flex"
    }
    else{
        submitMess.style.display="none"
    }
}