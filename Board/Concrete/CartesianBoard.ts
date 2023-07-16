import { Point } from "../../Point/Point";
import { IRenderableMovable } from "../../Renderable/Abstract/IRenderable";
import { Vector } from "../../Vector/Vector";
import { IBoard } from "../Abstract/IBoard";
import { grid } from "../../Shared/init";

export class CartesianBoard implements IBoard {
  private values: Map<string, IRenderableMovable>;
  private xLength: number;
  private yLength: number;

  constructor() {
    this.values = new Map<string, IRenderableMovable>();
    this.xLength = grid.GetWidth() / grid.GetCellSize() / 2;
    this.yLength = grid.GetHeight() / grid.GetCellSize() / 2;
  }

  GetXLength(): number {
    return this.xLength;
  }

  GetYLength(): number {
    return this.yLength;
  }

  GetItem(position: Vector | Point): IRenderableMovable | undefined {
    if (this.values.has(position.ToString())) {
      return this.values.get(position.ToString());
    }

    return undefined;
  }

  SetItem(item: IRenderableMovable): boolean {
    const [x, y] = item.GetPos().point.GetPos();
    if (x < -this.xLength || x > this.xLength) {
      console.error(
        `x coordinate ${x} is out of grid range ${this.xLength} x ${this.yLength} relative to origin (0,0)`
      );
      return false;
    }

    if (y < -this.yLength || y > this.yLength) {
      console.error(
        `y coordinate ${y} is out of grid range ${this.xLength} x ${this.yLength}  relative to origin (0,0)`
      );
      return false;
    }

    this.values.set(item.GetPos().ToString(), item);
    return true;
  }
}
