//Codigo para generar información de categorias y almacenarlas en un arreglo.
var categorias = [];
var estrellas='';
var estrellasModal='';
(()=>{
  //Este arreglo es para generar textos de prueba
  let textosDePrueba=[
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
      "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
      "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
      "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
      "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
  ]
  
  //Genera dinamicamente los JSON de prueba para esta evaluacion,
  //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria

  
  let contador = 1;
  for (let i=0;i<5;i++){//Generar 5 categorias
      let categoria = {
          nombreCategoria:"Categoria "+i,
          descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
          aplicaciones:[]
      };
      for (let j=0;j<10;j++){//Generar 10 apps por categoria
          let aplicacion = {
              codigo:contador,
              nombre:"App "+contador,
              descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
              icono:`img/app-icons/${contador}.webp`,
              instalada:contador%3==0?true:false,
              app:"app/demo.apk",
              calificacion:Math.floor(Math.random() * (5 - 1)) + 1,
              descargas:1000,
              desarrollador:`Desarrollador ${(i+1)*(j+1)}`,
              imagenes:["img/app-screenshots/1.webp","img/app-screenshots/2.webp","img/app-screenshots/3.webp"],
              comentarios:[
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Juan"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Pedro"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Maria"},
              ],
              precio: Math.floor(Math.random() * (10 - 1)) + 1
          };
          contador++;
          categoria.aplicaciones.push(aplicacion);
      }
      categorias.push(categoria);       
  }
    // Lllenando el select list de categorias
    console.log(categorias);
    let cat = document.getElementById("categorias");
    for (let index = 0; index < categorias.length; index++) {
        cat.innerHTML += `<option value="${index}">${categorias[index].nombreCategoria}</option>`; 
    }
    mostrarApps();
    
})();


