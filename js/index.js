
const form = document.getElementById('form');
form.addEventListener('submit', eventSubmit);


function eventSubmit(event) {
    event.preventDefault();

    //Capturar as medidas da Caixa eixos = x, y, z
    const inputBoxHeight = document.getElementById('boxHeight');

    const inputBoxWidtth = document.getElementById('boxWidth');

    const inputBoxLength = document.getElementById('boxLength');

    const boxHeight = Number(inputBoxHeight.value);

    const boxWidth = Number(inputBoxWidtth.value);

    const boxLength = Number(inputBoxLength.value);

    //Capturar as medidas do Paralelo eixos = x, y, z
    const inputParallelHeight = document.getElementById('parallelHeight');

    const inputParallelWidth = document.getElementById('parallelWidth');

    const inputParallelLength = document.getElementById('parallelLength');

    const parallelHeight = Number(inputParallelHeight.value);//altura

    const parallelWidth = Number(inputParallelWidth.value);//largura

    const parallelLength = Number(inputParallelLength.value);//comprimento


    //Calcular a area dos paralelos;
    const calcAreas = {
        calcBoxArea: function () {
            const boxAreaResult = boxLength * boxWidth;
            return boxAreaResult;
        },

        calcParallelArea: function () {
            const parallelAreaResult = parallelLength * parallelWidth;
            return parallelAreaResult;
        }
    }

    
    function calcAreaCubo() {
        if (calcAreas.calcParallelArea >= calcAreas.calcBoxArea) {

            const calcCubo = calcAreas.calcAreaParalelo() / calcAreas.calcAreaCaixa();
            const calcCamadas = parallelHeight / boxHeight;

            const cubeResult = calcCubo.toFixed(0);
            const layersResult = calcCamadas.toFixed(0);
            
            const totalResult = cubeResult * layersResult;
            return writeText(cubeResult, layersResult, totalResult);

        }

    };

    calcAreaCubo()

    function writeText(cubeResult, layersResult, totalResult) {

        const elementText = document.querySelector('main').children[1];

        if (cubeResult && layersResult <= 0) {
            elementText.innerHTML = "Não cabem caixas neste espaço";

        } if (cubeResult && layersResult > 0) {
            console.log('Caixas por aqui');

            elementText.innerHTML = `<p>Caixas no lastro ${cubeResult}, camadas: ${layersResult}, total de caixas: ${totalResult}</p>`;


        }
    }

    writeText()

}


