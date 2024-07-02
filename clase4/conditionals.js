const celulares = [
    {
        marca: 'Samsung',
        modelo: 'A35',
        disponibilidad: true,
        precio: 205000
    },
    {
        marca: 'Apple',
        modelo: 'Iphone 15 Pro 256',
        disponibilidad: false,
        precio: 879925
    },
    {
        marca: 'Xiaomi',
        modelo: '10A',
        disponibilidad: true,
        precio: 59900
    }
]

//Conditional if else
celulares.forEach(celular => {
    if (celular.marca === "Samsung") {
        console.log("El celular", celular.marca, "modelo ==>", celular.modelo, "es un celular gama media");
    }
    
    else if (celular.marca === "Apple") {
        console.log("El celular", celular.marca, "modelo ==>", celular.modelo, "es un celular gama alta");
    }

    else if (celular.marca === "Xiaomi") {
        console.log("El celular", celular.marca, "modelo ==>", celular.modelo, "es un celular gama baja");
    }
})

//Conditional switch
//`${array.key}`backstick

celulares.forEach(celular => {
    switch(celular.marca) {
        case 'Samsung': 
            console.log(`El celular ${celular.marca} modelo ==> ${celular.modelo} tiene un costo de ₡${celular.precio}`);
            break
        case 'Apple': 
            console.log(`El celular ${celular.marca} modelo ==> ${celular.modelo} tiene un costo de ₡${celular.precio}`)
            break
        case 'Xiaomi':
            console.log(`El celular ${celular.marca} modelo ==> ${celular.modelo} tiene un costo de ₡${celular.precio}`)
            break
    }
})

//node conditionals.js
