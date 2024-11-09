function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.getElementById('data')
    var res = document.getElementById('res')

    if (form.value.length == 0 || form.value > ano) {
        res.innerHTML = "Por favor, insira um ano válido."
    } else {
        var fsex = document.getElementsByName('redsx')
        var idade = ano - Number(form.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}