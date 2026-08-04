// =========================
// PASSWORD UNLOCK
// =========================

function unlockLove(){

    const password =
    document.getElementById("password").value;

    const correctPassword =
    "09052025";


    if(password === correctPassword){

        const lock =
        document.getElementById("lockScreen");

        lock.style.opacity="0";


        setTimeout(()=>{

            lock.style.display="none";


            // START MUSIC

            const music =
            document.getElementById("bgMusic");

            music.volume = 0.5;


            music.play().catch(()=>{

                console.log("Music blocked");

            });



            // NETFLIX INTRO

            const intro =
            document.getElementById("netflixIntro");


            if(intro){

                intro.style.display="flex";


                setTimeout(()=>{

                    intro.style.opacity="0";

                },2500);



                setTimeout(()=>{

                    intro.style.display="none";

                },4000);

            }


        },800);



    }else{


        document.getElementById("error").innerHTML =
        "Wrong date ❤️";


    }


}









// =========================
// MUSIC BUTTON
// =========================

const music =
document.getElementById("bgMusic");



function startMusic(){


    music.volume = 0.5;


    music.play();



    document.querySelector(".music-btn").innerHTML =
    "🎶 Playing";


}









// =========================
// SCENE SYSTEM
// =========================


let currentScene = 0;


const scenes =
document.querySelectorAll(".scene");



function nextScene(){


    if(currentScene < scenes.length - 1){


        scenes[currentScene]
        .classList.remove("active");



        currentScene++;



        scenes[currentScene]
        .classList.add("active");



        if(currentScene === 3){


            setTimeout(typeLetter,500);


        }


    }


}







// =========================
// BACK BUTTON
// =========================


function previousScene(){


    if(currentScene > 0){


        scenes[currentScene]
        .classList.remove("active");



        currentScene--;



        scenes[currentScene]
        .classList.add("active");



        // Reset letter animation

        if(currentScene === 3){


            document.getElementById("typing").innerHTML = "";


            letterIndex = 0;


            setTimeout(typeLetter,500);


        }


    }


}









// =========================
// LOVE LETTER
// =========================


const message = `💖 Happy 11th Monthsary, My Love ❤️


Happy 11th monthsary sa atoa.

One month na lang ug mag-one year na gyud ta.


Looking back at everything we've been through,
I am so grateful nga ikaw gyud ang nagpabilin
sa akong kiliran.


Dili lalim ang journey nato.

Naa tay misunderstandings,
ginagmay nga lalis,
ug mga adlaw nga gisulayan
ang atong patience.


Pero bisan unsa pa mahitabo,
pili-on gihapon tika.


You've shown me nga ang tinuod nga gugma
is not only a feeling.

It is a choice.

A choice to stay,
to understand,
and to keep choosing each other.


Excited kaayo ko sa atong future.

Sa atong dreams,
career,
ug kinabuhi nga atong tukuron.


Thank you sa imong patience,
support,
ug gugma matag adlaw.


Padayon lang ta.

Kay basta magkauban ta,
kaya ra nato tanan.


I love you so much ❤️`;



let letterIndex = 0;



function typeLetter(){


    const text =
    document.getElementById("typing");



    if(letterIndex < message.length){


        let char =
        message.charAt(letterIndex);



        if(char === "\n"){


            text.innerHTML += "<br>";


        }else{


            text.innerHTML += char;


        }



        letterIndex++;


        setTimeout(typeLetter,40);


    }


}









// =========================
// 5 BACKGROUND VIDEOS LOOP
// =========================


const videoList = [

    "video/love1.mp4",

    "video/love2.mp4",

    "video/love3.mp4",

    "video/love4.mp4",

    "video/love5.mp4"

];


let currentVideo = 0;


const bgVideo =
document.getElementById("bgVideo");


const videoSource =
document.getElementById("videoSource");



if(bgVideo){


    bgVideo.addEventListener("ended",()=>{


        bgVideo.classList.add("fade-out");



        setTimeout(()=>{


            currentVideo++;



            if(currentVideo >= videoList.length){


                currentVideo = 0;


            }



            videoSource.src =
            videoList[currentVideo];



            bgVideo.load();


            bgVideo.play();



            bgVideo.classList.remove("fade-out");



        },1500);



    });


}









// =========================
// ENDING
// =========================


function showLove(){


    alert(
    "❤️ Royskiee & Renziee Forever ❤️"
    );


}