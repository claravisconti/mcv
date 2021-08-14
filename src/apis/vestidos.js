import vestidoClara from '../images/vestidoClara.jpg';
import vestidoSofia from '../images/vestidoSofia.jpg';
import vestidoLuna from '../images/vestidoLuna.jpg';

const vestidos = [
    {
        id: 1,
        title: "Vestido Clara",
        price: "$8.990",
        descripcion:"Vestido confeccionado en flamécon silueta linea a, y frunces tipo volados en cuerpo y mangas, escote redondo y mangas acampanadas.",
        image: vestidoClara,
        colores: ['blanco','rosa','negro'],
        talles: [40,42,44,46],
        fotos: [vestidoClara,vestidoSofia,vestidoLuna],
        stock: 5
        
    },
    {
        id: 2,
        title: "Vestido Sofia",
        price: "$7.490",
        descripcion:"Camisa larga confeccionada en heavy voile, look chemise. con mangas balloon 3/4 y recorte en 2da cadera con pequeños frunces.",
        image: vestidoSofia,
        colores: ['rojo','amarillo','blanco'],
        talles: [40,42,44,46],
        fotos: [vestidoClara,vestidoClara,vestidoClara],
        stock: 5
    },
    {
        id: 3,
        title: "Vestido Luna",
        price: "$5.800",
        descripcion:"Camisa larga confeccionada en heavy voile, look chemise. con mangas balloon 3/4 y recorte en 2da cadera con pequeños frunces.",
        image: vestidoLuna,
        colores: ['rojo','amarillo','blanco'],
        talles: [40,42,44,46],
        fotos: [vestidoClara,vestidoClara,vestidoClara],
        stock: 5
    }
]

export default vestidos;