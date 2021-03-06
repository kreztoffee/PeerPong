/*
 *  Ball Object
 */

export default class Ball {
  public posX: number;
  public posY: number;
  private velocityX: number = 1;
  private velocityY: number = 1;
  private radius: number = 5;
  private diameter: number = 2 * this.radius;
  private initialSpeed: number;
  private speed: number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  public constructor(canvas: HTMLCanvasElement, posX: number, posY: number, speed: number) {
    this.canvas = canvas;
    this.posX = posX;
    this.posY = posY;
    this.initialSpeed = speed;
    this.speed = this.initialSpeed;
    this.ctx = canvas.getContext('2d');
  }

  public draw(): void {
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#4ecca3';
    this.ctx.lineWidth = 10;
    this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  public getDiameter(): number {
    return this.diameter;
  }
}
