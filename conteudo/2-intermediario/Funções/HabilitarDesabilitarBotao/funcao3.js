let funcaoDesabilitar = () => {
    let div = document.querySelector('.btn')
    
    div.setAttribute("disabled", "disabled")
    return console.log(div)
}
let funcaoHabilitar = () => {
    let div = document.querySelector('.btn')
    
    div.removeAttribute("disabled", "disabled")
    return console.log(div)
}

