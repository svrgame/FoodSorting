class Game {
  progress = 0;//keep track of game progress // end once reaches 100
  bgameOver = false;
  barMax = 10;
  objPool = null;// will hold refrences to all possible Objects
  itemPool = [];//hold possible interactable objects 
  itemList = [];//current interactable objects in play 
  staticList = [];//holds non moving objects
  targetObj = []; //target objects where food items need to be sorted to
  spawnPoints = [];//spawn points to spawn a set of item objects 
  remainingInSet = 0; //keep track of the remaining items not yet sorted 
  coupledMap = new Map();//track coupled items

  constructor() {
    if (this.constructor == Game) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.bGameOver = false;
    this.objPool = null;
    this.itemPool = [];
    this.itemList = [];
    this.staticList = [];
    this.targetObj = [];
    this.spawnPoints = [];
    this.load();
  }
  //abstract load function, should load fill in objPool and file promises 
  load() { throw new Error("Load() must be implemented"); }
  // initalize position and scale of object , set up static and item list, 
  setUp() { throw new Error("setUp() must be implemented"); }
  vertScale() { throw new Error("setUp() must be implemented"); }
  isGameOver() { return this.bgameOver; }
  // update progress bar// assumes pFill object cointain within objPool 
  setFill() {
    if (this.progress < 0) return;
    if (this.progress > 100) this.progress = 100;
    var percent = this.progress / 100;
    var s = this.barMax * percent;
    var li = this.objPool.pFill.v1.x;
    var yi = this.objPool.pFill.v1.y;
    this.objPool.pFill.reSize(s, this.objPool.pFill.h);
    var lf = this.objPool.pFill.v1.x;
    var yf = this.objPool.pFill.v1.y;
    this.objPool.pFill.translate(li - lf, yi - yf);
  }
  //When an item object is moved, determine if it was placed in target location 
  //if not move item back to spawn location 
  // if yes update progress and update how many items in current set have been sorted
  // once all items in a set have been sorted, spawn a new set
  handleObjMoved(item) {
    var target = null;
    for (let i = 0; i < this.targetObj.length; i++) {
      if (item.inside(this.targetObj[i])) {
        target = this.targetObj[i];
        i = this.targetObj.length;
      }
    }
    //no target hit
    if (target == null) {
      item.teleport(item.spawn.x, item.spawn.y);
      return;
    }
    //target hit but not correct one 
    if (target.tag != item.tag) {
      playSound(audioFile.wrong, .5, 1, 2);
      item.teleport(item.spawn.x, item.spawn.y);
      return;
    }
    //target correct but is coupled 
    var coupled = null;
    if (item.btype == B_TYPE.COUPLED) {
      coupled = this.coupledMap.get(item);
      if (coupled.isCoupled) {// still coupled 
        playSound(audioFile.wrong, .5, 1, 3);
        item.teleport(item.spawn.x, item.spawn.y);
        return;
      }
    }
    this.itemList = itemRemove(this.itemList, item.sprite);
    this.progress += 7;
    this.setFill();
    playSound(audioFile.correct, .15, 1, 2);
    if (this.progress >= 100) {
      stopSound(audioFile.bg);
      playSound(audioFile.complete, .15, 1, 1);
      this.bgameOver = true;
      return;
    }
    var spawn;
    if (coupled != null) {
      spawn = coupled.spawn;
      coupled.count++;
      if (coupled.count == 1) return;
      coupled.reset();
    } else
      spawn = item.spawn;
    item.spawn = null;
    this.remainingInSet--;
    if (this.remainingInSet <= 0)
      this.spawnItemSet();
  }
  // manage button presses
  buttonPressed(button) {
    if (button.btype == B_TYPE.PRINT) {
      printCertificate(); // function in app.js 
    }
    else if (button.btype == B_TYPE.MENU) {
      GoToMenu(); // function in app.js 
    }
    else if (button.btype == B_TYPE.PLAY) {
      this.bgameOver = true;
    } else if (button.btype == B_TYPE.CREDITS) {
      GoToCredits();
    }
  }
  // handle if an item has been double clicked on, 
  // if its of type coupled, decouple item 
  handleDoubleClicked(obj) {
    if (obj.btype == B_TYPE.COUPLED) {
      var c = this.coupledMap.get(obj);
      if (!c.isCoupled) return;
      c.decouple();
      this.itemList.push(c.obj2);
      if (c.trio) {
        this.itemList.push(c.obj3);
        this.itemList = itemRemove(this.itemList, obj.sprite);
      }

    }
  }
  // spawn a set of items from item Pool where the set size = spawnPoints.length 
  spawnItemSet() {
    for (let i = 0; i < this.spawnPoints.length; i++) {
      let index = Math.floor(Math.random() * this.itemPool.length);
      while (this.itemPool[index].spawn != null && this) {
        index = Math.floor(Math.random() * this.itemPool.length);
      }
      this.itemPool[index].setSpawn(this.spawnPoints[i]);
      if (this.itemPool[index] instanceof Coupled)
        this.itemList.push(this.itemPool[index].obj1);
      else
        this.itemList.push(this.itemPool[index]);
    }
    this.remainingInSet = this.spawnPoints.length;
  }

}

