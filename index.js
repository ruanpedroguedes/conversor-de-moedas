function converteMoedas() {
    return {
        // atributos: selecionar os elementos que eu quero
        display01: document.querySelector('.display01'), // Corrigi o nome do display01
        display02: document.querySelector('.display02'),
        btn: document.querySelector('.btn'),
        btn2:document.querySelector('.btn2'),

        // métodos
        inicia() {
            this.btn.addEventListener('click', () => {
                this.realizaConversao();
            });
            this.btn2.addEventListener('click', () =>{
                this.zerarConta()
            })
        },

        realizaConversao(){
            let conta = this.display01.value;
            const valorDolar = 4.97;

            try {
                conta = parseFloat(conta); // Convertendo a entrada para um número

                if(isNaN(conta)){ // Verifica se a entrada é um número válido
                    throw new Error('Conversão inválida');
                }

                const resultado = conta * valorDolar; // Realiza a conversão
                this.display02.value = resultado.toFixed(2); // Exibe o resultado com duas casas decimais no display02
            } catch(e){
                alert(e.message); // Exibe a mensagem de erro capturada
            }
        },


        zerarConta(){
            this.display01.value = ''
            this.display02.value = ''
        },
    }.inicia(); // Inicia a função automaticamente após ser definida
}

converteMoedas(); // Chama a função para iniciar o processo de conversão
