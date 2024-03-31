const btns = document.querySelectorAll('.Purchase')
btns.forEach(Purchase => {
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - Purchase.offsetLeft
        let y = e.pageY - Purchase.offsetTop
        Purchase.style.setProperty('--x', `${x}px`)
        Purchase.style.setProperty('--y', `${y}px`)
    })
})

const btnss = document.querySelectorAll('.Get')
btnss.forEach(Get => {
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - Get.offsetLeft
        let y = e.pageY - Get.offsetTop
        Get.style.setProperty('--x', `${x}px`)
        Get.style.setProperty('--y', `${y}px`)
    })
})

const boxes = document.querySelectorAll('.dd')

boxes.forEach(box => {
    box.addEventListener('mousemove', rotate)
    box.addEventListener('mouseout', remove)
})
function rotate(e) {
    let halfHeight = this.offsetHeight / 2
    let x = e.offsetX - halfHeight
    let y = e.offsetY - halfHeight
    this.style.transform = `rotateX(${-y / 4}deg) rotateY(${x / 4}deg)`
}
function remove() {
    this.style.transform = `rotate(0)`
}


const item = document.querySelector('.item'),
    timer = document.querySelectorAll('.timer')
window.addEventListener('scroll', function scroll() {
    if (this.scrollY > item.offsetTop - item.clientHeight * 2) {
        timer.forEach((timers) => {
            let count = +timers.getAttribute('count')
            function rec(k = 0) {
                timers.innerHTML = k
                if (timers.innerHTML < count) {
                    setTimeout(() => {
                        k++
                        rec(k)
                    }, 50)
                }
            }
            rec()
        })
        window.removeEventListener('scroll', scroll)
    }
})




  