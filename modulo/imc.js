
const calcularImc = function(pesoF, alturaF){
    
    let peso = pesoF.replace(',' , '.')
    let altura = alturaF.replace(',' , '.')
    let resultado
    let situacao
    let status = false

        if(peso == ' ' || peso == ' '){
            console.log('Todos os valores devem ser digitados')

        }
        else if(isNaN(peso) || isNaN(altura)){
            console.log('Todos os valores devem ser números')
        }
        else{
            Number(peso)
            Number(altura)
            Number(resultado)

            resultado = peso / (Math.pow(altura, 2))
            console.log('O seu IMC é: ' + resultado.toFixed(1))
            status = true
            
            if(resultado < 18.5){
                situacao = 'O seu peso está abaixo do ideal!'
            }else if(resultado >= 18.5 && resultado <= 24.9 ){
                situacao = 'Você está no peso ideal!'
            }else if(resultado >= 25 && resultado <= 29.9){
                situacao = 'Você está com sobrepeso!'
            }else if(resultado >= 30 && resultado <= 34.9){
                situacao = 'Você está com obesidade nível 1!'
            }else if(resultado >= 35 && resultado <= 39.9){
                situacao = 'Você está com obesidade nível 2!'
            }else if(resultado >= 40){
                situacao = 'Você está com obesidade nível 3!'
            }

            console.log(situacao)

        }

        return status

        

}
module.exports = {
    calcularImc
}



