

const Catalogo=()=>{
    location.hash = "/catalogo";
    const view=`
    <div style = "margin-top: 50px">
    <div class="card text-center">
        <div class="card-header">
          9 juegos que consideramos asombrosos!
        </div>
      </div>
    <div style = "margin-top: 50px">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/zelda.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">The Legend of Zelda: Breath of the Wild</h5>
              <p class="card-text">Es la décimo octava entrega de la serie y la tercera en utilizar gráficos en alta definición. 
              Un titulo que simplemente nos deja sin ganas de salir al mundo exterior solamente para poder jugar aunque sea una hora mas.</p>
              <h2>Calificacion: 9.8</h2>
              <a href = "https://www.amazon.com.mx/Legend-Zelda-Breath-Nintendo-Standard/dp/B01MS6MO77/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YCPML1NCEGLJ&keywords=the+legend+of+zelda+breath+of+the+wild&qid=1584855283&sprefix=the+le%2Caps%2C458&sr=8-1" style="color:black">Link de compra 7u7</a>
              </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/minecraft.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Minecraft</h5>
              <p class="card-text">Se trata de un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por 
              el sueco Markus Persson (conocido comúnmente como "Notch"), y posteriormente desarrollado por su empresa, Mojang AB. No hay 
              mucho que decir de este juego, simplemente marco una generacion y eso no es  una tarea facil.</p>
              <h2>Calificacion: 8.5</h2>
              <a href = "https://articulo.mercadolibre.com.mx/MLM-752352843-minecraft-windows10-codigo-juego-full-original-regalos-_JM?quantity=1" style="color:black">Link de compra UuU</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/street-f.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Street Fighter</h5>
              <p class="card-text">Es una serie de videojuegos de lucha creada por la empresa japonesa Capcom. El primer título, 
              Street Fighter, apareció en el año 1987 en Arcade y tenemos por seguro que aparecio para quedarse. Desde entonces nos
              tiene pegados a el monitor esperando cual sera el proximo retador.</p>
              <h2>Calificacion: 9</h2>
              <a href = "https://www.amazon.com.mx/Street-Fighter-Champion-Complete-PlayStation/dp/B081P74CMG/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AL5BDFKABFQF&keywords=street+fighter&qid=1584855480&sprefix=street%2Caps%2C529&sr=8-2&swrs=B167FD067A344A86880D221F289AB100" style="color:black">Link de compra 0u0</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/witcher.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">The Witcher</h5>
              <p class="card-text">The Witcher explora la leyenda de Geralt de Rivia un brujo suelto por las tierras de Nilfgaard
              dispuesto a matar a cualquier mounstro por el precio justo, pero claro, eso dependera de nosotros al incorporar desiciones
              que pueden afectar el destino del juego.</p>
              <h2>Calificacion: 8.8</h2>
              <a href = "https://www.amazon.com.mx/Witcher-Wild-Hunt-Complete-Xbox/dp/B01KNZ2A4U/ref=sr_1_7?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2L28GS6FNG0C0&keywords=the+witcher&qid=1584855516&sprefix=the+witc%2Caps%2C207&sr=8-7" style="color:black">Link de compra -.-</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/gears-g.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Gears of War</h5>
              <p class="card-text">Gears of War fue publicado por Microsoft Game Studios para la consola Xbox 360 el 1 de noviembre 
              de 2006 en América del Norte. Un juego que se guarda las sutilezas muy en lo profundo para deleitarnos con una orquesta de
              balas y sangre salpicando que nos hace no querer soltar este titulo</p>
              <h2>Calificacion: 8</h2>
              <a href = "https://gameplanet.com/catalogsearch/result/?q=gears%20of%20war&mostrar_inventario=652,653&mode=list&order=popularidad&cat=26" style="color:black">Link de compra OmO</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/thelastofus.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">The Last of Us</h5>
              <p class="card-text">Normalmente el tema de mezclar drama con una enfermedad no es una idea muy original, pero en este caso 
              funciona increiblemente dando como resultado un videojuego de acción-aventura y supervivencia de terror desarrollado por los chicos Naughty Dog 
              y distribuido por Sony Computer Entertainment para la consola PlayStation 3 en 2013.</p>
              <h2>Calificacion: 9.4</h2>
              <a href = "https://www.walmart.com.mx/videojuegos/playstation-4/juegos-ps4/the-last-of-us-remasterizado-playstation-4_00071171952635?gclid=Cj0KCQjw9tbzBRDVARIsAMBplx_BOww-vhCv8Fk9amoWOoUo70TAM-pbIaJliZA0eer8Ecc43rCk5SYaAmk0EALw_wcB" style="color:black">Link de compra _-_</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/pokemon3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Pokemon</h5>
              <p class="card-text">Estos son videojuegos de rol desarrollados por Game Freak y publicados para videoconsolas portátiles de Nintendo. 
              A todo el mundo, incluyendonos adoramos agarrarnos en batallas con nuestros pokemons favoritos, nos trasnsporta a un mundo en donde 
              la tarea es simple, entrenar para ser el mejor y divertirte en el camino.</p>
              <h2>Calificacion: 9</h2>
              <a href = "https://www.amazon.com.mx/Sw-Pokemon-Sword-Nintendo-Standard/dp/B07PC7X38X/ref=asc_df_B07PC7X38X/?tag=gledskshopmx-20&linkCode=df0&hvadid=389467214844&hvpos=&hvnetw=g&hvrand=16749923249601464481&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9047086&hvtargid=aud-530251625033:pla-842261488057&psc=1" style="color:black">Link de compra *v*</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/darksouls.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Dark Souls</h5>
              <p class="card-text">La serie Souls es una serie de videojuegos pertenecientes al género de rol y de acción, creados y desarrollados 
              por la empresa From Software. La serie comenzó con el lanzamiento de Demon's Souls para la PlayStation 3 en 2009 y desde entonces no ha 
              hecho mas que enseñarnos como es que se hacen este tipo de juegos. Eso sin mencionar que es todo un reto derrotar siquiera un boss en cualquier
              entrega de esta serie.</p>
              <h2>Calificacion: 9.8</h2>
              <a href = "https://www.amazon.com.mx/Dark-Souls-Remastered-PlayStation-Standard/dp/B078Y4FR14/ref=asc_df_B078Y4FR14/?tag=gledskshopmx-20&linkCode=df0&hvadid=295435851585&hvpos=&hvnetw=g&hvrand=1534583634503290495&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9047086&hvtargid=aud-530251625033:pla-453908305433&psc=1" style="color:black">Link de compra 7n7</a>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="../src/assets/images/celeste.jpg" class="card-img-top" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Celeste</h5>
              <p class="card-text">Se trata de un videojuego creado originalmente como un prototipo en cuatro días durante un game jam, y más tarde 
              se expandió a un lanzamiento completo. Celeste se lanzó en enero de 2018 para las plataformas Microsoft Windows, Nintendo Switch, PlayStation 4, 
              Xbox One, macOS y Linux!. Cabe destacar que no es nada sensillo de pasar y eso en parte lo hace un juego que no es facil de soltar una 
              vez que pruebas la victoria</p>
              <h2>Calificacion: 9.2</h2>
              <a href = "https://www.nintendo.com/games/detail/celeste-switch/" style="color:black">Link de compra OwO</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-center">
        <div class="card-header">
          Echales un ojo a estos juegos, no te vas a arrepentir 
        </div>
      </div>
    `;
    return view;
}

export default Catalogo;