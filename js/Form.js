class Form{
    constructor(){}
display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(100,200);
    
    var input = createInput("name");
    input.position(200,200);

    var button = createButton('play');
    button.position(200,300);
    var greeting = createElement('h3');

button.mousePressed(function(){
input.hide();
button.hide();

var name = input.value();
    playerCount = playerCount+1;
    player.update(name);
    player.updateCount(playerCount);

    greeting.html("Hello"+name);
    greeting.position(240,360);
});

}

}