

const productos = [

    { id: 1, nombre: "camaMontesori", precio: 100000 },
  
    { id: 2, nombre: "respaldoCamaInfantilArco", precio: 45000 },
  
    { id: 3, nombre: "respaldoCamaInfantilOso", precio: 40000 },
  
    { id: 4, nombre: "bibliotecaNube", precio: 35000 },
    { id: 5, nombre: "sillaInfantil", precio: 8000 },
    { id: 6, nombre: "mesaKids", precio: 10000 },
    { id: 7, nombre: "trianguloEscalada", precio: 30000 },
  
  ];

  
  /*forEach*/
  productos.forEach(item => {
    alert (`Id: ${item.id} Nombre: ${item.nombre} Precio: ${item.precio}`)
  } 
    );

    /*Find*/
        let nombre = prompt ("Ingrese el nombre del producto a buscar");
    const producto = productos.find((item) => item.nombre === nombre);

    if(producto){
    alert(`Id: ${producto.id} Nombre: ${producto.nombre} Precio: ${producto.precio}`);
    }else{ alert ("Producto no encontrado");}

    /*Filter*/ 
    let filtrar = productos.filter(item => item.precio > 39000);
    console.log(filtrar);


    /*Map nuevo precio de Reyes menos le 25% desc  y suma total*/

    const preciosReyes= productos.map((item) => {
          return {
             id: item.id,
             nombre: item.nombre,
             precio: item.precio - item.precio * 0.25,
           };
        });
        console.log(preciosReyes);

        const totalCarritoReyes = productos.reduce ((acum,item) => acum + item.precio, 0);
        console.log (totalCarritoReyes);

        /*sort ordena en este caso los precios de mayor a menor*/
        productos.sort((a, b) =>b.precio - a.precio);

        console.log(productos);
        
    /* concat unimos dos Arrays en uno */
    const usuarios = [
         {
                nombre: "Maria",
                edad: 27
            },
            {
                 nombre: "Manuela",
                edad: 25
            }
         ];

         const usuarios2 = [
            {
                nombre: "Lorena",
                edad: 26
            },
            {
                 nombre: "Natalia",
                edad: 29
            }
         ]

         const usuarioFinal = usuarios.concat(usuarios2);
         console.log (usuarioFinal);