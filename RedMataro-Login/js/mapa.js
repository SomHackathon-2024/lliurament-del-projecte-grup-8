// Coordenadas de Mataró
const latitud = 41.5392;
const longitud = 2.4442;

// Inicializar mapa
const mymap = L.map('mapa').setView([latitud, longitud], 14);

// Agregar mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);

const restaurantes = [
    { nombre: "Bar Casa Pepe, Mataró", latitud: 41.5405513, longitud: 2.4343848 },
    { nombre: "La Marineta Restaurant", latitud: 41.5365900, longitud: 2.4412564 },
    { nombre: "Meraki17 Restaurante Mediterráneo Fusión", latitud: 41.5368731, longitud: 2.4409329 },
    { nombre: "Restaurante Can Dimas", latitud: 41.5360067, longitud: 2.4497396 }
    // Agrega más restaurantes según sea necesario
];

// Crear y agregar marcadores para cada restaurante
restaurantes.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});
