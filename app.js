// --- App State & Data Management ---

const ICON_TRASH = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
const ICON_SAVE = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`;
const ICON_CHECK = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const ICON_PLUS = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

const DEFAULT_BOOKS = [
  {
    "coverUrl": "https://images.cdn3.buscalibre.com/fit-in/660x660/63/e1/63e1efee60fb3a0d4097acdd5021e408.jpg",
    "readPages": 247,
    "title": "Cuál es tu sueño",
    "totalPages": 247
  },
  {
    "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/24/4a/5d/244a5d8c-ee7e-1b3b-10c4-c7c926e642f3/9789500752978.jpg/400x600bb.jpg",
    "readPages": 309,
    "title": "Cerati biografía",
    "totalPages": 309
  },
  {
    "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/01/9e/8b/019e8ba2-2819-4e3e-ee84-352a92842e30/9786073171175.jpg/400x600bb.jpg",
    "readPages": 230,
    "title": "Releo Si lo crees lo creas",
    "totalPages": 230
  },
  {
    "coverUrl": "como_ganar_amigos_celeste.jpg",
    "readPages": 303,
    "title": "Cómo hacer amigos e influir en las personas",
    "totalPages": 303
  },
  {
    "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/3e/67/dc/3e67dc9b-fb5b-8df3-fa92-9e810a118bfc/9789500773263.jpg/400x600bb.jpg",
    "readPages": 136,
    "title": "Oasis: vivir para siempre",
    "totalPages": 320
  },
  {
    "coverUrl": "https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/50/2e/30/502e3077-1476-3e4a-f32b-6844a3539947/9788403052970.jpg/400x600bb.jpg",
    "readPages": 0,
    "title": "El camino del artista",
    "totalPages": 250
  }
];

const STATIC_COVERS = {
  "Cuál es tu sueño": "images.jfif?v=1",
  "Cerati biografía": "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/24/4a/5d/244a5d8c-ee7e-1b3b-10c4-c7c926e642f3/9789500752978.jpg/400x600bb.jpg",
  "Releo Si lo crees lo creas": "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/01/9e/8b/019e8ba2-2819-4e3e-ee84-352a92842e30/9786073171175.jpg/400x600bb.jpg",
  "Cómo hacer amigos e influir en las personas": "images.jpg?v=1",
  "Oasis: vivir para siempre": "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/3e/67/dc/3e67dc9b-fb5b-8df3-fa92-9e810a118bfc/9789500773263.jpg/400x600bb.jpg",
  "El camino del artista": "https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/50/2e/30/502e3077-1476-3e4a-f32b-6844a3539947/9788403052970.jpg/400x600bb.jpg",
  "Generación dopamina": "https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/10/58/db/1058dbb2-9d33-14ad-2cfc-1f5e8f1ec6b6/9788419654168.jpg/400x600bb.jpg"
};

const DEFAULT_COVERS = [
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/9d/6e/47/9d6e4712-bc1f-fbe3-4aff-935e6806ca00/00602517690813.rgb.jpg/300x300bb.jpg",
    "date": "2026-01-11",
    "id": "_cov1",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Como eran las cosas - Babasónicos"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f8/e9/46/f8e94670-f365-9680-afba-be48258958bc/196626626011.jpg/300x300bb.jpg",
    "date": "2026-01-20",
    "id": "_cov2",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Arrancármelo - Wos"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/3d/d5/f33dd5c7-bbb8-c2b3-e5e8-0d2a4dd7f1a7/828768164426.jpg/300x300bb.jpg",
    "date": "2026-01-25",
    "id": "_cov3",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Me Quedo Aquí - Gustavo Cerati"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3d/47/5d/3d475de0-c669-bedc-2c21-db24917ed303/197190511628.jpg/300x300bb.jpg",
    "date": "2026-02-01",
    "id": "_cov4",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Nunca lo olvides - Airbag"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cd/78/a2/cd78a2a4-7e3d-ccec-b204-dda064f065a3/5051083000406.jpg/300x300bb.jpg",
    "date": "2026-02-08",
    "id": "_cov5",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Stop Crying Your Heart Out - Oasis"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fa/5b/89/fa5b898d-bad6-e053-4195-260e5c74f2bb/00602567725466.rgb.jpg/300x300bb.jpg",
    "date": "2026-02-14",
    "id": "_cov6",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Blackbird - The Beatles"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9f/e7/ea/9fe7eac2-87dc-c1df-3333-dc30b82bdd74/5051961006100.jpg/300x300bb.jpg",
    "date": "2026-02-21",
    "id": "_cov7",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Live Forever - Oasis"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/aa/e0/ab/aae0ab6a-d906-a189-81bf-70b56aa43f7a/886445635843.jpg/300x300bb.jpg",
    "date": "2026-02-27",
    "id": "_cov8",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Wish You Were Here - Pink Floyd"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/de/4b/65/de4b659f-cf95-04c5-6d01-a39a40ff094c/743211739122.jpg/300x300bb.jpg",
    "date": "2026-03-06",
    "id": "_cov9",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Lisa - Gustavo Cerati"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f0/1e/df/f01edf85-25f1-c245-1c18-bb0f1165740d/mzi.qaxmucxr.jpg/300x300bb.jpg",
    "date": "2026-03-13",
    "id": "_cov10",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "En la ciudad de la furia - Soda Stereo"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2c/80/06/2c8006cc-cebb-7ec6-bbe5-11dd55a3c37d/191773511289.jpg/300x300bb.jpg",
    "date": "2026-03-22",
    "id": "_cov11",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Semen Up - Patricio Rey"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/04/92/e0/0492e08b-cbcc-9969-9ad6-8f5a0888068c/5051961007107.jpg/300x300bb.jpg",
    "date": "2026-03-27",
    "id": "_cov12",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Wonderwall - Oasis"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/45/65/ba/4565bafb-580d-92f5-0a44-6ac7a944500e/00602527728643.rgb.jpg/300x300bb.jpg",
    "date": "2026-04-02",
    "id": "_cov13",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "En Privado - Babasónicos"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/07/87/66/078766a8-41b3-3e62-53ef-c30cf8f03e50/093624932130.jpg/300x300bb.jpg",
    "date": "2026-04-10",
    "id": "_cov14",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Californication - Red Hot Chili Peppers"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/46/24/33/462433f9-ee74-2d60-4538-859826a7bed7/00720642472729.rgb.jpg/300x300bb.jpg",
    "date": "2026-04-18",
    "id": "_cov15",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "The Man Who Sold the World - Nirvana"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/3d/d5/f33dd5c7-bbb8-c2b3-e5e8-0d2a4dd7f1a7/828768164426.jpg/300x300bb.jpg",
    "date": "2026-04-24",
    "id": "_cov16",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Adiós - Gustavo Cerati"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4c/86/1d/4c861dab-5428-f3b7-8068-82bb69db5e89/093624932130.jpg/300x300bb.jpg",
    "date": "2026-05-01",
    "id": "_cov17",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Scar Tissue - Red Hot Chili Peppers"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/1e/5c/ad/1e5cadeb-6f0c-86a0-9e85-6487a848d866/093624917168.jpg/300x300bb.jpg",
    "date": "2026-05-08",
    "id": "_cov18",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Congratulations - Mac Miller"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e4/9a/c9/e49ac9c1-5a9b-cb67-a5a0-5594feae15ad/018736893674_cover.jpg/300x300bb.jpg",
    "date": "2026-05-15",
    "id": "_cov19",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Chau - No Te Va Gustar"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/05/e3/65/05e365e6-c318-e16d-0a27-1d896ba231f2/mzi.hvktyhmz.jpg/300x300bb.jpg",
    "date": "2026-05-22",
    "id": "_cov20",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Persiana Americana - Soda Stereo"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f3/3d/d5/f33dd5c7-bbb8-c2b3-e5e8-0d2a4dd7f1a7/828768164426.jpg/300x300bb.jpg",
    "date": "2026-05-28",
    "id": "_cov21",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Crimen - Gustavo Cerati"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/55/e3/69/55e3697b-4d34-72e0-2111-57facda544a4/00077779824359.jpg/300x300bb.jpg",
    "date": "2026-06-06",
    "id": "_cov22",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Seguir viviendo sin tu amor - Luis Alberto Spinetta"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/a2/7a/dba27a46-3685-508d-d32e-a0e73cc82251/00602567713296.rgb.jpg/300x300bb.jpg",
    "date": "2026-06-12",
    "id": "_cov23",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "And I Love Her - The Beatles"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3a/7a/04/3a7a04c2-8bec-3e0b-89e1-3da93f4afa44/mzi.lfxlmais.jpg/300x300bb.jpg",
    "date": "2026-06-19",
    "id": "_cov24",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Vivo - Gustavo Cerati"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cd/52/6d/cd526dc6-daaa-e990-7019-47c828efdd1b/mzi.xpwcramk.jpg/300x300bb.jpg",
    "date": "2026-06-26",
    "id": "_cov25",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Flaca - Andrés Calamaro"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c8/50/23/c85023c0-d7e7-7462-2574-a7efe528f7da/mzi.uuvufkwr.jpg/300x300bb.jpg",
    "date": "2026-07-04",
    "id": "_cov26",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Rezo por vos - Charly García & Spinetta"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a0/db/6b/a0db6b97-4463-ba87-7046-77c66da5eef5/mzi.mfnjoagm.jpg/300x300bb.jpg",
    "date": "2026-07-11",
    "id": "_cov27",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Trátame Suavemente - Soda Stereo"
  },
  {
    "artUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9d/97/a2/9d97a228-eaec-2997-4191-a6c3377ecb18/mzi.mrfogssv.jpg/300x300bb.jpg",
    "date": "2026-07-20",
    "id": "_cov28",
    "improvement": "",
    "link": "",
    "published": true,
    "title": "Paloma - Andrés Calamaro"
  }
];



const AFFIRMATIONS = [
  "Mejorar notablemente mi autoestima, sentirme sumamente contento con mi relación conmigo mismo y amarme mucho. 🧠",
  "El amor propio es la base de mi felicidad y de todas mis relaciones. ❤️",
  "Cada pequeña sesión de práctica de guitarra me acerca a ser el músico que quiero ser. 🎸",
  "El entrenamiento diario no solo fortalece mi cuerpo, también mi mente y disciplina. 🏋️‍♂️",
  "Sara y yo construimos recuerdos hermosos cada día que compartimos. ✈️",
  "Prestar atención a mis pensamientos es el primer paso para dominar mi bienestar emocional. 🌟",
  "Tocar en un bar es una oportunidad hermosa de disfrutar y compartir mi música. 🍻",
  "La lectura diaria me expande la mente y me da nuevas perspectivas. 📚",
  "La constancia es mi mayor fortaleza para promocionar mis materias y lograr el ahorro. 🎓",
  "El sueño reparador de +80 me da la energía necesaria para conquistar mis días. 😴"
];

const SUGGESTION_POOL = [
  // Solos de Guitarra
  { title: "Under the Bridge - Red Hot Chili Peppers", style: "Solo", desc: "El solo intermedio es excelente para bends expresivos y vibrato." },
  { title: "Wet Sand - Red Hot Chili Peppers", style: "Solo", desc: "El solo final de Frusciante te ayudará a dominar el uso de distorsiones intensas." },
  { title: "Rezo por vos (Solo) - Charly & Spinetta", style: "Solo", desc: "El solo de Spinetta es ideal para practicar bends gemelos y fraseo jazz-rock." },
  { title: "Smells Like Teen Spirit - Nirvana", style: "Solo", desc: "El solo de Cobain es un excelente ejercicio de rítmica y control de acoples." },
  { title: "Abarajame - Illya Kuryaki", style: "Riff", desc: "Un riff funk bailable y rápido para perfeccionar tu mano derecha y muteos rápidos." },
  { title: "Ji Ji Ji - Patricio Rey", style: "Solo", desc: "El solo final es ideal para entrenar velocidad y bends agudos repetitivos." },

  // Loops / Capas
  { title: "Shape of You - Ed Sheeran", style: "Loop", desc: "Perfecto para timming rítmico golpeando la caja y apilando capas rítmicas." },
  { title: "Yellow - Coldplay", style: "Loop", desc: "Usa arpegios con delay para armar capas envolventes y una atmósfera densa." },
  { title: "Come Together - The Beatles", style: "Loop", desc: "Graba la base del bajo con la sexta cuerda y monta el riff de slide encima." },
  { title: "Clint Eastwood - Gorillaz", style: "Loop", desc: "Excelente para armar un beat rítmico percusivo y tocar la melodía de melódica encima." },

  // Acústico / Unplugged
  { title: "About a Girl - Nirvana (Unplugged)", style: "Acústico", desc: "Excelente para retener público fogonero con acordes abiertos y limpios." },
  { title: "Zona de promesas - Soda Stereo", style: "Acústico", desc: "Una balada acústica ideal para lucir arpegios lentos y expresivos." },
  { title: "Canción para mi muerte - Sui Generis", style: "Acústico", desc: "Clásico infaltable del fogón nacional; ideal para enganchar nostálgicos." },
  { title: "Barro tal vez - Luis Alberto Spinetta", style: "Acústico", desc: "Exige acordes jazzísticos y un tempo folclórico de mucha precisión." },
  { title: "Spaghetti del Rock - Divididos", style: "Acústico", desc: "Un arpegio hermoso y un solo acústico lleno de sentimiento y expresión." },
  { title: "De música ligera - Soda Stereo", style: "Acústico", desc: "Versión acústica rítmica ideal para levantar energía en videos cortos de TikTok." },
];

let state = {
  gym: { pb: 90, ht: 120, sq: 80 },
  screenTime: Array(24).fill(null),
  guitar: { hours: 331, log: [{"id": "_o5d1wqrrd", "date": "2026-07-25", "hours": 331}] },
  covers: [...DEFAULT_COVERS],
  followers: 214,
  bar: { completed: false, name: "", review: "" },
  books: [...DEFAULT_BOOKS],
  subjects: [...(typeof DEFAULT_SUBJECTS !== 'undefined' ? DEFAULT_SUBJECTS : [{"id":"_5qtgkn409","name":"Analisis de Sistemas de Informacion","passed":false},{"id":"_0899dh13a","name":"Comunicacion de Datos","passed":false},{"id":"_gssvkucqv","name":"Economia","passed":true},{"id":"_ytvhws9h1","name":"Legislacion","passed":false},{"id":"_qr0v14alt","name":"Analisis Numerico","passed":true},{"id":"_plrcvhop7","name":"Backend de Aplicaciones","passed":false}])],
  sara: { tripCompleted: false, moments: [] },
  mind: { thoughts: [], sessions: [] },
  finance: { log: [{"id": "_il0d6t9mj", "date": "2026-07-25", "amount": 800000, "type": "ahorro", "desc": "Ahorro NaranjaX", "link": ""}] },
  tiktok: { connected: false, username: "@thoma_guitar", likes: 0 },
  security: { pinEnabled: false, pin: "" }
};

let selectedScreenWeekIdx = 0;
let selectedScreenMonthIdx = 0;

const SCREEN_MONTHS = [
  { name: "Jul / Ago", start: 0, end: 3 },
  { name: "Ago / Sep", start: 4, end: 7 },
  { name: "Sep / Oct", start: 8, end: 11 },
  { name: "Oct / Nov", start: 12, end: 15 },
  { name: "Nov / Dic", start: 16, end: 19 },
  { name: "Dic", start: 20, end: 23 }
];

// Carga inicial de datos
function loadState() {
  const saved = localStorage.getItem('goals_2026_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Fusión con valores por defecto por si agregamos campos nuevos
      state = { ...state, ...parsed };
      let migrated = false;
      if (!state.covers || state.covers.length === 0) {
        state.covers = [...DEFAULT_COVERS];
        migrated = true;
      } else {
        DEFAULT_COVERS.forEach(defCover => {
          const exists = state.covers.some(c => c.id === defCover.id);
          if (!exists) {
            state.covers.push(defCover);
            migrated = true;
          }
        });
      }

      // Reescribir títulos antiguos a nombres de canciones limpios en localStorage
      state.covers = state.covers.map(c => {
        const matchingDef = DEFAULT_COVERS.find(dc => dc.id === c.id);
        if (matchingDef && c.title !== matchingDef.title) {
          migrated = true;
          c.title = matchingDef.title;
        }
        return c;
      });

      // Forzar actualización de portadas específicas solicitadas por el usuario
      state.covers = state.covers.map(c => {
        if (c.title.toLowerCase().includes("rezo por vos")) {
          const charlyArt = "https://cdn-images.dzcdn.net/images/cover/af904edd6d5b4852f6f81f2cec19f79f/250x250-000000-80-0-0.jpg";
          if (c.artUrl !== charlyArt) {
            c.artUrl = charlyArt;
            migrated = true;
          }
        }
        if (c.title.toLowerCase().includes("crimen")) {
          const ahiVamosArt = "https://cdn-images.dzcdn.net/images/cover/cbde419f831a11ce8e84330550ce30fe/250x250-000000-80-0-0.jpg";
          if (c.artUrl !== ahiVamosArt) {
            c.artUrl = ahiVamosArt;
            migrated = true;
          }
        }
        if (c.title.toLowerCase().includes("en la ciudad de la furia")) {
          const dobleVidaArt = "https://cdn-images.dzcdn.net/images/cover/35d98d067adff09863835209a3e7a9d6/250x250-000000-80-0-0.jpg";
          if (c.artUrl !== dobleVidaArt) {
            c.artUrl = dobleVidaArt;
            migrated = true;
          }
        }
        return c;
      });
      if (!state.bar) {
        state.bar = { completed: false, name: "", review: "" };
      } else {
        if (state.bar.name === undefined) state.bar.name = "";
      }
      if (!state.screenTime || state.screenTime.length !== 24) {
        state.screenTime = Array(24).fill(null);
      }
      if (!state.tiktok) {
        state.tiktok = { connected: false, username: "@thoma_guitar", likes: 0 };
      } else if (state.tiktok.connected === undefined) {
        state.tiktok.connected = false;
      }
      // Asegurarse de que los libros cargados tengan al menos los predeterminados
      if (!state.books || state.books.length === 0) {
        state.books = [...DEFAULT_BOOKS];
      }
      
      // Migración forzosa inmediata de portadas predeterminadas
      state.books.forEach((book, idx) => {
        if (STATIC_COVERS[book.title]) {
          if (state.books[idx].coverUrl !== STATIC_COVERS[book.title]) {
            state.books[idx].coverUrl = STATIC_COVERS[book.title];
            migrated = true;
          }
        }
      });
      // Sanitize guitar log
      if (state.guitar && state.guitar.log) {
        state.guitar.log.forEach(entry => {
          if (!entry.id) {
            entry.id = generateId();
            migrated = true;
          }
          if (entry.date && (entry.date.includes(' ') || entry.date.indexOf('-') !== 4)) {
            entry.date = new Date().toISOString().split('T')[0]; 
            migrated = true;
          }
        });
      }

      if (migrated) {
        localStorage.setItem('goals_2026_state', JSON.stringify(state));
      }
    } catch (e) {
      console.error("Error cargando state de localStorage", e);
    }
  }
}

function saveState() {
  localStorage.setItem('goals_2026_state', JSON.stringify(state));
  updateUI();
}

// --- Navigation Tabs ---

document.querySelectorAll('[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.getAttribute('data-tab');
    switchTab(tabName, true);
  });
});

// Enlace de las tarjetas de resumen del Dashboard con sus pestañas correspondientes
document.querySelectorAll('[data-target-tab]').forEach(card => {
  card.addEventListener('click', () => {
    const tabName = card.getAttribute('data-target-tab');
    switchTab(tabName, true);
  });
});

function switchTab(tabName, smoothScroll = true) {
  // Desactivar todos los botones y secciones
  document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  // Activar seleccionados (tanto desktop como mobile)
  document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(b => b.classList.add('active'));
  const targetElement = document.getElementById(`tab-${tabName}`);
  if (targetElement) {
    targetElement.classList.add('active');
  }

  // Guardar pestaña en localStorage para que persista al recargar
  localStorage.setItem('active_tab', tabName);

  // Scroll to top si es interacción del usuario
  if (smoothScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Desplazar automáticamente al fondo de los covers para ver los últimos
  if (tabName === 'musica') {
    setTimeout(() => {
      const coversList = document.getElementById('covers-list');
      if (coversList) {
        coversList.scrollTop = coversList.scrollHeight;
      }
    }, 150);
  }
}

// --- Modals Management ---

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
  }
}
window.openModal = openModal;

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
  }
}
window.closeModal = closeModal;

// Cerrar al hacer clic fuera del modal
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal(e.target.id);
  }
});

// --- Dynamic Calculations & UI Render ---

function calculate1RM(weight, reps) {
  if (weight <= 0 || reps <= 0) return 0;
  if (reps === 1) return weight;
  if (reps <= 10) {
    return weight / (1.0278 - (0.0278 * reps));
  } else {
    return weight * (1 + (reps / 30));
  }
}

function calculateGoalsProgress() {
  const progressList = [];

  // 1. Press de Banca (Meta: 100kg)
  progressList.push(Math.min(state.gym.pb / 100, 1.0));

  // 2. Hip Thrust (Meta: 140kg x 8 -> 173.83kg 1RM)
  const ht_1RM = calculate1RM(state.gym.ht, 8);
  progressList.push(Math.min(ht_1RM / 173.83, 1.0));

  // 3. Dominadas (Meta: 20 reps)
  progressList.push(Math.min(state.gym.sq / 20, 1.0));

  // 4. Horas de Guitarra (Meta: 600h)
  progressList.push(Math.min(state.guitar.hours / 600, 1.0));

  // 5. Covers en TikTok (Meta: 40 covers)
  const publishedCoversCount = state.covers.filter(c => c.published).length;
  progressList.push(Math.min(publishedCoversCount / 40, 1.0));

  // 6. Seguidores Red Social (Meta: 1000)
  progressList.push(Math.min(state.followers / 1000, 1.0));

  // 7. Sara: Moments + Trip
  const momentsVal = state.sara.moments.length > 0 ? 0.5 : 0;
  const tripVal = state.sara.tripCompleted ? 0.5 : 0;
  progressList.push(momentsVal + tripVal);

  // 8. Materias Promocionadas
  if (state.subjects.length > 0) {
    const passedCount = state.subjects.filter(s => s.passed).length;
    progressList.push(passedCount / state.subjects.length);
  } else {
    progressList.push(0.0);
  }



  // 10. Leer 2000 Páginas
  const totalReadPages = state.books.reduce((acc, curr) => acc + (curr.readPages || 0), 0);
  progressList.push(Math.min(totalReadPages / 2000, 1.0));

  // 11. Tiempo de Celular (Meta: Promedio ≤ 3h 30m = 210 mins)
  const registeredWeeks = state.screenTime.filter(w => w !== null);
  if (registeredWeeks.length > 0) {
    const totalMins = registeredWeeks.reduce((acc, curr) => acc + curr, 0);
    const avgMins = totalMins / registeredWeeks.length;
    const logProgress = registeredWeeks.length / 24;
    const qualityFactor = avgMins <= 210 ? 1.0 : Math.max(0, 1 - (avgMins - 210) / 210);
    progressList.push(logProgress * qualityFactor);
  } else {
    progressList.push(0.0);
  }

  // 12. Tocar en Bar
  progressList.push(state.bar.completed ? 1.0 : 0.0);

  // 13. Ahorro $1.300.000
  const totalSavings = calculateTotalSavings();
  progressList.push(Math.min(Math.max(totalSavings, 0) / 1300000, 1.0));

  // Calcular cantidad de objetivos 100% completados
  const completedCount = progressList.filter(p => p >= 0.999).length;

  // Calcular promedio de progreso general
  const overallAvg = progressList.reduce((acc, curr) => acc + curr, 0) / progressList.length;

  return {
    completedCount: completedCount,
    totalGoals: progressList.length,
    overallPercent: Math.round(overallAvg * 100)
  };
}

function calculateTotalSavings() {
  return state.finance.log.reduce((acc, item) => {
    if (item.type === 'ahorro') {
      return acc + item.amount;
    } else {
      return acc - item.amount;
    }
  }, 0);
}

function updateUI() {
  // 1. Header & Overall Stats
  updateGlobalProgressDOM();

  // Countdown
  const end = new Date('2026-12-31T23:59:59');
  const today = new Date();
  const diff = end - today;
  const days = Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 1);

  const daysCountdown = document.getElementById('days-countdown');
  if (daysCountdown) {
    if (diff > 0) {
      daysCountdown.innerText = `Quedan ${days} días en el año 2026`;
    } else {
      daysCountdown.innerText = "¡Año 2026 finalizado! Felicitaciones por tus logros.";
    }
  }

  // --- Dynamic Daily Target Calculations ---
  const totalReadPages = state.books.reduce((acc, curr) => acc + (curr.readPages || 0), 0);
  
  // Guitar daily rate needed
  const remainingGuitarHours = Math.max(0, 600 - state.guitar.hours);
  const guitarRate = (remainingGuitarHours / days).toFixed(2);

  // Reading daily pages rate needed
  const remainingPages = Math.max(0, 2000 - totalReadPages);
  const readingRate = (remainingPages / days).toFixed(1);

  // Set text labels in their respective tabs
  const guitarDailyRateEl = document.getElementById('guitar-daily-rate');
  if (guitarDailyRateEl) {
    if (remainingGuitarHours > 0) {
      guitarDailyRateEl.innerText = `Necesitas practicar: ${guitarRate} horas al día para la meta (${days} días rest.).`;
    } else {
      guitarDailyRateEl.innerText = "¡Objetivo Completado! 🎉 Has alcanzado tu meta de 600 horas.";
    }
  }

  const readingDailyRateEl = document.getElementById('reading-daily-rate');
  if (readingDailyRateEl) {
    if (remainingPages > 0) {
      readingDailyRateEl.innerText = `Necesitas leer: ${readingRate} páginas al día para la meta (${days} días rest.).`;
    } else {
      readingDailyRateEl.innerText = "¡Objetivo Completado! 🎉 Has alcanzado tu meta de 2000 páginas.";
    }
  }

  // --- Render Dashboard Summary Cards ---
  const totalSavings = calculateTotalSavings();
  const screenRegisteredCount = state.screenTime.filter(w => w !== null).length;
  const screenTotalMins = state.screenTime.filter(w => w !== null).reduce((acc, curr) => acc + curr, 0);
  const screenAvgMins = screenRegisteredCount > 0 ? Math.round(screenTotalMins / screenRegisteredCount) : 0;
  const screenAvgHoursStr = screenAvgMins > 0 ? `${Math.floor(screenAvgMins / 60)}h ${screenAvgMins % 60}m` : "--";
  const publishedCoversCount = state.covers.filter(c => c.published).length;
  const subjectsPercent = state.subjects.length > 0 ? Math.round((state.subjects.filter(s => s.passed).length / state.subjects.length) * 100) : 0;
  const gymPercent = Math.round(((Math.min(state.gym.pb / 100, 1.0) + Math.min(state.gym.ht / 140, 1.0) + Math.min(state.gym.sq / 20, 1.0)) / 3) * 100);

  // 1. Gym PB
  setValueText('sum-val-pb', `${state.gym.pb} / 100 kg`);
  setProgressBarWidth('sum-progress-pb', Math.min((state.gym.pb / 100) * 100, 100));

  // 2. Gym HT
  const ht_1RM = Math.round(calculate1RM(state.gym.ht, 8));
  setValueText('sum-val-ht', `${ht_1RM} / 174 kg`);
  setProgressBarWidth('sum-progress-ht', Math.min((ht_1RM / 173.83) * 100, 100));

  // 3. Gym SQ (Dominadas)
  setValueText('sum-val-sq', `${state.gym.sq} / 20 reps`);
  setProgressBarWidth('sum-progress-sq', Math.min((state.gym.sq / 20) * 100, 100));

  // 4. Tiempo de Celular
  setValueText('sum-val-screentime', screenAvgHoursStr);
  let screenTimeProgress = 0;
  if (screenRegisteredCount > 0) {
    screenTimeProgress = screenAvgMins <= 210 ? 100 : Math.max(0, Math.round((1 - (screenAvgMins - 210) / 210) * 100));
  }
  setProgressBarWidth('sum-progress-screentime', screenTimeProgress);

  // 5. Horas de Guitarra
  setValueText('sum-val-guitar', `${Math.round(state.guitar.hours * 10) / 10} / 600 hrs`);
  setProgressBarWidth('sum-progress-guitar', Math.min((state.guitar.hours / 600) * 100, 100));

  // 6. Covers en TikTok
  setValueText('sum-val-covers', `${publishedCoversCount} / 40`);
  setProgressBarWidth('sum-progress-covers', Math.min((publishedCoversCount / 40) * 100, 100));

  // 7. Seguidores de TikTok
  setValueText('sum-val-followers', `${state.followers.toLocaleString()} / 1000`);
  setProgressBarWidth('sum-progress-followers', Math.min((state.followers / 1000) * 100, 100));

  // 8. Presentación en Bar
  setValueText('sum-val-bar', state.bar.completed ? "¡Sí! 🍻" : "No");
  setProgressBarWidth('sum-progress-bar', state.bar.completed ? 100 : 0);

  // 9. Páginas Leídas
  setValueText('sum-val-reading', `${totalReadPages} / 2000 págs`);
  setProgressBarWidth('sum-progress-reading', Math.min((totalReadPages / 2000) * 100, 100));

  // 10. Carrera & Materias
  setValueText('sum-val-college', `${subjectsPercent}%`);
  setProgressBarWidth('sum-progress-college', subjectsPercent);

  // 11. Fondo de Ahorro
  setValueText('sum-val-finance', `$${totalSavings.toLocaleString('es-AR')}`);
  setProgressBarWidth('sum-progress-finance', Math.min((totalSavings / 1300000) * 100, 100));

  // 12. Momento con Sara
  setValueText('sum-val-relationship', `${state.sara.moments.length} reg.`);
  let saraProgress = 0;
  if (state.sara.moments.length > 0) saraProgress += 50;
  if (state.sara.tripCompleted) saraProgress += 50;
  setProgressBarWidth('sum-progress-relationship', saraProgress);

  // --- Render Físico & Salud Tab ---
  // Gym
  setValueText('gym-pb-val', `${state.gym.pb} / 100 kg`);
  setProgressBarWidth('gym-pb-progress', Math.min((state.gym.pb / 100) * 100, 100));
  setInputValue('input-gym-pb', state.gym.pb);

  setValueText('gym-ht-val', `${ht_1RM} / 174 kg (1RM)`);
  setProgressBarWidth('gym-ht-progress', Math.min((ht_1RM / 174) * 100, 100));
  setInputValue('input-gym-ht', state.gym.ht);

  setValueText('gym-sq-val', `${state.gym.sq} / 20 reps`);
  setProgressBarWidth('gym-sq-progress', Math.min((state.gym.sq / 20) * 100, 100));
  setInputValue('input-gym-sq', state.gym.sq);

  // Screen Time grid
  const screenRegisteredCount2 = state.screenTime.filter(w => w !== null).length;
  const screenTotalMins2 = state.screenTime.filter(w => w !== null).reduce((acc, curr) => acc + curr, 0);
  const screenAvgMins2 = screenRegisteredCount2 > 0 ? Math.round(screenTotalMins2 / screenRegisteredCount2) : 0;
  const screenAvgHoursStr2 = screenAvgMins2 > 0 ? `${Math.floor(screenAvgMins2 / 60)}h ${screenAvgMins2 % 60}m` : "--";

  setValueText('screen-time-badge', `Prom: ${screenAvgHoursStr2}`);
  const badgeEl = document.getElementById('screen-time-badge');
  if (badgeEl) {
    if (screenAvgMins2 > 210) {
      badgeEl.style.color = 'var(--color-pink)';
    } else {
      badgeEl.style.color = 'var(--color-success)';
    }
  }
  setValueText('selected-week-label', `Sem ${selectedScreenWeekIdx + 1}`);
  renderScreenTimeGrid();

  // --- Render Música Tab ---
  setValueText('guitar-badge', `${Math.round(state.guitar.hours * 10) / 10} / 600h`);
  setProgressBarWidth('guitar-progress-fill', Math.min((state.guitar.hours / 600) * 100, 100));
  renderGuitarLog();

  setValueText('covers-badge', `${publishedCoversCount} / 40`);
  setProgressBarWidth('covers-progress-fill', Math.min((publishedCoversCount / 40) * 100, 100));
  renderCoversList();
  renderWeeklySuggestions();
  
  // Render TikTok Followers Details
  setInputValue('input-followers', state.followers);
  setValueText('followers-badge', `${state.followers} / 1000 seg.`);
  setProgressBarWidth('followers-progress-fill', Math.min((state.followers / 1000) * 100, 100));

  // Bar Performance
  const barCheck = document.getElementById('check-bar-performance');
  if (barCheck) {
    barCheck.checked = state.bar.completed;
    
    const detailsContainer = document.getElementById('bar-details-container');
    if (detailsContainer) {
      detailsContainer.style.display = state.bar.completed ? 'flex' : 'none';
    }
    
    const barNameText = document.getElementById('bar-name-text');
    if (barNameText) {
      barNameText.value = state.bar.name || "";
    }
    
    const barReviewText = document.getElementById('bar-review-text');
    if (barReviewText) {
      barReviewText.value = state.bar.review || "";
    }
  }

  // --- Render Lectura Tab ---
  setValueText('reading-badge', `${totalReadPages} / 2000 págs`);
  setProgressBarWidth('reading-progress-fill', Math.min((totalReadPages / 2000) * 100, 100));
  renderBooksGrid();

  setValueText('college-badge', `${state.subjects.filter(s => s.passed).length} / ${state.subjects.length}`);
  renderSubjects();

  // --- Render Bienestar Tab ---
  setValueText('relationship-badge', `${state.sara.moments.length} Momentos`);
  const saraTripCheck = document.getElementById('check-sara-trip');
  if (saraTripCheck) {
    saraTripCheck.checked = state.sara.tripCompleted;
    const tripItem = document.getElementById('trip-checklist-item');
    if (tripItem) {
      if (state.sara.tripCompleted) tripItem.classList.add('checked');
      else tripItem.classList.remove('checked');
    }
  }
  renderMomentsList();

  // --- Render Finanzas Tab ---
  setValueText('finance-badge', `$${totalSavings.toLocaleString('es-AR')} / $1.300.000`);
  setProgressBarWidth('finance-progress-fill', Math.min((Math.max(totalSavings, 0) / 1300000) * 100, 100));
  renderFinanceLog();
}

// Helpers de ayuda para actualizar el DOM
function setValueText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function setProgressBarWidth(id, percent) {
  const el = document.getElementById(id);
  if (el) el.style.width = `${percent}%`;
}

function setInputValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

// --- Component-specific Renderers ---

const GYM_WEEK_RANGES = [
  "20 Jul - 26 Jul", "27 Jul - 2 Ago", "3 Ago - 9 Ago", "10 Ago - 16 Ago", "17 Ago - 23 Ago", "24 Ago - 30 Ago",
  "31 Ago - 6 Sep", "7 Sep - 13 Sep", "14 Sep - 20 Sep", "21 Sep - 27 Sep", "28 Sep - 4 Oct", "5 Oct - 11 Oct",
  "12 Oct - 18 Oct", "19 Oct - 25 Oct", "26 Oct - 1 Nov", "2 Nov - 8 Nov", "9 Nov - 15 Nov", "16 Nov - 22 Nov",
  "23 Nov - 29 Nov", "30 Nov - 6 Dic", "7 Dic - 13 Dic", "14 Dic - 20 Dic", "21 Dic - 27 Dic", "28 Dic - 31 Dic"
];

function syncScreenTimeInputs() {
  const val = state.screenTime[selectedScreenWeekIdx];
  const hrsInput = document.getElementById('input-screen-hours');
  const minsInput = document.getElementById('input-screen-mins');
  if (val !== null) {
    if (hrsInput) hrsInput.value = Math.floor(val / 60);
    if (minsInput) minsInput.value = val % 60;
  } else {
    if (hrsInput) hrsInput.value = "";
    if (minsInput) minsInput.value = "";
  }
  
  // Sincronizar el mes seleccionado correspondiente a esta semana
  selectedScreenMonthIdx = Math.floor(selectedScreenWeekIdx / 4);

  // Mostrar la semana y sus fechas correspondientes en la etiqueta del input
  setValueText('selected-week-label', `Sem ${selectedScreenWeekIdx + 1} (${GYM_WEEK_RANGES[selectedScreenWeekIdx]})`);
}

function renderScreenTimeGrid() {
  const tabsContainer = document.getElementById('screen-month-tabs');
  if (tabsContainer) {
    tabsContainer.innerHTML = "";
    SCREEN_MONTHS.forEach((m, idx) => {
      const btn = document.createElement('button');
      btn.className = `btn btn-sm`;
      btn.style.fontSize = '0.72rem';
      btn.style.padding = '4px 10px';
      btn.style.borderRadius = '20px';
      btn.style.fontFamily = 'var(--font-title)';
      btn.style.whiteSpace = 'nowrap';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.2s';
      
      if (idx === selectedScreenMonthIdx) {
        btn.style.background = 'var(--color-cyan)';
        btn.style.color = '#000';
        btn.style.border = 'none';
        btn.style.fontWeight = 'bold';
      } else {
        btn.style.background = 'rgba(255,255,255,0.02)';
        btn.style.color = 'var(--color-text-muted)';
        btn.style.border = '1px solid rgba(255,255,255,0.06)';
      }
      
      btn.innerText = m.name;
      btn.addEventListener('click', () => {
        selectedScreenMonthIdx = idx;
        selectedScreenWeekIdx = idx * 4;
        syncScreenTimeInputs();
        renderScreenTimeGrid();
      });
      tabsContainer.appendChild(btn);
    });
  }

  const container = document.getElementById('screen-time-grid');
  if (!container) return;

  container.innerHTML = "";
  const startIdx = selectedScreenMonthIdx * 4;
  for (let i = startIdx; i < startIdx + 4; i++) {
    const val = state.screenTime[i];
    const hasVal = val !== null;
    const isOverLimit = hasVal && val > 210; // > 3h 30m
    
    let activeClass = "";
    if (i === selectedScreenWeekIdx) {
      activeClass = "selected-week";
    } else if (hasVal) {
      activeClass = isOverLimit ? 'active-over' : 'active-ok';
    }

    const displayTime = hasVal ? `${Math.floor(val / 60)}h${val % 60 ? ` ${val % 60}m` : ""}` : "--";

    const weekEl = document.createElement('div');
    weekEl.className = `sleep-month ${activeClass}`;
    weekEl.style.padding = '8px 10px';
    weekEl.innerHTML = `
      <div style="font-size: 0.82rem; font-weight: 600; font-family: var(--font-title); line-height: 1.2;">Semana ${i + 1}</div>
      <div style="font-size: 0.65rem; color: var(--color-text-muted); margin: 3px 0;">${GYM_WEEK_RANGES[i]}</div>
      <div style="font-size: 0.8rem; font-weight: 700; margin-top: 4px; color: ${i === selectedScreenWeekIdx ? '#fff' : (hasVal ? (isOverLimit ? 'var(--color-pink)' : 'var(--color-success)') : 'var(--color-text-muted)')};">${displayTime}</div>
    `;
    
    weekEl.addEventListener('click', () => {
      selectedScreenWeekIdx = i;
      syncScreenTimeInputs();
      renderScreenTimeGrid();
    });
    container.appendChild(weekEl);
  }
}

window.onScreenTimeInputChange = function() {
  const hrsInput = document.getElementById('input-screen-hours');
  const minsInput = document.getElementById('input-screen-mins');
  if (!hrsInput || !minsInput) return;

  const hrsStr = hrsInput.value.trim();
  const minsStr = minsInput.value.trim();

  if (hrsStr === "" && minsStr === "") {
    state.screenTime[selectedScreenWeekIdx] = null;
  } else {
    const hrs = parseInt(hrsStr) || 0;
    const mins = parseInt(minsStr) || 0;

    const validHrs = Math.max(0, Math.min(23, hrs));
    const validMins = Math.max(0, Math.min(59, mins));

    state.screenTime[selectedScreenWeekIdx] = validHrs * 60 + validMins;
  }

  localStorage.setItem('goals_2026_state', JSON.stringify(state));
  
  const screenRegisteredCount = state.screenTime.filter(w => w !== null).length;
  const screenTotalMins = state.screenTime.filter(w => w !== null).reduce((acc, curr) => acc + curr, 0);
  const screenAvgMins = screenRegisteredCount > 0 ? Math.round(screenTotalMins / screenRegisteredCount) : 0;
  const screenAvgHoursStr = screenAvgMins > 0 ? `${Math.floor(screenAvgMins / 60)}h ${screenAvgMins % 60}m` : "--";

  setValueText('screen-time-badge', `Prom: ${screenAvgHoursStr}`);
  setValueText('sum-val-screentime', screenAvgHoursStr);
  let screenTimeProgress = 0;
  if (screenRegisteredCount > 0) {
    screenTimeProgress = screenAvgMins <= 210 ? 100 : Math.max(0, Math.round((1 - (screenAvgMins - 210) / 210) * 100));
  }
  setProgressBarWidth('sum-progress-screentime', screenTimeProgress);
  
  const badgeEl = document.getElementById('screen-time-badge');
  if (badgeEl) {
    if (screenAvgMins > 210) {
      badgeEl.style.color = 'var(--color-pink)';
    } else {
      badgeEl.style.color = 'var(--color-success)';
    }
  }

  renderScreenTimeGrid();
  updateGlobalProgressDOM();
};

function renderGuitarLog() {
  const container = document.getElementById('guitar-log-list');
  if (!container) return;

  container.innerHTML = "";
  if (state.guitar.log.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center; padding: 20px 0;">No hay prácticas registradas aún.</p>`;
    return;
  }

  // Mostrar log ordenado por fecha descendente
  const sortedLog = [...state.guitar.log].sort((a, b) => new Date(b.date) - new Date(a.date));
  sortedLog.forEach(item => {
    const el = document.createElement('div');
    el.className = 'diary-item';
    el.innerHTML = `
      <div class="diary-header">
        <span class="diary-date">${formatDate(item.date)}</span>
      </div>
      <div class="diary-content">+${item.hours} ${item.hours === 1 ? 'hora' : 'horas'} de guitarra</div>
      <button class="diary-delete-btn" onclick="deleteGuitarLog('${item.id}')">${ICON_TRASH}</button>
    `;
    container.appendChild(el);
  });
}

