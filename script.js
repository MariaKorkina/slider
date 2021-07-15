document.getElementById("slider-left").onclick = sliderLeft
var left = 0
function sliderLeft () {
    // когда пользователь нажимает кнопку "влево" - сдвигаем слайдер на ширину 1 картинки
    let polosa = document.getElementById("polosa")
    left = left - 128
        if (left < -512) {
            left = 0
        }
    polosa.style.left = left + "px"
}


/*const timerId = setTimeout(function() {
    console.log('Hello')
    
}, 2000); */

/*let start = new Date ()
    for (let i = 0; i < 100000; i++) {
        let some = i ** 3
    }
    let end = new Date ()
    console.log(`Цикл отработал за ${end-start} милисекунд`) */