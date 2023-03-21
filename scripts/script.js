const botao = document.querySelector('#formBotao')

function validarFormulario() {
  const formulario = document.querySelector('form')
  const inputs = formulario.querySelectorAll('input')
  let taValidado = true

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('invalido')
      taValidado = false
    } else {
      input.classList.remove('invalido')
    }
  })

  return taValidado
}

function enviarFormulario() {
  if (validarFormulario()) {
    enviarParaWhatsApp()
  }
}

function mascaraCelular(celular) {
  const texto = celular.value
  const apenasNumeros = texto.replace(/\D/g, '').substring(0, 11)

  let celularFormatado = apenasNumeros.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    '($1) $2-$3'
  )

  if (apenasNumeros.length < 11) {
    celularFormatado = apenasNumeros.replace(
      /^(\d{2})(\d{4})(\d{0,4})/,
      '($1) $2-$3'
    )
  }

  celular.value = celularFormatado
}

const campoCelular = document.getElementById('celular')
campoCelular.addEventListener('input', function () {
  mascaraCelular(this)
})

function enviarParaWhatsApp() {
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const celular = document.getElementById('celular').value
  const mensagem = document.getElementById('mensagem').value

  const texto = `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\nMensagem: ${mensagem}`
  const textoComCodigo = encodeURIComponent(texto)
  const numeroWhatsApp = '5582996135319'
  const url = `https://wa.me/${numeroWhatsApp}?text=${textoComCodigo}`

  window.open(url, '_blank')
}
