var HeartsBackground = {
  heartHeight: 32,
  heartWidth: 40,
  hearts: [],
  heartImage: 'https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png',
  maxHearts: 15,
  minScale: 1,
  draw: function() {
    this.setCanvasSize();
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.hearts.length; i++) {
      var heart = this.hearts[i];
      heart.image = new Image();
      heart.image.style.height = heart.height;
      heart.image.src = this.heartImage;
      // heart.image.opacity = Math.random();
      this.ctx.globalAlpha = heart.opacity;
      this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
    }
    this.move();
  },
  move: function() {
    for(var b = 0; b < this.hearts.length; b++) {
      var heart = this.hearts[b];
      heart.y += heart.ys;
      if(heart.y > this.h) {
        heart.x = Math.random() * this.w;
        heart.y = -1 * this.heartHeight;
      }
    }
  },
  setCanvasSize: function() {
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
  },
  initialize: function() {
    this.canvas = document.getElementById('canvas');

    if(!this.canvas.getContext)
      return;

    this.setCanvasSize();
    this.ctx = this.canvas.getContext('2d');

    for(var a = 0; a < this.maxHearts; a++) {
      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
      this.hearts.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        ys: Math.random() + 1,
        height: scale * this.heartHeight,
        width: scale * this.heartWidth,
        opacity: Math.random() + 0.1
      });
    }
    
    setInterval(this.draw.bind(this), 5);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  HeartsBackground.initialize();
});