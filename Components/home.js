class Home{
    constructor(){
        this.playButton = createButton("Play");
        this.characterButton = createButton("Character Select");
        this.gameTitle = createElement("h1", "Fatal Melee");
        this.nameInput = createInput("").attribute("placeholder", "Your name goes here...");
        this.selectCharacterButton = createButton("Select");
        this.characterScrollInstr = createElement("h1", "Use Left and Right Arrow");

        this.name = ["John", "Akio"];
        this.nameInfo = ["Ability: 20% increase in damage", "Ability: Movement Speed Increase by 10%"]
        this.character1 = createElement("h1",this.name[0]);
        this.character1Info = createElement("h2",this.nameInfo[0]);
        this.character2 = createElement("h1",this.name[1]);
        this.character2Info = createElement("h2",this.nameInfo[1]);

        this.roomIndex = null;
    }

    hideHomeComp(){
        this.playButton.hide();
        this.characterButton.hide();
        this.gameTitle.hide();
        this.nameInput.hide();
    }

    showHomeComp(){
        this.playButton.show();
        this.playButton.position(windowWidth/2, windowHeight/3);
        this.characterButton.show();
        this.characterButton.position(windowWidth/2-30, windowHeight/3+30);
        this.gameTitle.show();
        this.gameTitle.position(windowWidth/2-50, 50);
        this.nameInput.show();
        this.nameInput.position(windowWidth/2-60, windowHeight/3-30);
    }

    hideForHome(){
        this.selectCharacterButton.hide();
        this.characterScrollInstr.hide();
        this.character1.hide();
        this.character1Info.hide();
        this.character2.hide();
        this.character2Info.hide();
    }

    showCharacterElements(){
        this.selectCharacterButton.show();
        this.selectCharacterButton.position(windowWidth/2, windowHeight/3+200);
        this.characterScrollInstr.show();
        this.characterScrollInstr.position(windowWidth/2-120, 50);
    }

    showCharacter(number){
        this.name[number].show();
        this.nameInfo[number].show();
    }

    display(){
        this.hideForHome();
        this.showHomeComp();

        this.playButton.mousePressed(()=>{
            var roomIndex = "rooms/room" + this.roomIndex + "player" + (player.totalPlayers/this.roomIndex);
            database.ref(roomIndex).set({
                name:player.name,
                character: "this.name" + player.character
            });
        })

        /*this.characterButton.mousePressed(()=>{
            this.hideHomeComp();
            this.showCharacterElements();
            this.show();

            if(keyWentDown(LEFT_ARROW) && player.character > 1){
                player.character -= 1
            }

            if(keyWentDown(RIGHT_ARROW) && player.character < 2){
                player.character += 1
            }
        })*/
    }
}