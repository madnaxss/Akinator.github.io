let si = document.getElementById("si");
let no = document.getElementById("no");
let responde = document.getElementById("responde");

console.log("prueba")

var RespuestaDef = '';
var preguntaActual = 1;
let m = 0, accion = false;
let indiceAleato;
var UnProta = false;
var VariosProtas = false;
responde.textContent = "Es animación?";
var imagenAkinator ;
var ResultadoImg = document.getElementById("ResultadoImagen");
var MostrarResultado = document.getElementById("ResultadoFinal");
var JugarOtraVez = document.getElementById("JugarOtravez")
var OpcionesAdios = document.getElementById("si")
var OpcionAdios = document.getElementById("no")

function VolverAJugar()
{
    OpcionAdios.style.display = "none";
    OpcionesAdios.style.display = "none";
    JugarOtraVez.style.display = "block";
}
function VuelveAJugar()
{
    MostrarResultado.style.display = "none"
    preguntaActual = 1;
    responde.textContent = "Es animación?";
    RespuestaDef = '';
    animacion();
}



// ************** Arrays ***************
var GeneroAnimacion = [
    'Es una serie de acción?', 'Tienen superpoderes?', 'Es una serie de crimen?'
];

var GeneroNoAnimacion = [
    'Es una serie de crimen o basado en criminales', 'Es una serie de Fantasia?', 'Es una serie Hechos Historicos o del pasado?', 'Es una serie de Drama'
];

//********* ARRAY PREGUNTAS ESPECIFICAS DE LA SERIE *********

//******* ANIMACION ******

var RickyMorty =
    [
        'Los protas son nieto y abuelo?', 'Van a diferentes dimensiones?', 'Vistian otros planetas?'
    ]

var Arcane =
    [
        'Los protas son nieto y abuelo?', 'Viven en piltover o en zaun', 'Se llaman Jinx y Vi'
    ]

var Simpsons =
    [
        'Son amarillos?', 'Se apellidan Simpsons?', 'La serie sucede en Springfield?'
    ]

var DeathNote =
    [
        'El prota encuntra una libreta', 'El prota encuntra una libreta', 'El prota mata criminales con una libreta'
    ]

var AtaquealosTitantes =
    [
        'El prota vive entre muros?', 'El prota se apellida Yeager?', 'Los protas usa un equipo de maniobras tridimensionales'
    ]

var DragonBall =
    [
        'El prota es un saiyan?', 'El prota puede volar?', 'hay una transformacion con pelo rubio?'
    ]

var Sherlock =
    [
        'Es un famoso detective de londres', 'Dice elemental querido Watson', 'Utiliza Gorro de detectie y fuma en pipa'
    ]

//******* NO ES ANIMACION ******

var Mandalorian =
    [
        'Basada en el universo Star Wars', 'El prota es un cazarecompensas?', 'Hay un codigo llamado Credo Mandaloriano'
    ]

var BigBang =
    [
        'Los amigos son un grupo de científicos', 'Son amigos que les encanta los comics', 'Uno de los protas se enamora de una del grupo rubia llamada Penny'
    ]

var TheBoys =
    [
        'Hay un grupo de superheroes', 'Los heroes son mas bien villanos?', 'El grupo intenta derrotar y exponer a los heroes'
    ]

var CasaDePaPapel =
    [
        'Es una serie española?', 'La trama principal gira al rededor de un atraco?', 'Van con mascaras de Dali'
    ]

var PeakyBlinders =
    [
        'Esta ambientado en los años 20/30?', 'Son gánsters de birmingham ?', 'Van vestidos con traje y boina?'
    ]
var Dexter =
    [
        'El prota colecciona sangre de sus victimas?', 'sigue la vida de un especialista forense?S', 'El código ético del protagonista incluye reglas estrictas para sus asesinatos ?'
    ]

var BreakingBad =
    [
        'El prota crea droga azul', 'Era profesor de quimica', 'El prota tiene apaodo heinseberg'
    ]

var Blacklist =
    [
        'El prota antes trabajaba para el gobierno?', 'El prota es un criminal?', 'El prota tiene una lista de criminales para atrapar?'
    ]

var Juegodetronos =
    [
        'Hay luchas por el trono de hierro', 'Hay criaturas místicas', 'Hay siete reinos'
    ]

