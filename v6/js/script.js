const bars = Id('bars'),
    nav = Id('nav')

bars.onclick = () => {
    bars.classList.toggle('active')
    nav.classList.toggle('active')
}

function setAnimations(slide) {
    let name = slide.classList[1]
    let arr = document.querySelectorAll(`.${name} .anim`)
    for (let i = 0; i < arr.length; i++) {
        addAnim(arr[i], i)--
    }
}

function addAnim(t, counter) {
    t.style.setProperty('--animation-order', counter)
    t.style.transition = '0.2s ease';
    t.style.animationName = 'float-in';
    t.style.animationDuration = '500ms';
    t.style.animationDelay = 'calc(var(--animation-order) * 50ms)';
    t.style.animationFillMode = 'forwards';
    t.style.animationTimingFunction = 'ease';
}

let state = []
for (let i = 0; i < Class('slide').length; i++){
    state.push([0, false])
}

for (let i = 0; i < Class('tab').length; i++){

    let tab = Class('tab')[i]

    tab.onclick = () => {

        for (let j = 0; j < Class('tab').length; j++) {
            Class('tab')[j].classList.remove('active')
        }

        tab.classList.add('active')
        let left = Id(`graphic-${tab.id}`).getBoundingClientRect().x - Id('area').getBoundingClientRect().x + Id('area').scrollLeft

        Id('area').scrollTo({
            left: left,
            top: 0,
            behavior: 'smooth'
        })

    }
}

let loop = () => {

    ratio = window.scrollY / window.innerHeight
    document.body.style.setProperty('--parallax-1', ratio * 1.4 * -160 + 150 + 'px')
    document.body.style.setProperty('--parallax-2', ratio * 1.5 * -160 + 150 + 'px')
    document.body.style.setProperty('--parallax-3', ratio * 1.6 * -160 + 150 + 'px')
    document.body.style.setProperty('--parallax-4', ratio * 1 * -160 + 150 + 'px')
    progress = window.scrollY / document.body.scrollHeight * 1/0.86
    Id('progress').style.width = progress * 100 + '%'

    for (let i = 0; i < Class('slide').length; i++){
        let slide = Class('slide')[i]
        let val = slide.getBoundingClientRect().top - Class('slide_hero')[0].getBoundingClientRect().top
        state[i][0] = val - 400
        let t = (window.scrollY - val) / screen.height * -100
        if (i < 4){
            //document.body.style.setProperty(`--parallax-s${i}-2`, t * 1.4 + 'px')
            //document.body.style.setProperty(`--parallax-s${i}-1`, t * 1.2 + 'px')
        }
        if (window.scrollY > state[i][0] && !state[i][1]) {

            setAnimations(slide)
            state[i][1] = true
        }
    }

    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)

