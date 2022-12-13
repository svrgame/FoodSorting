//TAG used to tag objects for when checking collisions
const TAG = {
  BUTTON: -1,
  NONE: 0,
  SHARE_FV: 1,
  SHARE_FOOD: 2,
  SHARE_COLD: 3,
  SHARE_HOT: 4,
  TRASH: 5,
  SCRAP: 6,
  MILK: 7
};
// Button tags to determine what button was pressed / if item is coupled 
const B_TYPE = {
  MENU: 0,
  PRINT: 1,
  PLAY: 2,
  CREDITS: 3,
  COUPLED: 4,
};
// Square Object, may contain a sprite 
class Obj {
  pos;// postion in the canvas 
  v1; //lower left
  v2; //upper left
  v3; // upper right
  v4; // lower right
  w;
  h;
  sprite;
  selected = false;
  tag = TAG.NONE;
  btype = null;
  spawn = null;
  constructor() {
    this.pos = new Vec(0, 0, 1);
    this.v1 = new Vec(-1, 0, 1); //lower left
    this.v2 = new Vec(-1, 1, 1); //upper left
    this.v3 = new Vec(1, 1, 1); // upper right
    this.v4 = new Vec(1, 0, 1); // lower right
    this.w = 1;
    this.h = 1;
  }
  translate(x, y) {
    var translate = new Mat(
      1, 0, x,
      0, 1, y,
      0, 0, 1
    );
    this.matrixMult(translate);
  }
  teleport(px, py) {
    this.translate(-this.pos.x, -this.pos.y);
    this.translate(px, py);
  }
  scale(w, h) {
    var tx = this.pos.x;
    var ty = this.pos.y;
    this.translate(-tx, -ty);
    var scale = new Mat(
      w, 0, 0,
      0, h, 0,
      0, 0, 1);
    this.matrixMult(scale);
    this.translate(tx, ty);
    this.w = (this.v4.x - this.v1.x);
    this.h = (this.v2.y - this.v1.y);
  }
  reSize(w, h) {
    this.pos = new Vec(0, 0, 1);
    this.v1 = new Vec(-1, 0, 1); //lower left
    this.v2 = new Vec(-1, 1, 1); //upper left
    this.v3 = new Vec(1, 1, 1); // upper right
    this.v4 = new Vec(1, 0, 1); // lower right
    this.w = 1;
    this.h = 1;
    this.scale(w, h);
  }
  getVerts() {
    return [this.pos, this.v1, this.v2, this.v3, this.v4];
  }
  addImg(src, callback = null) {
    this.sprite = new Image();
    if (callback != null)
      this.sprite.onload = callback;
    this.sprite.src = src;
  }
  setSpawn(spawn) {
    this.spawn = spawn;
    this.teleport(spawn.x, spawn.y);
  }
  changeTag(tag) {
    this.tag = tag;
  }
  setBType(btype) {
    this.btype = btype;
  }
  matrixMult(transform) {
    this.pos = vMath(transform, '*', this.pos);
    this.v1 = vMath(transform, '*', this.v1);
    this.v2 = vMath(transform, '*', this.v2);
    this.v3 = vMath(transform, '*', this.v3);
    this.v4 = vMath(transform, '*', this.v4);
  }
  collided(point) {
    if (point.x < this.v1.x || point.x > this.v4.x) return false;
    if (point.y < this.v1.y || point.y > this.v3.y) return false;
    else return true;
  }
  inside(other) {
    var y = this.pos.y + ((this.v3.y - this.pos.y) / 2);
    var center = new Vec(this.pos.x, y, 1);
    return other.collided(center);
  }
}

// Coupled object to hold two or more objects 
class Coupled {
  obj1;
  obj2;
  obj3;
  spawn;
  isCoupled = true;
  count = 0;
  trio = false;
  constructor(obj1, obj2, obj3 = null) {
    this.obj1 = obj1;
    this.obj2 = obj2;
    this.obj2.setBType(B_TYPE.COUPLED);
    this.obj1.setBType(B_TYPE.COUPLED);
    this.obj3 = obj3;
    if (this.obj3 != null) {
      this.trio = true;
      this.obj3.setBType(B_TYPE.COUPLED);
    }
  }
  decouple() {
    this.isCoupled = false;
    var h = this.obj1.h / 5;
    var w = this.obj1.w / 3;
    var a = vMath(this.spawn, '+', new Vec(-w, h, 0));
    var b = vMath(this.spawn, '+', new Vec(+w, -h, 0));
    this.obj1.setSpawn(a);
    this.obj2.setSpawn(b);
    if (this.trio) {
      this.obj3.setSpawn(a);
    }
  }
  setSpawn(spawn) {
    this.spawn = spawn;
    this.obj1.setSpawn(this.spawn);
  }
  reset() {
    this.spawn = null;
    this.isCoupled = true;
    this.count = 0;
  }
}