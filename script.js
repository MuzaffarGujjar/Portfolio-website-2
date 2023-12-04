let typingText = new Typed("#text", {
    strings : ["Developer","Coder","Trainer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
})
    



let banner = document.querySelector('.banner');
let daynight = document.querySelector('.daynight');

daynight.onclick = function(){
    banner.classList.toggle('night')
}