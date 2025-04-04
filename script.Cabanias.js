const cabezalLascabanias = document.getElementById("cabezal-lascabanias")
// header //
cabezalLascabanias.innerHTML = '<img src="/img/index/1-heder/puerto Mopane.png" alt="Puerto Mopane" class="puerto-mopane-cabañasLascabanias">  <div class="iconosLascabanias" > <img src="/img/index/1-heder/facebook.png" alt="Facebook" class="facebookLascabanias"> <img src="/img/index/1-heder/instagram.png" alt="Instagram" class="instagramLascabanias"> <div class="whatsaap-mailLascabanias"><img src="/img/index/1-heder/whatsapp.png" alt="WhatsAAP" class="whatsappLascabanias"> <img src="/img/index/1-heder/mail.png" alt="E-mail" class="e-mailLascabanias"> </div> </div>  '   

// Links //
const linksLascabanias = document.getElementById("links-lascabanias")
linksLascabanias.innerHTML = `<a href="/index.html" class="nuestroLugarLascabanias">Nuestro lugar</a> <a href="indexCabanias.html" class="lasCabañasLascabanias">Las cabañas</a> <a href="indexUbicacion.html" class="ubicacionLascabanias">Ubicacion</a><a href="indexContacto.html" class="contactoLascabanias">Contacto</a>`

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

 

// Parrafo solo //
const parrafoLascabanias = document.getElementById("parrafo-lascabanias")
parrafoLascabanias.innerHTML = `<p class="parra-uno-de-lascabanias" >El complejo incluye una amplia piscina con deck y solarium, canchas de voley, fútbol y juegos para niños. Amplias y cómodas cabañas de 2 a 6 personas. Las mismas cuentan con detalles de confort y categoría contando con todos los servicios necesarios para que su estadia sea inolvidable</p>`




  /* imagen 1 */
const img1 = document.getElementById("img-Cabania-Paras-Seis")
img1.innerHTML = ` <img src="img/cabañas/1/Cabaña de 6 personas.jpg" alt="Cabañas para 6 personas" class="cabania-para-seis-personas"onclick="btncaba6()">`

/* Imagen de la cabaña 6 */
const carro1 = document.getElementById("carritoId6")
carro1.innerHTML = `<img src="img/cabañas/1/cruz6.png" alt="Cerrar Ventana" id="btn-Cerrar6" class="btnCerrar6" onclick="btnCerrar6()">
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inne6">
    
  <div class="carousel-item active">
      <img src="img/cabañas/1/1.jpg" class="d-block w-100" alt="foto 1">
    </div>
  
    <div class="carousel-item">
      <img src="img/cabañas/1/2.jpeg" class="d-block w-100" alt="...">
      </div>
  
      <div class="carousel-item">
      <img src="img/cabañas/1/3.jpg" class="d-block w-100" alt="...">
     </div>

  <div class="carousel-item">
      <img src="img/cabañas/1/3.jpg" class="d-block w-100" alt="mklgdj">
    </div>

    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

/* Boton de la imagen de la canaña 6 */

function btncaba6(){
const carrusel6 = document.querySelector(".classCarrito6-1-");
carrusel6.classList.replace("classCarrito6-1-", "classCarrito6-2") 
} 

/* Boton para cerrar la ventana */

function btnCerrar6(){
const cerrarVentana6 = document.querySelector(".classCarrito6-2")
cerrarVentana6.classList.replace("classCarrito6-2","classCarrito6-3")
}

































/* imagen 2 */
const img2 = document.getElementById("img-Cabania-Paras-Cuatro")
img2.innerHTML = `<img src="img/cabañas/2/Cabaña de 4 personas.jpg" alt="Cabañas para 4 personas" class="cabania-para-seis-personas"onclick="btncaba6() > `
                    
/* Imagen de la cabaña 4 */
const carro2 = document.getElementById("carritoId4")
carro2.innerHTML = `<img src="img/cabañas/4/cruz6.png" alt="Cerrar Ventana" id="btn-Cerrar4" class="btnCerrar4" onclick="btnCerrar4()">
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
  <div class="carousel-item active">
      <img src="img/cabañas/4/4.jpg" class="d-block w-100" alt="foto 1">
    </div>
  
    <div class="carousel-item">
      <img src="img/cabañas/4/4.jpeg" class="d-block w-100" alt="...">
      </div>
  
      <div class="carousel-item">
      <img src="img/cabañas/4/4.jpg" class="d-block w-100" alt="...">
     </div>

  <div class="carousel-item">
      <img src="img/cabañas/4/4.jpg" class="d-block w-100" alt="mklgdj">
    </div>

    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

/* Boton de la imagen de la canaña 4 */

function btncaba4(){
const carrusel4 = document.querySelector(".classCarrito4-1-");
carrusel4.classList.replace("classCarrito4-1-", "classCarrito4-2") 
} 

/* Boton para cerrar la ventana */

function btnCerrar4(){
const cerrarVentana4 = document.querySelector(".classCarrito4-2")
cerrarVentana4.classList.replace("classCarrito4-2","classCarrito4-3")
}












/* Pie de pagina */
const fotterLascabanias = document.getElementById("fotter-lascabanias")
fotterLascabanias.innerHTML = `<footer class="footerlascabanias"><p class="diseñado-Por">Diseñado por : Leandro Ezequiel Pedercini</p>  <p class="creacion" >Creación del sitio web : 2025</p> </footer>`
