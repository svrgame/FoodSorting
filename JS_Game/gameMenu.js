class Menu extends Game {
  constructor() { super(); }
  load() {
    this.objPool = {
      playBttn: new Obj(),
      creditBttn: new Obj(),
      background: new Obj(),
    }
    this.objPool.playBttn.addImg(`Images/${_bttnPlayImg}`);
    this.objPool.creditBttn.addImg(`Images/${_bttnCreditsImg}`);
    this.objPool.background.addImg(`Images/${_menuBackgroundImg}`);

    var filePromises = [];
    filePromises.push(this.objPool.playBttn.sprite);
    filePromises.push(this.objPool.creditBttn.sprite);
    filePromises.push(this.objPool.background.sprite);

    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    this.objPool.playBttn.scale(6, 6);
    this.objPool.creditBttn.scale(6, 6);
    this.objPool.background.scale(28, 28);

    this.objPool.playBttn.teleport(0, 5);
    this.objPool.creditBttn.teleport(0, -1);
    this.objPool.background.teleport(0, -14);

    this.staticList.push(this.objPool.background);

    this.objPool.playBttn.changeTag(TAG.BUTTON);
    this.objPool.playBttn.setBType(B_TYPE.PLAY);

    this.objPool.creditBttn.changeTag(TAG.BUTTON);
    this.objPool.creditBttn.setBType(B_TYPE.CREDITS);


    this.itemList.push(this.objPool.playBttn);
    this.itemList.push(this.objPool.creditBttn);
  }
}

class VMenu extends Game {
  constructor() { super(); }
  load() {
    this.objPool = {
      playBttn: new Obj(),
      creditBttn: new Obj(),
      background: new Obj(),
    }
    this.objPool.playBttn.addImg(`Images/${_bttnPlayImg}`);
    this.objPool.creditBttn.addImg(`Images/${_bttnCreditsImg}`);
    this.objPool.background.addImg(`Images/${_mobile_menuBackgroundImg}`);

    var filePromises = [];
    filePromises.push(this.objPool.playBttn.sprite);
    filePromises.push(this.objPool.creditBttn.sprite);
    filePromises.push(this.objPool.background.sprite);

    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    this.objPool.playBttn.scale(11, 11);
    this.objPool.creditBttn.scale(8, 8);
    this.objPool.background.scale(40, 110);

    this.objPool.playBttn.teleport(0, 10);
    this.objPool.creditBttn.teleport(0, 0);
    this.objPool.background.teleport(-3, -55);

    this.staticList.push(this.objPool.background);

    this.objPool.playBttn.changeTag(TAG.BUTTON);
    this.objPool.playBttn.setBType(B_TYPE.PLAY);

    this.objPool.creditBttn.changeTag(TAG.BUTTON);
    this.objPool.creditBttn.setBType(B_TYPE.CREDITS);


    this.itemList.push(this.objPool.playBttn);
    this.itemList.push(this.objPool.creditBttn);
  }
}