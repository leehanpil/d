function convertAscii() {
    var asciiInput = document.getElementById('asciiInput').value;
    var conversionType = document.getElementById('conversionType').value;
    var resultDiv = document.getElementById('result');

    // 입력값이 비어있으면 결과창을 비우고 함수 종료
    if (!asciiInput) {
        resultDiv.innerHTML = '';
        return;
    }

    var asciiCode = asciiInput.charCodeAt(0);

    // 진법 변환
    var convertedValue;
    switch (conversionType) {
        case 'decimal':
            convertedValue = asciiCode;
            resultDiv.innerHTML = '<p>10진수로 변환된 값:</p><code>' + convertedValue + '</code>';
            break;
        case 'hex':
            convertedValue = asciiCode.toString(16).toUpperCase();
            resultDiv.innerHTML = '<p>16진수로 변환된 값:</p><code>' + convertedValue + '</code>';
            break;
        case 'octal':
            convertedValue = asciiCode.toString(8);
            resultDiv.innerHTML = '<p>8진수로 변환된 값:</p><code>' + convertedValue + '</code>';
            break;
        case 'binary':
            convertedValue = asciiCode.toString(2);
            resultDiv.innerHTML = '<p>2진수로 변환된 값:</p><code>' + convertedValue + '</code>';
            break;
        default:
            convertedValue = 'Invalid Conversion Type';
            break;
    }

    
    
}