function mostrarApps(){
    let valorCat = document.getElementById("categorias").value;
    let catSeleccionada = document.getElementById("infoCategorias");
    catSeleccionada.innerHTML = '';
    for (let index = 0; index < categorias[valorCat].aplicaciones.length; index++) {
         /* HABRÁ ALGUNA OTRA FORMA PARA GENERAR LAS ESTRELLAS, YA QUE ES UN JSON DE JSON'S*/
        llenarEstrellas(categorias[valorCat].aplicaciones[index].calificacion);

        catSeleccionada.innerHTML += `
        <div class="col-lg-2 col-xl-2 col-md-3 col-sm-6 col-6" data-toggle="modal" data-target="#app${categorias[valorCat].aplicaciones[index].codigo}">
            <div class="apps">
                <img class="imgApps" src="${categorias[valorCat].aplicaciones[index].icono}">
                <h3><b>${categorias[valorCat].aplicaciones[index].nombre}</b></h3>
                <p class="Des">${categorias[valorCat].aplicaciones[index].desarrollador}</p> 
                <div class="estrellas">
                <!-- ${categorias[valorCat].aplicaciones[index].calificacion}  -->  
                ${estrellas}           
                </div>  
                <h3 class="precio"><b>$${categorias[valorCat].aplicaciones[index].precio}</b></h3>               
            </div>
        </div> 
        
        <div class="modal fade" id="app${categorias[valorCat].aplicaciones[index].codigo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <!--      Carrusel xD     -->
                            <div id="carr${categorias[valorCat].aplicaciones[index].codigo}" class="carousel slide carousel-fade" data-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${categorias[valorCat].aplicaciones[index].imagenes[0]}" class="d-block w-100" alt="1.webp">
                                </div>
                                <div class="carousel-item">
                                    <img src="${categorias[valorCat].aplicaciones[index].imagenes[1]}" class="d-block w-100" alt="2.webp">
                                </div>
                                <div class="carousel-item">
                                    <img src="${categorias[valorCat].aplicaciones[index].imagenes[2]}" class="d-block w-100" alt="3.webp">
                                </div>
                                </div>
                                <a class="carousel-control-prev" href="#carr${categorias[valorCat].aplicaciones[index].codigo}" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Anterior</span>
                                </a>
                                <a class="carousel-control-next" href="#carr${categorias[valorCat].aplicaciones[index].codigo}" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Siguiente</span>
                                </a>
                                <hr>
                            </div>   
                        <div class="row">
                            <div class="col-4">
                                <img  class="imgApps" src="${categorias[valorCat].aplicaciones[index].icono}" alt="">  
                            </div>
                            <div class="col-8">
                                <h1><b>${categorias[valorCat].aplicaciones[index].nombre}</b></h1>
                                <p class="Des">${categorias[valorCat].aplicaciones[index].desarrollador}</p>
                                <p><b>${categorias[valorCat].aplicaciones[index].descripcion}</b></p>
                                <h3 class="precio"><b>$${categorias[valorCat].aplicaciones[index].precio}</b></h3>
                            </div>
                        </div>  
                        <hr>
                        <div class="estrellasModal">
                            ${estrellasModal}
                            <span><b>&nbsp;&nbsp;${categorias[valorCat].aplicaciones[index].calificacion}</b></span>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-2 imgUser">
                                <img class="imgUser2" src="img/user.webp" alt="">
                            </div>
                            <div class="col-10">
                                <span><b>${categorias[valorCat].aplicaciones[index].comentarios[0].usuario}</b></span><br>
                                <p>${categorias[valorCat].aplicaciones[index].comentarios[0].comentario}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-2 imgUser">
                                <img class="imgUser2" src="img/user.webp" alt="">
                            </div>
                            <div class="col-10">
                                <span><b>${categorias[valorCat].aplicaciones[index].comentarios[1].usuario}</b></span><br>
                                <p>${categorias[valorCat].aplicaciones[index].comentarios[1].comentario}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-2 imgUser">
                                <img class="imgUser2" src="img/user.webp" alt="">
                            </div>
                            <div class="col-10">
                                <span><b>${categorias[valorCat].aplicaciones[index].comentarios[2].usuario}</b></span><br>
                                <p>${categorias[valorCat].aplicaciones[index].comentarios[2].comentario}</p>
                            </div>
                        </div>                       
                    </div> 
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button id="btnEliminar${categorias[valorCat].aplicaciones[index].codigo}" type="button" class="btn btn-warning">Eliminar App</button>
                    <button id="btnInstalar${categorias[valorCat].aplicaciones[index].codigo}" type="button" class="btn btn-success">Instalar</button>
                    </div>
                </div>
                </div>
            </div>
        `; 
        instalarEliminarApp(categorias[valorCat].aplicaciones[index].instalada,categorias[valorCat].aplicaciones[index].codigo);
    }   
};


function llenarEstrellas(caliApp){
    if( caliApp==5) {
        estrellas = '<i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i>';
        estrellasModal = '<i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i>';
    }else if(caliApp==4){
        estrellas = '<i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="far fa-star estrellaNoLlena"></i>';
        estrellasModal = '<i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="far fa-star estrellaNoLlenaVerde"></i>';
    }else if(caliApp==3){
        estrellas = '<i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i>';
        estrellasModal = '<i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="fas fa-star estrellaLlenaVerde"></i> <i class="far fa-star estrellaNoLlenaVerde"></i> <i class="far fa-star estrellaNoLlenaVerde"></i>';
    }else if(caliApp==2){
        estrellas = '<i class="fas fa-star estrellaLlena"></i> <i class="fas fa-star estrellaLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i>';
        estrellasModal = '<i class="fas fa-star estrellaLlenaRoja"></i> <i class="fas fa-star estrellaLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i>';
    }else if(caliApp==1){
        estrellas = '<i class="fas fa-star estrellaLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i>';
        estrellasModal = '<i class="fas fa-star estrellaLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i>';
    }else{
        estrellas = '<i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i> <i class="far fa-star estrellaNoLlena"></i>';
        estrellasModal = '<i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i> <i class="far fa-star estrellaNoLlenaRoja"></i>';
    }

}


function instalarEliminarApp(instaladaApp,codigoApp){
    if (instaladaApp == false) {
        document.getElementById('btnEliminar'+codigoApp).style.display = "none";
        document.getElementById('btnInstalar'+codigoApp).style.display = "block";
    } else {
        document.getElementById('btnEliminar'+codigoApp).style.display = "block";
        document.getElementById('btnInstalar'+codigoApp).style.display = "none";
    }
}
