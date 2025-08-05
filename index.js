function outcome() {

    const num1Str = document.getElementById('num-one').value.trim();
    const num2Str = document.getElementById('num-two').value.trim();
    const resultArea = document.getElementById('resultArea');

    // Verifica se ambos os campos foram preenchidos
    if (num1Str === '' || num2Str === '') {
        resultArea.innerHTML = '<span style="color:#ff0080;">Please enter both numbers.</span>';
        return;
    }

    // Verifica se ambos os valores são números válidos
    if (isNaN(num1Str) || isNaN(num2Str)) {
        resultArea.innerHTML = '<span style="color:#ff0080;">Only numbers are allowed.</span>';
        return;
    }

    let num1 = Number(num1Str);
    let num2 = Number(num2Str);
    let total = 0;

    if (document.getElementById('box1').checked)
        total = num1 + num2;
    else if (document.getElementById('box2').checked)
        total = num1 - num2;
    else if (document.getElementById('box3').checked)
        total = num1 * num2;
    else
        total = num2 === 0
            ? (resultArea.innerHTML = '<span style="color:#ff0080;">Division by zero is not allowed.</span>', null)
            : num1 / num2;

    if (total !== null)
        resultArea.innerHTML = 'Result: ' + String(total);
}