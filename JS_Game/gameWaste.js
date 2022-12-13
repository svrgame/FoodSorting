class VFoodWaste extends Game {
  constructor() { super(); }
  load() {
    this.barMax = 21;
    this.objPool = {
      cafeteria: new Obj(),
      pBar: new Obj(),
      pFill: new Obj(),
      pLogo: new Obj(),
      tray: new Obj(),
      station: new Obj(),

      apple: new Obj(),
      banana: new Obj(),
      chipBag: new Obj(),

      milkCarton: new Obj(),
      milkPuddle: new Obj(),

      chCarton: new Obj(),
      chPuddle: new Obj(),

      straw: new Obj(),
      burrito: new Obj(),
      orangePeel: new Obj(),
      spork: new Obj(),
      napkin: new Obj(),

      pizzaIn: new Obj(),
      pizza: new Obj(),
      plastic: new Obj(),
    }
    this.objPool.cafeteria.addImg(`Images/${_mobile_backWallImg}`);
    this.objPool.pBar.addImg(`Images/${_pBarImg}`);
    this.objPool.pFill.addImg(`Images/${_pFillImg}`);
    this.objPool.tray.addImg(`Images/${_trayImg}`);
    this.objPool.station.addImg(`Images/${_wasteStationImg}`);
    this.objPool.pLogo.addImg(`Images/${_pLogoImg}`);

    this.objPool.apple.addImg(`Images/${_e_appleImg}`);
    this.objPool.banana.addImg(`Images/${_e_bananaImg}`);
    this.objPool.chipBag.addImg(`Images/${_e_chipsImg}`);
    this.objPool.milkCarton.addImg(`Images/${_e_milkImg}`);
    this.objPool.milkPuddle.addImg(`Images/${_e_milkPImg}`);
    this.objPool.chCarton.addImg(`Images/${_e_chMilkImg}`);
    this.objPool.chPuddle.addImg(`Images/${_e_chMilkPImg}`);
    this.objPool.straw.addImg(`Images/${_strawImg}`);
    this.objPool.burrito.addImg(`Images/${_e_burritoImg}`);
    this.objPool.orangePeel.addImg(`Images/${_orangePeelImg}`);
    this.objPool.spork.addImg(`Images/${_sporkImg}`);
    this.objPool.napkin.addImg(`Images/${_napkinImg}`);
    this.objPool.pizzaIn.addImg(`Images/${_e_pizza_cImg}`);
    this.objPool.pizza.addImg(`Images/${_e_pizzaImg}`);
    this.objPool.plastic.addImg(`Images/${_plasticImg}`);

    var filePromises = [];
    filePromises.push(this.objPool.cafeteria.sprite);
    filePromises.push(this.objPool.pBar.sprite);
    filePromises.push(this.objPool.pFill.sprite);
    filePromises.push(this.objPool.tray.sprite);
    filePromises.push(this.objPool.station.sprite);
    filePromises.push(this.objPool.pLogo.sprite);

    filePromises.push(this.objPool.apple.sprite);
    filePromises.push(this.objPool.banana.sprite);
    filePromises.push(this.objPool.chipBag.sprite);
    filePromises.push(this.objPool.milkCarton.sprite);
    filePromises.push(this.objPool.milkPuddle.sprite);
    filePromises.push(this.objPool.chCarton.sprite);
    filePromises.push(this.objPool.chPuddle.sprite);
    filePromises.push(this.objPool.straw.sprite);
    filePromises.push(this.objPool.burrito.sprite);
    filePromises.push(this.objPool.orangePeel.sprite);
    filePromises.push(this.objPool.spork.sprite);
    filePromises.push(this.objPool.napkin.sprite);
    filePromises.push(this.objPool.pizzaIn.sprite);
    filePromises.push(this.objPool.pizza.sprite);
    filePromises.push(this.objPool.plastic.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    // ======================== Create Targets ====================
    var trashBin = new Obj();
    trashBin.changeTag(TAG.TRASH);
    this.targetObj.push(trashBin);

    var scrapBin = new Obj();
    scrapBin.changeTag(TAG.SCRAP);
    this.targetObj.push(scrapBin);

    var milkBin = new Obj();
    milkBin.changeTag(TAG.MILK);
    this.targetObj.push(milkBin);

    trashBin.scale(6.9, 40);
    scrapBin.scale(6.9, 40);
    milkBin.scale(6.9, 40);

    trashBin.teleport(-15, -2);
    scrapBin.teleport(0, -2);
    milkBin.teleport(15, -2);
    // ======================== SCALE Objects =======================
    this.objPool.cafeteria.scale(30, 150);

    this.objPool.pBar.scale(this.barMax * 1.02, 10);
    this.objPool.pFill.scale(0.1, 9.1);
    this.objPool.pLogo.scale(7, 7 * aspectRatio);

    this.objPool.tray.scale(23, 23);
    this.objPool.station.scale(23, 23 * aspectRatio);

    this.objPool.apple.scale(4, 10);
    this.objPool.banana.scale(6, 12);
    this.objPool.chipBag.scale(6, 6 * aspectRatio);
    this.objPool.milkCarton.scale(4, 4 * aspectRatio);
    this.objPool.milkPuddle.scale(4, 4 * aspectRatio);
    this.objPool.chCarton.scale(4, 4 * aspectRatio);
    this.objPool.chPuddle.scale(4, 4 * aspectRatio);
    this.objPool.straw.scale(3, 10);
    this.objPool.burrito.scale(8, 12);
    this.objPool.orangePeel.scale(6, 8);
    this.objPool.spork.scale(3, 10);
    this.objPool.napkin.scale(4, 12);

    this.objPool.pizzaIn.scale(6, 6 * aspectRatio);
    this.objPool.pizza.scale(5, 5 * aspectRatio);
    this.objPool.plastic.scale(8, 10);


    // =================TELEPORT AND PUSH STATIC OBJECTS 
    this.objPool.cafeteria.teleport(0, -55);
    this.objPool.tray.teleport(0, -45);
    this.objPool.station.teleport(0, -9);

    this.objPool.pBar.teleport(-1.6, 41.8);
    this.objPool.pFill.teleport(-22.3, 42.4);
    this.objPool.pLogo.teleport(16.5, 38);


    this.staticList.push(trashBin);
    this.staticList.push(scrapBin);
    this.staticList.push(milkBin);

    this.staticList.push(this.objPool.cafeteria);
    this.staticList.push(this.objPool.station);
    this.staticList.push(this.objPool.tray);
    this.staticList.push(this.objPool.pBar);
    this.staticList.push(this.objPool.pFill);
    this.staticList.push(this.objPool.pLogo);
    //====================== Add Tags ===================
    this.objPool.banana.changeTag(TAG.SCRAP);
    this.objPool.apple.changeTag(TAG.SCRAP);
    this.objPool.chipBag.changeTag(TAG.TRASH);
    this.objPool.milkCarton.changeTag(TAG.TRASH);
    this.objPool.milkPuddle.changeTag(TAG.MILK);
    this.objPool.chCarton.changeTag(TAG.TRASH);
    this.objPool.chPuddle.changeTag(TAG.MILK);
    this.objPool.straw.changeTag(TAG.TRASH);
    this.objPool.orangePeel.changeTag(TAG.SCRAP);
    this.objPool.burrito.changeTag(TAG.SCRAP);
    this.objPool.spork.changeTag(TAG.TRASH);
    this.objPool.napkin.changeTag(TAG.TRASH);
    this.objPool.pizzaIn.changeTag(TAG.NONE);
    this.objPool.pizza.changeTag(TAG.SCRAP);
    this.objPool.plastic.changeTag(TAG.TRASH);


    //====================== Create Coupled Items ===================
    var milkCP = new Coupled(this.objPool.milkCarton, this.objPool.milkPuddle);
    this.coupledMap.set(this.objPool.milkCarton, milkCP);
    this.coupledMap.set(this.objPool.milkPuddle, milkCP);
    //chocolate milk
    var chCP = new Coupled(this.objPool.chCarton, this.objPool.chPuddle);
    this.coupledMap.set(this.objPool.chCarton, chCP);
    this.coupledMap.set(this.objPool.chPuddle, chCP);
    //pizza
    var pzza = new Coupled(this.objPool.pizzaIn, this.objPool.pizza, this.objPool.plastic);
    this.coupledMap.set(this.objPool.pizzaIn, pzza);
    this.coupledMap.set(this.objPool.pizza, pzza);
    this.coupledMap.set(this.objPool.plastic, pzza);
    //=========================== Push into itemPool ======
    this.itemPool.push(milkCP);
    this.itemPool.push(chCP);
    this.itemPool.push(pzza);
    this.itemPool.push(this.objPool.apple);
    this.itemPool.push(this.objPool.banana);
    this.itemPool.push(this.objPool.chipBag);
    this.itemPool.push(this.objPool.straw);
    this.itemPool.push(this.objPool.orangePeel);
    this.itemPool.push(this.objPool.burrito);
    this.itemPool.push(this.objPool.spork);
    this.itemPool.push(this.objPool.napkin);

    //========================= set spawns and intial items =======

    this.spawnPoints.push(new Vec(-11, -28.5, 1));
    this.spawnPoints.push(new Vec(-1, -28.5, 1));
    this.spawnPoints.push(new Vec(9, -28.5, 1));
    this.spawnPoints.push(new Vec(-10, -38.8, 1));
    this.spawnPoints.push(new Vec(5, -38.8, 1));
    this.spawnItemSet()
    this.setFill();
  }
}
class FoodWaste extends Game {
  constructor() { super(); }
  load() {
    this.objPool = {
      cafeteria: new Obj(),
      pBar: new Obj(),
      pFill: new Obj(),
      pLogo: new Obj(),
      tray: new Obj(),
      station: new Obj(),

      apple: new Obj(),
      banana: new Obj(),
      chipBag: new Obj(),

      milkCarton: new Obj(),
      milkPuddle: new Obj(),

      chCarton: new Obj(),
      chPuddle: new Obj(),

      straw: new Obj(),
      burrito: new Obj(),
      orangePeel: new Obj(),
      spork: new Obj(),
      napkin: new Obj(),

      pizzaIn: new Obj(),
      pizza: new Obj(),
      plastic: new Obj(),
    }
    this.objPool.cafeteria.addImg(`Images/${_backWallImg}`);
    this.objPool.pBar.addImg(`Images/${_pBarImg}`);
    this.objPool.pFill.addImg(`Images/${_pFillImg}`);
    this.objPool.tray.addImg(`Images/${_trayImg}`);
    this.objPool.station.addImg(`Images/${_wasteStationImg}`);
    this.objPool.pLogo.addImg(`Images/${_pLogoImg}`);

    this.objPool.apple.addImg(`Images/${_e_appleImg}`);
    this.objPool.banana.addImg(`Images/${_e_bananaImg}`);
    this.objPool.chipBag.addImg(`Images/${_e_chipsImg}`);
    this.objPool.milkCarton.addImg(`Images/${_e_milkImg}`);
    this.objPool.milkPuddle.addImg(`Images/${_e_milkPImg}`);
    this.objPool.chCarton.addImg(`Images/${_e_chMilkImg}`);
    this.objPool.chPuddle.addImg(`Images/${_e_chMilkPImg}`);
    this.objPool.straw.addImg(`Images/${_strawImg}`);
    this.objPool.burrito.addImg(`Images/${_e_burritoImg}`);
    this.objPool.orangePeel.addImg(`Images/${_orangePeelImg}`);
    this.objPool.spork.addImg(`Images/${_sporkImg}`);
    this.objPool.napkin.addImg(`Images/${_napkinImg}`);
    this.objPool.pizzaIn.addImg(`Images/${_e_pizza_cImg}`);
    this.objPool.pizza.addImg(`Images/${_e_pizzaImg}`);
    this.objPool.plastic.addImg(`Images/${_plasticImg}`);

    var filePromises = [];
    filePromises.push(this.objPool.cafeteria.sprite);
    filePromises.push(this.objPool.pBar.sprite);
    filePromises.push(this.objPool.pFill.sprite);
    filePromises.push(this.objPool.tray.sprite);
    filePromises.push(this.objPool.station.sprite);
    filePromises.push(this.objPool.pLogo.sprite);

    filePromises.push(this.objPool.apple.sprite);
    filePromises.push(this.objPool.banana.sprite);
    filePromises.push(this.objPool.chipBag.sprite);
    filePromises.push(this.objPool.milkCarton.sprite);
    filePromises.push(this.objPool.milkPuddle.sprite);
    filePromises.push(this.objPool.chCarton.sprite);
    filePromises.push(this.objPool.chPuddle.sprite);
    filePromises.push(this.objPool.straw.sprite);
    filePromises.push(this.objPool.burrito.sprite);
    filePromises.push(this.objPool.orangePeel.sprite);
    filePromises.push(this.objPool.spork.sprite);
    filePromises.push(this.objPool.napkin.sprite);
    filePromises.push(this.objPool.pizzaIn.sprite);
    filePromises.push(this.objPool.pizza.sprite);
    filePromises.push(this.objPool.plastic.sprite);
    Promise.all(filePromises).then(this.setUp());
  }
  setUp() {
    // ======================== Create Targets ====================
    var trashBin = new Obj();
    trashBin.changeTag(TAG.TRASH);
    this.targetObj.push(trashBin);

    var scrapBin = new Obj();
    scrapBin.changeTag(TAG.SCRAP);
    this.targetObj.push(scrapBin);

    var milkBin = new Obj();
    milkBin.changeTag(TAG.MILK);
    this.targetObj.push(milkBin);

    trashBin.scale(3.6, 17);
    scrapBin.scale(3.6, 17);
    milkBin.scale(3.6, 17);

    trashBin.teleport(-8.5, -4);
    scrapBin.teleport(0, -4);
    milkBin.teleport(8.5, -4);
    // ======================== SCALE Objects =======================
    this.objPool.cafeteria.scale(40, 40);
    this.objPool.pBar.scale(this.barMax * 1.02, 2.5);
    this.objPool.pFill.scale(0.1, 2);
    this.objPool.pLogo.scale(4 * aspectRatio, 4);
    this.objPool.tray.scale(10, 10);
    this.objPool.station.scale(23 * aspectRatio, 23);

    this.objPool.apple.scale(2, 5);
    this.objPool.banana.scale(3, 6);
    this.objPool.chipBag.scale(5 * aspectRatio, 5);
    this.objPool.milkCarton.scale(4 * aspectRatio, 4);
    this.objPool.milkPuddle.scale(4 * aspectRatio, 4);
    this.objPool.chCarton.scale(4 * aspectRatio, 4);
    this.objPool.chPuddle.scale(4 * aspectRatio, 4);
    this.objPool.straw.scale(1, 4);
    this.objPool.burrito.scale(4, 6);
    this.objPool.orangePeel.scale(3, 4);
    this.objPool.spork.scale(1.5, 5);
    this.objPool.napkin.scale(2, 5);

    this.objPool.pizzaIn.scale(6 * aspectRatio, 6);
    this.objPool.pizza.scale(5 * aspectRatio, 5);
    this.objPool.plastic.scale(4, 5);


    // =================TELEPORT AND PUSH STATIC OBJECTS 
    this.objPool.cafeteria.teleport(0, -14);
    this.objPool.pBar.teleport(-13, 10.8);
    this.objPool.pFill.teleport(-22.8, 11.1);
    this.objPool.tray.teleport(0, -14);
    this.objPool.station.teleport(0, -9);
    this.objPool.pLogo.teleport(-4, 9.7);


    this.staticList.push(trashBin);
    this.staticList.push(scrapBin);
    this.staticList.push(milkBin);

    this.staticList.push(this.objPool.cafeteria);
    this.staticList.push(this.objPool.station);
    this.staticList.push(this.objPool.tray);
    this.staticList.push(this.objPool.pBar);
    this.staticList.push(this.objPool.pFill);
    this.staticList.push(this.objPool.pLogo);
    //====================== Add Tags ===================
    this.objPool.banana.changeTag(TAG.SCRAP);
    this.objPool.apple.changeTag(TAG.SCRAP);
    this.objPool.chipBag.changeTag(TAG.TRASH);
    this.objPool.milkCarton.changeTag(TAG.TRASH);
    this.objPool.milkPuddle.changeTag(TAG.MILK);
    this.objPool.chCarton.changeTag(TAG.TRASH);
    this.objPool.chPuddle.changeTag(TAG.MILK);
    this.objPool.straw.changeTag(TAG.TRASH);
    this.objPool.orangePeel.changeTag(TAG.SCRAP);
    this.objPool.burrito.changeTag(TAG.SCRAP);
    this.objPool.spork.changeTag(TAG.TRASH);
    this.objPool.napkin.changeTag(TAG.TRASH);
    this.objPool.pizzaIn.changeTag(TAG.NONE);
    this.objPool.pizza.changeTag(TAG.SCRAP);
    this.objPool.plastic.changeTag(TAG.TRASH);


    //====================== Create Coupled Items ===================
    var milkCP = new Coupled(this.objPool.milkCarton, this.objPool.milkPuddle);
    this.coupledMap.set(this.objPool.milkCarton, milkCP);
    this.coupledMap.set(this.objPool.milkPuddle, milkCP);
    //chocolate milk
    var chCP = new Coupled(this.objPool.chCarton, this.objPool.chPuddle);
    this.coupledMap.set(this.objPool.chCarton, chCP);
    this.coupledMap.set(this.objPool.chPuddle, chCP);
    //pizza
    var pzza = new Coupled(this.objPool.pizzaIn, this.objPool.pizza, this.objPool.plastic);
    this.coupledMap.set(this.objPool.pizzaIn, pzza);
    this.coupledMap.set(this.objPool.pizza, pzza);
    this.coupledMap.set(this.objPool.plastic, pzza);
    //=========================== Push into itemPool ======
    this.itemPool.push(milkCP);
    this.itemPool.push(chCP);
    this.itemPool.push(pzza);
    this.itemPool.push(this.objPool.apple);
    this.itemPool.push(this.objPool.banana);
    this.itemPool.push(this.objPool.chipBag);
    this.itemPool.push(this.objPool.straw);
    this.itemPool.push(this.objPool.orangePeel);
    this.itemPool.push(this.objPool.burrito);
    this.itemPool.push(this.objPool.spork);
    this.itemPool.push(this.objPool.napkin);

    //========================= set spawns and intial items =======
    this.spawnPoints.push(new Vec(-6, -6.5, 1));
    this.spawnPoints.push(new Vec(-1, -6.5, 1));
    this.spawnPoints.push(new Vec(3.5, -6.5, 1));
    this.spawnPoints.push(new Vec(2, -11.8, 1));
    this.spawnPoints.push(new Vec(-5.5, -11.8, 1));
    //comment out top and uncomment to view all items possible
    // for (let i = 0; i < this.itemPool.length; i++) {
    //   this.spawnPoints.push(new Vec(-20 + (4 * i), -6, 1));
    // }
    this.spawnItemSet()
    this.setFill();
  }
}