function renderCoversList() {
  const container = document.getElementById('covers-list');
  if (!container) return;

  container.innerHTML = "";
  if (state.covers.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center; padding: 20px 0;">No has añadido covers aún. ¡Planifica tu primero!</p>`;
    return;
  }

  // Ordenar: primero los planeados, después los publicados.
  const sorted = [...state.covers].sort((a, b) => a.published - b.published);
  
  sorted.forEach(cover => {
    const el = document.createElement('div');
    el.className = 'cover-item';
    
    const videoId = getTikTokVideoId(cover.link);
    const hasVideo = !!videoId;

    // Obtener imagen del cover
    let albumArtUrl = cover.artUrl || "";
    const lookupTitle = cover.title.trim();

    // Fallback temporal si no hay URL guardada
    if (!albumArtUrl) {
      albumArtUrl = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=120&auto=format&fit=crop";
      
      // Buscar asincrónicamente en iTunes Search API
      let query = lookupTitle;
      if (lookupTitle.includes('-')) {
        const parts = lookupTitle.split('-');
        query = `${parts[0].trim()} ${parts[1].trim()}`;
      }
      
      fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=1&entity=song`)
        .then(res => res.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            const highResArt = data.results[0].artworkUrl100.replace('100x100bb', '250x250bb');
            
            // Actualizar en el DOM
            const imgEl = document.getElementById(`cover-img-${cover.id}`);
            if (imgEl) imgEl.src = highResArt;
            
            // Guardar en state y localStorage sin re-renderizar para evitar loops infinitos
            cover.artUrl = highResArt;
            localStorage.setItem('goals_2026_state', JSON.stringify(state));
          }
        })
        .catch(err => console.error("Error buscando portada de " + lookupTitle, err));
    }

    el.innerHTML = `
      <div style="display: flex; gap: 12px; align-items: flex-start; width: 100%;">
        <img id="cover-img-${cover.id}" class="cover-thumbnail" src="${albumArtUrl}" alt="Portada" onerror="this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=120&auto=format&fit=crop'">
        <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;">
          <div class="cover-header" style="margin-bottom: 0; align-items: center;">
            <span class="cover-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; max-width: 100%; font-size: 0.9rem;" title="${cover.title}">${cover.title}</span>
            <span style="font-size: 0.7rem; color: var(--color-text-muted); flex-shrink: 0; margin-left: 8px;">${formatDate(cover.date)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <input type="checkbox" ${cover.published ? 'checked' : ''} onchange="toggleCoverPublished('${cover.id}')" style="cursor: pointer; width: 14px; height: 14px; accent-color: var(--color-cyan);">
            <span style="font-size: 0.78rem; color: #fff;">${cover.published ? 'Publicado' : 'Pendiente de publicar'}</span>
            ${hasVideo ? `<button class="btn btn-sm btn-cyan" onclick="toggleTikTokEmbed('${cover.id}', '${videoId}')" style="margin-left: 12px; font-size: 0.7rem; padding: 3px 6px; font-family: var(--font-title);">Reproducir</button>` : ''}
            <button class="btn btn-sm btn-icon-only" onclick="openEditCoverModal('${cover.id}')" title="Editar Cover" style="margin-left: auto; position: static; width: 26px; height: 26px;">
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <button class="diary-delete-btn" onclick="deleteCover('${cover.id}')" style="position: static; margin-left: 6px;">${ICON_TRASH}</button>
          </div>
        </div>
      </div>
      ${cover.improvement ? `<div class="cover-improvement" style="margin-top: 6px;">💡 Mejora: ${cover.improvement}</div>` : ''}
      <div id="embed-container-${cover.id}" style="margin-top: 12px; display: none; width: 100%; border-radius: 8px; overflow: hidden; background: #000; border: 1px solid var(--border-color);"></div>
    `;
    container.appendChild(el);
  });

  // Desplazar automáticamente al final para ver los últimos covers agregados/editados
  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 100);
}

function renderBooksGrid() {
  const container = document.getElementById('books-container');
  if (!container) return;

  container.innerHTML = "";
  state.books.forEach((book, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'book-item';
    
    const percent = Math.round((book.readPages / book.totalPages) * 100);
    
    // Portada del libro o fallback si no está cargada aún
    const coverImg = book.coverUrl || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=120&auto=format&fit=crop';

    itemEl.innerHTML = `
      <img class="book-cover" src="${coverImg}" alt="Portada de ${book.title}" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=120&auto=format&fit=crop'">
      <div class="book-details">
        <div class="book-title-row">
          <span class="book-title">${book.title}</span>
          <span class="progress-value" style="font-size: 0.85rem;">${book.readPages} / ${book.totalPages} págs (${percent}%)</span>
        </div>
        <div class="progress-track" style="height: 6px;"><div class="progress-fill bg-violet" style="width: ${percent}%;"></div></div>
        <div class="book-progress-input">
          <label for="book-${idx}-input" style="font-size: 0.8rem; color: var(--color-text-muted);">Leídas:</label>
          <input type="number" id="book-${idx}-input" class="input-sm" value="${book.readPages}" min="0" max="${book.totalPages}" style="padding: 4px 8px; width: 65px;">
          <button class="btn btn-sm btn-icon-only" onclick="updateBookPages(${idx})" title="Guardar páginas">${ICON_SAVE}</button>
          <button class="btn btn-sm" onclick="addBookPages(${idx}, 5)" style="font-size: 0.75rem; padding: 4px 6px; font-family: var(--font-title); font-weight: 600; min-width: 28px;">+5</button>
          <button class="btn btn-sm" onclick="addBookPages(${idx}, 10)" style="font-size: 0.75rem; padding: 4px 6px; font-family: var(--font-title); font-weight: 600; min-width: 28px;">+10</button>
          <button class="btn btn-sm btn-icon-only" onclick="openEditBookModal(${idx})" title="Editar libro">
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button class="btn btn-sm btn-icon-only" onclick="moveBookUp(${idx})" title="Subir orden" ${idx === 0 ? 'disabled style="opacity: 0.25; cursor: default;"' : ''}>
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>
          <button class="btn btn-sm btn-icon-only" onclick="moveBookDown(${idx})" title="Bajar orden" ${idx === state.books.length - 1 ? 'disabled style="opacity: 0.25; cursor: default;"' : ''}>
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <button class="btn btn-sm btn-success" onclick="markBookAsRead(${idx})" style="font-size: 0.75rem; padding: 4px 8px;">Leído ✓</button>
          <button class="diary-delete-btn" onclick="deleteBook(${idx})" style="position: static; margin-left: auto;">${ICON_TRASH}</button>
        </div>
      </div>
    `;
    container.appendChild(itemEl);
  });
}

function renderSubjects() {
  const container = document.getElementById('subjects-container');
  if (!container) return;

  container.innerHTML = "";
  if (state.subjects.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center; padding: 10px 0;">No has registrado materias aún.</p>`;
    return;
  }

  state.subjects.forEach(sub => {
    const el = document.createElement('div');
    el.className = `checklist-item ${sub.passed ? 'checked' : ''}`;
    el.innerHTML = `
      <input type="checkbox" ${sub.passed ? 'checked' : ''} onchange="toggleSubject('${sub.id}')">
      <span class="checklist-item-text">${sub.name}</span>
      <button class="diary-delete-btn" onclick="deleteSubject('${sub.id}')" style="position: static; color: var(--color-text-muted);">${ICON_TRASH}</button>
    `;
    container.appendChild(el);
  });
}

function renderMomentsList() {
  const container = document.getElementById('moments-list');
  if (!container) return;

  container.innerHTML = "";
  if (state.sara.moments.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center; padding: 20px 0;">No hay recuerdos registrados todavía. ¡Planifica una salida!</p>`;
    return;
  }

  const sorted = [...state.sara.moments].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach(m => {
    const el = document.createElement('div');
    el.className = 'diary-item';
    el.innerHTML = `
      <div class="diary-header">
        <span class="diary-date">${formatDate(m.date)}</span>
      </div>
      <div class="diary-content">${m.desc}</div>
      <button class="diary-delete-btn" onclick="deleteMoment('${m.id}')">${ICON_TRASH}</button>
    `;
    container.appendChild(el);
  });
}

function renderThoughtsList() {
  const container = document.getElementById('thoughts-list');
  if (!container) return;

  container.innerHTML = "";
  if (state.mind.thoughts.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center; padding: 20px 0;">No hay reflexiones registradas aún.</p>`;
    return;
  }

  const moodLabels = {
    MuyBueno: "Muy Contento 😊",
    Bueno: "Bien 🙂",
    Neutral: "Neutral 😐",
    Malo: "Preocupado 😟"
  };

  const sorted = [...state.mind.thoughts].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach(t => {
    const el = document.createElement('div');
    el.className = 'diary-item';
    el.innerHTML = `
      <div class="diary-header" style="align-items: center;">
        <span class="diary-date">${formatDate(t.date)}</span>
        <span class="mood-badge mood-${t.mood}">${moodLabels[t.mood] || t.mood}</span>
      </div>
      <div class="diary-content" style="margin-top: 6px;">${t.text}</div>
      <button class="diary-delete-btn" onclick="deleteThought('${t.id}')">${ICON_TRASH}</button>
    `;
    container.appendChild(el);
  });
}

function renderPsychSessionsList() {
  const container = document.getElementById('psych-sessions-list');
  if (!container) return;

  container.innerHTML = "";
  if (state.mind.sessions.length === 0) {
    container.innerHTML = `<li style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center;">No hay sesiones registradas.</li>`;
    return;
  }

  const sorted = [...state.mind.sessions].sort((a, b) => new Date(b) - new Date(a));
  sorted.forEach((sess, idx) => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.fontSize = '0.9rem';
    li.style.borderBottom = '1px solid rgba(255, 255, 255, 0.04)';
    li.style.padding = '4px 0';
    li.innerHTML = `
      <span>Sesión #${idx + 1} - ${formatDate(sess)}</span>
      <button class="diary-delete-btn" onclick="deletePsychSession(${idx})" style="position: static;">${ICON_TRASH}</button>
    `;
    container.appendChild(li);
  });
}

function renderFinanceLog() {
  const container = document.getElementById('finance-log-list');
  if (!container) return;

  container.innerHTML = "";
  if (state.finance.log.length === 0) {
    container.innerHTML = `<p style="color: var(--color-text-muted); font-size: 0.85rem; text-align: center; padding: 20px 0;">No hay movimientos registrados.</p>`;
    return;
  }

  const sorted = [...state.finance.log].sort((a, b) => new Date(b.date) - new Date(a.date));
  sorted.forEach(item => {
    const el = document.createElement('div');
    el.className = 'diary-item';
    const isSave = item.type === 'ahorro';
    const linkHTML = item.link ? ` <a href="${item.link}" target="_blank" style="color: var(--color-gold); font-size: 0.75rem; text-decoration: underline; margin-left: 8px; display: inline-flex; align-items: center; gap: 3px;">🔗 Enlace</a>` : "";
    el.innerHTML = `
      <div class="diary-header">
        <span class="diary-date">${formatDate(item.date)}</span>
        <span style="font-weight: 700; color: ${isSave ? 'var(--color-success)' : 'var(--color-pink)'};">
          ${isSave ? '+' : '-'}$${item.amount.toLocaleString('es-AR')}
        </span>
      </div>
      <div class="diary-content" style="display: flex; align-items: center; justify-content: space-between; padding-right: 24px;">
        <span>${item.desc || (isSave ? 'Ahorro' : 'Retiro')}${linkHTML}</span>
      </div>
      <button class="diary-delete-btn" onclick="deleteFinanceRecord('${item.id}')">${ICON_TRASH}</button>
    `;
    container.appendChild(el);
  });
}

// --- Action Listeners & Event Callbacks ---

// Gym
window.updateGymWeight = function(type) {
  const val = parseInt(document.getElementById(`input-gym-${type}`).value);
  if (isNaN(val) || val < 0) return;
  state.gym[type] = val;
  saveState();
};

// Guitar
window.addGuitarHours = function(amount) {
  state.guitar.hours += amount;
  state.guitar.log.push({
    id: generateId(),
    date: new Date().toISOString().split('T')[0],
    hours: amount
  });
  saveState();
};

window.addGuitarHoursManual = function() {
  const val = parseFloat(document.getElementById('input-guitar-manual').value);
  const dateInput = document.getElementById('input-guitar-date').value;
  if (!isNaN(val) && val > 0) {
    let targetDateStr;
    let timestamp;
    
    if (dateInput) {
      const parts = dateInput.split('-');
      if (parts.length === 3) {
        targetDateStr = dateInput; // YYYY-MM-DD
        timestamp = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])).getTime();
      } else {
        targetDateStr = new Date().toISOString().split('T')[0];
        timestamp = Date.now();
      }
    } else {
      targetDateStr = new Date().toISOString().split('T')[0];
      timestamp = Date.now();
    }
    
    state.guitar.hours += val;
    const existingEntry = state.guitar.log.find(entry => entry.date === targetDateStr);
    if (existingEntry) {
      existingEntry.hours += val;
    } else {
      state.guitar.log.unshift({ id: generateId(), date: targetDateStr, hours: val, timestamp: timestamp });
    }
    state.guitar.log.sort((a,b) => b.timestamp - a.timestamp);
    saveState();
    updateUI();
    document.getElementById('input-guitar-manual').value = '';
    document.getElementById('input-guitar-date').value = '';
    createFloatingParticle('🎸', event || document.body);
  }
};

