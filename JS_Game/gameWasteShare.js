
// round combining both share and take and waste rounds together
class VShareAndWaste extends Game {
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
      wasteStation: new Obj(),
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
      //waste 
      wapple: new Obj(),
      wbanana: new Obj(),
      wchipBag: new Obj(),

      milkCarton: new Obj(),
      milkPuddle: new Obj(),

      chCarton: new Obj(),
      chPuddle: new Obj(),

      straw: new Obj(),
      wburrito: new Obj(),
      orangePeel: new Obj(),
      spork: new Obj(),
      napkin: new Obj(),

      pizzaIn: new Obj(),
      wpizza: new Obj(),
      plastic: new Obj(),
    };
    this.objPool.pBar.addImg(`Images/${_pBarImg}`);
    this.objPool.pFill.addImg(`Images/${_pFillImg}`);
    this.objPool.pLogo.addImg(`Images/${_pLogoImg}`);
    this.objPool.cafeteria.addImg(`Images/${_mobile_schoolCafeImg}`);
    this.objPool.shareStation.addImg(`Images/${_shareStationImg}`);
    this.objPool.wasteStation.addImg(`Images/${_wasteStationImg}`);
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

    this.objPool.wapple.addImg(`Images/${_e_appleImg}`);
    this.objPool.wbanana.addImg(`Images/${_e_bananaImg}`);
    this.objPool.wchipBag.addImg(`Images/${_e_chipsImg}`);
    this.objPool.milkCarton.addImg(`Images/${_e_milkImg}`);
    this.objPool.milkPuddle.addImg(`Images/${_e_milkPImg}`);
    this.objPool.chCarton.addImg(`Images/${_e_chMilkImg}`);
    this.objPool.chPuddle.addImg(`Images/${_e_chMilkPImg}`);
    this.objPool.straw.addImg(`Images/${_strawImg}`);
    this.objPool.wburrito.addImg(`Images/${_e_burritoImg}`);
    this.objPool.orangePeel.addImg(`Images/${_orangePeelImg}`);
    this.objPool.spork.addImg(`Images/${_sporkImg}`);
    this.objPool.napkin.addImg(`Images/${_napkinImg}`);
    this.objPool.pizzaIn.addImg(`Images/${_e_pizza_cImg}`);
    this.objPool.wpizza.addImg(`Images/${_e_pizzaImg}`);
    this.objPool.plastic.addImg(`Images/${_plasticImg}`);

    // ADD OBJECT.SPRITE for OBJ WITH IMAGES
    var filePromises = [];
    filePromises.push(this.objPool.pBar.sprite);
    filePromises.push(this.objPool.pFill.sprite);
    filePromises.push(this.objPool.pLogo.sprite);
    filePromises.push(this.objPool.cafeteria.sprite);
    filePromises.push(this.objPool.shareStation.sprite);
    filePromises.push(this.objPool.wasteStation.sprite);
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
    filePromises.push(this.objPool.wapple.sprite);
    filePromises.push(this.objPool.wbanana.sprite);
    filePromises.push(this.objPool.wchipBag.sprite);
    filePromises.push(this.objPool.milkCarton.sprite);
    filePromises.push(this.objPool.milkPuddle.sprite);
    filePromises.push(this.objPool.chCarton.sprite);
    filePromises.push(this.objPool.chPuddle.sprite);
    filePromises.push(this.objPool.straw.sprite);
    filePromises.push(this.objPool.wburrito.sprite);
    filePromises.push(this.objPool.orangePeel.sprite);
    filePromises.push(this.objPool.spork.sprite);
    filePromises.push(this.objPool.napkin.sprite);
    filePromises.push(this.objPool.pizzaIn.sprite);
    filePromises.push(this.objPool.wpizza.sprite);
    filePromises.push(this.objPool.plastic.sprite);
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

    var trashBin = new Obj();
    trashBin.changeTag(TAG.TRASH);
    this.targetObj.push(trashBin);

    var scrapBin = new Obj();
    scrapBin.changeTag(TAG.SCRAP);
    this.targetObj.push(scrapBin);

    var milkBin = new Obj();
    milkBin.changeTag(TAG.MILK);
    this.targetObj.push(milkBin);

    this.staticList.push(coldBin);
    this.staticList.push(fruitVegBin);
    this.staticList.push(hotFoodBin);
    this.staticList.push(otherFoodBin);
    this.staticList.push(trashBin);
    this.staticList.push(scrapBin);
    this.staticList.push(milkBin);

    coldBin.scale(6.8, 13);
    hotFoodBin.scale(6.8, 13);
    fruitVegBin.scale(7.2, 16);
    otherFoodBin.scale(7.2, 16);

    coldBin.teleport(-16, 10);
    fruitVegBin.teleport(-16.5, 23.5);
    otherFoodBin.teleport(0, 23.5);
    hotFoodBin.teleport(-1, 10);

    trashBin.scale(5.6, 24);
    scrapBin.scale(5.6, 24);
    milkBin.scale(5.6, 26);

    trashBin.teleport(-7.6, -15);
    scrapBin.teleport(5, -15);
    milkBin.teleport(17.5, -15);

    // ======================== SCALE Objects ================


    this.objPool.shareStation.scale(17, 17 * aspectRatio);
    this.objPool.wasteStation.scale(19, 19 * aspectRatio);

    this.objPool.pBar.scale(this.barMax * 1.02, 10);
    this.objPool.pFill.scale(0.1, 9.1);
    this.objPool.pLogo.scale(7, 7 * aspectRatio);

    this.objPool.cafeteria.scale(25, 120);
    this.objPool.tray.scale(23, 23);


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

    this.objPool.wapple.scale(4, 10);
    this.objPool.wbanana.scale(6, 12);
    this.objPool.wchipBag.scale(6, 6 * aspectRatio);
    this.objPool.milkCarton.scale(4, 4 * aspectRatio);
    this.objPool.milkPuddle.scale(4, 4 * aspectRatio);
    this.objPool.chCarton.scale(4, 4 * aspectRatio);
    this.objPool.chPuddle.scale(4, 4 * aspectRatio);
    this.objPool.straw.scale(3, 10);
    this.objPool.wburrito.scale(8, 12);
    this.objPool.orangePeel.scale(6, 8);
    this.objPool.spork.scale(3, 10);
    this.objPool.napkin.scale(4, 12);

    this.objPool.pizzaIn.scale(6, 6 * aspectRatio);
    this.objPool.wpizza.scale(5, 5 * aspectRatio);
    this.objPool.plastic.scale(8, 10);
    //====================== TELEPORT Objects ==============
    this.objPool.pBar.teleport(-1.6, 41.8);
    this.objPool.pFill.teleport(-22.3, 42.4);
    this.objPool.pLogo.teleport(16.5, 38);
    this.objPool.shareStation.teleport(-8, 5);
    this.objPool.wasteStation.teleport(5, -24);
    this.objPool.cafeteria.teleport(0, -55);
    this.objPool.tray.teleport(0, -45);
    //=========================== ADD TO STATIC LIST ========
    this.staticList.push(this.objPool.cafeteria);
    this.staticList.push(this.objPool.shareStation);
    this.staticList.push(this.objPool.wasteStation);
    this.staticList.push(this.objPool.tray);
    this.staticList.push(this.objPool.pBar);
    this.staticList.push(this.objPool.pFill);
    this.staticList.push(this.objPool.pLogo);
    // ======== Set Up Tags   and add to item pool===========
    this.objPool.apple.changeTag(TAG.SHARE_FV);
    this.objPool.banana.changeTag(TAG.SHARE_FV);
    this.objPool.carrots.changeTag(TAG.SHARE_FV);
    this.objPool.celery.changeTag(TAG.SHARE_FV);
    this.objPool.orange.changeTag(TAG.SHARE_FV);
    this.objPool.milk.changeTag(TAG.SHARE_COLD);
    this.objPool.chocolate.changeTag(TAG.SHARE_COLD);
    this.objPool.cheeseStick.changeTag(TAG.SHARE_COLD);
    this.objPool.creamCheese.changeTag(TAG.SHARE_COLD);
    this.objPool.yogurt.changeTag(TAG.SHARE_COLD);
    this.objPool.burrito.changeTag(TAG.SHARE_HOT);
    this.objPool.pizza.changeTag(TAG.SHARE_HOT);
    this.objPool.corndog.changeTag(TAG.SHARE_HOT);
    this.objPool.burgers.changeTag(TAG.SHARE_HOT);
    this.objPool.sandwich.changeTag(TAG.SHARE_FOOD);
    this.objPool.bagel.changeTag(TAG.SHARE_FOOD);
    this.objPool.chips.changeTag(TAG.SHARE_FOOD);
    this.objPool.cereal.changeTag(TAG.SHARE_FOOD);

    this.objPool.wbanana.changeTag(TAG.SCRAP);
    this.objPool.wapple.changeTag(TAG.SCRAP);
    this.objPool.wchipBag.changeTag(TAG.TRASH);
    this.objPool.milkCarton.changeTag(TAG.TRASH);
    this.objPool.milkPuddle.changeTag(TAG.MILK);
    this.objPool.chCarton.changeTag(TAG.TRASH);
    this.objPool.chPuddle.changeTag(TAG.MILK);
    this.objPool.straw.changeTag(TAG.TRASH);
    this.objPool.orangePeel.changeTag(TAG.SCRAP);
    this.objPool.wburrito.changeTag(TAG.SCRAP);
    this.objPool.spork.changeTag(TAG.TRASH);
    this.objPool.napkin.changeTag(TAG.TRASH);
    this.objPool.pizzaIn.changeTag(TAG.NONE);
    this.objPool.wpizza.changeTag(TAG.SCRAP);
    this.objPool.plastic.changeTag(TAG.TRASH);


    var milkCP = new Coupled(this.objPool.milkCarton, this.objPool.milkPuddle);
    this.coupledMap.set(this.objPool.milkCarton, milkCP);
    this.coupledMap.set(this.objPool.milkPuddle, milkCP);
    //chocolate milk
    var chCP = new Coupled(this.objPool.chCarton, this.objPool.chPuddle);
    this.coupledMap.set(this.objPool.chCarton, chCP);
    this.coupledMap.set(this.objPool.chPuddle, chCP);
    //pizza
    var pzza = new Coupled(this.objPool.pizzaIn, this.objPool.wpizza, this.objPool.plastic);
    this.coupledMap.set(this.objPool.pizzaIn, pzza);
    this.coupledMap.set(this.objPool.wpizza, pzza);
    this.coupledMap.set(this.objPool.plastic, pzza);

    this.itemPool.push(this.objPool.apple);
    this.itemPool.push(this.objPool.banana);
    this.itemPool.push(this.objPool.carrots);
    this.itemPool.push(this.objPool.celery);
    this.itemPool.push(this.objPool.orange);
    this.itemPool.push(this.objPool.milk);
    this.itemPool.push(this.objPool.chocolate);
    this.itemPool.push(this.objPool.cheeseStick);
    this.itemPool.push(this.objPool.creamCheese);
    this.itemPool.push(this.objPool.yogurt);
    this.itemPool.push(this.objPool.burrito);
    this.itemPool.push(this.objPool.pizza);
    this.itemPool.push(this.objPool.corndog);
    this.itemPool.push(this.objPool.burgers);
    this.itemPool.push(this.objPool.sandwich);
    this.itemPool.push(this.objPool.bagel);
    this.itemPool.push(this.objPool.chips);
    this.itemPool.push(this.objPool.cereal);
    this.itemPool.push(milkCP);
    this.itemPool.push(chCP);
    this.itemPool.push(pzza);
    this.itemPool.push(this.objPool.wapple);
    this.itemPool.push(this.objPool.wbanana);
    this.itemPool.push(this.objPool.wchipBag);
    this.itemPool.push(this.objPool.straw);
    this.itemPool.push(this.objPool.orangePeel);
    this.itemPool.push(this.objPool.wburrito);
    this.itemPool.push(this.objPool.spork);
    this.itemPool.push(this.objPool.napkin);

    this.spawnPoints.push(new Vec(-11, -28.5, 1));
    this.spawnPoints.push(new Vec(-1, -28.5, 1));
    this.spawnPoints.push(new Vec(9, -28.5, 1));
    this.spawnPoints.push(new Vec(-10, -38.8, 1));
    this.spawnPoints.push(new Vec(5, -38.8, 1));
    this.spawnItemSet();

    this.setFill();
  }

}

