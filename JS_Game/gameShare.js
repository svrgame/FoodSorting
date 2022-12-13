class VShareAndTake extends Game {

  constructor() { super(); }
  load() {
    this.barMax = 21;
    this.objPool = {
      //progressBar 
      pBar: new Obj(),
      pFill: new Obj(),
      pLogo: new Obj(),
      //Background 
      cafeteria: new Obj(),
      shareStation: new Obj(),
      tray: new Obj(),
      //Fruits & Vegtables 
      apple: new Obj(),
      banana: new Obj(),
      carrots: new Obj(),
      celery: new Obj(),
      orange: new Obj(),
      //COLD
      milk: new Obj(),
      chocolate: new Obj(),
      cheeseStick: new Obj(),
      creamCheese: new Obj(),
      yogurt: new Obj(),
      //HOT FOODS 
      burrito: new Obj(),
      burgers: new Obj(),
      pizza: new Obj(),
      corndog: new Obj(),
      //Other FOODS 
      sandwich: new Obj(),
      bagel: new Obj(),
      chips: new Obj(),
      cereal: new Obj(),
    };
    this.objPool.pBar.addImg(`Images/${_pBarImg}`);
    this.objPool.pFill.addImg(`Images/${_pFillImg}`);
    this.objPool.pLogo.addImg(`Images/${_pLogoImg}`);
    this.objPool.cafeteria.addImg(`Images/${_mobile_cafeteriaImg}`);
    this.objPool.shareStation.addImg(`Images/${_shareStationImg}`);
    this.objPool.tray.addImg(`Images/${_trayImg}`);
    this.objPool.apple.addImg(`Images/${_appleImg}`);
    this.objPool.banana.addImg(`Images/${_bananaImg}`);
    this.objPool.carrots.addImg(`Images/${_carrotsImg}`);
    this.objPool.celery.addImg(`Images/${_celeryImg}`);
    this.objPool.orange.addImg(`Images/${_orangeImg}`);
    this.objPool.milk.addImg(`Images/${_milkImg}`);
    this.objPool.chocolate.addImg(`Images/${_chocolateImg}`);
    this.objPool.cheeseStick.addImg(`Images/${_cheeseStickImg}`);
    this.objPool.creamCheese.addImg(`Images/${_creamcheeseImg}`);
    this.objPool.yogurt.addImg(`Images/${_yogurtImg}`);
    this.objPool.burrito.addImg(`Images/${_burritoImg}`);
    this.objPool.pizza.addImg(`Images/${_pizzaImg}`);
    this.objPool.corndog.addImg(`Images/${_corndogImg}`);
    this.objPool.burgers.addImg(`Images/${_burgersImg}`);
    this.objPool.sandwich.addImg(`Images/${_sandwichImg}`);
    this.objPool.bagel.addImg(`Images/${_bagelImg}`);
    this.objPool.chips.addImg(`Images/${_chipsImg}`);
    this.objPool.cereal.addImg(`Images/${_cerealImg}`);

    // ADD OBJECT.SPRITE for OBJ WITH IMAGES
    var filePromises = [];
    filePromises.push(this.objPool.pBar.sprite);
    filePromises.push(this.objPool.pFill.sprite);
    filePromises.push(this.objPool.pLogo.sprite);
    filePromises.push(this.objPool.cafeteria.sprite);
    filePromises.push(this.objPool.shareStation.sprite);
    filePromises.push(this.objPool.tray.sprite);
    filePromises.push(this.objPool.apple.sprite);
    filePromises.push(this.objPool.banana.sprite);
    filePromises.push(this.objPool.carrots.sprite);
    filePromises.push(this.objPool.celery.sprite);
    filePromises.push(this.objPool.orange.sprite);
    filePromises.push(this.objPool.milk.sprite);
    filePromises.push(this.objPool.chocolate.sprite);
    filePromises.push(this.objPool.cheeseStick.sprite);
    filePromises.push(this.objPool.creamCheese.sprite);
    filePromises.push(this.objPool.yogurt.sprite);
    filePromises.push(this.objPool.burrito.sprite);
    filePromises.push(this.objPool.corndog.sprite);
    filePromises.push(this.objPool.pizza.sprite);
    filePromises.push(this.objPool.burgers.sprite);
    filePromises.push(this.objPool.sandwich.sprite);
    filePromises.push(this.objPool.bagel.sprite);
    filePromises.push(this.objPool.chips.sprite);
    filePromises.push(this.objPool.cereal.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    //========================= CREATE TARGET OBJ ============
    var coldBin = new Obj();
    coldBin.changeTag(TAG.SHARE_COLD);
    this.targetObj.push(coldBin);

    var fruitVegBin = new Obj();
    fruitVegBin.changeTag(TAG.SHARE_FV);
    this.targetObj.push(fruitVegBin);

    var hotFoodBin = new Obj();
    hotFoodBin.changeTag(TAG.SHARE_HOT);
    this.targetObj.push(hotFoodBin);

    var otherFoodBin = new Obj();
    otherFoodBin.changeTag(TAG.SHARE_FOOD);
    this.targetObj.push(otherFoodBin);

    coldBin.scale(9, 18);
    hotFoodBin.scale(9, 18);
    fruitVegBin.scale(10, 22);
    otherFoodBin.scale(10, 22);

    coldBin.teleport(-10.2, -3);
    hotFoodBin.teleport(10.2, -3);

    fruitVegBin.teleport(-11, 16);
    otherFoodBin.teleport(10.5, 16);

    // ======================== SCALE Objects ================
    this.objPool.pBar.scale(this.barMax * 1.02, 10);
    this.objPool.pFill.scale(0.1, 9.1);
    this.objPool.pLogo.scale(7, 7 * aspectRatio);

    this.objPool.cafeteria.scale(25, 110);
    this.objPool.tray.scale(23, 23);
    this.objPool.shareStation.scale(23, 23 * aspectRatio);

    this.objPool.apple.scale(4, 4 * aspectRatio);
    this.objPool.banana.scale(5, 10);
    this.objPool.orange.scale(5, 8);
    this.objPool.carrots.scale(5, 10);
    this.objPool.celery.scale(10, 6);

    this.objPool.milk.scale(4, 4 * aspectRatio);
    this.objPool.cheeseStick.scale(3, 12);
    this.objPool.creamCheese.scale(3, 3 * aspectRatio);
    this.objPool.chocolate.scale(4, 4 * aspectRatio);
    this.objPool.yogurt.scale(6, 10);

    this.objPool.burrito.scale(10, 8);
    this.objPool.burgers.scale(8, 18);
    this.objPool.corndog.scale(10, 10);
    this.objPool.pizza.scale(12, 12);
    this.objPool.chips.scale(6, 12);
    this.objPool.bagel.scale(8, 15);
    this.objPool.cereal.scale(6, 6 * aspectRatio);
    this.objPool.sandwich.scale(10, 16);
    //====================== TELEPORT Objects ==============
    this.objPool.pBar.teleport(-1.6, 41.8);
    this.objPool.pFill.teleport(-22.3, 42.4);
    this.objPool.pLogo.teleport(16.5, 38);

    this.objPool.cafeteria.teleport(0, -55);
    this.objPool.tray.teleport(0, -45);
    this.objPool.shareStation.teleport(0, -10);
    //=========================== ADD TO STATIC LIST ========
    this.staticList.push(this.objPool.cafeteria);
    this.staticList.push(this.objPool.tray);
    this.staticList.push(this.objPool.shareStation);
    this.staticList.push(this.objPool.pBar);
    this.staticList.push(this.objPool.pFill);
    this.staticList.push(this.objPool.pLogo);
    this.staticList.push(coldBin);
    this.staticList.push(fruitVegBin);
    this.staticList.push(otherFoodBin);
    this.staticList.push(hotFoodBin);
    // ======== Set Up Tags   and add to item pool===========
    this.zoomInList.push(this.objPool.shareStation);
    this.objPool.apple.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.apple);
    this.objPool.banana.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.banana);
    this.objPool.carrots.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.carrots);
    this.objPool.celery.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.celery);
    this.objPool.orange.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.orange);
    this.objPool.milk.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.milk);
    this.objPool.chocolate.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.chocolate);
    this.objPool.cheeseStick.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.cheeseStick);
    this.objPool.creamCheese.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.creamCheese);
    this.objPool.yogurt.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.yogurt);
    this.objPool.burrito.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.burrito);
    this.objPool.pizza.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.pizza);
    this.objPool.corndog.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.corndog);
    this.objPool.burgers.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.burgers);
    this.objPool.sandwich.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.sandwich);
    this.objPool.bagel.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.bagel);
    this.objPool.chips.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.chips);
    this.objPool.cereal.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.cereal);

    this.spawnPoints.push(new Vec(-11, -28.5, 1));
    this.spawnPoints.push(new Vec(-1, -28.5, 1));
    this.spawnPoints.push(new Vec(9, -28.5, 1));
    this.spawnPoints.push(new Vec(-10, -38.8, 1));
    this.spawnPoints.push(new Vec(5, -38.8, 1));

    this.spawnItemSet();

    this.setFill();
  }

}
class ShareAndTake extends Game {

