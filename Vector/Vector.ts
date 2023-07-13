import { IGrid } from "../Grid/Abstract/IGrid";
import { Point } from "../Point/Point";

export class Vector {
  public point: Point;

  constructor(x: number, y: number) {
    this.point = new Point(x, y);
  }

  public static fromPoint(point: Point): Vector {
    const [x, y] = point.GetPos();
    return new this(x, y);
  }

  public GetPosition(): [x: number, y: number] {
    return this.point.GetPos();
  }

  public Magnitude(): number {
    const pointSquared: Point = this.point.ToThePower(2);
    const [xSquared, ySquared] = pointSquared.GetPos();

    return Math.sqrt(xSquared + ySquared);
  }

  public Normalize(): Vector | undefined {
    const magnitude = this.Magnitude();
    const normalPoint: Point | undefined = this.point.ScaleDown(magnitude);
    if (normalPoint) {
      return Vector.fromPoint(normalPoint);
    }

    return undefined;
  }

  translateToDraw(grid: IGrid): [x: number, y: number] {
    const [x, y] = this.ScaleToGrid(grid).GetPosition();

    const origin = new Point(grid.GetWidth() / 2, grid.GetHeight() / 2);

    const fromOrigin = Vector.fromPoint(origin.AddToX(x).SubFromY(y));

    return fromOrigin.GetPosition();
  }

  ScaleToGrid(grid: IGrid): Vector {
    return Vector.fromPoint(this.point.ScaleUp(grid.GetCellSize()));
  }

  public ToString(): string {
    return this.point.ToString();
  }
}
