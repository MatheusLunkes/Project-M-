
const form = document.getElementById('form');
form.addEventListener('submit', eventSubmit);


function eventSubmit(event) {
    event.preventDefault();

    //Capturar as medidas da Caixa eixos = x, y, z
    const inputAlturaCaixa = document.getElementById('alturaCaixa');

    const inputLarguraCaixa = document.getElementById('larguraCaixa');

    const inputComprimentoCaixa = document.getElementById('comprimentoCaixa');

    const alturaCaixa = Number(inputAlturaCaixa.value);

    const larguraCaixa = Number(inputLarguraCaixa.value);

    const comprimentoCaixa = Number(inputComprimentoCaixa.value);

    //Capturar as medidas do Paralelo eixos = x, y, z
    const inputAlturaParalelo = document.getElementById('alturaParalelo');

    const inputLarguraParalelo = document.getElementById('larguraParalelo');

    const inputComprimentoParalelo = document.getElementById('comprimentoParalelo');

    const alturaParalelo = Number(inputAlturaParalelo.value);

    const larguraParalelo = Number(inputLarguraParalelo.value);

    const comprimentoParalelo = Number(inputComprimentoParalelo.value);


    //Calcular a area dos paralelos;
    const calcAreas = {
        calcAreaCaixa: function () {
            const resultadoAreaCaixa = comprimentoCaixa * larguraCaixa;
            return resultadoAreaCaixa;
        },

        calcAreaParalelo: function () {
            const resultadoAreaParalelo = larguraParalelo * comprimentoParalelo;
            return resultadoAreaParalelo;
        }
    }

    
    function calcAreaCubo() {
        if (calcAreas.calcAreaParalelo >= calcAreas.calcAreaCaixa) {

            const calcCubo = calcAreas.calcAreaParalelo() / calcAreas.calcAreaCaixa();
            const calcCamadas = alturaParalelo / alturaCaixa;

            const resultCubo = calcCubo.toFixed(0);
            const resultCamadas = calcCamadas.toFixed(0);
            
            const resultadoTotal = resultCubo * resultCamadas;
            return escreveText(resultCubo, resultCamadas, resultadoTotal);

        }

    };

    calcAreaCubo()

    function escreveText(resultCubo, resultCamadas, resultadoTotal) {
        const elementText = document.querySelector('main').children[1];

        if (resultCubo && resultCamadas <= 0) {
            elementText.innerHTML = "Não cabem caixas neste espaço";

        } if (resultCubo && resultCamadas > 0) {
            console.log('Caixas por aqui');

            elementText.innerHTML = `<p>Caixas no lastro ${resultCubo}, camadas: ${resultCamadas}, total de caixas: ${resultadoTotal}</p>`;


        }
    }

    escreveText()

}


