//Character Sprites
const Sprites = [
    {
        id: 0,
        name: "Ryu",
        img: 'assets/images/sprites/RyuSprite.gif'
    },
    {
        id: 2,
        name: "Adon",
        img: 'assets/images/sprites/AdonSprite.gif'
    },
    {
        id: 3,
        name: "Chun",
        img: 'assets/images/sprites/ChunSprite.gif'
    },
    {
        id: 4,
        name: "Guy",
        img: 'assets/images/sprites/GuySprite.gif'
    },
    {
        id: 5,
        name: "Ken",
        img: 'assets/images/sprites/KenSprite.gif'
    },
    {
        id: 6,
        name: "Dhalsim",
        img: 'assets/images/sprites/DhalsimSprite.gif'
    },
    {
        id: 7,
        name: "Gen",
        img: 'assets/images/sprites/GenSprite.gif'
    },
    {
        id: 8,
        name: "Sakura",
        img: 'assets/images/sprites/SakuraSprite.gif'
    },
    {
        id: 9,
        name: "Rolento",
        img: 'assets/images/sprites/RolentoSprite.gif'
    },
    {
        id: 10,
        name: "Zangief",
        img: 'assets/images/sprites/ZangiefSprite.gif'
    },
    {
        id: 12,
        name: "Charlie",
        img: 'assets/images/sprites/CharlieSprite.gif'
    },
    {
        id: 13,
        name: "Birdie",
        img: 'assets/images/sprites/BirdieSprite.gif'
    },
    {
        id: 14,
        name: "Rose",
        img: 'assets/images/sprites/RoseSprite.gif'
    },
    {
        id: 15,
        name: "Sodom",
        img: 'assets/images/sprites/SodomSprite.gif'
    },
    {
        id: 16,
        name: "Sagat",
        img: 'assets/images/sprites/SagatSprite.gif'
    },
    {
        id: 17,
        name: "Akuma",
        img: 'assets/images/sprites/AkumaSprite.gif'
    },
    {
        id: 18,
        name: "Bison",
        img: 'assets/images/sprites/BisonSprite.gif'
    },
    {
        id: 19,
        name: "Dan",
        img: 'assets/images/sprites/DanSprite.gif'
    },
]

//Variables
var container = document.getElementsByClassName("container character-container")[0];

//Show Sprite Function

container.addEventListener('mouseover', function(e) {
    if (e.target.tagName == "IMG") {
    var obj = Sprites.find(o => o.name == e.target.id);
    document.getElementById("character-sprite").src = obj.img;  
    }
});

container.addEventListener('mouseout', function(e) {
    document.getElementById("character-sprite").src = null;
 
  });
