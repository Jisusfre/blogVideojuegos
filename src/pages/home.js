

const Home =() =>{
    const view=`
      <div class="container mt-5 ">
        <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../src/assets/images/controles.jpg" class="d-block w-80 rounded " alt="...">
        </div>
        <div class="carousel-item">
          <img src="../src/assets/images/lolsito.png" class="d-block w-80 rounded" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../src/assets/images/gears.jpeg" class="d-block w-80 rounded" alt="...">
        </div>
        <div class="carousel-item">
        <img src="../src/assets/images/halo1.jpeg" class="d-block w-80 rounded" alt="...">
        </div>
      </div>
      </div>
    </div>
    `;
    return view;

}
export default Home;