// round combining both share and take and waste rounds together
class ShareAndWaste extends Game {
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
      wasteStation: new Obj(),
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
      //waste 
      wapple: new Obj(),
      wbanana: new Obj(),
      wchipBag: new Obj(),

      milkCarton: new Obj(),
      milkPuddle: new Obj(),

      chCarton: new Obj(),
      chPuddle: new Obj(),

      straw: new Obj(),
      wburrito: new Obj(),
      orangePeel: new Obj(),
      spork: new Obj(),
      napkin: new Obj(),

      pizzaIn: new Obj(),
      wpizza: new Obj(),
      plastic: new Obj(),
    };
    this.objPool.pBar.addImg(`Images/${_pBarImg}`);
    this.objPool.pFill.addImg(`Images/${_pFillImg}`);
    this.objPool.pLogo.addImg(`Images/${_pLogoImg}`);
    this.objPool.cafeteria.addImg(`Images/${_schoolCafeImg}`);
    this.objPool.shareStation.addImg(`Images/${_shareStationImg}`);
    this.objPool.wasteStation.addImg(`Images/${_wasteStationImg}`);
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

    this.objPool.wapple.addImg(`Images/${_e_appleImg}`);
    this.objPool.wbanana.addImg(`Images/${_e_bananaImg}`);
    this.objPool.wchipBag.addImg(`Images/${_e_chipsImg}`);
    this.objPool.milkCarton.addImg(`Images/${_e_milkImg}`);
    this.objPool.milkPuddle.addImg(`Images/${_e_milkPImg}`);
    this.objPool.chCarton.addImg(`Images/${_e_chMilkImg}`);
    this.objPool.chPuddle.addImg(`Images/${_e_chMilkPImg}`);
    this.objPool.straw.addImg(`Images/${_strawImg}`);
    this.objPool.wburrito.addImg(`Images/${_e_burritoImg}`);
    this.objPool.orangePeel.addImg(`Images/${_orangePeelImg}`);
    this.objPool.spork.addImg(`Images/${_sporkImg}`);
    this.objPool.napkin.addImg(`Images/${_napkinImg}`);
    this.objPool.pizzaIn.addImg(`Images/${_e_pizza_cImg}`);
    this.objPool.wpizza.addImg(`Images/${_e_pizzaImg}`);
    this.objPool.plastic.addImg(`Images/${_plasticImg}`);

    // ADD OBJECT.SPRITE for OBJ WITH IMAGES
    var filePromises = [];
    filePromises.push(this.objPool.pBar.sprite);
    filePromises.push(this.objPool.pFill.sprite);
    filePromises.push(this.objPool.pLogo.sprite);
    filePromises.push(this.objPool.cafeteria.sprite);
    filePromises.push(this.objPool.shareStation.sprite);
    filePromises.push(this.objPool.wasteStation.sprite);
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
    filePromises.push(this.objPool.wapple.sprite);
    filePromises.push(this.objPool.wbanana.sprite);
    filePromises.push(this.objPool.wchipBag.sprite);
    filePromises.push(this.objPool.milkCarton.sprite);
    filePromises.push(this.objPool.milkPuddle.sprite);
    filePromises.push(this.objPool.chCarton.sprite);
    filePromises.push(this.objPool.chPuddle.sprite);
    filePromises.push(this.objPool.straw.sprite);
    filePromises.push(this.objPool.wburrito.sprite);
    filePromises.push(this.objPool.orangePeel.sprite);
    filePromises.push(this.objPool.spork.sprite);
    filePromises.push(this.objPool.napkin.sprite);
    filePromises.push(this.objPool.pizzaIn.sprite);
    filePromises.push(this.objPool.wpizza.sprite);
    filePromises.push(this.objPool.plastic.sprite);
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

    var trashBin = new Obj();
    trashBin.changeTag(TAG.TRASH);
    this.targetObj.push(trashBin);

    var scrapBin = new Obj();
    scrapBin.changeTag(TAG.SCRAP);
    this.targetObj.push(scrapBin);

    var milkBin = new Obj();
    milkBin.changeTag(TAG.MILK);
    this.targetObj.push(milkBin);

    this.staticList.push(coldBin);
    this.staticList.push(fruitVegBin);
    this.staticList.push(hotFoodBin);
    this.staticList.push(otherFoodBin);
    this.staticList.push(trashBin);
    this.staticList.push(scrapBin);
    this.staticList.push(milkBin);

    coldBin.scale(4, 5.8);
    fruitVegBin.scale(4.2, 7);
    hotFoodBin.scale(4, 5.8);
    otherFoodBin.scale(4.2, 7);

    coldBin.teleport(-18.3, -5.5);
    fruitVegBin.teleport(-18.5, .9);
    otherFoodBin.teleport(-9.5, .9);
    hotFoodBin.teleport(-9.9, -5.5);

    trashBin.scale(3.1, 14);
    scrapBin.scale(3.1, 14);
    milkBin.scale(3.1, 14);

    trashBin.teleport(6.9, -12);
    scrapBin.teleport(14, -12);
    milkBin.teleport(21, -12);

    // ======================== SCALE Objects ================


    this.objPool.shareStation.scale(17 * aspectRatio, 17);
    this.objPool.wasteStation.scale(19 * aspectRatio, 19);

    this.objPool.pBar.scale(this.barMax * 1.02, 2.5);
    this.objPool.pFill.scale(0.1, 2);
    this.objPool.pLogo.scale(4 * aspectRatio, 4);
    this.objPool.cafeteria.scale(25, 30);
    this.objPool.tray.scale(10, 10);


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

    this.objPool.wapple.scale(2, 5);
    this.objPool.wbanana.scale(3, 6);
    this.objPool.wchipBag.scale(5 * aspectRatio, 5);
    this.objPool.milkCarton.scale(4 * aspectRatio, 4);
    this.objPool.milkPuddle.scale(4 * aspectRatio, 4);
    this.objPool.chCarton.scale(4 * aspectRatio, 4);
    this.objPool.chPuddle.scale(4 * aspectRatio, 4);
    this.objPool.straw.scale(1, 4);
    this.objPool.wburrito.scale(4, 6);
    this.objPool.orangePeel.scale(3, 4);
    this.objPool.spork.scale(1.5, 5);
    this.objPool.napkin.scale(2, 5);

    this.objPool.pizzaIn.scale(6 * aspectRatio, 6);
    this.objPool.wpizza.scale(5 * aspectRatio, 5);
    this.objPool.plastic.scale(4, 5);
    //====================== TELEPORT Objects ==============
    this.objPool.pBar.teleport(-13, 9.8);
    this.objPool.pFill.teleport(-22.8, 10.1);
    this.objPool.pLogo.teleport(-4, 8.7);
    this.objPool.shareStation.teleport(-14, -8);
    this.objPool.wasteStation.teleport(14, -15);
    this.objPool.cafeteria.teleport(0, -14);
    this.objPool.tray.teleport(-3, -15);
    //=========================== ADD TO STATIC LIST ========
    this.staticList.push(this.objPool.cafeteria);
    this.staticList.push(this.objPool.shareStation);
    this.staticList.push(this.objPool.wasteStation);
    this.staticList.push(this.objPool.tray);
    this.staticList.push(this.objPool.pBar);
    this.staticList.push(this.objPool.pFill);
    this.staticList.push(this.objPool.pLogo);
    // ======== Set Up Tags   and add to item pool===========
    this.objPool.apple.changeTag(TAG.SHARE_FV);
    this.objPool.banana.changeTag(TAG.SHARE_FV);
    this.objPool.carrots.changeTag(TAG.SHARE_FV);
    this.objPool.celery.changeTag(TAG.SHARE_FV);
    this.objPool.orange.changeTag(TAG.SHARE_FV);
    this.objPool.milk.changeTag(TAG.SHARE_COLD);
    this.objPool.chocolate.changeTag(TAG.SHARE_COLD);
    this.objPool.cheeseStick.changeTag(TAG.SHARE_COLD);
    this.objPool.creamCheese.changeTag(TAG.SHARE_COLD);
    this.objPool.yogurt.changeTag(TAG.SHARE_COLD);
    this.objPool.burrito.changeTag(TAG.SHARE_HOT);
    this.objPool.pizza.changeTag(TAG.SHARE_HOT);
    this.objPool.corndog.changeTag(TAG.SHARE_HOT);
    this.objPool.burgers.changeTag(TAG.SHARE_HOT);
    this.objPool.sandwich.changeTag(TAG.SHARE_FOOD);
    this.objPool.bagel.changeTag(TAG.SHARE_FOOD);
    this.objPool.chips.changeTag(TAG.SHARE_FOOD);
    this.objPool.cereal.changeTag(TAG.SHARE_FOOD);

    this.objPool.wbanana.changeTag(TAG.SCRAP);
    this.objPool.wapple.changeTag(TAG.SCRAP);
    this.objPool.wchipBag.changeTag(TAG.TRASH);
    this.objPool.milkCarton.changeTag(TAG.TRASH);
    this.objPool.milkPuddle.changeTag(TAG.MILK);
    this.objPool.chCarton.changeTag(TAG.TRASH);
    this.objPool.chPuddle.changeTag(TAG.MILK);
    this.objPool.straw.changeTag(TAG.TRASH);
    this.objPool.orangePeel.changeTag(TAG.SCRAP);
    this.objPool.wburrito.changeTag(TAG.SCRAP);
    this.objPool.spork.changeTag(TAG.TRASH);
    this.objPool.napkin.changeTag(TAG.TRASH);
    this.objPool.pizzaIn.changeTag(TAG.NONE);
    this.objPool.wpizza.changeTag(TAG.SCRAP);
    this.objPool.plastic.changeTag(TAG.TRASH);


    var milkCP = new Coupled(this.objPool.milkCarton, this.objPool.milkPuddle);
    this.coupledMap.set(this.objPool.milkCarton, milkCP);
    this.coupledMap.set(this.objPool.milkPuddle, milkCP);
    //chocolate milk
    var chCP = new Coupled(this.objPool.chCarton, this.objPool.chPuddle);
    this.coupledMap.set(this.objPool.chCarton, chCP);
    this.coupledMap.set(this.objPool.chPuddle, chCP);
    //pizza
    var pzza = new Coupled(this.objPool.pizzaIn, this.objPool.wpizza, this.objPool.plastic);
    this.coupledMap.set(this.objPool.pizzaIn, pzza);
    this.coupledMap.set(this.objPool.wpizza, pzza);
    this.coupledMap.set(this.objPool.plastic, pzza);

    this.itemPool.push(this.objPool.apple);
    this.itemPool.push(this.objPool.banana);
    this.itemPool.push(this.objPool.carrots);
    this.itemPool.push(this.objPool.celery);
    this.itemPool.push(this.objPool.orange);
    this.itemPool.push(this.objPool.milk);
    this.itemPool.push(this.objPool.chocolate);
    this.itemPool.push(this.objPool.cheeseStick);
    this.itemPool.push(this.objPool.creamCheese);
    this.itemPool.push(this.objPool.yogurt);
    this.itemPool.push(this.objPool.burrito);
    this.itemPool.push(this.objPool.pizza);
    this.itemPool.push(this.objPool.corndog);
    this.itemPool.push(this.objPool.burgers);
    this.itemPool.push(this.objPool.sandwich);
    this.itemPool.push(this.objPool.bagel);
    this.itemPool.push(this.objPool.chips);
    this.itemPool.push(this.objPool.cereal);
    this.itemPool.push(milkCP);
    this.itemPool.push(chCP);
    this.itemPool.push(pzza);
    this.itemPool.push(this.objPool.wapple);
    this.itemPool.push(this.objPool.wbanana);
    this.itemPool.push(this.objPool.wchipBag);
    this.itemPool.push(this.objPool.straw);
    this.itemPool.push(this.objPool.orangePeel);
    this.itemPool.push(this.objPool.wburrito);
    this.itemPool.push(this.objPool.spork);
    this.itemPool.push(this.objPool.napkin);

    this.spawnPoints.push(new Vec(-9, -7.5, 1));
    this.spawnPoints.push(new Vec(-4, -7.5, 1));
    this.spawnPoints.push(new Vec(0.5, -7.5, 1));
    this.spawnPoints.push(new Vec(-1, -12.8, 1));
    this.spawnPoints.push(new Vec(-8.5, -12.8, 1));
    this.spawnItemSet();

    this.setFill();
  }

}