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