// Certificate game where a player can print out the certicate or go back to menu 
class CertGame extends Game {
  constructor() { super(); }
  load() {
    //declare all possible objects
    this.objPool = {
      certificate: new Obj(),
      printButton: new Obj(),
      menuButton: new Obj(),
      mascot: new Obj(),
      background: new Obj(),
    }
    // add images
    this.objPool.certificate.addImg("Images/certificate.png");
    this.objPool.printButton.addImg("Images/bttnPrint.png");
    this.objPool.menuButton.addImg("Images/bttnMenu.png");
    //this.objPool.mascot.addImg("Images/mascot.png");
    //this.objPool.background.addImg("Images/certBackground.png");

    var filePromises = [];
    // promise sprites to be loaded 
    filePromises.push(this.objPool.certificate.sprite);
    filePromises.push(this.objPool.printButton.sprite);
    filePromises.push(this.objPool.menuButton.sprite);
    filePromises.push(this.objPool.mascot.sprite);
    filePromises.push(this.objPool.background.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {

    // ======================== SCALE Objects ===========================
    this.objPool.printButton.scale(5, 2);
    this.objPool.certificate.scale(25 * aspectRatio, 25);
    this.objPool.menuButton.scale(3, 3);
    this.objPool.mascot.scale(7, 13);
    this.objPool.background.scale(30, 30);
    //====================== TELEPORT Objects ===========================
    this.objPool.printButton.teleport(0, -12);
    this.objPool.certificate.teleport(0, -10);
    this.objPool.menuButton.teleport(-20, 10);
    this.objPool.mascot.teleport(0, -10);
    this.objPool.background.teleport(0, -15);
    //=========================== ADD TO STATIC LIST  ====================
    //order matters first pushed  , first drawn 
    this.staticList.push(this.objPool.background);
    // this.staticList.push(this.objPool.mascot);
    this.staticList.push(this.objPool.certificate);
    // ======== Set Up Buttons and Add to Item LIST======================
    //tag types found in object.js 
    this.objPool.printButton.changeTag(TAG.BUTTON);// declare to be type button
    this.objPool.printButton.setBType(B_TYPE.PRINT);// declare what kind of button
    this.objPool.menuButton.changeTag(TAG.BUTTON);// declare to be type button
    this.objPool.menuButton.setBType(B_TYPE.MENU);// declare what kind of button
    //=========================== ADD TO ITEM LIST ====================
    //dynamic objects, things that are interactable 
    this.itemList.push(this.objPool.printButton);
    this.itemList.push(this.objPool.menuButton);

  }
}

//removes items based on sprite.sprite value, used for removing items when correctly sorted 
function itemRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele.sprite != value;
  });
}
