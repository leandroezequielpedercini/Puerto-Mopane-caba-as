// header //
const cabezal = document.getElementById("cabezal-lascabanias")
cabezal.innerHTML = '<img src="/img/index/1-heder/puerto Mopane.png" alt="Puerto Mopane" class="puerto-mopane-lascabanias">  <div class="iconos-lascabanias" > <img src="/img/index/1-heder/facebook.png" alt="Facebook" class="facebook-lascabanias"> <img src="/img/index/1-heder/instagram.png" alt="Instagram" class="instagram-lascabanias"> <div class="whatsaap-mail-lascabanias"><img src="/img/index/1-heder/whatsapp.png" alt="Whatsap" class="whatsapp-lascabanias"> <img src="/img/index/1-heder/mail.png" alt="E-mail" class="e-mail-lascabanias"> </div> </div>  '   

// Links //
const links = document.getElementById("links-lascabanias")
links.innerHTML = `<a href="/index.html" class="nuestroLugar-lascabanias">Nuestro lugar</a> <a href="/misPaginas/lasCabanias.html" class="lasCabañas-lascabanias">Las cabañas</a> <a href="/Mis paginas/ubicacion.html" class="ubicacion-lascabanias">Ubicacion</a><a href="/Mis paginas/contacto.html" class="contacto-lascabanias">Contacto</a>`
/* ' */

// carrusel //
const carrusel = document.getElementById("carrusel-lascabanias")
carrusel.innerHTML = `
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
    
// Parrafo solo //
const parrafo = document.getElementById("parrafo-index")
parrafo.innerHTML = '<h2 class="h2-parrafo-puerto-mopane">Puerto Mopane :</h2>  <div><p class="p1-parrafo">En la exclusiva localidad de MONTE HERMOSO dentro de 5 ha. de inigualable tranquilidad, se conjugan las vistas agrestes de los médanos blancos junto al extenso y frondoso bosque del pintoresco barrio residencial “Las Dunas” .</p> </div> <div><p class="p2-parrafo">Ubicado en un lugar privilegiado, a 700 mts. de la playa y a 5 minutos del centro de la ciudad, se encuentra <h5>PUERTO MOPANE.</h3></div> <div><p class="p3-parrafo" >Descubra un atardecer inolvidable, o bien, un amanecer donde sólo reina la paz y la tranquilidad.</p> </div> <div><p class="p4-parrafo">Queremos que disfrute junto a nosotros de este lugar … de su amplia piscina y sus recreaciones como la cancha de voley y fútbol para niños y así poder transmitirles la alegría y armonía que todo esto significa.</p></div> <div><p class="p5-parrafo">Paseos, cabalgatas, pesca y diversión nocturna para chicos y grandes junto a sus extensas playas ÚNICAS con el sol saliendo y poniéndose sobre el mar hacen de MONTE HERMOSO una ciudad privilegiada y de PUERTO MOPANE” el lugar ideal para el descanso de su familia.</p>  </div>   <div><h4 class="h4-parrafo">Nuestra mayor publicidad es la recomendación de aquellos que han estado con nosotros.  Gracias por elegirnos! </h4></div> '


/* Pie de pagina */
const fotter = document.getElementById("fotter-lascabanias")
fotter.innerHTML = `<footer class="footer-lascabanias"><p class="diseñado-Por-lascabanias">Diseñado por : Leandro Ezequiel Pedercini</p>  <p class="creacion-lascabanias" >Creación del sitio web : 2025</p> </footer>`
