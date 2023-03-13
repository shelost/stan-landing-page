const bars = Id('bars'),
    nav = Id('nav')


bars.onclick = () => {
    bars.classList.toggle('active')
    nav.classList.toggle('active')
    console.log('to')
}

let loop = () => {

    console.log(window.scrollY/window.innerHeight)

    document.body.style.setProperty('--parallax', window.scrollY/window.innerHeight * -200 + 'px')


    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)

