// Screen resolution ratio's 
const verticalRatio = 19.5 / 9;
const horizontalRatio = 9 / 16;
var aspectRatio;

var appInput = null;
var sound = true;//use to turn all sound on or off

// time in between rounds
const loadDelay = 10000; // 10 seconds;
var bgDuration = (loadDelay / 1000) - 0.5
// holds the load screen image < from spritePool 
var loadScreen = null;
// color to clear the screen when rendering 
const clearColor = new Color(207, 159, 255);
var screen = null;
var game = null;
var currentGame = 0;
<<<<<<< HEAD
=======

>>>>>>> parent of f7c384c ( updating images is easier now)

//global objects 
var spritePool = {
  currentLoad: null,
  shareLoad: new Obj(),
  vShareLoad: new Obj(),
  wasteLoad: new Obj(),
  vWasteLoad: new Obj(),
  sortLoad: new Obj(),
  vSortLoad: new Obj(),
};
var audioFile = {
  correct: null,
  wrong: null,
  bg: null,
  click: null,
  complete: null,
  loadingScreen: null
};
// Loads in all files , promise all before setting up screen canvas
window.onload = window['loadAssets'];
function loadAssets() {
  aspectRatio = (window.innerWidth > window.innerHeight) ? horizontalRatio : verticalRatio;
  spritePool.shareLoad.addImg("Images/loadShare.png");
  spritePool.vShareLoad.addImg("Images/VloadShare.png");
  spritePool.wasteLoad.addImg("Images/loadWaste.png");
  spritePool.vWasteLoad.addImg("Images/VloadWaste.png");
  spritePool.sortLoad.addImg("Images/loadSort.png");
  spritePool.vSortLoad.addImg("Images/VloadSort.png");

  audioFile.correct = new Audio('Audio/Right.mp3');
  audioFile.wrong = new Audio('Audio/Wrong.mp3');
  audioFile.bg = new Audio('Audio/BGMusic2.mp3');
  audioFile.complete = new Audio('Audio/LevelComplete.mp3');
  audioFile.click = new Audio('Audio/Click.mp3');
  audioFile.loadingScreen = new Audio('Audio/BGMusic1.mp3');

  var filePromises = [];
  filePromises.push(spritePool.shareLoad.sprite);
  filePromises.push(spritePool.vShareLoad.sprite);
  filePromises.push(spritePool.wasteLoad.sprite);
  filePromises.push(spritePool.vWasteLoad.sprite);
  filePromises.push(spritePool.sortLoad.sprite);
  filePromises.push(spritePool.vSortLoad.sprite);

  filePromises.push(audioFile.correct);
  filePromises.push(audioFile.wrong);
  filePromises.push(audioFile.bg);
  filePromises.push(audioFile.loadingScreen);
  filePromises.push(audioFile.click);
  filePromises.push(audioFile.complete);
  Promise.all(filePromises).then(setUpAndInit());
}
//Set up canvases 1 for the game 1 for the loading screen
function setUpAndInit() {
  var width = window.innerWidth * .98;
  var height = width * aspectRatio;
  const increments = 50;//increments from -x to x
  screen = new Screen("screen", width, height, increments);
  loadScreen = new Screen("load", width, height, increments);
  loadScreen.hide();
  appInput = new Input(screen);

// scale dependent on  screen increments
  spritePool.shareLoad.scale(28, 28);
  spritePool.wasteLoad.scale(28, 28);
  spritePool.sortLoad.scale(28, 28);

  spritePool.vShareLoad.scale(28, 110);
  spritePool.vWasteLoad.scale(40, 110);
  spritePool.vSortLoad.scale(40, 110);

  spritePool.wasteLoad.teleport(0, -14);
  spritePool.shareLoad.teleport(0, -14);
  spritePool.sortLoad.teleport(0, -14);

  spritePool.vShareLoad.teleport(0, -55);
  spritePool.vWasteLoad.teleport(0, -55);
  spritePool.vSortLoad.teleport(0, -55);
  game = getNextGame();
  loop();
}
// ----------------- GAME LOOP --------------------

const fpsDefault = 10; // when nothing is happening
const fpsMovement = 60; // when moving items 
var varfps = fpsDefault; // is increased tp 
//game loop to handle input, and rerender objects 
async function loop() {
  var delay = 1000 / varfps;
  let start = new Date().getTime();
  screen.clearColor(clearColor);
  handleInput();
  render();
  await sleep(start + delay - new Date().getTime());
  if (!game.isGameOver())
    loop()
  else {
    render();
    await sleep(1000);
    currentGame++;
    game = getNextGame();
    loop();
  }
}

