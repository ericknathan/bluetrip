import type { TouristicSpotModel } from "@/models";

export const touristicSpotMock: TouristicSpotModel[] = [
  {
    id: 1,
    name: "Aquário de SP",
    description:
      "O Aquário de São Paulo é um aquário público localizado no distrito do Ipiranga, na cidade de São Paulo, Brasil. Ocupa uma área de 8 mil metros quadrados e é o maior aquário da América Latina.",
    averageRate: 4.5,
    price: 50,
    imageUrl:
      "https://www.vivareal.com.br/blog/wp-content/uploads/2024/02/aquario-de-sp.jpeg.webp",
    category: "Aquário",
    address: {
      street: "R. Huet Bacelar",
      number: "407",
      neighborhood: "Ipiranga",
      city: "São Paulo",
      state: "SP",
      zipCode: "04275-000",
    },
  },
  {
    id: 2,
    name: "Parque Nacional Glacier",
    description:
      "Um dos pontos turísticos mais afetado pelo aquecimento global é o Parque Nacional dos Glaciais , na Argentina. Localizado na região da Patagônia, o parque foi instituído pelo governo em 1937 com, até então, 726.927 hectares. O local também é lar de vários animais como o condor, o huemul (cervo andino), o guanaco, o nandu-de-darwin, o culpeo e o touro selvagem.",
    averageRate: 4.8,
    address: {
      street: "R. Huet Bacelar",
      number: "407",
      neighborhood: "Ipiranga",
      city: "São Paulo",
      state: "SP",
      zipCode: "04275-000",
    },
    price: 100,
    imageUrl:
      "https://i0.statig.com.br/bancodeimagens/55/u1/q6/55u1q6wvlx42o4vnqnoej1uc2.jpg",
    category: "Parque",
  },
  {
    id: 3,
    name: "Ilhas Maldivas",
    description:
      "O sonho de consumo de muita gente é viajar pra as Ilhas Maldivas . Destino de vários famosos, o território no Oceano Índico corre o risco de desaparecer por causa do aumento do nível do mar. Especialistas acreditam, inclusive, que o conjunto de 1.196 ilhas será o primeiro a desaparecer devido às mudanças climáticas.",
    averageRate: 4.9,
    price: 500,
    imageUrl:
      "https://i0.statig.com.br/bancodeimagens/bd/71/ee/bd71eep9y2ao8zdv0dwy1klnc.jpg",
    category: "Praia",
    address: {
      street: "R. Huet Bacelar",
      number: "407",
      neighborhood: "Ipiranga",
      city: "São Paulo",
      state: "SP",
      zipCode: "04275-000",
    },
  },
  {
    id: 4,
    name: "Aquário de Ubatuba",
    description:
      "O Aquário de Ubatuba é uma das principais atrações turísticas do litoral norte de São Paulo. Oferece uma experiência única com mais de 100 espécies de animais marinhos e de água doce.",
    averageRate: 4.6,
    price: 40,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPlnywZJqQTzfyIjZz93Et1v0UzqLHnMC45SYca=s1360-w1360-h1020",
    category: "Aquário",
    address: {
      street: "R. Guarani",
      number: "859",
      neighborhood: "Itaguá",
      city: "Ubatuba",
      state: "SP",
      zipCode: "11680-000",
    },
  },
  {
    id: 5,
    name: "Praia de Copacabana",
    description:
      "A Praia de Copacabana é uma das mais famosas do mundo, localizada no Rio de Janeiro, Brasil. Conhecida por seu calçadão icônico e grandes eventos, é um destino turístico popular.",
    averageRate: 4.7,
    price: 0,
    imageUrl:
      "https://copacabanariohotel.com.br/wp-content/uploads/2024/02/imagem-da-praia-de-copacabana-1024x577.png",
    category: "Praia",
    address: {
      street: "Av. Atlântica",
      number: "1702",
      neighborhood: "Copacabana",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "22070-011",
    },
  },
  {
    id: 6,
    name: "Rio Amazonas",
    description:
      "O Rio Amazonas é o maior rio do mundo em volume de água, e um dos mais importantes ecossistemas do planeta. Atravessa diversos países da América do Sul e é um destino para ecoturismo e aventuras.",
    averageRate: 4.9,
    price: 200,
    imageUrl:
      "https://s4.static.brasilescola.uol.com.br/be/2022/05/floresta-amazonica-rio-amazonas.jpg",
    category: "Rio",
    address: {
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      zipCode: "",
    },
  },
  {
    id: 7,
    name: "Parque Nacional Marinho de Fernando de Noronha",
    description:
      "Localizado em um arquipélago vulcânico, o Parque Nacional Marinho de Fernando de Noronha é um dos melhores lugares para mergulho e observação de vida marinha no Brasil.",
    averageRate: 4.8,
    price: 250,
    imageUrl:
      "https://grupocataratas.com/wp-content/uploads/2020/09/1-noronha-1024x1024.png",
    category: "Parque",
    address: {
      street: "",
      number: "",
      neighborhood: "",
      city: "Fernando de Noronha",
      state: "PE",
      zipCode: "53990-000",
    },
  },
  {
    id: 8,
    name: "Aquário de Lisboa",
    description:
      "O Oceanário de Lisboa é um dos maiores aquários internos do mundo, localizado no Parque das Nações, em Lisboa, Portugal. Exibe uma vasta coleção de espécies marinhas de diversos oceanos.",
    averageRate: 4.7,
    price: 18,
    imageUrl:
      "https://www.oceanario.pt/content/img/tripadvisor_oceanario_de_lisboa_pedroa.pina_2.jpg",
    category: "Aquário",
    address: {
      street: "Esplanada Dom Carlos I",
      number: "s/n",
      neighborhood: "Parque das Nações",
      city: "Lisboa",
      state: "",
      zipCode: "1990-005",
    },
  },
];