window.deleteGuitarLog = function(id) {
  const item = state.guitar.log.find(l => l.id === id);
  if (item) {
    state.guitar.hours = Math.max(state.guitar.hours - item.hours, 0);
    state.guitar.log = state.guitar.log.filter(l => l.id !== id);
    saveState();
    updateUI();
  }
};

// TikTok Covers
document.getElementById('btn-add-cover').addEventListener('click', () => {
  document.getElementById('input-cover-title').value = "";
  document.getElementById('input-cover-improvement').value = "";
  document.getElementById('input-cover-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('input-cover-link').value = "";
  document.getElementById('input-cover-art-url').value = "";
  document.getElementById('input-cover-published').checked = false;
  openModal('modal-cover');
});

document.getElementById('btn-save-cover-modal').addEventListener('click', () => {
  const title = document.getElementById('input-cover-title').value.trim();
  const improvement = document.getElementById('input-cover-improvement').value.trim();
  const date = document.getElementById('input-cover-date').value;
  const link = document.getElementById('input-cover-link').value.trim();
  const artUrl = document.getElementById('input-cover-art-url').value.trim();
  const published = document.getElementById('input-cover-published').checked;

  if (!title || !date) {
    alert("Por favor ingresa un título y una fecha.");
    return;
  }

  state.covers.push({
    id: generateId(),
    title,
    improvement,
    date,
    published,
    link,
    artUrl
  });

  saveState();
  closeModal('modal-cover');
});

window.toggleCoverPublished = function(id) {
  state.covers = state.covers.map(c => c.id === id ? { ...c, published: !c.published } : c);
  saveState();
};

window.deleteCover = function(id) {
  if (confirm("¿Estás seguro de eliminar este cover?")) {
    state.covers = state.covers.filter(c => c.id !== id);
    saveState();
  }
};

window.openEditCoverModal = function(id) {
  const cover = state.covers.find(c => c.id === id);
  if (!cover) return;

  document.getElementById('input-edit-cover-id').value = cover.id;
  document.getElementById('input-edit-cover-title').value = cover.title || "";
  document.getElementById('input-edit-cover-improvement').value = cover.improvement || "";
  document.getElementById('input-edit-cover-date').value = cover.date || "";
  document.getElementById('input-edit-cover-link').value = cover.link || "";
  document.getElementById('input-edit-cover-art-url').value = cover.artUrl || "";
  document.getElementById('input-edit-cover-published').checked = !!cover.published;

  openModal('modal-edit-cover');
};

window.saveCoverEditChanges = function() {
  const id = document.getElementById('input-edit-cover-id').value;
  const title = document.getElementById('input-edit-cover-title').value.trim();
  const improvement = document.getElementById('input-edit-cover-improvement').value.trim();
  const date = document.getElementById('input-edit-cover-date').value;
  const link = document.getElementById('input-edit-cover-link').value.trim();
  const artUrl = document.getElementById('input-edit-cover-art-url').value.trim();
  const published = document.getElementById('input-edit-cover-published').checked;

  if (!title || !date) {
    alert("Por favor ingresa un título y una fecha.");
    return;
  }

  state.covers = state.covers.map(c => {
    if (c.id === id) {
      return {
        ...c,
        title,
        improvement,
        date,
        published,
        link,
        artUrl
      };
    }
    return c;
  });

  saveState();
  closeModal('modal-edit-cover');
};

// Followers
window.updateFollowersDirectly = function() {
  const el = document.getElementById('input-followers');
  if (!el) return;
  const val = parseInt(el.value) || 0;
  state.followers = val;
  
  localStorage.setItem('goals_2026_state', JSON.stringify(state));
  
  const badge = document.getElementById('followers-badge');
  if (badge) badge.innerText = `${val} / 1000 seg.`;
  
  const fill = document.getElementById('followers-progress-fill');
  if (fill) fill.style.width = `${Math.min((val / 1000) * 100, 100)}%`;
  
  updateGlobalProgressDOM();
};

// Bar Performance Check
const checkBar = document.getElementById('check-bar-performance');
if (checkBar) {
  checkBar.addEventListener('change', (e) => {
    state.bar.completed = e.target.checked;
    saveState();
  });
}

window.saveBarDetails = function() {
  const nameInput = document.getElementById('bar-name-text');
  const reviewInput = document.getElementById('bar-review-text');
  if (!nameInput || !reviewInput) return;

  state.bar.name = nameInput.value.trim();
  state.bar.review = reviewInput.value.trim();

  saveState();
  alert("¡Detalles del show guardados con éxito! 🎸🍻");
};

// Books
document.getElementById('btn-add-book').addEventListener('click', () => {
  document.getElementById('input-book-search').value = "";
  document.getElementById('input-book-title').value = "";
  document.getElementById('input-book-pages').value = "";
  document.getElementById('input-book-cover').value = "";
  const bookUrlInput = document.getElementById('input-book-url');
  if (bookUrlInput) bookUrlInput.value = "";
  const previewContainer = document.getElementById('book-modal-preview-container');
  if (previewContainer) previewContainer.style.display = 'none';
  const resultsContainer = document.getElementById('book-search-results');
  if (resultsContainer) {
    resultsContainer.innerHTML = "";
    resultsContainer.style.display = 'none';
  }
  openModal('modal-book');
});

document.getElementById('btn-save-book-modal').addEventListener('click', () => {
  const title = document.getElementById('input-book-title').value.trim();
  const pages = parseInt(document.getElementById('input-book-pages').value);
  const coverUrl = document.getElementById('input-book-cover').value;

  if (!title || isNaN(pages) || pages <= 0) {
    alert("Por favor ingresa un título de libro válido y total de páginas.");
    return;
  }

  state.books.push({
    title,
    totalPages: pages,
    readPages: 0,
    coverUrl: coverUrl || ""
  });

  saveState();
  closeModal('modal-book');
});

window.updateBookPages = function(idx) {
  const val = parseInt(document.getElementById(`book-${idx}-input`).value);
  if (isNaN(val) || val < 0) return;
  
  const book = state.books[idx];
  if (val > book.totalPages) {
    alert(`No puedes leer más páginas que las que tiene el libro (${book.totalPages}).`);
    return;
  }
  
  state.books[idx].readPages = val;
  saveState();
};

window.addBookPages = function(idx, amount) {
  const book = state.books[idx];
  book.readPages = Math.min(book.readPages + amount, book.totalPages);
  saveState();
};

window.markBookAsRead = function(idx) {
  state.books[idx].readPages = state.books[idx].totalPages;
  saveState();
};

window.deleteBook = function(idx) {
  if (confirm(`¿Estás seguro de eliminar el libro "${state.books[idx].title}"?`)) {
    state.books.splice(idx, 1);
    saveState();
  }
};

window.moveBookUp = function(idx) {
  if (idx <= 0) return;
  const temp = state.books[idx];
  state.books[idx] = state.books[idx - 1];
  state.books[idx - 1] = temp;
  saveState();
};

window.moveBookDown = function(idx) {
  if (idx >= state.books.length - 1) return;
  const temp = state.books[idx];
  state.books[idx] = state.books[idx + 1];
  state.books[idx + 1] = temp;
  saveState();
};

// Subjects
window.addNewSubject = function() {
  const input = document.getElementById('input-subject-name');
  const name = input.value.trim();
  if (!name) return;

  state.subjects.push({
    id: generateId(),
    name: name,
    passed: false
  });
  input.value = "";
  saveState();
};

window.toggleSubject = function(id) {
  state.subjects = state.subjects.map(s => s.id === id ? { ...s, passed: !s.passed } : s);
  saveState();
};

window.deleteSubject = function(id) {
  state.subjects = state.subjects.filter(s => s.id !== id);
  saveState();
};

// Sara Moments
document.getElementById('btn-add-moment').addEventListener('click', () => {
  document.getElementById('input-moment-desc').value = "";
  document.getElementById('input-moment-date').value = new Date().toISOString().split('T')[0];
  openModal('modal-moment');
});

document.getElementById('btn-save-moment-modal').addEventListener('click', () => {
  const desc = document.getElementById('input-moment-desc').value.trim();
  const date = document.getElementById('input-moment-date').value;

  if (!desc || !date) {
    alert("Ingresa una descripción y fecha.");
    return;
  }

  state.sara.moments.push({
    id: generateId(),
    desc,
    date
  });

  saveState();
  closeModal('modal-moment');
});

window.deleteMoment = function(id) {
  if (confirm("¿Estás seguro de eliminar este momento?")) {
    state.sara.moments = state.sara.moments.filter(m => m.id !== id);
    saveState();
  }
};

// Sara Trip
const checkTrip = document.getElementById('check-sara-trip');
if (checkTrip) {
  checkTrip.addEventListener('change', (e) => {
    state.sara.tripCompleted = e.target.checked;
    saveState();
  });
}

// Thoughts & Mood
window.saveThought = function() {
  const input = document.getElementById('input-thought-text');
  const text = input.value.trim();
  const mood = document.getElementById('select-thought-mood').value;

  if (!text) return;

  state.mind.thoughts.push({
    id: generateId(),
    date: new Date().toISOString().split('T')[0],
    text,
    mood
  });
  input.value = "";
  saveState();
};

window.deleteThought = function(id) {
  if (confirm("¿Estás seguro de eliminar esta reflexión?")) {
    state.mind.thoughts = state.mind.thoughts.filter(t => t.id !== id);
    saveState();
  }
};

// Therapy sessions
window.addPsychSession = function() {
  const input = document.getElementById('input-psych-date');
  const date = input.value;
  if (!date) return;

  state.mind.sessions.push(date);
  input.value = "";
  saveState();
};

window.deletePsychSession = function(idx) {
  state.mind.sessions.splice(idx, 1);
  saveState();
};

// Affirmations
let currentAffirmationIdx = 0;
document.getElementById('btn-next-affirmation').addEventListener('click', () => {
  currentAffirmationIdx = (currentAffirmationIdx + 1) % AFFIRMATIONS.length;
  document.getElementById('affirmation-display').innerText = `"${AFFIRMATIONS[currentAffirmationIdx]}"`;
});

// Finance
window.addFinanceRecord = function() {
  const amountInput = document.getElementById('input-finance-amount');
  const amount = parseInt(amountInput.value);
  const type = document.getElementById('select-finance-type').value;
  const descInput = document.getElementById('input-finance-desc');
  const desc = descInput.value.trim();
  const linkInput = document.getElementById('input-finance-link');
  const link = linkInput ? linkInput.value.trim() : "";

  if (isNaN(amount) || amount <= 0) {
    alert("Ingresa un monto válido.");
    return;
  }

  state.finance.log.push({
    id: generateId(),
    date: new Date().toISOString().split('T')[0],
    amount,
    type,
    desc,
    link
  });

  amountInput.value = "";
  descInput.value = "";
  if (linkInput) linkInput.value = "";
  saveState();
};

window.deleteFinanceRecord = function(id) {
  if (confirm("¿Estás seguro de eliminar este registro financiero?")) {
    state.finance.log = state.finance.log.filter(f => f.id !== id);
    saveState();
  }
};

// --- General Utilities ---

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00'); // Evita desfase por zona horaria
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
}

