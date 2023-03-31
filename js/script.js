const display = document.getElementById('display')

document.querySelectorAll('button').forEach((e) => {
    e.onclick = () =>{
        if(display.innerHTML == 0){
            display.innerHTML = ""
            display.append(e.innerHTML)
        }else{
            display.append(e.innerHTML)
        }
    }
})

const clearBtn = document.getElementById('clear')
clearBtn.onclick = () => {
    display.innerHTML = 0
}

document.getElementById('equal').onclick = () => {
    const result = eval(display.innerHTML)
    display.innerHTML = result
}