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
    { nombre: "Terra Alta Restaurant (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.543196368353705, longitud: 2.435462528844411 },
    { nombre: "La Marineta Restaurant", latitud: 41.5365900, longitud: 2.4412564 },
    { nombre: "Meraki17 Restaurante Mediterráneo Fusión", latitud: 41.5368731, longitud: 2.4409329 },
    { nombre: "Birrateka (Bar)", latitud: 41.53752756668709, longitud: 2.4501880055254524 },
    { nombre: "GRILL&TACOS (24h)", latitud: 41.552796671124845, longitud: 2.451764967896105 },
    { nombre: "Restaurant Salicornia Guingueta", latitud: 41.53510831054104, longitud: 2.449249950338159 },
    { nombre: "Restaurante Can Dimas", latitud: 41.5360067, longitud: 2.4497396 }
    // Agrega más restaurantes según sea necesario
];

    // Añadimos las constantes de los perfiles (para filtrar según intereses del usuario)
    const relax = [
        
        { nombre: "Nou Parc Central", latitud: 41.54377659532761, longitud: 2.4383999681658577 },
        { nombre: "Casa Coll i Regàs", latitud: 41.540837764466666, longitud: 2.441992576699356 },
        { nombre: "Teatre Monumental", latitud: 41.54392244809692, longitud: 2.44259618895357 },
        { nombre: "Centre de Mataró", latitud: 41.538234, longitud: 2.444938 },
        { nombre: "Platja del Varador", latitud: 41.5357833366709, longitud: 2.451897267278119 },
        { nombre: "Re-Read (Llibreria de segona mà) (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.53767384948376, longitud: 2.4451462094280334 }
    ];
    
    const explorador = [
        { nombre: "Terra Alta Restaurant (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.543196368353705, longitud: 2.435462528844411 },
        { nombre: "Parc Forestal", latitud: 41.56816918761738, longitud: 2.4272126970114294},
        { nombre: "Turó de la Creu d'en Serra", latitud: 41.575405555897255, longitud: 2.427424474180397 },
        { nombre: "Nau Gaudí", latitud: 41.534085376570175, longitud: 2.4449381224573066  },
        { nombre: "Basílica de Santa María", latitud: 41.54131893261159, longitud: 2.44815470040748 },
        { nombre: "Biblioteca Antoni Comas", latitud: 41.54497642976675, longitud: 2.454816240693977 }
    ];
    
    const familia = [
        { nombre: "Centre de Mataró", latitud: 41.538234, longitud: 2.444938 },
        { nombre: "Platja del Varador", latitud: 41.5357833366709, longitud: 2.451897267278119 },
        { nombre: "Bosc vertical (Parc forestal)", latitud: 41.568023064254845, longitud:  2.437967767506894 },
        { nombre: "Restaurant Salicornia Guingueta", latitud: 41.53510831054104, longitud: 2.449249950338159 },
        { nombre: "Mataró Parc (Centre comercial)", latitud: 41.55585550650456, longitud: 2.436958946565559 },
        { nombre: "Parc central", latitud: 41.54586910044063, longitud: 2.4411031743767 }
    ];
    
    const joven = [
        { nombre: "Clap (Discoteca)", latitud: 41.53383160223678, longitud: 2.4314363672594297 },
        { nombre: "Cocoa (Discoteca)", latitud: 41.53278753471258, longitud: 2.4294622615018664 },
        { nombre: "Miracle (Discoteca)", latitud: 41.53284375416237, longitud: 2.4274237827304788 },
        { nombre: "Tecnocampus (Universitat)", latitud: 41.52793795378336, longitud: 2.434423978049492 },
        { nombre: "Birrateka (Bar)", latitud: 41.53752756668709, longitud: 2.4501880055254524 },
        { nombre: "GRILL&TACOS (24h)", latitud: 41.552796671124845, longitud: 2.451764967896105 },
        { nombre: "Parc central", latitud: 41.54586910044063, longitud: 2.4411031743767 },
        { nombre: "Mataró Parc (Centre comercial)", latitud: 41.55585550650456, longitud: 2.436958946565559 },
        { nombre: "Port de Mataró", latitud: 41.53219165396947, longitud: 2.448312320493979 }
        // Agrega más restaurantes según sea necesario
    ];

    const botigues = [
        
        { nombre: "Veritas (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.54096505318201, longitud: 2.4454933723327468 },
        { nombre: "KE d KE (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.54457333937012, longitud: 2.4369605770869875 },
        { nombre: "Terra Alta Restaurant (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.543196368353705, longitud: 2.435462528844411 },
        { nombre: "Re-Read (Llibreria de segona mà) (En aquest establiment pots bescanviar els teus punts de l'aplicació)", latitud: 41.53767384948376, longitud: 2.4451462094280334 }
    ];

// Crear y agregar marcadores para cada restaurante
restaurantes.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});
// Llamamos lo mismo para el resto de constantes
explorador.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});

familia.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});

joven.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});
relax.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});
botigues.forEach(restaurante => {
    L.marker([restaurante.latitud, restaurante.longitud]).addTo(mymap)
        .bindPopup(restaurante.nombre);
});