  constructor() { super(); }
  load() {
    this.objPool = {
      //progressBar 
      pBar: new Obj(),
      pFill: new Obj(),
      pLogo: new Obj(),
      //Background 
      cafeteria: new Obj(),
      shareStation: new Obj(),
      tray: new Obj(),
      //Fruits & Vegtables 
      apple: new Obj(),
      banana: new Obj(),
      carrots: new Obj(),
      celery: new Obj(),
      orange: new Obj(),
      //COLD
      milk: new Obj(),
      chocolate: new Obj(),
      cheeseStick: new Obj(),
      creamCheese: new Obj(),
      yogurt: new Obj(),
      //HOT FOODS 
      burrito: new Obj(),
      burgers: new Obj(),
      pizza: new Obj(),
      corndog: new Obj(),
      //Other FOODS 
      sandwich: new Obj(),
      bagel: new Obj(),
      chips: new Obj(),
      cereal: new Obj(),
    };
    this.objPool.pBar.addImg(`Images/${_pBarImg}`);
    this.objPool.pFill.addImg(`Images/${_pFillImg}`);
    this.objPool.pLogo.addImg(`Images/${_pLogoImg}`);
    this.objPool.cafeteria.addImg(`Images/${_cafeteriaImg}`);
    this.objPool.shareStation.addImg(`Images/${_shareStationImg}`);
    this.objPool.tray.addImg(`Images/${_trayImg}`);
    this.objPool.apple.addImg(`Images/${_appleImg}`);
    this.objPool.banana.addImg(`Images/${_bananaImg}`);
    this.objPool.carrots.addImg(`Images/${_carrotsImg}`);
    this.objPool.celery.addImg(`Images/${_celeryImg}`);
    this.objPool.orange.addImg(`Images/${_orangeImg}`);
    this.objPool.milk.addImg(`Images/${_milkImg}`);
    this.objPool.chocolate.addImg(`Images/${_chocolateImg}`);
    this.objPool.cheeseStick.addImg(`Images/${_cheeseStickImg}`);
    this.objPool.creamCheese.addImg(`Images/${_creamcheeseImg}`);
    this.objPool.yogurt.addImg(`Images/${_yogurtImg}`);
    this.objPool.burrito.addImg(`Images/${_burritoImg}`);
    this.objPool.pizza.addImg(`Images/${_pizzaImg}`);
    this.objPool.corndog.addImg(`Images/${_corndogImg}`);
    this.objPool.burgers.addImg(`Images/${_burgersImg}`);
    this.objPool.sandwich.addImg(`Images/${_sandwichImg}`);
    this.objPool.bagel.addImg(`Images/${_bagelImg}`);
    this.objPool.chips.addImg(`Images/${_chipsImg}`);
    this.objPool.cereal.addImg(`Images/${_cerealImg}`);

    // ADD OBJECT.SPRITE for OBJ WITH IMAGES
    var filePromises = [];
    filePromises.push(this.objPool.pBar.sprite);
    filePromises.push(this.objPool.pFill.sprite);
    filePromises.push(this.objPool.pLogo.sprite);
    filePromises.push(this.objPool.cafeteria.sprite);
    filePromises.push(this.objPool.shareStation.sprite);
    filePromises.push(this.objPool.tray.sprite);
    filePromises.push(this.objPool.apple.sprite);
    filePromises.push(this.objPool.banana.sprite);
    filePromises.push(this.objPool.carrots.sprite);
    filePromises.push(this.objPool.celery.sprite);
    filePromises.push(this.objPool.orange.sprite);
    filePromises.push(this.objPool.milk.sprite);
    filePromises.push(this.objPool.chocolate.sprite);
    filePromises.push(this.objPool.cheeseStick.sprite);
    filePromises.push(this.objPool.creamCheese.sprite);
    filePromises.push(this.objPool.yogurt.sprite);
    filePromises.push(this.objPool.burrito.sprite);
    filePromises.push(this.objPool.corndog.sprite);
    filePromises.push(this.objPool.pizza.sprite);
    filePromises.push(this.objPool.burgers.sprite);
    filePromises.push(this.objPool.sandwich.sprite);
    filePromises.push(this.objPool.bagel.sprite);
    filePromises.push(this.objPool.chips.sprite);
    filePromises.push(this.objPool.cereal.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    //========================= CREATE TARGET OBJ ============
    var coldBin = new Obj();
    coldBin.changeTag(TAG.SHARE_COLD);
    this.targetObj.push(coldBin);

    var fruitVegBin = new Obj();
    fruitVegBin.changeTag(TAG.SHARE_FV);
    this.targetObj.push(fruitVegBin);

    var hotFoodBin = new Obj();
    hotFoodBin.changeTag(TAG.SHARE_HOT);
    this.targetObj.push(hotFoodBin);

    var otherFoodBin = new Obj();
    otherFoodBin.changeTag(TAG.SHARE_FOOD);
    this.targetObj.push(otherFoodBin);

    coldBin.scale(4.4, 7.2);
    hotFoodBin.scale(4.4, 7.2);
    fruitVegBin.scale(5, 8);
    otherFoodBin.scale(5, 8);

    coldBin.teleport(7, -2.2);
    hotFoodBin.teleport(17, -2.2);

    fruitVegBin.teleport(6.5, 5.4);
    otherFoodBin.teleport(17.5, 5.4);

    // ======================== SCALE Objects ================

    this.objPool.pBar.scale(this.barMax * 1.02, 2.5);
    this.objPool.pFill.scale(0.1, 2);
    this.objPool.pLogo.scale(4 * aspectRatio, 4);
    this.objPool.cafeteria.scale(25, 30);
    this.objPool.tray.scale(10, 10);
    this.objPool.shareStation.scale(20 * aspectRatio, 20);

    this.objPool.apple.scale(4 * aspectRatio, 4);
    this.objPool.banana.scale(3, 5);
    this.objPool.orange.scale(3, 5);
    this.objPool.carrots.scale(3, 5);
    this.objPool.celery.scale(5, 3);

    this.objPool.milk.scale(4 * aspectRatio, 4);
    this.objPool.cheeseStick.scale(1.5, 5);
    this.objPool.creamCheese.scale(3 * aspectRatio, 3);
    this.objPool.chocolate.scale(4 * aspectRatio, 4);
    this.objPool.yogurt.scale(3, 5);

    this.objPool.burrito.scale(5, 4);
    this.objPool.burgers.scale(4, 7);
    this.objPool.corndog.scale(5, 5);
    this.objPool.pizza.scale(6, 6);
    this.objPool.chips.scale(3, 6);
    this.objPool.bagel.scale(4, 5);
    this.objPool.cereal.scale(5 * aspectRatio, 5);
    this.objPool.sandwich.scale(4, 5);
    //====================== TELEPORT Objects ==============
    this.objPool.pBar.teleport(-13, 10.8);
    this.objPool.pFill.teleport(-22.8, 11.1);
    this.objPool.pLogo.teleport(-4, 9.7);

    this.objPool.cafeteria.teleport(0, -15);
    this.objPool.tray.teleport(0, -14);
    this.objPool.shareStation.teleport(12, -5);
    //=========================== ADD TO STATIC LIST ========
    this.staticList.push(this.objPool.cafeteria);
    this.staticList.push(this.objPool.tray);
    this.staticList.push(this.objPool.shareStation);
    this.staticList.push(this.objPool.pBar);
    this.staticList.push(this.objPool.pFill);
    this.staticList.push(this.objPool.pLogo);
    this.staticList.push(coldBin);
    this.staticList.push(fruitVegBin);
    this.staticList.push(otherFoodBin);
    this.staticList.push(hotFoodBin);
    // ======== Set Up Tags   and add to item pool===========
    this.zoomInList.push(this.objPool.shareStation);
    this.objPool.apple.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.apple);
    this.objPool.banana.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.banana);
    this.objPool.carrots.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.carrots);
    this.objPool.celery.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.celery);
    this.objPool.orange.changeTag(TAG.SHARE_FV);
    this.itemPool.push(this.objPool.orange);
    this.objPool.milk.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.milk);
    this.objPool.chocolate.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.chocolate);
    this.objPool.cheeseStick.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.cheeseStick);
    this.objPool.creamCheese.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.creamCheese);
    this.objPool.yogurt.changeTag(TAG.SHARE_COLD);
    this.itemPool.push(this.objPool.yogurt);
    this.objPool.burrito.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.burrito);
    this.objPool.pizza.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.pizza);
    this.objPool.corndog.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.corndog);
    this.objPool.burgers.changeTag(TAG.SHARE_HOT);
    this.itemPool.push(this.objPool.burgers);
    this.objPool.sandwich.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.sandwich);
    this.objPool.bagel.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.bagel);
    this.objPool.chips.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.chips);
    this.objPool.cereal.changeTag(TAG.SHARE_FOOD);
    this.itemPool.push(this.objPool.cereal);

    this.spawnPoints.push(new Vec(-6, -6.5, 1));
    this.spawnPoints.push(new Vec(-1, -6.5, 1));
    this.spawnPoints.push(new Vec(3.5, -6.5, 1));
    this.spawnPoints.push(new Vec(2, -11.8, 1));
    this.spawnPoints.push(new Vec(-5.5, -11.8, 1));

    this.spawnItemSet();

    this.setFill();
  }

}