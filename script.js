
document.addEventListener("DOMContentLoaded", function() {
    var screen = document.getElementById('screen');
    var buttons = document.querySelectorAll('.button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var value = this.value;
            if (value === 'C') {
                clearScreen();
            } else if (value === '=') {
                findResult();
            } else {
                btnClick(value);
            }
        });
    });

    function btnClick(value) {
        screen.value += value;
    }

    function clearScreen() {
        screen.value = "";
    }

    function findResult() {
        var expression = screen.value;
        var result;
        try {
            result = eval(expression);
            if (isNaN(result) || !isFinite(result)) {
                throw "Invalid expression";
            }
            screen.value = result;
        } catch (error) {
            screen.value = "Error";
        }
    }
});


