import { Point } from "../Point/Point";

export class Vector {
  public point: Point;

  constructor(point: Point) {
    this.point = point;
  }

  public Magnitude(): number {
    const pointSquared: Point = this.point.ToThePower(2);
    const [xSquared, ySquared] = pointSquared.GetPos();

    return Math.sqrt(xSquared + ySquared);
  }

  public Normalize(): Vector {
    const magnitude = this.Magnitude();
    const normalPoint: Point = this.point.ScaleDown(magnitude);

    return new Vector(normalPoint);
  }
}
