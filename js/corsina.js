const corsina = document.getElementById('corsin_id');
const windowCorsina = document.getElementById('window_corsina_id');

// <- При наводженні на корзину покупок з'являється віконце з вибраним товаром ->
corsina.addEventListener('mouseover', function() {
    windowCorsina.style.display = 'block';
})

corsina.addEventListener('mouseout', function() {
    windowCorsina.style.display = "none";

    if (windowCorsina.style.display === "none") {
        windowCorsina.addEventListener('mousemove', function() {
            windowCorsina.style.display = 'block';
        })
    }
})

document.body.addEventListener('mouseout', function() {
    windowCorsina.style.display = 'none';
})
// <- При наводженні на корзину покупок з'являється віконце з вибраним товаром ->

// <====================================>

// <-  ->



// <-  ->