const muscles = ["Pectorales", "Abdominales", "Biceps", "Triceps", "Espalda", "Hombros", "Piernas", "Gluteos", "Pantorrillas", "Antebrazos"];

const exercises = [
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
    {
      id: "3",
      name: "Cruce de Poleas Cable Crossovers",
      muscle: "Pectorales",
      description:
        "El cruce de poleas cable crossovers es un ejercicio efectivo para desarrollar los pectorales.",
      gif: require("../gifs/CruceDePoleasCableCrossovers.gif"),
    },
    {
      id: "4",
      name: "Crunches",
      muscle: "Abdominales",
      description:
        "Los crunches son un ejercicio clásico para fortalecer los músculos abdominales.",
      gif: require("../gifs/Crunches.gif"),
    },
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
    {
      id: "8",
      name: "Curl Concentrado",
      muscle: "Biceps",
      description:
        "El curl concentrado es un ejercicio de aislamiento que se centra en el desarrollo de los bíceps.",
      gif: require("../gifs/Curlconcentrado.gif"),
    },
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
    {
      id: "13",
      name: "Curl en Polea",
      muscle: "Biceps",
      description:
        "El curl en polea es un ejercicio versátil que permite trabajar los músculos del bíceps con resistencia constante.",
      gif: require("../gifs/Curlenpolea.gif"),
    },
    {
      id: "14",
      name: "Curl Predicador",
      muscle: "Biceps",
      description:
        "El curl predicador se realiza en un banco predicador y se centra en aislar los músculos del bíceps.",
      gif: require("../gifs/Curlpredicador.gif"),
    },
    {
      id: "15",
      name: "Dominadas (Pullups)",
      muscle: "Espalda, Biceps",
      description:
        "Las dominadas son un ejercicio básico pero efectivo para desarrollar fuerza en la espalda y los bíceps.",
      gif: require("../gifs/DominadasPullups.webp"),
    },
    {
      id: "16",
      name: "Elevaciones de piernas colgando (Hanging Leg Raises)",
      muscle: "Abdominales",
      description:
        "Las elevaciones de piernas colgando son un ejercicio avanzado para fortalecer los abdominales inferiores.",
      gif: require("../gifs/ElevacionesdepiernascolgandoHangingLegRaises.gif"),
    },
    {
      id: "17",
      name: "Elevaciones de piernas",
      muscle: "Abdominales",
      description:
        "Las elevaciones de piernas son un excelente ejercicio para fortalecer los abdominales inferiores.",
      gif: require("../gifs/ElevacionesdepiernasLegRaises.webp"),
    },
    {
      id: "18",
      name: "Elevaciones de talones sentado (Seated Calf Raises)",
      muscle: "Pantorrillas",
      description:
        "Las elevaciones de talones sentado son ideales para fortalecer los músculos de la pantorrilla.",
      gif: require("../gifs/ElevacionesdetalonessentadoSeatedCalfRaises.gif"),
    },
    // {
    //   id: "19",
    //   name: "Elevaciones frontales con mancuernas",
    //   muscle: "Hombros",
    //   description:
    //     "Las elevaciones frontales con mancuernas son excelentes para desarrollar los músculos del hombro frontal.",
    //   gif: require("../gifs/Elevacionesfrontalesconmancuernas.webp"),
    // },
    {
      id: "20",
      name: "Elevaciones laterales con mancuernas",
      muscle: "Hombros",
      description:
        "Las elevaciones laterales con mancuernas son efectivas para trabajar los músculos del hombro lateral.",
      gif: require("../gifs/Elevacioneslateralesconmancuernas.webp"),
    },
    {
      id: "21",
      name: "Elevaciones laterales en polea",
      muscle: "Hombros",
      description:
        "Las elevaciones laterales en polea son ideales para aislar y trabajar los músculos del hombro lateral.",
      gif: require("../gifs/Elevacioneslateralesenpolea.gif"),
    },
    {
      id: "22",
      name: "Extensión de tríceps en máquina (Press de tríceps)",
      muscle: "Triceps",
      description:
        "La extensión de tríceps en máquina es un excelente ejercicio para aislar y fortalecer los tríceps.",
      gif: require("../gifs/ExtensiondetricepsenmaquinaPressdetriceps.gif"),
    },
    {
      id: "23",
      name: "Extensión de tríceps en polea alta",
      muscle: "Triceps",
      description:
        "La extensión de tríceps en polea alta es un ejercicio efectivo para desarrollar los tríceps.",
      gif: require("../gifs/Extensiondetricepsenpoleaalta.webp"),
    },
    {
      id: "24",
      name: "Extensión de tríceps en polea con cuerda",
      muscle: "Triceps",
      description:
        "La extensión de tríceps en polea con cuerda es ideal para trabajar los tríceps de manera efectiva.",
      gif: require("../gifs/Extensiondetricepsenpoleaconcuerda.webp"),
    },
    {
      id: "25",
      name: "Extensión de tríceps sobre la cabeza con mancuerna",
      muscle: "Triceps",
      description:
        "La extensión de tríceps sobre la cabeza con mancuerna es un excelente ejercicio para desarrollar los tríceps.",
      gif: require("../gifs/Extensiondetricepssobrelacabezaconmancuerna.webp"),
    },
    {
      id: "26",
      name: "Extensiones de piernas (Leg Extensions)",
      muscle: "Piernas",
      description:
        "Las extensiones de piernas son un ejercicio clave para aislar y fortalecer los cuádriceps.",
      gif: require("../gifs/ExtensionesdepiernasLegExtensions.gif"),
    },
    {
      id: "27",
      name: "Face Pull",
      muscle: "Hombros, Espalda",
      description:
        "El Face Pull es un ejercicio efectivo para trabajar los deltoides y la parte superior de la espalda.",
      gif: require("../gifs/FacePull.gif"),
    },
    {
      id: "28",
      name: "Flexiones de brazos (Pushups)",
      muscle: "Pectorales, Hombros, Triceps",
      description:
        "Las flexiones de brazos son un ejercicio básico pero efectivo para fortalecer el pecho, hombros y tríceps.",
      gif: require("../gifs/FlexionesdebrazosPushups.gif"),
    },
    {
      id: "29",
      name: "Flyes",
      muscle: "Pectorales",
      description:
        "Los Flyes son un ejercicio excelente para desarrollar y definir los músculos pectorales.",
      gif: require("../gifs/flyes.gif"),
    },
    {
      id: "30",
      name: "Fondos en paralelas",
      muscle: "Pectorales, Triceps",
      description:
        "Los Fondos en paralelas son un gran ejercicio compuesto que trabaja el pecho y los tríceps.",
      gif: require("../gifs/Fondosenparalelas.webp"),
    },
    {
      id: "31",
      name: "Fondos en paralelas enfocados en pecho",
      muscle: "Pectorales",
      description:
        "Los Fondos en paralelas enfocados en pecho ponen más énfasis en el desarrollo del pectoral.",
      gif: require("../gifs/Fondosenparalelasenfocadosenpecho.webp"),
    },

    {
      id: "32",
      name: "Hiperextensiones",
      muscle: "Espalda, Gluteos",
      description:
        "Las hiperextensiones son un ejercicio eficaz para fortalecer la espalda baja y los glúteos.",
      gif: require("../gifs/Hiperextensiones.gif"),
    },
    {
      id: "33",
      name: "Jalones al pecho en polea (Lat Pulldowns)",
      muscle: "Espalda, Biceps",
      description:
        "Los jalones al pecho en polea son ideales para desarrollar la espalda y los bíceps.",
      gif: require("../gifs/JalonesalpechoenpoleaLatPulldowns.gif"),
    },
    {
      id: "34",
      name: "Jalones en polea con agarre estrecho",
      muscle: "Espalda, Biceps",
      description:
        "Este ejercicio se enfoca en la parte central de la espalda y los bíceps con un agarre estrecho.",
      gif: require("../gifs/Jalonesenpoleaconagarreestrecho.gif"),
    },
    {
      id: "35",
      name: "Pájaros con mancuernas (Reverse Flyes)",
      muscle: "Hombros, Espalda",
      description:
        "Los pájaros con mancuernas son excelentes para trabajar los deltoides posteriores y el trapecio.",
      gif: require("../gifs/PajarosconmancuernasReverseFlyes.webp"),
    },
    {
      id: "36",
      name: "Patada de tríceps con mancuerna",
      muscle: "Triceps",
      description:
        "La patada de tríceps con mancuerna es un ejercicio efectivo para aislar y fortalecer los tríceps.",
      gif: require("../gifs/Patadadetricepsconmancuerna.gif"),
    },
    {
      id: "37",
      name: "Peso muerto (Deadlift)",
      muscle: "Espalda , Piernas",
      description:
        "El peso muerto es un ejercicio compuesto que trabaja varios grupos musculares, incluyendo la espalda baja y las piernas.",
      gif: require("../gifs/PesomuertoDeadlift.gif"),
    },
    {
      id: "38",
      name: "Peso muerto rumano (Romanian Deadlifts)",
      muscle: "Isquiotibiales, Espalda",
      description:
        "El peso muerto rumano se enfoca en los músculos isquiotibiales y la espalda baja.",
      gif: require("../gifs/PesomuertorumanoRomanianDeadlifts.gif"),
    },
    {
      id: "39",
      name: "Plancha (Plank)",
      muscle: "Abdominales",
      description:
        "La plancha es un ejercicio de resistencia que fortalece los músculos abdominales y lumbares.",
      gif: require("../gifs/PlanchaPlank.gif"),
    },
    {
      id: "40",
      name: "Prensa de piernas (Leg Press)",
      muscle: "Piernas",
      description:
        "La prensa de piernas es un ejercicio efectivo para desarrollar fuerza y masa muscular en las piernas.",
      gif: require("../gifs/PrensadepiernasLegPress.gif"),
    },
    {
      id: "41",
      name: "Press Arnold",
      muscle: "Hombros",
      description:
        "El press Arnold es una variante del press de hombros que trabaja los deltoides desde diferentes ángulos.",
      gif: require("../gifs/PressArnold.gif"),
    },
    {
      id: "42",
      name: "Press con mancuernas",
      muscle: "Pectorales, Hombros, Triceps",
      description:
        "El press con mancuernas es un ejercicio compuesto que trabaja los pectorales, deltoides y tríceps.",
      gif: require("../gifs/Pressconmancuernas.webp"),
    },
    {
      id: "43",
      name: "Press de banca",
      muscle: "Pectorales, Triceps, Hombros",
      description:
        "El press de banca es uno de los mejores ejercicios para desarrollar fuerza y masa muscular en el pecho.",
      gif: require("../gifs/Pressdebanca.webp"),
    },
    {
      id: "44",
      name: "Press de banca cerrado",
      muscle: "Triceps, Pectorales, Hombros",
      description:
        "El press de banca cerrado se enfoca más en los tríceps y también trabaja el pecho y los hombros.",
      gif: require("../gifs/Pressdebancacerrado.webp"),
    },

    {
      id: "45",
      name: "Press de banco declinado",
      muscle: "Pectorales",
      description:
        "El press de banco declinado se centra en la porción inferior del pecho.",
      gif: require("../gifs/Pressdebancadeclinado.webp"),
    },
    {
      id: "46",
      name: "Press de banco inclinado",
      muscle: "Pectorales",
      description:
        "El press de banco inclinado se enfoca en la porción superior del pecho.",
      gif: require("../gifs/Pressdebancainclinado.webp"),
    },
    {
      id: "47",
      name: "Press de hombro con mancuernas",
      muscle: "Hombros",
      description:
        "El press de hombro con mancuernas es un ejercicio efectivo para desarrollar los deltoides.",
      gif: require("../gifs/Pressdehombroconmancuernas.webp"),
    },
    {
      id: "48",
      name: "Press francés",
      muscle: "Triceps",
      description:
        "El press francés es un ejercicio de aislamiento para los tríceps.",
      gif: require("../gifs/Pressfrances.gif"),
    },
    {
      id: "49",
      name: "Press militar",
      muscle: "Hombros",
      description:
        "El press militar es un ejercicio básico para desarrollar los deltoides.",
      gif: require("../gifs/Pressmilitar.gif"),
    },
    {
      id: "50",
      name: "Puentes de glúteo",
      muscle: "Gluteos",
      description:
        "Los puentes de glúteo son excelentes para fortalecer los músculos de los glúteos y la parte baja de la espalda.",
      gif: require("../gifs/PuentesdegluteoHipThrusts.jpg"),
    },
    {
      id: "51",
      name: "Pullover con mancuerna",
      muscle: "Espalda, Pectorales",
      description:
        "El pullover con mancuerna es un ejercicio que trabaja principalmente los músculos del pecho y la espalda.",
      gif: require("../gifs/Pulloverconmancuerna.gif"),
    },
    {
      id: "52",
      name: "Pullover con barra",
      muscle: "Espalda, Pectorales",
      description:
        "El pullover con barra es un ejercicio clásico para trabajar el pecho y la espalda.",
      gif: require("../gifs/Pulloverconmancuernaobarra.gif"),
    },
    {
      id: "53",
      name: "Remo con barra (Bent over Row)",
      muscle: "Espalda, Biceps",
      description:
        "El remo con barra es un ejercicio compuesto que trabaja la espalda y los bíceps.",
      gif: require("../gifs/RemoconbarraBentoverRow.webp"),
    },
    {
      id: "54",
      name: "Remo con barra (TT bar Row)",
      muscle: "Espalda, Biceps",
      description:
        "El remo con barra TT es una variante del remo con barra estándar que enfatiza los músculos de la espalda.",
      gif: require("../gifs/RemoconbarraTTbarRow.webp"),
    },
    {
      id: "55",
      name: "Remo con mancuerna a una mano",
      muscle: "Espalda, Biceps",
      description:
        "El remo con mancuerna a una mano es un excelente ejercicio unilateral para desarrollar la espalda y los bíceps.",
      gif: require("../gifs/Remoconmancuernaaunamano.webp"),
    },
    {
      id: "56",
      name: "Remo en máquina (Seated Row)",
      muscle: "Espalda, Biceps",
      description:
        "El remo en máquina es un ejercicio efectivo para desarrollar la espalda y los bíceps.",
      gif: require("../gifs/RemoenmaquinaSeatedRow.gif"),
    },
    {
      id: "57",
      name: "Rodillo abdominal (Ab Wheel Rollouts)",
      muscle: "Abdominales",
      description:
        "El rodillo abdominal es un ejercicio avanzado que trabaja los músculos abdominales y el core.",
      gif: require("../gifs/RodilloabdominalAbWheelRollouts.webp"),
    },
    {
      id: "58",
      name: "Rompecráneos",
      muscle: "Triceps",
      description:
        "El rompecráneos es un ejercicio de aislamiento para los tríceps.",
      gif: require("../gifs/RompecraneosSkullcrushers.webp"),
    },
    {
      id: "59",
      name: "Sentadillas búlgaras (Bulgarian Split Squats)",
      muscle: "Piernas, Gluteos",
      description:
        "Las sentadillas búlgaras son un excelente ejercicio unilateral para trabajar las piernas y los glúteos.",
      gif: require("../gifs/SentadillasbulgarasBulgarianSplitSquats.gif"),
    },
    {
      id: "60",
      name: "Sentadillas frontales (Front Squats)",
      muscle: "Piernas, Abdominales, Gluteos",
      description:
        "Las sentadillas frontales son una variante de las sentadillas que ponen más énfasis en los músculos del core y las piernas.",
      gif: require("../gifs/SentadillasfrontalesFrontSquats.webp"),
    },

    {
      id: "61",
      name: "Sentadillas sumo (Sumo Squats)",
      muscle: "Piernas, Gluteos",
      description:
        "Las sentadillas sumo son una variante que pone más énfasis en los glúteos y los músculos internos del muslo.",
      gif: require("../gifs/SentadillassumoSumoSquats.webp"),
    },
    {
      id: "62",
      name: "Shrugs con mancuernas o barra",
      muscle: "Espalda",
      description:
        "Los shrugs son excelentes para desarrollar los músculos trapecios y mejorar la postura.",
      gif: require("../gifs/Shrugsconmancuernasobarra.gif"),
    },
    {
      id: "63",
      name: "Step ups",
      muscle: "Piernas, Gluteos",
      description:
        "Los step ups son un ejercicio efectivo para fortalecer las piernas y los glúteos, además de mejorar el equilibrio.",
      gif: require("../gifs/Stepups.gif"),
    },
    {
      id: "64",
      name: "Step ups en banco o caja",
      muscle: "Piernas, Gluteos",
      description:
        "Los step ups en banco o caja son una variante que aumenta el rango de movimiento y la dificultad del ejercicio.",
      gif: require("../gifs/Stepupsenbancoocaja.gif"),
    },
    {
      id: "65",
      name: "Tijeras verticales (Scissor Kicks)",
      muscle: "Abdominales",
      description:
        "Las tijeras verticales son un ejercicio efectivo para fortalecer los abdominales inferiores.",
      gif: require("../gifs/TijerasverticalesScissorKicks.gif"),
    },
    {
      id: "66",
      name: "Remo vertical (Upright Row)",
      muscle: "Hombros, Espalda",
      description:
        "El remo vertical es un ejercicio que trabaja los hombros y los trapecios.",
      gif: require("../gifs/UprightRowRemovertical.gif"),
    },
    {
      id: "67",
      name: "Zancadas (Lunges)",
      muscle: "Piernas, Gluteos",
      description:
        "Las zancadas son un ejercicio que trabaja las piernas, los glúteos y mejora el equilibrio.",
      gif: require("../gifs/ZancadasLunges.gif"),
    },

    {
      id: "68",
      name: "Sentadillas Hack",
      muscle: "Piernas, Gluteos",
      description:
        "Las sentadillas Hack son un excelente ejercicio para trabajar los cuádriceps y los glúteos.",
      gif: require("../gifs/SentadillasHack.gif"),
    },
    {
      id: "69",
      name: "Sentadillas",
      muscle: "Piernas, Gluteos",
      description:
        "Las sentadillas son uno de los mejores ejercicios para desarrollar fuerza y tamaño en las piernas.",
      gif: require("../gifs/SentadillasSquats.gif"),
    },
    {
      id: "70",
      name: "Fondos entre bancos",
      muscle: "Triceps, Pectorales",
      description:
        "Los fondos entre bancos son un excelente ejercicio compuesto que trabaja los tríceps y el pecho.",
      gif: require("../gifs/Fondosentrebancos.webp"),
    },
  ];

export {exercises, muscles};