window.updateFollowers = function() {
  const el = document.getElementById('input-followers');
  if (!el) return;
  const val = parseInt(el.value) || 0;
  state.followers = val;
  
  localStorage.setItem('goals_2026_state', JSON.stringify(state));
  
  const badge = document.getElementById('followers-badge');
  if (badge) badge.innerText = `${val} / 1000 seg.`;
  
  const fill = document.getElementById('followers-progress-fill');
  if (fill) fill.style.width = `${Math.min((val / 1000) * 100, 100)}%`;
  
  updateGlobalProgressDOM();
};

window.updateTikTokLikes = function() {
  const el = document.getElementById('input-tiktok-likes');
  if (!el) return;
  const val = parseInt(el.value) || 0;
  state.tiktok.likes = val;
  
  localStorage.setItem('goals_2026_state', JSON.stringify(state));
};

function updateGlobalProgressDOM() {
  const progressMetrics = calculateGoalsProgress();

  const globalProgressCircle = document.getElementById('global-progress-circle');
  if (globalProgressCircle) {
    const radius = 30;
    const circumference = 2 * Math.PI * radius; // ~188.4
    const offset = circumference - (progressMetrics.overallPercent / 100) * circumference;
    globalProgressCircle.style.strokeDashoffset = offset;
  }
  
  const globalProgressPercent = document.getElementById('global-progress-percent');
  if (globalProgressPercent) globalProgressPercent.innerText = `${progressMetrics.overallPercent}%`;

  const globalProgressSummary = document.getElementById('global-progress-summary');
  if (globalProgressSummary) {
    globalProgressSummary.innerText = `${progressMetrics.completedCount} / ${progressMetrics.totalGoals} Objetivos`;
  }
}



