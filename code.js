var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6d8d7dbb-490d-455f-b93f-4eda505dba18","84167a47-b0a0-4aea-9cf8-5a6469b74c1f","0022c233-c7ee-408c-93d3-bf3123377c1d","dd25be6a-c4d9-4f8b-bf6c-50bbb8080ad8"],"propsByKey":{"6d8d7dbb-490d-455f-b93f-4eda505dba18":{"name":"carro","sourceUrl":null,"frameSize":{"x":48,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"q8jtNgUNeyQyVbGi6QFt759tMRzw6r._","loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":22},"rootRelativePath":"assets/6d8d7dbb-490d-455f-b93f-4eda505dba18.png"},"84167a47-b0a0-4aea-9cf8-5a6469b74c1f":{"name":"disparo","sourceUrl":null,"frameSize":{"x":4,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"9cE4FCq7CA2xA8U9CuRjz53g1IyuFdbx","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":96},"rootRelativePath":"assets/84167a47-b0a0-4aea-9cf8-5a6469b74c1f.png"},"0022c233-c7ee-408c-93d3-bf3123377c1d":{"name":"t","sourceUrl":null,"frameSize":{"x":400,"y":9},"frameCount":1,"looping":true,"frameDelay":12,"version":"WPTfTJozpAKajBGU5gK9ka3WX6j8XbEh","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":9},"rootRelativePath":"assets/0022c233-c7ee-408c-93d3-bf3123377c1d.png"},"dd25be6a-c4d9-4f8b-bf6c-50bbb8080ad8":{"name":"a","sourceUrl":null,"frameSize":{"x":63,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"PEoj2D1bWndTUNxdlS53c6QHK9QX0Xyj","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":67},"rootRelativePath":"assets/dd25be6a-c4d9-4f8b-bf6c-50bbb8080ad8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
   boundary1.setAnimation("t");
  boundary2 = createSprite(190,260,420,3);
 boundary2.setAnimation("t");
  sam = createSprite(20,190,13,13);
  sam.setAnimation("carro");
  sam.scale=0.3;
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("disparo");
  car1.scale=0.2;
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("disparo");
  car2.scale=0.2;
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("disparo");
  car3.scale=0.2;
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("disparo");
  car4.scale=0.2;
  trofeo = createSprite(372,190,20,20);
  trofeo.setAnimation("a");
  trofeo.scale=0.2;
  car1.velocityY=8;
 car2.velocityY=-8;
 car3.velocityY=8;
 car4.velocityY=-8;
 
//Agrega velocidad para hacer que el auto se mueva.

function draw() {
   background("lightgray");
  text("muertes" + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if (keyDown("right")){
sam.x=sam.x+1.7;
}
if (keyDown("LEFT")){
sam.x=sam.x-1.7;
}
if (sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;
  life=life+1;
}
if (sam.isTouching(trofeo)){
  sam.x=20;
  sam.y=190;
  life=life-1;
  text("¡ganaste!",200,200);
  strokeWeight(2);
}
//Agregar la condición de reducir la vida de Sam si toca el carro.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
