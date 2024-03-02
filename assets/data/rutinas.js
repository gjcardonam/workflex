const rutinasSemanales = [
  {
    id: 1,
    dia: "Lunes",
    rutina: "Pecho - Triceps",
    duracion: "30 minutos",
    exercises: [
      {
        id: "1",
        name: "Aperturas en Máquina Pec Deck",
        muscle: "Pectorales",
        description:
          "Las aperturas en la máquina Pec Deck son ideales para aislar y trabajar los músculos pectorales.",
        gif: require("../gifs/AperturasEnMaquinaPecDeck.webp"),
      },
      {
        id: "2",
        name: "Bicycle Crunches",
        muscle: "Abdominales",
        description:
          "Las bicycle crunches son un excelente ejercicio para fortalecer los músculos abdominales y oblicuos.",
        gif: require("../gifs/BicicletasBicycleCrunches.gif"),
      },
    ],
  },
  {
    id: 2,
    dia: "Martes",
    rutina: "Espalda - Biceps",
    duracion: "2 horas",
    exercises: [
      {
        id: "5",
        name: "Crunches en Máquina",
        muscle: "Abdominales",
        description:
          "Los crunches en máquina son una variación efectiva de los crunches tradicionales para trabajar los abdominales.",
        gif: require("../gifs/Crunchesenmaquina.webp"),
      },
      {
        id: "6",
        name: "Curl con Barra",
        muscle: "Biceps",
        description:
          "El curl con barra es uno de los mejores ejercicios para desarrollar los músculos del bíceps.",
        gif: require("../gifs/Curlconbarra.gif"),
      },
      {
        id: "7",
        name: "Curl con Barra ZEZ",
        muscle: "Biceps",
        description:
          "El curl con barra ZEZ es una variación efectiva del curl con barra tradicional para el desarrollo de los bíceps.",
        gif: require("../gifs/CurlconbarraZEZ.gif"),
      },
    ],
  },
  {
    id: 3,
    dia: "Miercoles",
    rutina: "Piernas",
    duracion: "30 minutos",
    exercises: [
      {
        id: "9",
        name: "Curl con Mancuernas",
        muscle: "Biceps",
        description:
          "El curl con mancuernas es una excelente opción para desarrollar los músculos del bíceps de forma simétrica.",
        gif: require("../gifs/Curlconmancuernas.gif"),
      },
      {
        id: "10",
        name: "Curl de Bíceps Inclinado",
        muscle: "Biceps",
        description:
          "El curl de bíceps inclinado es un ejercicio que se realiza en un banco inclinado y se centra en el desarrollo de los bíceps.",
        gif: require("../gifs/Curldebicepsinclinado.webp"),
      },
      {
        id: "11",
        name: "Curl de Martillo",
        muscle: "Biceps, Antebrazos",
        description:
          "El curl de martillo es una variante del curl de bíceps que también trabaja los músculos de los antebrazos.",
        gif: require("../gifs/CurldemartilloHammerCurl.gif"),
      },
      {
        id: "12",
        name: "Curl de Pie con Barra de Resistencia",
        muscle: "Biceps",
        description:
          "El curl de pie con barra de resistencia es un ejercicio efectivo para trabajar los músculos del bíceps.",
        gif: require("../gifs/Curldepieconbarraderesistencia.webp"),
      },
    ],
  },
  {
    id: 4,
    dia: "Jueves",
    rutina: "Hombros - Trapecios",
    duracion: "20 minutos",
    exercises: [
      {
        id: "16",
        name: "Elevaciones de piernas colgando (Hanging Leg Raises)",
        muscle: "Abdominales",
        description:
          "Las elevaciones de piernas colgando son un ejercicio avanzado para fortalecer los abdominales inferiores.",
        gif: require("../gifs/ElevacionesdepiernascolgandoHangingLegRaises.gif"),
      },
    ],
  },
  {
    id: 5,
    dia: "Viernes",
    rutina: "Pecho - Triceps",
    duracion: "30 minutos",
    exercises: [{
      id: "5",
      name: "Crunches en Máquina",
      muscle: "Abdominales",
      description:
        "Los crunches en máquina son una variación efectiva de los crunches tradicionales para trabajar los abdominales.",
      gif: require("../gifs/Crunchesenmaquina.webp"),
    },
    {
      id: "6",
      name: "Curl con Barra",
      muscle: "Biceps",
      description:
        "El curl con barra es uno de los mejores ejercicios para desarrollar los músculos del bíceps.",
      gif: require("../gifs/Curlconbarra.gif"),
    },
    {
      id: "7",
      name: "Curl con Barra ZEZ",
      muscle: "Biceps",
      description:
        "El curl con barra ZEZ es una variación efectiva del curl con barra tradicional para el desarrollo de los bíceps.",
      gif: require("../gifs/CurlconbarraZEZ.gif"),
    },],
  },
  {
    id: 6,
    dia: "Sabado",
    rutina: "Espalda - Biceps",
    duracion: "30 minutos",
    exercises: [
      {
        id: "5",
        name: "Crunches en Máquina",
        muscle: "Abdominales",
        description:
          "Los crunches en máquina son una variación efectiva de los crunches tradicionales para trabajar los abdominales.",
        gif: require("../gifs/Crunchesenmaquina.webp"),
      },
      {
        id: "6",
        name: "Curl con Barra",
        muscle: "Biceps",
        description:
          "El curl con barra es uno de los mejores ejercicios para desarrollar los músculos del bíceps.",
        gif: require("../gifs/Curlconbarra.gif"),
      },
      {
        id: "7",
        name: "Curl con Barra ZEZ",
        muscle: "Biceps",
        description:
          "El curl con barra ZEZ es una variación efectiva del curl con barra tradicional para el desarrollo de los bíceps.",
        gif: require("../gifs/CurlconbarraZEZ.gif"),
      },
    ],
  },
  {
    id: 7,
    dia: "Domingo",
    rutina: "Descanso",
  },
];

export default rutinasSemanales;
