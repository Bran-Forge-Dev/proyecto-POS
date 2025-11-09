$(document).ready(function () {
    $('#BtnSumar').on('click', function (e) {
        e.preventDefault(); // Evita recarga del formulario

        var numero1 = +$('#num1').val();
        var numero2 = +$('#num2').val();

        if (!isNaN(numero1) && !isNaN(numero2)) {
            var suma = numero1 + numero2;
            $('#resultado').text('El resultado de la suma es: ' + suma);
        } else {
            $('#resultado').text('Por favor ingresa dos números válidos.');
        }
    });
});
