//Función Slider
$(document).ready(function () {

  // Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Tulum",
        date:
          "Publicado el 12 de Agosto de 2021",
        content:
          "Tulum es una de las joyas más deseadas del Caribe mexicano, quizá por estar delineado por 10 kilómetros de arena blanca y aguas turquesas que le valieron para ser nombrado Pueblo Mágico. <br><br> Aquí, la naturaleza se muestra en todo su esplendor a través de lagunas, cenotes y una zona arqueológica maya a la orilla del mar, que fue utilizada como centro ceremonial astrológico y comercial. No faltan los paseos en bicicleta que te internan por la selva para llevarte a conocer estas maravillas. Tulum Bike Tours complementa la experiencia con la visita a comunidades mayas, donde te enseñan medicina tradicional y elaboración de joyería con semillas. <br><br> Tulum, a diferencia de Cancún, no es un destino de grandes resorts todo incluido, más bien, sus alojamientos son pequeños hoteles que se mimetizan con la selva y pueden ser tan lujosos o rústicos como quieras. Si vas en pareja te recomendamos Azulik, con seis suites construidas en madera, columpios y camas colgantes, que se han hecho famosas en Instagram. ¿Te imaginas beber una copa de vino sobre la copa de los árboles? Con espacios que emulan nidos gigantes.",
        link:
          "https://www.visitmexico.com/quintana-roo/tulum",
        img:
          "img/art1.jpg",
      },
      {
        title: "Los más bellos Lugares Turísticos de México y cuáles ya están Abiertos",
        date:
          "Publicado el 24 de Febrero de 2021",
        content:
          "México es el primer destino turístico para extranjeros dentro de América Latina en 2019 y es el sexto lugar a nivel mundial en términos de llegadas de turistas internacionales.<br><br>Sin embargo los viajes por Mexico para disfrutar de la belleza de las playas mexicanas y de sus pueblos se detuvo con la llegada del coronavirus en Marzo de este año<br><br>A pesar de esto varios de los más bellos destinos turísticos en Mexico han empezado a abrir sus puertas y por esa razón hemos decidido actualizar periódicamente este artículo para que sepas cuáles son y cuáles puedes visitar.<br><br>",
        link:
          "https://lanzateyviaja.com/mexico/lugares-turisticos",
        img:
          "img/art2.jpg",
      },
      {
        title: "Prismas Basálticos en Hidalgo, atractivo sin igual",
        date:
          "Publicado el 3 de Julio de 2021",
        content:
          "Prismas Basálticos en Hidalgo, atractivo sin igual, es un post que sorprenderá a más de uno, descubrirás una de las bellezas que la naturaleza tiene para ofrecer en México.<br><br>No es un secreto que este hermoso país cuenta con muchísimos sitios para enamorarse y en esa extensa lista de atractivos no pueden faltar los famosos Prismas Basálticos…<br><br>Es una de las 13 Maravillas Naturales de México y comparte ese galardón con otros hermosos lugares como los Arrecifes de Veracruz, las Barrancas del Cobre, Xel-Ha, el Cañón del Sumidero, Cuatro Ciénagas, el Sótano de las Golondrinas y otras más.",
        link:
          "https://www.mexicodestinos.com/blog/prismas-basalticos-en-hidalgo-atractivo-sinigual/",
        img:
          "img/art3.jpg",
      },
    ];

    posts.forEach((item) => {
      var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="${item.link}" class="button-more">Artículo completo</a>
                    <a href="cotizacion.html"><button class="button-cotizar">Cotizar mi viaje</button></a>
                    <br>
                    <br>
                    <img src="${item.img}" class="img-articulo">
                    <hr class="hr">
                </article>`;
      $("#posts").append(post);
    });
  }

   //Login LocalStorage

   $("#login form").submit(function () {
    let form_name = $("#form_name").val();
    //alert(form_name);
    // console.log(form_name);
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "unfined") {
    let about_parrafo = $("#about p");
    $("#about p").html("<b>Bienvenido " + form_name + "</b>");
    about_parrafo.append("<br><a href = '#' id = 'logout'>Cerrar Sesión</a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Activar Jquerty validator
  if (window.location.href.indexOf("contacto") > -1) {
    $.validate({
      lang: "es",

      //
    });
  }
});


