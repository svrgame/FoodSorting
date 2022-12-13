//baisc color structure for coloring on canvas element 
class Color {
  r; g; b; a;
  constructor(r, g, b, a = 1) { this.r = r; this.g = g; this.b = b; this.a = a; }
}
// screen class used to render / draw onto a canvas element 
class Screen {
  scale = 1;
  range;
  canvas;
  ctx;
  imageData;
  screenBasis = new Mat(1 * this.scale, 0, 0,
    0, -1 * this.scale, 0,
    0, 0, 1);
  inverseBasis = new Mat(1, 0, 0,
    0, 1, 0,
    0, 0, 1);

  constructor(id, width, height, range) {
    this.range = range;
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    this.ctx.font = '50px serif';
    this.adjustScreen(width, height);
  }
  adjustScreen(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.scale = this.canvas.width / this.range;
    //tranfrom point to pixel 
    this.screenBasis.x1 = this.scale;
    this.screenBasis.y2 = -this.scale;
    this.screenBasis.z1 = (this.canvas.width / 2);
    this.screenBasis.z2 = (this.canvas.height / 2);
    // transform pixel to point 
    this.inverseBasis.x1 = (this.range / this.canvas.width);
    this.inverseBasis.z1 = (-this.range / 2);
    this.inverseBasis.y2 = -(this.range / this.canvas.width);
    this.inverseBasis.z2 = (this.range * this.canvas.height) / (2 * this.canvas.width);
    //adjust canvas size 
    this.canvas.style.cssText = "height: " + (this.canvas.height) + "px; \n width: " + (this.canvas.width) + "px;";
    this.imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }
  setPixelColor(x, y, color) {

    var index = ((parseInt(y) * (this.canvas.width)) + parseInt(x)) * 4;// 4 bytes per pixel
    this.imageData.data[index + 0] = color.r; // red channel
    this.imageData.data[index + 1] = color.g; // green channel
    this.imageData.data[index + 2] = color.b // blue channel
    this.imageData.data[index + 3] = color.a * 255;//alpha channel    
  }
  render(buffX = 0, buffY = 0) {
    this.ctx.putImageData(this.imageData, buffX, buffY);
  }
  clearColor(color) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let j = 0; j < this.canvas.height; j++)
      for (let i = 0; i < this.canvas.width; i++)
        this.setPixelColor(i, j, color);
  }
  drawPoint(point, color) {
    var p = vMath(this.screenBasis, '*', point);
    this.setPixelColor(p.x, p.y, color);
  }
  drawSprite(sp) {
    if (sp.sprite == null) return;
    var p1 = vMath(this.screenBasis, '*', sp.v1);
    var p2 = vMath(this.screenBasis, '*', sp.v2);
    // var p3 = vMath(this.screenBasis, '*', sp.v3);
    var p4 = vMath(this.screenBasis, '*', sp.v4);
    var w = parseInt(p4.x - p1.x);
    var h = parseInt(p1.y - p2.y);
    var pos = vMath(this.screenBasis, '*', sp.pos);
    pos.x = parseInt(pos.x - w / 2);
    pos.y = parseInt(pos.y - h);
    this.ctx.drawImage(sp.sprite, pos.x, pos.y, w, h);
  }
  drawText(string, pos) {
    pos = vMath(this.screenBasis, '*', pos);
    pos.x = parseInt(pos.x);
    pos.y = parseInt(pos.y);
    this.ctx.fillText(string, pos.x, pos.y);
  }
  getMousePosition(pixel) {
    var position = vMath(this.inverseBasis, '*', pixel);
    position.x = Math.round(position.x);
    position.y = Math.round(position.y);
    return position;
  }
  hide() {
    this.canvas.style.display = "none";
  }
  show() {
    this.canvas.style.display = "block";
  }

}

