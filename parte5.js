let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Mendoza",

    cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  
  persona.cambiarCiudad("Barcelona");
  
  console.log(`Persona: ${persona.nombre}, edad: ${persona.edad}, ciudad: ${persona.ciudad}`);

  
  
  
  let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    libroviejo: function() {
      let añoActual = 2024;
      let añoPublicacion = añoActual - this.año;
      return añoPublicacion > 10;
    }
  };
  
  
  let esViejo = libro.libroviejo();
  
  console.log(`El libro ${libro.titulo} es antiguo: ${esViejo}`);