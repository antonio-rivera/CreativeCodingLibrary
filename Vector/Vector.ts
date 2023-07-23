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

  public Add(v2: Vector): Vector {
    const v3 = this.point.Add(v2.point);
    return Vector.fromPoint(v3);
  }

  public Sub(v2: Vector): Vector {
    const v3 = this.point.Substract(v2.point);
    return Vector.fromPoint(v3);
  }

  public Magnitude(): number {
    const pointSquared: Point = this.point.ToThePower(2);
    const [xSquared, ySquared] = pointSquared.GetPos();

    return Math.sqrt(xSquared + ySquared);
  }

  public Dot(vec2: Vector): number {
    const [x1, y1] = this.GetPosition();
    const [x2, y2] = vec2.GetPosition();

    const prod = x1 * x2 + y1 * y2;
    return prod;
  }

  public Normalize(): Vector | undefined {
    const magnitude = this.Magnitude();
    const normalPoint: Point | undefined = this.point.ScaleDown(magnitude);
    if (normalPoint) {
      return Vector.fromPoint(normalPoint);
    }

    return undefined;
  }

  public Scale(scalar: number): Vector {
    return Vector.fromPoint(this.point.ScaleUp(scalar));
  }

  public ToString(): string {
    return this.point.ToString();
  }
}