//----------------------HELPER FUNCTIONS --------------------
var vertColor = new Color(0, 0, 255);
// used to view objects vertices 
function debugRender() {
  game.staticList.forEach(obj => {
    var verts = obj.getVerts();
    verts.forEach(p => {
      screen.drawPoint(p, vertColor);
    });
  }); 
  // game.itemList.forEach(obj => {
  //   var verts = obj.getVerts();
  //   verts.forEach(p => {
  //     screen.drawPoint(p, vertColor);
  //   });
  // })
  screen.render();
}
function render() {

  if (spritePool.currentLoad != null) {
    loadScreen.clearColor(clearColor);
    loadScreen.render();
    loadScreen.drawSprite(spritePool.currentLoad);
    return;
  }
  if (game != null) {
    //debugRender(); // if wanting to see vertices, make sure to hide the background images 
    game.staticList.forEach(sp => { screen.drawSprite(sp); });
    game.itemList.forEach(sp => { screen.drawSprite(sp); });
  }
}
function handleInput() {
  if (appInput == null) return;
  if (appInput.mouseDown && appInput.objSelected == null) {
    checkCollisions();
  }
  if (appInput.keys.p) {
    appInput.keys.p = false;
    currentGame = 4;
    game = getNextGame();
  }
}
//Checks if and what the mouse pointer selects 
function checkCollisions() {
  if (appInput == null) return;
  var items = game.itemList;
  for (let i = 0; i < items.length; i++) {
    if (items[i].collided(appInput.mousePosition)) {
      if (appInput.doubleClicked) {
        game.handleDoubleClicked(items[i]);
      }
      if (items[i].tag == TAG.BUTTON) {
        playSound(audioFile.click);
        appInput.mouseDown = false;//behave like a button
        game.buttonPressed(items[i]);
      } else {
        varfps = fpsMovement;
        appInput.setObj(items[i]);
      }
      return;
    }
  }
}
// takes sound as parameter and plays it
// added volume made correct sound quiet and wrong sound loud for testing purposes
// can stop sound after seconds if value passed in is negative sound is not stopped
// can change playback speed of sound; ex. 0.1 is 10% speed 2.0 is 2x as fast
function playSound(s, volume = 1, duration = 1, speed = 1) {
  if (!sound) { return; }
  s.currentTime = 0;
  s.volume = volume;
  s.playbackRate = speed;
  s.play();
  if (duration < 0) {
    s.loop = true;
    return;
  }
  setTimeout(() => {
    stopSound(s);
  }, duration * 1000)
}
//param s should be an Audio object 
function stopSound(s) {
  if (!sound) { return; }
  s.pause();
  s.currentTime = 0;
}
// Resize canvas elements when window is resized 
window.addEventListener("resize", adjustContent);
async function adjustContent() {
  var prev = aspectRatio;
  aspectRatio = (window.innerWidth > window.innerHeight) ? horizontalRatio : verticalRatio;
  if (prev != aspectRatio) {
    game = getNextGame();
  }
  var width = window.innerWidth * .98;
  var height = width * aspectRatio;
  screen.adjustScreen(width, height);
  var loadOn = (loadScreen.canvas.style.display == "block");
  if (!loadOn)
    loadScreen.show();
  loadScreen.adjustScreen(width, height);
  if (!loadOn) {
    loadScreen.hide();
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
// hides the canvas element with id = "load"
function hideLoadScreen() {
  stopSound(audioFile.bg);
  playSound(audioFile.loadingScreen, .15, bgDuration, 1);
  setTimeout(() => {
    loadScreen.hide();
    stopSound(audioFile.loadingScreen);
    playSound(audioFile.bg, .15, -1, 1);
    spritePool.currentLoad = null
  }, loadDelay);
}
// returns the next game, loads in the loading screen , and possibly redirects to other page
function getNextGame() {
  if (currentGame == -1) {
    currentGame = 0;
    window.location.href = "credits.html";
    return;
  }
  if (currentGame == 0) {
    if (aspectRatio == horizontalRatio)
      return new Menu();
    else
      return new VMenu();
  }
  if (currentGame == 1) {
    loadScreen.show();
    if (aspectRatio == horizontalRatio)
      spritePool.currentLoad = spritePool.shareLoad;
    else
      spritePool.currentLoad = spritePool.vShareLoad;
    hideLoadScreen();
    if (aspectRatio == horizontalRatio)
      return new ShareAndTake();
    else
      return new VShareAndTake();
  }
  if (currentGame == 2) {
    loadScreen.show();
    if (aspectRatio == horizontalRatio)
      spritePool.currentLoad = spritePool.wasteLoad;
    else
      spritePool.currentLoad = spritePool.vWasteLoad;

    hideLoadScreen();
    if (aspectRatio == horizontalRatio)
      return new FoodWaste();
    else
      return new VFoodWaste();
  }
  if (currentGame == 3) {
    loadScreen.show();
    if (aspectRatio == horizontalRatio)
      spritePool.currentLoad = spritePool.sortLoad;
    else
      spritePool.currentLoad = spritePool.vSortLoad;
    hideLoadScreen();
    if (aspectRatio == horizontalRatio)
      return new ShareAndWaste();
    else
      return new VShareAndWaste();
  }
  if (currentGame == 4) {
    currentGame = 0;
    window.location.href = "cert.html";
  }
  return null;
}
function GoToMenu() {
  currentGame = 0;
  game = getNextGame();
}
function GoToCredits() {
  currentGame = -1;
  game = getNextGame();
}
