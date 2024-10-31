// Simulación de la API de Joji 
const artistData = {
    name: "Joji",
    real_name: "George Kusunoki Miller",
    birth_date: "1992-09-18",
    birth_place: "Osaka, Japón",
    nationality: "Aussie-Japonés",
    biography: "Joji es un cantante, compositor y productor japonés-australiano conocido por su música emotiva y su estilo único."
};

const discographyData = {
    albums: [
        {
            title: "BALLADS 1",
            release_date: "2018-11-08",
            tracks: 11,
            spotify_url: "https://open.spotify.com/album/3wRDT9O2vLdhbwz09iZh5F"
        },
        {
            title: "Nectar",
            release_date: "2020-09-25",
            tracks: 18,
            spotify_url: "https://open.spotify.com/album/6XzfqRaL8KNFptFZvbhfu9"
        },
        {
            title: "Smithereens",
            release_date: "2022-11-04",
            tracks: 9,
            spotify_url: "https://open.spotify.com/album/2yfDJGHKntbr1zcHy08EOa"
        },
    ],
    eps: [
        {
            title: "Joji EP",
            release_date: "2019-05-17",
            tracks: 5,
            spotify_url: "https://open.spotify.com/album/1W2MkI3mVjmsbIS2SXzrwx"
        }
    ]
};

const interestingFacts = [
    "Antes de su carrera como cantante, Joji era un conocido YouTuber bajo el seudónimo de Filthy Frank.",
    "Fue el creador del popular meme de baile conocido como Harlem Shake.",
    "Su transición de comedia en YouTube a música fue sorpresiva para muchos de sus seguidores."
];

// Función para alternar la visibilidad de los datos
function toggleVisibility(contentDivId, content) {
    const contentDiv = document.getElementById(contentDivId);
    if (contentDiv.innerHTML === "") {
        contentDiv.innerHTML = content;
    } else {
        contentDiv.innerHTML = "";
    }
}

// Cargar datos con alternancia de visibilidad
document.getElementById('loadArtist').addEventListener('click', () => {
    toggleVisibility('artistInfo', `
        <h2>${artistData.name}</h2>
        <p><strong>Nombre real:</strong> ${artistData.real_name}</p>
        <p><strong>Fecha de nacimiento:</strong> ${artistData.birth_date}</p>
        <p><strong>Lugar de nacimiento:</strong> ${artistData.birth_place}</p>
        <p><strong>Nacionalidad:</strong> ${artistData.nationality}</p>
        <p><strong>Biografía:</strong> ${artistData.biography}</p>
    `);
});

document.getElementById('loadDiscography').addEventListener('click', () => {
    let albumsHtml = '<h2>Discografía</h2>';
    discographyData.albums.forEach(album => {
        albumsHtml += `
            <p>
                <strong><a href="${album.spotify_url}" target="_blank">${album.title}</a></strong>
                (Fecha: ${album.release_date}, Canciones: ${album.tracks})
            </p>`;
    });
    let epsHtml = '<h2>EPs</h2>';
    discographyData.eps.forEach(ep => {
        epsHtml += `
            <p>
                <strong><a href="${ep.spotify_url}" target="_blank">${ep.title}</a></strong>
                (Fecha: ${ep.release_date}, Canciones: ${ep.tracks})
            </p>`;
    });
    toggleVisibility('discographyInfo', albumsHtml + epsHtml);
});

document.getElementById('loadFacts').addEventListener('click', () => {
    let factsHtml = '<h2>Datos Interesantes</h2>';
    interestingFacts.forEach(fact => {
        factsHtml += `<p>${fact}</p>`;
    });
    toggleVisibility('factsInfo', factsHtml);
});

