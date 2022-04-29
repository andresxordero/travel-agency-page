function cotizar() {
    var estado = document.getElementById("estado").value;
    var dias = document.getElementById("estancia").value;
    var nAdultos = document.getElementById("adultos").value;
    var nNinos = document.getElementById("niños").value;
    var km, total, img, niños, adultos, distancia;


    switch (estado) {
        case "Aguascalientes":
            km = 127;
            img = "img/aguascalientes.jpg";
            break;
        case "Baja California":
            km = 2468;
            img = "img/bajacalifornia.jpg";
            break;
        case "Baja California Sur":
            km = 1574;
            img = "img/bajacaliforniasur.jpg";
            break;
        case "Campeche":
            km = 1484;
            img = "img/campeche.jpg";
            break;
        case "Chiapas":
            km = 1276;
            img = "img/chiapas.jpg";
            break;
        case "Chihuahua":
            km = 1080;
            img = "img/chihuahua.jpg";
            break;
        case "Coahuila":
            km = 959;
            img = "img/coahuila.jpg";
            break;
        case "Colima":
            km = 446;
            img = "img/colima.jpg";
            break;
        case "Durango":
            km = 660;
            img = "img/durango.jpg";
            break;
        case "Guanajuato":
            km = 75;
            img = "img/guanajuato.jpg";
            break;
        case "Guerrero":
            km = 633;
            img = "img/guerrero.jpg";
            break;
        case "Hidalgo":
            km = 341;
            img = "img/hidalgo.jpg";
            break;
        case "Jalisco":
            km = 273;
            img = "img/jalisco.jpg";
            break;
        case "CDMX":
            km = 385;
            img = "img/cdmx.png";
            break;
        case "Michoacán":
            km = 276;
            img = "img/michoacan.jpg";
            break;
        case "Morelos":
            km = 505;
            img = "img/morelos.jpg";
            break;
        case "Nayarit":
            km = 473;
            img = "img/nayarit.jpg";
            break;
        case "Nuevo León":
            km = 703;
            img = "img/nuevoleon.jpeg";
            break;
        case "Oaxaca":
            km = 840;
            img = "img/oaxaca.jpg";
            break;
        case "Puebla":
            km = 498;
            img = "img/puebla.jpg";
            break;
        case "Querétaro":
            km = 172;
            img = "img/queretaro.jpg";
            break;
        case "Quintana Roo":
            km = 1781;
            img = "img/quintanaroo.jpg";
            break;
        case "San Luis Potosí":
            km = 179;
            img = "img/sanluispotosi.jpg";
            break;
        case "Sinaloa":
            km = 903;
            img = "img/sinaloa.jpg";
            break;
        case "Sonora":
            km = 1705;
            img = "img/sonora.jpg";
            break;
        case "Tabasco":
            km = 1159;
            img = "img/tabasco.jpg";
            break;
        case "Tamaulipas":
            km = 590;
            img = "img/tamaulipas.jpg";
            break;
        case "Tlaxcala":
            km = 474;
            img = "img/tlaxcala.jpg";
            break;
        case "Veracruz":
            km = 737;
            img = "img/veracruz.jpg";
            break;
        case "Yucatán":
            km = 1755;
            img = "img/yucatan.jpg";
            break;
        case "Zacatecas":
            km = 335;
            img = "img/zacatecas.jpg";
            break;
    }

    costoDistancia = km * 150;
    adultos = (nAdultos * 100) * dias;
    niños = (nNinos * 50) * dias;
    total = (costoDistancia) + (adultos + niños);

    document.write("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins'><link rel='stylesheet' type='text/css' href='css/styles.css' /><div> <button class='button-regresar'><a href='index.html'>Regresar a Menú principal</a></button><h1 id='detallesTitulos'>Detalles de la cotización</h1><h2 id='detalleSubtitulo'>Origen: León, Guanajuato</h2><h2 id='detalleSubtitulo'>Destino: " + estado + " (distancia: " + km + "km - $" + costoDistancia + " por trayecto)</h2><h2 id='detalleSubtitulo'>Días reservados: " + dias + "</h2><h2 id='detalleSubtitulo'>Número de Adultos: " + nAdultos + " ($" + adultos + ")</h2><h2 id='detalleSubtitulo'>Número de Niños: " + nNinos + " ($" + niños + ")</h2><h1 id='detallesTitulos'>Costo final: $" + total + "</h1><img id='detallesImagen' src='" + img + "'></div>");    // console.log("Total:" + total + " - imagen:" + img);
}