window.calculateGym1RM = function(type) {
  const inputEl = document.getElementById(`input-${type}-1rm`);
  const resultEl = document.getElementById(`${type}-1rm-result`);
  if (!inputEl || !resultEl) return;

  const valStr = inputEl.value.trim();
  if (!valStr) {
    if (type === 'pb') {
      resultEl.innerText = "1RM: -- kg";
    } else {
      resultEl.innerText = "-- kg (1RM: -- kg)";
    }
    window[`lastCalculated1RM_${type}`] = 0;
    window[`lastCalculatedWeight_${type}`] = 0;
    return;
  }

  // Parsear formato: peso x repeticiones (ej. 80x5, 80 x 5, 80*5)
  const match = valStr.match(/^(\d+(?:\.\d+)?)\s*[xX*,-]\s*(\d+)$/);
  let weight = 0;
  let reps = 1;

  if (match) {
    weight = parseFloat(match[1]);
    reps = parseInt(match[2]);
  } else {
    // Si solo ponen un número, asumimos que son repeticiones de 1 (su RM directo)
    const singleNum = parseFloat(valStr);
    if (!isNaN(singleNum)) {
      weight = singleNum;
      reps = 1;
    } else {
      if (type === 'pb') {
        resultEl.innerText = "1RM: -- kg";
      } else {
        resultEl.innerText = "-- kg (1RM: -- kg)";
      }
      window[`lastCalculated1RM_${type}`] = 0;
      window[`lastCalculatedWeight_${type}`] = 0;
      return;
    }
  }

  if (weight <= 0 || reps <= 0) {
    if (type === 'pb') {
      resultEl.innerText = "1RM: -- kg";
    } else {
      resultEl.innerText = "-- kg (1RM: -- kg)";
    }
    window[`lastCalculated1RM_${type}`] = 0;
    window[`lastCalculatedWeight_${type}`] = 0;
    return;
  }

  let oneRepMax = weight;
  if (reps > 1) {
    // Ecuación de Brzycki para <= 10 repeticiones (más precisa)
    if (reps <= 10) {
      oneRepMax = weight / (1.0278 - (0.0278 * reps));
    } else {
      // Ecuación de Epley para > 10 repeticiones
      oneRepMax = weight * (1 + (reps / 30));
    }
  }

  const rounded1RM = Math.round(oneRepMax);
  const roundedWeight = Math.round(weight);

  if (type === 'pb') {
    resultEl.innerText = `1RM: ${rounded1RM} kg`;
  } else {
    resultEl.innerText = `${roundedWeight} kg (1RM: ${rounded1RM} kg)`;
  }

  window[`lastCalculated1RM_${type}`] = rounded1RM;
  window[`lastCalculatedWeight_${type}`] = roundedWeight;
};

