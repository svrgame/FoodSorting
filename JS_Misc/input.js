// Input class // this app mainly uses mouse and touch functionalities 
class Input {
  //keys 
  keys = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    a: false,
    w: false,
    s: false,
    d: false,
    p: false
  };
  //mouse stuff 
  doubleClicked = false;
  mouseDown = false;
  mousePosition = new Vec(0, 0, 1);
  screen;
  canvas;
  prevTime = 0;

  objSelected = null;

  constructor(_screen) {
    this.screen = _screen;
    this.canvas = _screen.canvas;

    this.canvas.addEventListener('mousemove', this.update.bind(this));
    this.canvas.addEventListener('mousedown', this.setMouseDown.bind(this));
    this.canvas.addEventListener('mouseup', this.setMouseUp.bind(this));

    this.canvas.addEventListener('touchstart', this.touchStart.bind(this), { passive: false, });
    this.canvas.addEventListener('touchend', this.setMouseUp.bind(this));
    this.canvas.addEventListener('touchmove', this.touchUpdate.bind(this),
      { passive: false, });

    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }
  touchStart(evt) {
    const touches = evt.changedTouches;
    var rect = this.canvas.getBoundingClientRect()
    var x = touches[0].clientX - rect.left;
    var y = touches[0].clientY - rect.top;
    this.mousePosition = this.screen.getMousePosition(new Vec(x, y, 1));
    this.setMouseDown();
  }
  touchUpdate(evt) {
    evt.preventDefault();
    this.touchStart(evt);
    if (this.objSelected != null) {
      this.objSelected.teleport(this.mousePosition.x, this.mousePosition.y);
    }

  }
  update(e) {
    var rect = this.canvas.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    this.mousePosition = this.screen.getMousePosition(new Vec(x, y, 1));
    if (this.objSelected != null) {
      this.objSelected.teleport(this.mousePosition.x, this.mousePosition.y);
    }

  }
  setMouseDown() {
    var t = new Date().getTime();
    if (t - this.prevTime < 400) {
      this.doubleClicked = true;
    }
    this.prevTime = t;
    this.mouseDown = true;
  }
  setMouseUp() {
    this.mouseDown = false;
    this.doubleClicked = false;
    if (this.objSelected != null) {
      var obj = this.objSelected;
      game.handleObjMoved(obj); // game in app js 
      this.objSelected = null;
      varfps = fpsDefault; // variables in app js 
    }
  }
  onKeyDown(e) {
    if (this.keys[e.key] != undefined) this.keys[e.key] = true;
  }
  onKeyUp(e) {
    if (this.keys[e.key] != undefined) this.keys[e.key] = false;
  }
  setObj(obj) {
    this.objSelected = obj;
  }
}
