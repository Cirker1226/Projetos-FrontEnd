const jogos = [
  {
    titulo: "Spider-Man: Miles Morales",
    imagem: "img/jogos/jogo.png",
    popular: true,
    new: false
  },
  {
    titulo: "Hollow Knight",
    imagem: "img/jogos/jogo2.png",
    popular: true,
    new: false
  },
  {
    titulo: "The Crew: Motorfest",
    imagem: "img/jogos/jogo3.png",
    popular: true,
    new: false
  },
  {
    titulo: "Cyberpunk 2077",
    imagem: "img/jogos/jogo4.png",
    popular: true,
    new: false
  },
  {
    titulo: "The Last of Us: Part I",
    imagem: "img/jogos/jogo5.png",
    popular: true,
    new: false
  },
  {
    titulo: "Red Dead Redemption 2",
    imagem: "img/jogos/jogo6.png",
    popular: true,
    new: false
  },
  {
    titulo: "Forza Horizon 6",
    imagem: "img/jogos/jogo7.png",
    popular: false,
    new: true
  },
  {
    titulo: "Grand Theft Auto VI",
    imagem: "img/jogos/jogo8.png",
    popular: false,
    new: true
  },
  {
    titulo: "Resident Evil: Requiem",
    imagem: "img/jogos/jogo9.png",
    popular: false,
    new: true
  },
  {
    titulo: "First Light 007",
    imagem: "img/jogos/jogo10.png",
    popular: false,
    new: true
  },
  {
    titulo: "Marvel Wolverine",
    imagem: "img/jogos/jogo11.png",
    popular: false,
    new: true
  },
  {
    titulo: "Lego Batman: Dark Knight",
    imagem: "img/jogos/jogo12.png",
    popular: false,
    new: true
  }
];

const deitados = [
  {
    "titulo": "Spider-Man 2",
    "imagem": "img/Jogos/banners/banner.png",
    "ano": 2023,
    "cardsDeitados": true
  },
  {
    "titulo": "EA Sports FC 26",
    "imagem": "img/Jogos/banners/banner2.png",
    "ano": 2026,
    "cardsDeitados": true
  },
  {
    "titulo": "Watch Dogs",
    "imagem": "img/Jogos/banners/banner3.png",
    "ano": 2014,
    "cardsDeitados": true
  },
  {
    "titulo": "Counter-Strike 2",
    "imagem": "img/Jogos/banners/banner4.png",
    "ano": 2022,
    "cardsDeitados": true
  },
  {
    "titulo": "StarField",
    "imagem": "img/Jogos/banners/banner5.png",
    "ano": 2023,
    "cardsDeitados": true
  },
  {
    "titulo": "Mortal Kombat 1",
    "imagem": "img/Jogos/banners/banner6.png",
    "ano": 2023,
    "cardsDeitados": true
  },
  {
    "titulo": "FarCry 5",
    "imagem": "img/Jogos/banners/banner7.png",
    "ano": 2018,
    "cardsDeitados": true
  },
  {
    "titulo": "Flight Simulator",
    "imagem": "img/Jogos/banners/banner8.png",
    "ano": 2024,
    "cardsDeitados": true
  },
  {
    "titulo": "Dead By Daylight",
    "imagem": "img/Jogos/banners/banner9.png",
    "ano": 2016,
    "cardsDeitados": true
  },
  {
    "titulo": "Snow Runner",
    "imagem": "img/Jogos/banners/banner10.png",
    "ano": 2020,
    "cardsDeitados": true
  }
];

let GamesPopular = '';
let GamesNews = '';

for (let index = 0; index < jogos.length; index++) {
    const games = jogos[index];

    if (games.popular == true) {
        GamesPopular += `
            <div class="card">
                <img src="${games.imagem}" alt="${games.titulo}">
                
                <div class="info">
                    <h3>${games.titulo}</h3>
                    <a href="detalhes.html"><button>Visualizar</button></a>
                </div>
            </div>
        `;
    }

    document.querySelector('.cards-popular').innerHTML = GamesPopular;

    if (games.new == true) {
        GamesNews += `
            <div class="card">
                <img src="${games.imagem}" alt="${games.titulo}">
                
                <div class="info">
                    <h3>${games.titulo}</h3>
                    <a href="detalhes.html"><button>Visualizar</button></a>
                </div>
            </div>
        `;
    }

    document.querySelector('.cards-new').innerHTML = GamesNews;


    
    }
    
/* -------------------------------------------------------------------------------- */

let GamesDown = '';

for (let index = 0; index < deitados.length; index++) {
    const jogosDeitados = deitados[index];

    if (jogosDeitados.cardsDeitados == true) {
        GamesDown += `
                <div class="card_deitado">
                    <img src="${jogosDeitados.imagem}" alt="${jogosDeitados.titulo}">
                    <div class="text-banner">
                        <h3>${jogosDeitados.titulo}</h3>
                        <p>${jogosDeitados.ano}</p>
                    </div>
                </div>
        `;
    }

    document.querySelector('.cards-banner').innerHTML = GamesDown;
}