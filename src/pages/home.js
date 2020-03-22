

const Home =() =>{
    const view=`
    <img src="../src/assets/images/gamers2.png" class="w-30 d-block mx-auto" alt="Responsive image">
      <div class="container mt-5 ">
        <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../src/assets/images/controles.jpg" class="d-block w-100 rounded " alt="...">
        </div>
        <div class="carousel-item">
          <img src="../src/assets/images/lolsito.jpg" class="d-block w-100 rounded" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../src/assets/images/gears.jpg" class="d-block w-100 rounded" alt="...">
        </div>
        <div class="carousel-item">
        <img src="../src/assets/images/halo1.jpeg" class="d-block w-100 rounded" alt="...">
        </div>
      </div>
      </div>
    </div>

    <div class="container">
        <h1><span class="badge badge-secondary mt-5 ">Autores</span></h1>
        <div class="row">

        <div class="card mt-5" style="width: 18rem;">
          <img src="../src/assets/images/Brandon.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Brandon Cervantea Rubi</h5>
            <p class="card-text">Estudiante de la facultad de ingeniería de la UNAM, gran emprendedor y coofundador de esta página, amante de las monas chinas y videojuegos, gran persona.</p>
            <a href="https://www.facebook.com/brandon.cervantesrubi" class="btn btn-primary">Ir a su facebook</a>
          </div>
        </div>


        <div class="card mt-5 ml-5" style="width: 18rem;">
          <img src="../src/assets/images/Leo.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Leonardo Alexis Lopez Valerio</h5>
            <p class="card-text">Emprendedor y coofundador de la marca Levice así como de esta página de videojuegos, esta alto bronceado y guapo, es millonario y filantropo.</p>
            <a href="https://www.facebook.com/leonardo.a.lopez.79" class="btn btn-primary">Ir a su facebook</a>
          </div>
        </div>

        <div class="card mt-5 ml-5" style="width: 18rem;">
          <img src="../src/assets/images/Bryan1.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Jesús Bryan Parada Pérez</h5>
            <p class="card-text">Gran jugador de league of legends, es un gran amante de los videojuegos, su carrera se truncó a causa de los vicios, sin embargo intenta recuperarse con esta página de videojuegos, siendo coofundador.</p>
            <a href="https://www.facebook.com/chicho.bicho" class="btn btn-primary">Ir a su facebook</a>
          </div>
        </div>


        <div class="card mt-5 " style="width: 18rem;">
        <img src="../src/assets/images/Ivan1.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Erick Ivan Pazaran </h5>
          <p class="card-text">Gran jugador de futbol hasta que se rompió el codo, emprendedor y ex multimillonario hasta que las drogas lo conzumieron, ahora intenta salirde eso con esta página.</p>
          <a href="https://www.facebook.com/ivan.pazaran.3" class="btn btn-primary">Ir a su facebook</a>
        </div>
      </div>

      </div>
    </div>
    <div class="card">
  <div class="card-header">
    Atención a cliente y soporte tecnico.
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Numero telefonico: 5565317853.</p>
      <footer class="blockquote-footer">No hacemos reembolsos.<cite title="Source Title"> Gracias por visitarnos</cite></footer>
    </blockquote>
  </div>
</div>
    `;
    return view;

}
export default Home;