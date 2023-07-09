import { CartesianGrid } from "../../Grid/Concrete/CartesianGrid";
import { Point } from "../../Point/Point";
import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
import { IBoard } from "../Abstract/IBoard";

export class CartesianBoard implements IBoard {
  private values: Map<string, IRenderableMovable>;
  private xLength: number;
  private yLength: number;

  constructor(grid: CartesianGrid) {
    this.values = new Map<string, IRenderableMovable>();
    this.xLength = grid.GetWidth();
    this.yLength = grid.GetHeight();
  }

  GetXLength(): number {
    return this.xLength;
  }

  GetYLength(): number {
    return this.yLength;
  }

  GetItem(position: Vector | Point): IRenderableMovable | undefined {
    if (this.values.has(position.toString())) {
      return this.values.get(position.toString());
    }

    return undefined;
  }

  SetItem(item: IRenderableMovable): void {
    const [x, y] = item.GetPos().point.GetPos();
    if (x < -this.xLength || x > this.xLength) {
      console.error(`x coordinate ${x} out of grid range`);
      return;
    }

    if (y < -this.yLength || y > this.yLength) {
      console.error(`y coordinate ${y} out of grid range`);
      return;
    }

    this.values.set(item.GetPos().ToString(), item);
  }
}
