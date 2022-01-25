window.onload = function(){
    const bar = document.querySelector('.bars');
    const navContainer = document.querySelector('.navContainer');
    const navLinks = document.querySelectorAll('.nav-item')

    bar.addEventListener("click", function(){
        this.classList.toggle("active")

        if (this.classList.contains("active")){
            gsap.to(navContainer, {
                duration: 1,
                right: "0%",
                // ease: "bounce",
            })
        }else{
            gsap.to('.navContainer', {
                duration: 1,
                right:"100%",
            })
        }
    })
    
    navLinks.addEventListener.forEach(function (){
        if (bar.classList.contains('active')){
            bar.classList.remove('active');
        }
    })
}
