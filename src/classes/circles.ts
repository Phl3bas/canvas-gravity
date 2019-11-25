export default class Circle {
  constructor(
    private windowWidth: number,
    private windowHeight: number,
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
    public dy: number,
    public dx: number,
    public gravity: number
  ) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dy = dy;
    this.dx = dx;
    this.gravity = gravity;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update(): void {
    this.y += this.dy;
    this.x += this.dx;

    if (this.y + this.radius + this.dy > this.windowHeight) {
      this.dy = -this.dy * 0.7;
      this.radius = this.radius / 1.5;
    } else {
      this.dy += this.gravity;
    }

    if (
      this.x + this.radius + this.dx > this.windowWidth ||
      this.x - this.radius + this.dx < 0
    ) {
      this.dx = -this.dx;
    }
  }
}
