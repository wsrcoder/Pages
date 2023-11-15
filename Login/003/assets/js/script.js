

const mode = document.getElementById('mode-icon')
const loginForm = document.getElementById('login-form')

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon'))
    {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        loginForm.classList.add('dark')
    }
    else if(mode.classList.contains('fa-sun'))
    {
        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')

        loginForm.classList.remove('dark')
    }
})