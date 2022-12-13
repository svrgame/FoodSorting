class CreditsG extends Game {
  constructor() { super(); }
  load() {
    this.objPool = {
      creditsPage: new Obj(),
      menuBttn: new Obj(),
    }
    this.objPool.creditsPage.addImg(`Images/${_creditsPageImg}`);
    this.objPool.menuBttn.addImg(`Images/${_bttnMenuImg}`);
    var filePromises = [];
    filePromises.push(this.objPool.creditsPage.sprite);
    filePromises.push(this.objPool.menuBttn.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    this.objPool.creditsPage.scale(28, 28);
    this.objPool.menuBttn.scale(3, 3);

    this.objPool.creditsPage.teleport(0, -14);
    this.objPool.menuBttn.teleport(-20, 10);

    this.staticList.push(this.objPool.creditsPage);

    this.objPool.menuBttn.changeTag(TAG.BUTTON);
    this.objPool.menuBttn.setBType(B_TYPE.MENU);

    this.itemList.push(this.objPool.menuBttn);

  }
}
class VCreditsG extends Game {
  constructor() { super(); }
  load() {
    this.objPool = {
      creditsPage: new Obj(),
      menuBttn: new Obj(),
    }
    this.objPool.creditsPage.addImg(`Images/${_mobile_creditsPageImg}`);
    this.objPool.menuBttn.addImg(`Images/${_bttnMenuImg}`);
    var filePromises = [];
    filePromises.push(this.objPool.creditsPage.sprite);
    filePromises.push(this.objPool.menuBttn.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    this.objPool.creditsPage.scale(35, 100);
    this.objPool.menuBttn.scale(7, 8);

    this.objPool.creditsPage.teleport(.5, -53);
    this.objPool.menuBttn.teleport(-17, 35);

    this.staticList.push(this.objPool.creditsPage);

    this.objPool.menuBttn.changeTag(TAG.BUTTON);
    this.objPool.menuBttn.setBType(B_TYPE.MENU);

    this.itemList.push(this.objPool.menuBttn);

  }
}