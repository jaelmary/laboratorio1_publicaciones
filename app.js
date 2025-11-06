const productosJSON = [
      {
        id: 1,
        nombre: "Café Moca",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema",
        imagen: "https://cdn-icons-png.flaticon.com/512/924/924514.png"
      },
      {
        id: 2,
        nombre: "Té verde",
        precio: 50.00,
        descripcion: "Hoja de té verde",
        imagen: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
      },
      {
        id: 3,
        nombre: "Smoothie de frutas",
        precio: 40.00,
        descripcion: "Mezcla de frutas naturales",
        imagen: "https://cdn-icons-png.flaticon.com/512/415/415733.png"
      }
    ];

    // Función principal
    function mostrarProductos() {
      const contenedor = document.querySelector('#contenedor-productos');

      productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');
        
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" width=100 height=100>
          <h2>${producto.nombre}</h2>
          <p>${producto.descripcion}</p>
          <p><strong>Precio:</strong> Bs${producto.precio.toFixed(2)}</p>
          <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        //insertar el nuevo elemento
        contenedor.appendChild(card);
      });
    }

    // Llamar a la función al cargar la página

    mostrarProductos();
