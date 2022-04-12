export class GolfBall {
  radius = 50;
  frictionFactor = 0.01;
  frictionSpeedMultiplier: number = 1 - this.frictionFactor;

  public x: number;
  public y: number;
  vx: number;
  vy: number;

  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }
  applyFriction() {
    this.vx *= this.frictionSpeedMultiplier;
    this.vy *= this.frictionSpeedMultiplier;
  }

  tryBoundsBounce(width, height) {
    // the x/y <= radius is a shortcut way of saying x/y - radius <= 0
    if (this.x + this.radius >= width || this.x <= this.radius) {
      this.vx *= -1;
    }
    if (this.y + this.radius >= height || this.y <= this.radius) {
      this.vy *= -1;
    }
  }

  applyPhysics(width, height) {
    this.tryBoundsBounce(width, height);
    this.applyFriction();
    this.x += this.vx;
    this.y += this.vy;
  }
}

export const ball = new GolfBall(400, -200, 1, 1);