window.applyGym1RM = function(type) {
  // Para Press de Banca (pb), aplicamos el 1RM. Para Hip Thrust (ht) aplicamos el Peso de Trabajo.
  const val = (type === 'pb') ? window[`lastCalculated1RM_${type}`] : window[`lastCalculatedWeight_${type}`];
  if (val && val > 0) {
    state.gym[type] = val;
    saveState();
    
    // Limpiar entrada del calculador
    const inputEl = document.getElementById(`input-${type}-1rm`);
    const resultEl = document.getElementById(`${type}-1rm-result`);
    if (inputEl) inputEl.value = "";
    if (resultEl) {
      if (type === 'pb') resultEl.innerText = "1RM: -- kg";
      else resultEl.innerText = "-- kg (1RM: -- kg)";
    }
    window[`lastCalculated1RM_${type}`] = 0;
    window[`lastCalculatedWeight_${type}`] = 0;
  }
};

function getTikTokVideoId(url) {
  if (!url) return null;
  // Match standard url: tiktok.com/@user/video/123456
  const match = url.match(/\/video\/(\d+)/);
  if (match) return match[1];
  // Match embed url: tiktok.com/embed/123456
  const matchEmbed = url.match(/\/embed\/(\d+)/);
  if (matchEmbed) return matchEmbed[1];
  // Match raw ID if they just entered the numbers
  const matchId = url.match(/^\d+$/);
  if (matchId) return url;
  return null;
}

window.toggleTikTokEmbed = function(coverId, videoId) {
  const container = document.getElementById(`embed-container-${coverId}`);
  const btn = document.querySelector(`[onclick*="toggleTikTokEmbed('${coverId}'"]`);
  if (!container) return;

  if (container.style.display === 'none') {
    container.innerHTML = `<iframe src="https://www.tiktok.com/embed/v2/${videoId}" style="width: 100%; height: 480px; border: none;" allowfullscreen></iframe>`;
    container.style.display = 'block';
    if (btn) btn.innerText = "Cerrar";
  } else {
    container.innerHTML = "";
    container.style.display = 'none';
    if (btn) btn.innerText = "Reproducir";
  }
};

let bookSearchTimeout = null;

window.searchBookAPI = function() {
  const query = document.getElementById('input-book-search').value.trim();
  const resultsContainer = document.getElementById('book-search-results');
  if (!resultsContainer) return;

  if (query.length < 3) {
    resultsContainer.innerHTML = "";
    resultsContainer.style.display = 'none';
    return;
  }

  // Debounce API calls
  clearTimeout(bookSearchTimeout);
  bookSearchTimeout = setTimeout(() => {
    resultsContainer.innerHTML = `<div style="padding: 10px; font-size: 0.8rem; color: var(--color-text-muted); text-align: center;">Buscando opciones...</div>`;
    resultsContainer.style.display = 'block';

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5`)
      .then(res => res.json())
      .then(data => {
        resultsContainer.innerHTML = "";
        if (!data.items || data.items.length === 0) {
          resultsContainer.innerHTML = `<div style="padding: 10px; font-size: 0.8rem; color: var(--color-text-muted); text-align: center;">No se encontraron resultados.</div>`;
          return;
        }

        data.items.forEach(item => {
          const info = item.volumeInfo;
          const itemEl = document.createElement('div');
          itemEl.className = 'search-result-item';
          
          const coverUrl = (info.imageLinks && (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail))
            ? info.imageLinks.thumbnail || info.imageLinks.smallThumbnail
            : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=120&auto=format&fit=crop';
            
          const coverUrlSecure = coverUrl.replace('http://', 'https://');
          const title = info.title;
          const author = info.authors ? info.authors.join(', ') : 'Autor Desconocido';
          const pages = info.pageCount || 150;

          itemEl.innerHTML = `
            <img class="search-result-cover" src="${coverUrlSecure}">
            <div class="search-result-info">
              <span class="search-result-title">${title}</span>
              <span class="search-result-author">${author} (${pages} págs)</span>
            </div>
          `;
          itemEl.addEventListener('click', () => {
            selectSearchedBook(title, pages, coverUrlSecure);
          });
          resultsContainer.appendChild(itemEl);
        });
      })
      .catch(err => {
        console.error(err);
        resultsContainer.innerHTML = `<div style="padding: 10px; font-size: 0.8rem; color: var(--color-pink); text-align: center;">Error al buscar libros.</div>`;
      });
  }, 400);
};

window.triggerBookSearch = function() {
  searchBookAPI();
};

function selectSearchedBook(title, pages, coverUrl) {
  document.getElementById('input-book-title').value = title;
  document.getElementById('input-book-pages').value = pages;
  document.getElementById('input-book-cover').value = coverUrl;
  
  const previewContainer = document.getElementById('book-modal-preview-container');
  const previewImg = document.getElementById('book-modal-preview-cover');
  const resultsContainer = document.getElementById('book-search-results');

  if (previewContainer && previewImg) {
    if (coverUrl) {
      previewImg.src = coverUrl;
      previewContainer.style.display = 'flex';
    } else {
      previewContainer.style.display = 'none';
    }
  }

  if (resultsContainer) {
    resultsContainer.style.display = 'none';
  }
}

window.handleBookCoverUpload = function(event, previewImgId, previewContainerId, hiddenInputId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Redimensionar la imagen a 150px de ancho máximo para optimizar almacenamiento en localStorage
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 150;
      const scale = MAX_WIDTH / img.width;
      canvas.width = MAX_WIDTH;
      canvas.height = img.height * scale;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
      
      const previewImg = document.getElementById(previewImgId);
      const previewContainer = document.getElementById(previewContainerId);
      if (previewImg) previewImg.src = compressedBase64;
      if (previewContainer) previewContainer.style.display = 'flex';
      
      const hiddenInput = document.getElementById(hiddenInputId);
      if (hiddenInput) hiddenInput.value = compressedBase64;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

window.handleBookCoverUrlInput = function(inputId, previewImgId, previewContainerId, hiddenInputId) {
  const url = document.getElementById(inputId).value.trim();
  const previewImg = document.getElementById(previewImgId);
  const previewContainer = document.getElementById(previewContainerId);
  const hiddenInput = document.getElementById(hiddenInputId);
  
  if (url) {
    if (previewImg) previewImg.src = url;
    if (previewContainer) previewContainer.style.display = 'flex';
    if (hiddenInput) hiddenInput.value = url;
  } else {
    if (previewContainer) previewContainer.style.display = 'none';
    if (hiddenInput) hiddenInput.value = "";
  }
};

let editingBookIdx = null;

window.openEditBookModal = function(idx) {
  editingBookIdx = idx;
  const book = state.books[idx];
  
  document.getElementById('input-edit-book-title').value = book.title;
  document.getElementById('input-edit-book-pages').value = book.totalPages;
  document.getElementById('input-edit-book-cover-url').value = book.coverUrl && !book.coverUrl.startsWith('data:') ? book.coverUrl : "";
  document.getElementById('input-edit-book-cover-data').value = book.coverUrl || "";
  
  const previewContainer = document.getElementById('edit-book-preview-container');
  const previewImg = document.getElementById('edit-book-preview-cover');
  if (previewContainer && previewImg) {
    if (book.coverUrl) {
      previewImg.src = book.coverUrl;
      previewContainer.style.display = 'flex';
    } else {
      previewContainer.style.display = 'none';
    }
  }
  
  openModal('modal-edit-book');
};

window.saveBookChanges = function() {
  if (editingBookIdx === null) return;
  const title = document.getElementById('input-edit-book-title').value.trim();
  const pages = parseInt(document.getElementById('input-edit-book-pages').value);
  const coverUrl = document.getElementById('input-edit-book-cover-data').value.trim();

  if (!title || isNaN(pages) || pages <= 0) {
    alert("Por favor ingresa un título válido y total de páginas.");
    return;
  }

  state.books[editingBookIdx].title = title;
  state.books[editingBookIdx].totalPages = pages;
  state.books[editingBookIdx].coverUrl = coverUrl;
  
  // Limitar readPages para que no supere las nuevas totalPages
  if (state.books[editingBookIdx].readPages > pages) {
    state.books[editingBookIdx].readPages = pages;
  }

  saveState();
  closeModal('modal-edit-book');
};

function fetchDefaultBookCovers() {
  let updated = false;
  const promises = state.books.map((book, idx) => {
    // Si la portada está vacía o es una vieja portada genérica/de Open Library, la actualizamos
    if (!book.coverUrl || book.coverUrl.includes('unsplash.com') || book.coverUrl.includes('openlibrary.org')) {
      const searchQuery = book.title;
      return fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&maxResults=1`)
        .then(res => res.json())
        .then(data => {
          if (data.items && data.items[0] && data.items[0].volumeInfo.imageLinks) {
            const thumb = data.items[0].volumeInfo.imageLinks.thumbnail || data.items[0].volumeInfo.imageLinks.smallThumbnail;
            if (thumb) {
              state.books[idx].coverUrl = thumb.replace('http://', 'https://');
              updated = true;
            }
          }
        })
        .catch(err => console.error("Error buscando portada Google para: " + book.title, err));
    }
    return Promise.resolve();
  });

  Promise.all(promises).then(() => {
    if (updated) {
      saveState();
      renderBooksGrid();
    }
  });
}

