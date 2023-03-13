const bars = Id('bars'),
    nav = Id('nav')


bars.onclick = () => {
    bars.classList.toggle('active')
    nav.classList.toggle('active')
    console.log('to')
}


function setAnimations() {
    let counter = 0

    for (let i = 0; i < Class('profile').length; i++){

        let t = Class('profile')[i]

        t.style.setProperty('--animation-order', counter)
        t.style.transition = '0.2s ease';
        t.style.animationName = 'float-in';
        t.style.animationDuration = '500ms';
        t.style.animationDelay = 'calc(var(--animation-order) * 100ms)';
        t.style.animationFillMode = 'forwards';
        t.style.animationTimingFunction = 'ease';

        counter++
    }
}


let threshold = 0
let crossed = false


let loop = () => {

    threshold = Class('fifth')[0].getBoundingClientRect().y + 100

    document.body.style.setProperty('--parallax-1', window.scrollY / window.innerHeight * 1.7 * -200 + 'px')
    document.body.style.setProperty('--parallax-2', window.scrollY / window.innerHeight * 1 * -200 + 'px')
    document.body.style.setProperty('--parallax-3', window.scrollY / window.innerHeight * 1.4 * -200 + 'px')


    if (window.scrollY > threshold && !crossed) {
        setAnimations()
        crossed = true
    }


    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)