var LosOriginales =
    [
        'Aparecen brujas hombres lobo y vampiros', 'Los protas tienen mas de 1000 años?', 'Los protas tienen control mental?'
    ]

var StrangerThings =
    [
        'La serie se ambienta en los años 80', 'Una de los protagonistas se llama 11', 'Uno de los amigos se pierde en otro mundo'
    ]

var Vikingos =
    [
        'Trata de la edad media', 'Son vikingos que asaltan playas y ciudades', 'El prota va un drakkar un barco vikingo'
    ]

var Outlander =
    [
        'La mujer viaja al pasado', 'La prota es medico', 'La prota se enamora del coprotagonista'
    ]

//********* FUNCIONES **********
function Respuesta(respuesta) {
    RespuestaDef = respuesta;
    animacion();
}

function generarRespuestaAnime() {
    return Math.floor(Math.random() * 2) + 1;
}

function animacion() {
    OpcionAdios.style.display = "block";
    OpcionesAdios.style.display = "block";
    JugarOtraVez.style.display = "none";
    switch (preguntaActual) {
        // SI ES ANIMACIÓN
        case 1:
            imagenAkinator = document.getElementById("akinator_fases");
            imagenAkinator.src = "img/Akinator_Fase1.webp"; 
            if (RespuestaDef === "Si") {
                console.log("le ha dado a si en animacion");
                responde.textContent = "Es Anime?";
                preguntaActual++;
            } else if (RespuestaDef === "No") {
                console.log("le ha dado no en animacion");
                indiceAleato = Math.floor(Math.random() * 3);
                responde.textContent = Mandalorian[indiceAleato];
                preguntaActual = 18;
            }

            break;
        // SI ES ANIME
        case 2:
            if (RespuestaDef === "Si") {
                console.log("le ha dado a si en anime");
                var numeroAleatorio = generarRespuestaAnime();
                console.log(numeroAleatorio);
                if (numeroAleatorio === 1) {
                    responde.textContent = "Un prota?";
                    UnProta = true;
                    imagenAkinator.src = "img/Akinator_Fase2.webp"; 
                } else {
                    responde.textContent = "Varios protas?";
                    imagenAkinator.src = "img/Akinator_Fase2.webp"; 
                    VariosProtas = true;
                }
                preguntaActual++;
            } else if (RespuestaDef === "No") {
                console.log("le ha dado no en anime");
                responde.textContent = "Son una familia?";
                preguntaActual = 15; //Pasa al caso 15 para empezar con el no anime
                imagenAkinator.src = "img/Akinator_Fase2.webp"; 
            }
            break;
        // Si es un prota o varios
        case 3:
            console.log("caso3");
            if (RespuestaDef === 'Si' && UnProta) {
                responde.textContent = "Es masculino";
                console.log("le ha dado si a es un prota");
                m = 1;
                preguntaActual++;
            } else if (RespuestaDef === 'No' && UnProta) {
                responde.textContent = "Son un grupo de amigos";
                m = 2;
                console.log("le ha dado si a varios protas");
                preguntaActual = 12;
            }
            if (RespuestaDef === 'Si' && VariosProtas) {
                responde.textContent = "Son un grupo de amigos";
                m = 2;
                console.log("le ha dado si a varios protas");
                preguntaActual = 12;
            } else if (RespuestaDef === 'No' && VariosProtas) {
                responde.textContent = "Es masculino";
                console.log("le ha dado si a es un prota");
                m = 1;
                preguntaActual++;
            }
            break;
        // m1 esmasculino y m2 es grupo de amigos
        case 4:
            console.log("caso4");
            if (m === 1) {
                console.log("masculino");
                var indiceAleatorio = Math.floor(Math.random() * GeneroAnimacion.length);
                console.log(indiceAleatorio + "indiceAleatorio");
                responde.textContent = GeneroAnimacion[0];
                preguntaActual++;
            } else if (m === 2) {
                console.log("grupo de amigos");
                var indiceAleatorio = Math.floor(Math.random() * 2);
                console.log(indiceAleatorio);
                responde.textContent = GeneroAnimacion[0];
                preguntaActual = 12;
            }
            break;
        // Ataque a los Titanes
        case 5:
            console.log("caso 5");
            if (RespuestaDef === 'Si') {
                imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                accion = true;
                console.log("Accion es true");
                responde.textContent = AtaquealosTitantes[2];
                preguntaActual++;
                console.log("Volver a darle accion");
            } else {
                imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                indiceAleato = Math.floor(Math.random() * 3);
                responde.textContent = DeathNote[indiceAleato];
                preguntaActual = 11;
            }
            break;
        case 6:
            {
                if (accion) {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 2);
                    responde.textContent = AtaquealosTitantes[indiceAleato];
                    preguntaActual++;
                } else {
                    preguntaActual = 10;
                }
            }
            break;
        case 7:
            {
                if (RespuestaDef === 'Si') {
                    console.log("Es esta")
                    Titulo.textContent = "Ataque a los titanes"
                    ResultadoImg.src = "img/final/attackontitan.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                } else {
                    responde.textContent = GeneroAnimacion[1];
                    preguntaActual++;
                }
            }

            break;
        case 8:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = DragonBall[indiceAleato];
                    preguntaActual++;
                } else {
                    preguntaActual = 10;
                    responde.textContent = GeneroAnimacion[2];
                }
            }
            break;
        case 9:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Dragon Ball"
                    ResultadoImg.src = "img/final/dragonball.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                } else {
                    imagenAkinator.src = "img/Akinator_Fase2.webp"; 
                    responde.textContent = GeneroAnimacion[2];
                    preguntaActual++;
                }
            }
            break;
        case 10:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = DeathNote[indiceAleato];
                    preguntaActual = 42;
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 11:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Death Note"
                    ResultadoImg.src = "img/final/deathnote.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 12:
            {
                console.log("caso 12");
                if (m === 2 && RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_Fase2.webp"; 
                    responde.textContent = GeneroAnimacion[0];
                    preguntaActual++;
                }
                if (m === 2 && RespuestaDef === 'No') {
                    m = 1;
                    preguntaActual = 4;
                }
            }
            break;
        case 13:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = AtaquealosTitantes[indiceAleato];
                    preguntaActual++;
                } else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = DragonBall[indiceAleato];
                    preguntaActual = 43;
                }
            }
            break;
        case 14:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Ataque a los titanes"
                    ResultadoImg.src = "img/final/attackontitan.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                }
                else {
                    imagenAkinator.src = "img/Akinator_Fase4.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = DragonBall[indiceAleato];
                    preguntaActual = 43;
                }
            }
            break;
        case 15:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = RickyMorty[indiceAleato];
                    preguntaActual++;
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 16:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Rick y Morty"
                    ResultadoImg.src = "img/final/rickymorty.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                }
                else {
                    imagenAkinator.src = "img/Akinator_Fase4.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Simpsons[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 17:
            if (RespuestaDef === 'Si') {
                Titulo.textContent = "Los Simpsons"
                ResultadoImg.src = "img/final/simpson.jpg"; 
                MostrarResultado.style.display = "block";
                VolverAJugar();
                
            }
            else {
                imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                indiceAleato = Math.floor(Math.random() * 3);
                responde.textContent = Arcane[indiceAleato];
                preguntaActual = 41;
            }
            break
        case 18:
            if (RespuestaDef === 'Si') {
                Titulo.textContent = "The Mandalorian"
                ResultadoImg.src = "img/final/mandalorian.jpg"; 
                MostrarResultado.style.display = "block";
                VolverAJugar();
            }
            else {
                indiceAleato = Math.floor(Math.random() * 3);
                responde.textContent = BigBang[indiceAleato];
                preguntaActual++;
            }
            break;
        case 19:
            if (RespuestaDef === 'Si') {
                Titulo.textContent = "The Big Bang theory"
                ResultadoImg.src = "img/final/bigbang.jpg"; 
                MostrarResultado.style.display = "block";
                VolverAJugar();
                
            }
            else {
                imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                indiceAleato = Math.floor(Math.random() * 3);
                responde.textContent = TheBoys[indiceAleato];
                preguntaActual++;
            }
            break;
        case 20:
            if (RespuestaDef === 'Si') {
                Titulo.textContent = "The Boys"
                ResultadoImg.src = "img/final/theboys.jpg"; 
                MostrarResultado.style.display = "block";
                VolverAJugar();
                
            } else {
                indiceAleato = Math.floor(Math.random() * 3);
                responde.textContent = CasaDePaPapel[indiceAleato];
                preguntaActual++;
            }
            break;
        case 21:
            if (RespuestaDef === 'Si') {
                Titulo.textContent = "La casa de papel"
                ResultadoImg.src = "img/final/casadepapel.jpg"; 
                MostrarResultado.style.display = "block";
                VolverAJugar();
                
            } else {
                imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                responde.textContent = GeneroNoAnimacion[0];
                preguntaActual++;
            }
            break;
        case 22:
            if (RespuestaDef === 'Si') {
                imagenAkinator.src = "img/Akinator_Fase2.webp"; 
                responde.textContent = 'En la serie nuestro protagonistas son criminales';
                preguntaActual++;
            }
            else {
                imagenAkinator.src = "img/Akinator_Fase2.webp"; 
                responde.textContent = 'Es fantasia?';
                preguntaActual = 32;
            }
            break;
        case 23:
            if (RespuestaDef === 'Si') {
                imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                responde.textContent = 'Es una serie de Drama?';
                preguntaActual++;
            } else {
                imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                responde.textContent = 'Se dedican a cazar o matar criminales';
                preguntaActual = 29;
            }
            break;
        case 24:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = PeakyBlinders[indiceAleato];
                    preguntaActual++;
                } else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Blacklist[indiceAleato];
                    preguntaActual = 27;
                }
            }
            break;
        case 25:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Peaky Blinders"
                    ResultadoImg.src = "img/final/peakyblinders.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                }
                else {
                    imagenAkinator.src = "img/Akinator_Fase4.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = BreakingBad[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 26:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Breaking bad"
                    ResultadoImg.src = "img/final/breakingbad.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Blacklist[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 27:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "The Black List"
                    ResultadoImg.src = "img/final/blacklist.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Dexter[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 28:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Dexter"
                    ResultadoImg.src = "img/final/dexter.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Sherlock[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 29:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Sherlock"
                    ResultadoImg.src = "img/final/sherlock.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Blacklist[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 30:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "The Black List"
                    ResultadoImg.src = "img/final/blacklist.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_Fase4.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Dexter[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 31:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Dexter"
                    ResultadoImg.src = "img/final/dexter.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 32:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_Fase3.webp"; 
                    responde.textContent = "Es fantasia medieval?";
                    preguntaActual++;
                } else {
                    responde.textContent = GeneroNoAnimacion[2];
                    preguntaActual = 38;
                }
            }
            break;
        case 33:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Juegodetronos[indiceAleato];
                    preguntaActual++;
                } else {
                    imagenAkinator.src = "img/Akinator_Fase4.webp"; 
                    responde.textContent = "Hay alguien con poderes mentales?"
                    preguntaActual = 35;
                }
            }
            break;
        case 34:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Juego de tronos"
                    ResultadoImg.src = "img/final/juegodetronos.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                }
                else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = LosOriginales[indiceAleato];
                    preguntaActual = 36;
                }
            }
            break;
        case 35:
            {
                if (RespuestaDef === 'Si') {
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = LosOriginales[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 36:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Los Originales"
                    ResultadoImg.src = "img/final/originales.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_Fase4.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = StrangerThings[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 37:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Stranger Things"
                    ResultadoImg.src = "img/final/strangerthings.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 38:
            {
                if (RespuestaDef === 'Si') {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Vikingos[indiceAleato];
                    preguntaActual++;
                } else {
                    responde.textContent = GeneroNoAnimacion[0];
                    preguntaActual = 22;
                }
            }
            break;
        case 39:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Vikingos"
                    ResultadoImg.src = "img/final/vikingos.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    imagenAkinator.src = "img/Akinator_FaseFinal.webp"; 
                    indiceAleato = Math.floor(Math.random() * 3);
                    responde.textContent = Outlander[indiceAleato];
                    preguntaActual++;
                }
            }
            break;
        case 40:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Outlander"
                    ResultadoImg.src = "img/final/outlander.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 41:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Arcane"
                    ResultadoImg.src = "img/final/arcane.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 42:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Death note"
                    ResultadoImg.src = "img/final/deathnote.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                    
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        case 43:
            {
                if (RespuestaDef === 'Si') {
                    Titulo.textContent = "Dragon ball"
                    ResultadoImg.src = "img/final/dragonball.jpg"; 
                    MostrarResultado.style.display = "block";
                    VolverAJugar();
                
                } else {
                    preguntaActual = 1;
                    responde.textContent = "Es animación?";
                }
            }
            break;
        default:
            break;
    }
}