// --- Initialize App ---

loadState();
updateUI();
syncScreenTimeInputs();
fetchDefaultBookCovers();

// Cargar la pestaña activa persistida o usar 'dashboard' por defecto
const activeTab = localStorage.getItem('active_tab') || 'dashboard';
switchTab(activeTab, false);

// Configurar frase inicial de afirmación
document.getElementById('affirmation-display').innerText = `"${AFFIRMATIONS[currentAffirmationIdx]}"`;

// --- AI Cover Reviewer Logic ---
window.handleAiVideoUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const thinkingBox = document.getElementById('ai-thinking-box');
  const thinkingSteps = document.getElementById('ai-thinking-steps');
  const resultBox = document.getElementById('ai-result-box');

  if (!thinkingBox || !thinkingSteps || !resultBox) return;

  // Reset y Mostrar pensando
  resultBox.style.display = 'none';
  thinkingBox.style.display = 'block';
  thinkingSteps.innerHTML = "";

  const steps = [
    `<img src="https://emojicdn.elk.sh/🔎" class="apple-emoji-sm" alt="🔎"> [Paso 1/4] Analizando espectrograma de audio e identificando la afinación del cover...`,
    `<img src="https://emojicdn.elk.sh/⚡" class="apple-emoji-sm" alt="⚡"> [Paso 2/4] Detectando cambios de plano rápidos y sincronización del hook inicial (primeros 3 segundos)...`,
    `<img src="https://emojicdn.elk.sh/🎨" class="apple-emoji-sm" alt="🎨"> [Paso 3/4] Evaluando el contraste del texto/subtítulos y los patrones de retención visual del video...`,
    `<img src="https://emojicdn.elk.sh/🧠" class="apple-emoji-sm" alt="🧠"> [Paso 4/4] Contrastando con métricas de la base de datos de algoritmos de TikTok y generando veredicto final...`
  ];

  let currentStep = 0;
  
  function runStep() {
    if (currentStep < steps.length) {
      thinkingSteps.innerHTML += steps[currentStep] + "\n";
      currentStep++;
      setTimeout(runStep, 1500);
    } else {
      showAiAnalysisResult(file.name);
    }
  }

  runStep();
};

function showAiAnalysisResult(fileName) {
  const thinkingBox = document.getElementById('ai-thinking-box');
  const resultBox = document.getElementById('ai-result-box');
  if (!thinkingBox || !resultBox) return;

  thinkingBox.style.display = 'none';

  const normalizedName = fileName.toLowerCase();
  
  // Buscar si el archivo coincide con algún cover de la lista
  let matchedCover = null;
  if (state.covers && state.covers.length > 0) {
    matchedCover = state.covers.find(c => {
      const parts = c.title.toLowerCase().split("-");
      return parts.some(p => normalizedName.includes(p.trim()));
    });
  }
  const songName = matchedCover ? matchedCover.title : fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");

  // DETECTAR TIPO DE VIDEO: Solo de Guitarra / Riff Instrumental vs Canción Cantada
  const isGuitarSolo = normalizedName.includes("solo") || 
                       normalizedName.includes("riff") || 
                       normalizedName.includes("intro") || 
                       normalizedName.includes("instrumental") || 
                       normalizedName.includes("guitarra") || 
                       normalizedName.includes("loop") || 
                       (matchedCover && (
                         matchedCover.title.toLowerCase().includes("solo") || 
                         matchedCover.title.toLowerCase().includes("semen up") || 
                         matchedCover.title.toLowerCase().includes("californication") ||
                         matchedCover.title.toLowerCase().includes("scar tissue") ||
                         matchedCover.title.toLowerCase().includes("blackbird")
                       ));

  // 1. Detección de Iluminación (5% peso)
  let lightScore = 75;
  let lightFeedback = "Luz aceptable, pero algo apagada. Enciende un foco frontal para destacar el mástil.";
  if (normalizedName.includes("luz") || normalizedName.includes("led") || normalizedName.includes("sol") || normalizedName.includes("hd") || normalizedName.includes("dia")) {
    lightScore = 95;
    lightFeedback = "Iluminación clara y nítida. El mástil y las cuerdas brillan bien en pantalla.";
  }

  // 2. Detección de Audio y Calidad de Sonido (15% peso)
  let audioScore = 78;
  let audioFeedback = "Tono correcto, pero algo bajo. Sube un poco la ganancia de la guitarra frente al fondo.";
  if (normalizedName.includes("audio") || normalizedName.includes("hd") || normalizedName.includes("final") || normalizedName.includes("rec") || normalizedName.includes("mic") || normalizedName.includes("buen")) {
    audioScore = 92;
    audioFeedback = "Audio limpio y balanceado. El tono destaca de forma nítida sin tapar la rítmica.";
  }

  // 3. Detección de Apoyo Visual (15% peso) - Dinámico según tipo de video
  let subsScore = 0;
  let subsLabel = "";
  let subsFeedback = "";
  
  if (isGuitarSolo) {
    subsLabel = `<img src="https://emojicdn.elk.sh/💬" class="apple-emoji-sm" alt="💬"> Apoyo Visual y Tablaturas (15%)`;
    subsFeedback = "Sin tablaturas ni acordes en pantalla. En un solo instrumental, superponer las notas o el nombre del acorde duplica la retención de los guitarristas.";
    if (normalizedName.includes("tab") || normalizedName.includes("tabs") || normalizedName.includes("sub") || normalizedName.includes("texto") || normalizedName.includes("acorde")) {
      subsScore = 95;
      subsFeedback = "Excelente. Incluir tablaturas o acordes en pantalla es el mejor hook educativo para retener al usuario analizando tu digitación.";
    }
  } else {
    subsLabel = `<img src="https://emojicdn.elk.sh/💬" class="apple-emoji-sm" alt="💬"> Subtítulos de Letras (15%)`;
    subsFeedback = "Sin subtítulos de letra. Al ser un cover cantado, la falta de texto dinámico hace que los espectadores casuales deslicen si están sin audio.";
    if (normalizedName.includes("sub") || normalizedName.includes("subs") || normalizedName.includes("subtitulos") || normalizedName.includes("letras") || normalizedName.includes("texto")) {
      subsScore = 95;
      subsFeedback = "Subtítulos dinámicos de letra activos en pantalla. Excelente para retener al usuario promedio de TikTok.";
    }
  }

  // 4. Detección de Encuadre y Presencia (5% peso)
  let bgScore = 80;
  let bgFeedback = "Buen encuadre, pero cuida que no se vean cables o desorden en el fondo de la toma.";
  if (normalizedName.includes("solo") || normalizedName.includes("limpio") || normalizedName.includes("fondo") || normalizedName.includes("cuarto") || normalizedName.includes("pieza")) {
    bgScore = 94;
    bgFeedback = "Fondo minimalista e impecable, centrado 100% en tu ejecución instrumental.";
  }

  // 5. Detección de Edición y Zooms Dinámicos (10% peso)
  let zoomScore = 40;
  let zoomFeedback = "Toma fija. Falta meter micro-zooms (1.1x) en las notas estiradas para mantener activo el dinamismo visual.";
  if (normalizedName.includes("zoom") || normalizedName.includes("zooms") || normalizedName.includes("edit") || normalizedName.includes("corte") || normalizedName.includes("cut")) {
    zoomScore = 92;
    zoomFeedback = "Micro-zooms y cortes dinámicos activos en las notas clave, rompiendo la monotonía del plano fijo.";
  }

  // 6. Hook Inicial y Ritmo - CRÍTICO (50% peso)
  let hookScore = 55;
  let hookFeedback = `<img src="https://emojicdn.elk.sh/🚨" class="apple-emoji-sm" alt="🚨"> GANCHO EN PELIGRO: Tardas demasiado en arrancar. Hay silencios o gestos previos innecesarios que harán que el usuario deslice de inmediato.`;
  let hookBadge = `<img src="https://emojicdn.elk.sh/⚠️" class="apple-emoji-sm" alt="⚠️"> RETENCIÓN BAJA (Fuga de usuarios)`;
  let hookBadgeColor = "var(--color-pink)";
  
  if (normalizedName.includes("hook") || normalizedName.includes("intro") || normalizedName.includes("solo") || normalizedName.includes("rapido") || normalizedName.includes("inicio")) {
    hookScore = 96;
    hookFeedback = `<img src="https://emojicdn.elk.sh/🔥" class="apple-emoji-sm" alt="🔥"> GANCHO ADICTIVO: El video entra directo al clímax o riff principal en el milisegundo 0. Espectadores cautivos garantizados.`;
    hookBadge = `<img src="https://emojicdn.elk.sh/⚡" class="apple-emoji-sm" alt="⚡"> RETENCIÓN MÁXIMA (Hook Optimizado)`;
    hookBadgeColor = "var(--color-success)";
  }

  const overallViralScore = Math.round(
    (lightScore * 0.05) + 
    (audioScore * 0.15) + 
    (subsScore * 0.15) + 
    (bgScore * 0.05) + 
    (zoomScore * 0.10) + 
    (hookScore * 0.50)
  );

  let scoreColor = "var(--color-gold)";
  if (overallViralScore >= 88) scoreColor = "var(--color-success)";
  else if (overallViralScore < 70) scoreColor = "var(--color-pink)";

  // Texto adaptado al tipo de cover para el checklist
  const subChecklistLabel = isGuitarSolo ? 
    "<strong>Colocar texto de gancho o tablatura:</strong> Agrega la tablatura del solo o los acordes flotantes arriba del mástil para enganchar a los músicos." : 
    "<strong>Colocar subtítulos de la letra:</strong> Agrega subtítulos dinámicos de letras en colores llamativos para el público en general.";

  resultBox.innerHTML = `
    <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px;">
      <!-- Title & Score Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 14px; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-muted);">Auditoría de Retención para TikTok</span>
          <h4 style="font-size: 1.15rem; font-family: var(--font-title); color: #fff; margin: 2px 0 0 0;">${songName}</h4>
          <span style="font-size: 0.7rem; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; color: var(--color-gold); font-family: monospace; display: inline-block; margin-top: 4px;">Tipo de Video: ${isGuitarSolo ? '<img src="https://emojicdn.elk.sh/🎸" class="apple-emoji-sm" alt="🎸"> SOLO DE GUITARRA / RIFF' : '<img src="https://emojicdn.elk.sh/🎤" class="apple-emoji-sm" alt="🎤"> CANCIÓN CANTADA'}</span>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.75rem; color: var(--color-text-muted);">Potencial Viral</span>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-title); color: ${scoreColor}; line-height: 1;">${overallViralScore}%</div>
        </div>
      </div>

      <!-- CRITICAL HOOK MONITOR BOX (Top Priority) -->
      <div style="background: rgba(255,255,255,0.01); border: 1px solid ${hookBadgeColor}; border-radius: 10px; padding: 14px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.8rem; font-weight: 700; color: ${hookBadgeColor}; text-transform: uppercase; letter-spacing: 0.05em;">${hookBadge}</span>
          <span style="font-size: 1rem; font-weight: 800; color: #fff; font-family: var(--font-title);">${hookScore}% de Retención Inicial</span>
        </div>
        <p style="font-size: 0.8rem; color: #d0d0d2; line-height: 1.45; margin: 0;">${hookFeedback}</p>
      </div>

      <h5 style="font-family: var(--font-title); font-size: 0.82rem; color: #fff; margin: 0 0 10px 0; letter-spacing: 0.05em; text-transform: uppercase; opacity: 0.7;"><img src="https://emojicdn.elk.sh/📋" class="apple-emoji-sm" alt="📋"> Desglose Técnico del Algoritmo</h5>
      
      <!-- 5-Point Diagnostic Grid (Rest of parameters) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; margin-bottom: 16px;">
        
        <!-- Audio -->
        <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
            <span style="font-size: 0.78rem; font-weight: 700; color: #fff;"><img src="https://emojicdn.elk.sh/🔊" class="apple-emoji-sm" alt="🔊"> Audio y Calidad de Tono (15%)</span>
            <span style="font-size: 0.75rem; font-weight: 600; color: ${audioScore >= 90 ? 'var(--color-success)' : 'var(--color-gold)'};">${audioScore}%</span>
          </div>
          <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.35; margin: 0;">${audioFeedback}</p>
        </div>

        <!-- Subtítulos / Tablaturas (DINÁMICO) -->
        <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
            <span style="font-size: 0.78rem; font-weight: 700; color: #fff;">${subsLabel}</span>
            <span style="font-size: 0.75rem; font-weight: 600; color: ${subsScore >= 90 ? 'var(--color-success)' : 'var(--color-pink)'};">${subsScore}%</span>
          </div>
          <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.35; margin: 0;">${subsFeedback}</p>
        </div>

        <!-- Zooms Dinámicos -->
        <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
            <span style="font-size: 0.78rem; font-weight: 700; color: #fff;"><img src="https://emojicdn.elk.sh/🔎" class="apple-emoji-sm" alt="🔎"> Zooms Dinámicos (10%)</span>
            <span style="font-size: 0.75rem; font-weight: 600; color: ${zoomScore >= 90 ? 'var(--color-success)' : 'var(--color-pink)'};">${zoomScore}%</span>
          </div>
          <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.35; margin: 0;">${zoomFeedback}</p>
        </div>

        <!-- Iluminación -->
        <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
            <span style="font-size: 0.78rem; font-weight: 700; color: #fff;"><img src="https://emojicdn.elk.sh/💡" class="apple-emoji-sm" alt="💡"> Iluminación y Contraste (5%)</span>
            <span style="font-size: 0.75rem; font-weight: 600; color: ${lightScore >= 90 ? 'var(--color-success)' : 'var(--color-gold)'};">${lightScore}%</span>
          </div>
          <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.35; margin: 0;">${lightFeedback}</p>
        </div>

        <!-- Encuadre y Fondo -->
        <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
            <span style="font-size: 0.78rem; font-weight: 700; color: #fff;"><img src="https://emojicdn.elk.sh/🎥" class="apple-emoji-sm" alt="🎥"> Encuadre y Fondo (5%)</span>
            <span style="font-size: 0.75rem; font-weight: 600; color: ${bgScore >= 90 ? 'var(--color-success)' : 'var(--color-gold)'};">${bgScore}%</span>
          </div>
          <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.35; margin: 0;">${bgFeedback}</p>
        </div>

      </div>

      <!-- Action items list -->
      <div style="background: rgba(197, 160, 89, 0.04); border: 1px solid rgba(197, 160, 89, 0.2); border-radius: 10px; padding: 14px;">
        <h6 style="font-family: var(--font-title); font-size: 0.82rem; color: var(--color-gold); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;"><img src="https://emojicdn.elk.sh/🛠️" class="apple-emoji-sm" alt="🛠️"> Acciones Críticas para Retención Obligatoria:</h6>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <label style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: #fff; cursor: pointer;">
            <input type="checkbox" style="width: 14px; height: 14px; accent-color: var(--color-gold);" ${hookScore >= 90 ? 'checked' : ''}>
            <span><strong>Cortar segundos iniciales vacíos:</strong> El riff o clímax debe sonar en el milisegundo 0:00.</span>
          </label>
          <label style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: #fff; cursor: pointer;">
            <input type="checkbox" style="width: 14px; height: 14px; accent-color: var(--color-gold);" ${subsScore >= 90 ? 'checked' : ''}>
            <span>${subChecklistLabel}</span>
          </label>
          <label style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: #fff; cursor: pointer;">
            <input type="checkbox" style="width: 14px; height: 14px; accent-color: var(--color-gold);" ${zoomScore >= 90 ? 'checked' : ''}>
            <span><strong>Introducir micro-zooms en la edición:</strong> Alternar escala de 1x a 1.15x en acentos melódicos para dinamizar.</span>
          </label>
        </div>
      </div>

    </div>
  `;
  resultBox.style.display = 'block';
};

