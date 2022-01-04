const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (input.value.length == input.getAttribute('data-length')) {
        input.classList.add('valid')
        input.classList.remove('invalid')

    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    } 
}