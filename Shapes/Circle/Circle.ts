import { IGrid } from "../../Grid/Abstract/IGrid";
import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
import { ctx, grid } from "../../Shared/init";
export class Circle implements IRenderableMovable {
  protected radius: number;
  public position: Vector;
  protected color: string;

  constructor(radius: number, position: Vector, color: string) {
    this.radius = radius;
    this.position = position;
    this.color = color;
  }

  Draw(): void {
    const [x, y] = grid.TranslateToDraw(this.position);
    ctx.beginPath();
    const scaledRad = grid.ScaleToGrid(this.radius);

    ctx.arc(x, y, scaledRad, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  GetPos(): Vector {
    return this.position;
  }

  GetRadius(): number {
    return this.radius;
  }
}