// --- Bind AI Dropzone Event Listeners ---
const aiDropzone = document.getElementById('ai-dropzone');
if (aiDropzone) {
  aiDropzone.addEventListener('click', () => {
    const fileInput = document.getElementById('ai-file-input');
    if (fileInput) fileInput.click();
  });

  aiDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    aiDropzone.style.borderColor = 'var(--color-gold)';
    aiDropzone.style.background = 'rgba(212, 175, 55, 0.03)';
  });

  aiDropzone.addEventListener('dragleave', () => {
    aiDropzone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    aiDropzone.style.background = 'rgba(255, 255, 255, 0.01)';
  });

  aiDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    aiDropzone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    aiDropzone.style.background = 'rgba(255, 255, 255, 0.01)';

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleAiVideoUpload({ target: { files: [file] } });
    }
  });
}

// --- Weekly Suggestions Catalog & Engine ---

function renderWeeklySuggestions() {
  const container = document.getElementById('weekly-suggestions-box');
  if (!container) return;

  try {
    container.innerHTML = "";

    const covers = state.covers || [];
    // 1. Filtrar canciones que YA están en la lista de covers (tanto publicadas como planeadas)
    const existingTitles = covers.map(c => (c && c.title ? c.title.toLowerCase() : ""));
    const availableSuggestions = SUGGESTION_POOL.filter(item => {
      if (!item || !item.title) return false;
      return !existingTitles.some(t => t.includes(item.title.toLowerCase()) || item.title.toLowerCase().includes(t));
    });

    // Si no hay sugerencias disponibles, mostrar un mensaje de felicitaciones
    if (availableSuggestions.length === 0) {
      container.innerHTML = `
        <p style="font-size: 0.85rem; color: var(--color-text-muted); text-align: center; padding: 20px;">¡Has planificado o tocado todas las canciones recomendadas! Escribe tus propias ideas arriba. <img src="https://emojicdn.elk.sh/🎉" class="apple-emoji-sm" alt="🎉"></p>
      `;
      return;
    }

    // 2. Analizar estilos preferidos basados en el historial del usuario
    let soloCount = 0;
    let loopCount = 0;
    let acousticCount = 0;

    covers.forEach(c => {
      if (!c || !c.title) return;
      const titleLower = c.title.toLowerCase();
      if (titleLower.includes("solo") || titleLower.includes("riff") || titleLower.includes("californication") || titleLower.includes("semen")) {
        soloCount++;
      } else if (titleLower.includes("loop") || titleLower.includes("blackbird")) {
        loopCount++;
      } else if (titleLower.includes("acustico") || titleLower.includes("unplugged") || titleLower.includes("spinetta") || titleLower.includes("oasis") || titleLower.includes("lisa")) {
        acousticCount++;
      }
    });

    // Clasificar qué tipo de sugerencias priorizar
    let preferredStyle = "Solo";
    if (loopCount >= soloCount && loopCount >= acousticCount) {
      preferredStyle = "Loop";
    } else if (acousticCount >= soloCount && acousticCount >= loopCount) {
      preferredStyle = "Acústico";
    }

    // Separar sugerencias en prioritarias y secundarias
    const priorityList = availableSuggestions.filter(item => item && item.style === preferredStyle);
    const otherList = availableSuggestions.filter(item => item && item.style !== preferredStyle);

    // Mezclar de forma determinista usando el largo de la lista como semilla (estable entre guardados)
    const seed = covers.length;
    const pseudoRandom = (str) => {
      let h = seed;
      for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
      return Math.abs(Math.sin(h)) * 1000;
    };
    
    priorityList.sort((a, b) => pseudoRandom(a.title || "") - pseudoRandom(b.title || ""));
    otherList.sort((a, b) => pseudoRandom(a.title || "") - pseudoRandom(b.title || ""));

    // Seleccionar 3 sugerencias: al menos 1 o 2 del estilo preferido si hay disponibles, y el resto de otras categorías
    const finalSuggestions = [];
    
    if (priorityList.length > 0) {
      const pop1 = priorityList.pop();
      if (pop1) finalSuggestions.push(pop1);
    }
    if (priorityList.length > 0) {
      const pop2 = priorityList.pop();
      if (pop2) finalSuggestions.push(pop2);
    }

    while (finalSuggestions.length < 3 && otherList.length > 0) {
      const popO = otherList.pop();
      if (popO) finalSuggestions.push(popO);
    }
    while (finalSuggestions.length < 3 && priorityList.length > 0) {
      const popP = priorityList.pop();
      if (popP) finalSuggestions.push(popP);
    }

    // Generar el HTML para las 3 sugerencias seleccionadas
    container.innerHTML = `
      <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 12px;">Analizando tu historial de estilo (Prioridad actual: <strong style="color: var(--color-gold);">${preferredStyle}</strong>)</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${finalSuggestions.filter(Boolean).map(item => {
          let styleBg = "rgba(138, 43, 226, 0.15)";
          let styleBorder = "rgba(138, 43, 226, 0.3)";
          let styleColor = "rgba(178, 113, 255, 1)";
          if (item.style === "Solo") {
            styleBg = "rgba(212, 175, 55, 0.1)";
            styleBorder = "rgba(212, 175, 55, 0.25)";
            styleColor = "var(--color-gold)";
          } else if (item.style === "Acústico") {
            styleBg = "rgba(230, 168, 168, 0.1)";
            styleBorder = "rgba(230, 168, 168, 0.25)";
            styleColor = "#e6a8a8";
          }

          return `
            <div class="diary-item" style="padding: 10px 12px; margin: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; border: 1px solid rgba(255,255,255,0.03);">
              <div style="flex-grow: 1; text-align: left;">
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  <strong style="color: #fff; font-size: 0.82rem;">${item.title}</strong>
                  <span style="font-size: 0.65rem; background: ${styleBg}; border: 1px solid ${styleBorder}; color: ${styleColor}; padding: 1px 6px; border-radius: 4px; font-weight: 600;">${item.style}</span>
                </div>
                <p style="font-size: 0.72rem; color: var(--color-text-muted); margin: 3px 0 0 0; line-height: 1.35;">${item.desc}</p>
              </div>
              <button class="btn btn-sm btn-cyan" onclick="addSuggestedCover('${item.title}')" style="font-size: 0.7rem; padding: 5px 10px; font-weight: bold; white-space: nowrap; border-radius: 6px;">+ Planear</button>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } catch (error) {
    console.error("Error rendering weekly suggestions:", error);
  }
};

window.addSuggestedCover = function(title) {
  const newId = generateId();
  state.covers.push({
    id: newId,
    title: title,
    date: new Date().toISOString().split('T')[0],
    link: "",
    published: false,
    improvement: ""
  });
  saveState();
};

window.exportDataJSON = function() {
  const dataStr = localStorage.getItem('goals_2026_state');
  if (!dataStr) {
    alert("No hay datos para exportar aún.");
    return;
  }
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `objetivos_2026_backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

window.triggerImportJSON = function() {
  document.getElementById('import-json-file').click();
};

window.importDataJSON = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && typeof parsed === 'object') {
        localStorage.setItem('goals_2026_state', JSON.stringify(parsed));
        loadState();
        updateUI();
        alert("¡Datos importados con éxito! 🎉");
      } else {
        alert("Archivo JSON inválido.");
      }
    } catch (err) {
      alert("Error al leer el archivo de backup.");
      console.error(err);
    }
  };
  reader.readAsText(file);
};


window.exportDataJSON = function() {
  const dataStr = localStorage.getItem('goals_2026_state');
  if (!dataStr) {
    alert("No hay datos para exportar aún.");
    return;
  }
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `backup_app_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

window.triggerImportJSON = function() {
  document.getElementById('import-json-file').click();
};

window.importDataJSON = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && typeof parsed === 'object') {
        localStorage.setItem('goals_2026_state', JSON.stringify(parsed));
        loadState();
        updateUI();
        alert("¡Datos importados con éxito! 🎉");
      } else {
        alert("Archivo JSON inválido.");
      }
    } catch (err) {
      alert("Error al leer el archivo de backup.");
      console.error(err);
    }
  };
  reader.readAsText(file);
};

// Fade in UI after init
setTimeout(() => {
  const earlyCSS = document.getElementById('early-tab-css');
  if (earlyCSS) earlyCSS.remove();
  const container = document.querySelector('.app-container');
  if (container) container.style.opacity = '1';
}, 50);
