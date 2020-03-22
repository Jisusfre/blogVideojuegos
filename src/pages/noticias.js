const Noticias = () =>{
    location.hash="/noticias";
    const view=`
    <div class="card-deck mt-1 mx-0 mb-3">
        <div class="card">
            <img src="./src/assets/images/over2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Overwatch: no habrá más personajes nuevos antes de Overwatch 2</h5>
            <p class="card-text">Esta semana nos enteramos de la revelación de Echo, la nueva heroína de Overwatch que se convirtió en el personaje número 32. El equipo de Blizzard que trabaja en el juego usualmente lanza 3 o 2 héroes cada año. Pues bien, esta tendencia está por acabar, por lo menos momentáneamente, pues ya no llegarán nuevos personajes hasta que Overwatch 2 esté en el mercado.

            En una entrevista con IGN Nordic, el líder de diseño de Overwatch, Jeff Kaplan, dejó claro que Echo será el último personaje que llegará al mundo de Overwatch antes de la secuela, Overwatch 2.
            
            “No sabemos todavía cuando se lanzará Overwatch 2, pero como Echo será el último héroe para el juego base de Overwatch, esperamos que no tome años antes de que el juego vea la luz del día”, expresó el desarrollador</p>
        </div>
    </div>
    <div class="card">
        <img src="./src/assets/images/mc.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Minecraft: en cuarentena por coronavirus, estudiantes recrean facultad de la UNAM</h5>
        <p class="card-text">Las medidas de prevención en contra del coronavirus (COVID-16) han ocasionado que muchas personas suspendieran sus actividades diarias. Entre ellas están los estudiantes de todos los niveles en México. Algunos jugadores han aprovechado este tiempo libre para jugar y unirse con otros jugadores en medio de la pandemia. El nuevo ejemplo de esto lo protagonizaron estudiantes universitarios que recrearon su centro educativo en Minecraft.

        De acuerdo con información de Milenio, estudiantes de la Facultad de Estudios Superiores (FES) Acatlán, perteneciente a la Universidad Autónoma de México (UNAM), se organizaron para construir las instalaciones de la universidad en Minecraft. La precursora de esta idea fue Paula Estrada y los que dieron inicio a este proyecto fueron los estudiantes Luis Daniel Oropeza y Kevin Ortega Rodríguez, que crearon un servidor en el juego de construcción con el fin de recrear FES Acatlán a escala y pasar este periodo de contingencia de forma más amena al mismo tiempo que comunican a la sociedad que es posible “pasar un buen rato sin necesidad de salir de sus casas”.</p>
        </div>
    </div>
    <div class="card">
        <img src="./src/assets/images/xbox.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Microsoft ya está probando Project xCloud en PC y corre en estas resoluciones</h5>
        <p class="card-text">Para la próxima generación, Microsoft quiere conquistar al público con servicios. Es por esto que ya está trabajando en llevar Project xCloud, su servicio de streaming de videojuegos en PC. De hecho, se encuentra haciendo pruebas internas en ciertas resoluciones.

        Según informa The Verge, Microsoft está haciendo pruebas internas de Project xCloud en PC. La la fuente informa que este servicio se ofrecerá en computadora por medio de una aplicación disponible en la tienda de Windows.
        
        La intención es que con este servicio los jugadores puedan acceder a una amplia biblioteca de juegos para PC. Eso no es todo, ya que también permitirá que hagan un streaming desde su consola y hasta su computadora.
        
        Se asegura que la experiencia que ofrece Project xCloud es muy similar a la disponible en iOS y Android. A esto se refiere en que la interfaz es parecida, además de que se accede a los juegos de manera similar. Además, también necesitas un control de Xbox One, una cuenta Microsoft y una buena conexión a Internet para acceder al servicio.
        
        Por el momento, la versión de prueba de Project xCloud muestra los juegos a 720p y próximamente lo hará a 1080p. </p>
        </div>
    </div>
    </div>
    <div class="card text-center">
  <div class="card-header">
    Podria interesarte  
  </div>
  <div class="card-body">
    <h5 class="card-title">¿Buscasofertas en League of legends?</h5>
    <p class="card-text">Primero que todo, ¡feliz lunes! Y vaya que es feliz porque tenemos tres ofertas tempranas, (para mí, ¡de las más esperadas del año pasado!). ¿No sabes qué son las ofertas tempranas? Son la primera vez que un aspecto se pone en oferta desde su lanzamiento, así que no hay mejor momento de desbloquear esa skin reciente que tanto deseabas.</p>
    <a href="https://lan.leagueoflegends.com/es-mx/news/game-updates/ofertas-tempranas-y-mas/" class="btn btn-primary">OFERTONES</a>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>
    `
    return view;
}

export default Noticias;