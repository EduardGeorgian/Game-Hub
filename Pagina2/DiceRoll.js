let images=["./Imagini/dice1.png",
"./Imagini/dice2.png",
"./Imagini/dice3.png",
"./Imagini/dice4.png",
"./Imagini/dice5.png",
"./Imagini/dice6.png"
]
let dice=document.querySelectorAll("img");
console.log(dice);
function roll(){
    let sum=0;
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue =Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        sum=dieOneValue+dieTwoValue;
        document.getElementById("p1").innerHTML = sum+2;
        document.querySelector("#zar1").setAttribute("src",images[dieOneValue]);
        document.querySelector("#zar2").setAttribute("src",images[dieTwoValue]);
    },
    1000
    );
}