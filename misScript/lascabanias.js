// header //
const cabezalLascabanias = document.getElementById("cabezal-lascabanias")
cabezalLascabanias.innerHTML = '<img src="/img/index/1-heder/puerto Mopane.png" alt="Puerto Mopane" class="puerto-mopane-cabañasLascabanias">  <div class="iconosLascabanias" > <img src="/img/index/1-heder/facebook.png" alt="Facebook" class="facebookLascabanias"> <img src="/img/index/1-heder/instagram.png" alt="Instagram" class="instagramLascabanias"> <div class="whatsaap-mailLascabanias"><img src="/img/index/1-heder/whatsapp.png" alt="WhatsAAP" class="whatsappLascabanias"> <img src="/img/index/1-heder/mail.png" alt="E-mail" class="e-mailLascabanias"> </div> </div>  '   

// Links //
const linksLascabanias = document.getElementById("links-lascabanias")
linksLascabanias.innerHTML = `<a href="/index.html" class="nuestroLugarLascabanias">Nuestro lugar</a> <a href="/misPaginas/lasCabanias.html" class="lasCabañasLascabanias">Las cabañas</a> <a href="/Mis paginas/ubicacion.html" class="ubicacionLascabanias">Ubicacion</a><a href="/Mis paginas/contacto.html" class="contactoLascabanias">Contacto</a>`

/* ' */

// carrusel //
const carruselLascabanias = document.getElementById("carrusel-lascabanias")
carruselLascabanias.innerHTML = `
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="/img/index/2-carrusel/1.jpeg" class="d-block w-100" alt="Cartel de Puerto Mopane">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="/img/index/2-carrusel/2.jpeg" class="d-block w-100" alt="Paisaje de las cabañas">
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`
    



/* Pie de pagina */
const fotterLascabanias = document.getElementById("fotter-lascabanias")
fotterLascabanias.innerHTML = `<footer class="footerlascabanias"><p class="diseñado-Por">Diseñado por : Leandro Ezequiel Pedercini</p>  <p class="creacion" >Creación del sitio web : 2025</p> </footer>`
