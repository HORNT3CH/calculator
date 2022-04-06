const btns = document.querySelectorAll('.btn')
const input = document.querySelector('.input')
const fas = document.querySelectorAll('.fontaws')

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML >= 0 && btn.innerHTML <= 9) {
            input.value += btn.innerHTML
        } else if (btn.innerHTML === 'CE') {
            input.value = ''
        }
    })
})

fas.forEach((fa) => {
    fa.addEventListener('click', () => {
        if (fa.classList.contains('fa-backspace')) {
            input.value = input.value.slice(0, -1)
        }
    })
})
