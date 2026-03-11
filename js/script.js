let countButton = document.getElementById('countButton');
let resetBtn = document.getElementById('resetBtn');
let overlay = document.getElementsByClassName('overlay');
let msgError = document.getElementsByClassName('msg__error');
let display = document.getElementById('display');

let initNum = document.getElementById('initNum');
let endNum = document.getElementById('endNum');
let stepNum = document.getElementById('stepNum');


// inicia programa
countButton.addEventListener('click', function() {
    // validação de campos e exibição de msg
    if (initNum.value.length === 0 || endNum.value.length === 0 || stepNum.value.lenght === 0 ) {
        $(overlay).show()
        $(msgError).slideToggle()
    } else {
       // casting dos inputs
        let initNumVal = Number(initNum.value)
        let endNumVal = Number(endNum.value)
        let stepNumVal = Number(stepNum.value)

        
        if(stepNumVal === 0 ){
            alert('[ERRO!] Você não inseriu o valor do passo! Considerando o passo como 1') 
            stepNumVal = 1;
        }

        if(initNumVal < endNumVal) {
              // incremento
            for(let c = initNumVal; c <= endNumVal; c += stepNumVal ) {
                display.innerHTML += `${c} \u{1F463} <br>`

            }
        } else {
            // decremento
            for(let c = initNumVal; c >= endNumVal; c -= stepNumVal) {
                display.innerHTML += `${c} \u{1F463} <br>`
            }
            
        }

        display.innerHTML += 'Final da contagem \u{1F3C1} <br>'
    }


    
})

// reset do programa caso de erro por falta de dados validos
$(resetBtn).on('click', function() {
    $(overlay).hide()
    $(msgError).slideToggle()

})

// reinicia programa 
$('#reiniciarPrograma').on('click', ()=>{
    // limpa os campos depois de encerrar contagem
    initNum.value = '';
    endNum.value = '';
    stepNum.value = '';
    display.innerHTML = '';
})