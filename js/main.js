window.addEventListener("load", (event) => {


  //Funciones
  function leermas() {
    if (p1.style.maxHeight != "100%") {
      console.log("holaaa")
      p1.style.height = "100%"
      p1.style.maxHeight = "100%"
    }
    else {
      p1.style.maxHeight = "80px"
    }
  }
  //Slider
  if (window.location.href.indexOf("index") > -1) {
    $(document).ready(function () {
      $(".slider").bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,

      });
    });

  }
  //Generar json
  const meses_del_anio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  for (let i = 0; i < 3; i++) {
    let text = ""
    const date = new Date()
    text = `<article class="post">
    <h3>Articulo ${i + 1}</h3>
    <span>Publicado el ${date.getDate()} de ${meses_del_anio[date.getMonth()]} del ${date.getFullYear()} </span>
    <p id="p${i + 1}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur qui neque asperiores?
      Explicabo
      exercitationem nihil tempora eum nostrum ab est beatae ipsum, necessitatibus reprehenderit mollitia rerum,
      consequatur repudiandae quas itaque?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, tenetur deserunt. Consectetur magni eum
      vel sunt corporis reiciendis aut, harum nesciunt ratione inventore modi nobis porro vitae itaque, iste
      fugiat!
    </p>
    <button class="button-more" id = btn>Leer más</button>
  </article>`
    $("#posts").append(text)
  }
  //Selector de tema
  let theme = $("#theme")
  $("#to-green").click(() => {
    theme.attr("href", "./css/green.css")
  })
  $("#to-red").click(() => {
    theme.attr("href", "./css/red.css")
  })
  $("#to-blue").click(() => {
    theme.attr("href", "./css/blue.css")
  })
  //Scroll arriba
  $("#subir").click((event) => {
    event.preventDefault()
    console.log("hola")
    $("html,body").animate({
      scrollTop: 100
    }, 500)
  })
  //Elementos
  const p1 = document.getElementById("p1")
  const btn1 = document.querySelector(".button-more")
  //Eventos
  console.log(window.location.href.indexOf("index"))
  if (window.location.href.indexOf("index") > -1) {

    btn1.addEventListener("click", leermas)
  }

  //Login Falso
  let aux_user = false
  console.log(aux_user)
  $("#login").submit((event) => {
    event.preventDefault()
    localStorage.setItem("nombre", $("input[name = 'name']").val())
    aux_user = true
    let user = localStorage.getItem("nombre")
    if ((user != null || user != "undefined") && aux_user == true) {
      console.log("Acceso Correcto a " + user)
      $("#about p").show()
      $("#about p").html("<br><strong>Bienvenido " + user + " :D</strong> <a href='#' id='cerrar'>Cerrar sesión</a>")
      $("#login").hide()
    }
    $("#cerrar").click(() => {
      localStorage.clear()
      location.reload() //Recarga la página en lugar de los 2 de abajo
      // $("#about p").hide()
      // $("#login").show()
    })
  })

  //About ----------------------------------
  if (window.location.href.indexOf("about") > -1) {
    $("#box").accordion();
  }

  //Reloj ------------------------------------------
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(() => {
      let fecha = new Date()
      $("#reloj").html(`${fecha.getHours()} : ${fecha.getMinutes()} :  ${fecha.getSeconds()}`)
    })

  }

  //Contacto------------------------------------------
  if (window.location.href.indexOf("contact") > -1) {
    $('input[name="fecha"]').datepicker({
      dateFormat: "dd-mm-yy"
    })
    $.validate({
      lang: 'es',
      scrollToTopOnError: true,

    })

  }
  return false
})