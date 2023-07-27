export class Point {
  private position: [x: number, y: number] = [0, 0];

  constructor(x: number, y: number) {
    this.position[0] = x;
    this.position[1] = y;
  }

  public static fromPoint(point2: Point): Point {
    const [x, y] = point2.position;
    return new this(x, y);
  }

  public GetPos(): [x: number, y: number] {
    return this.position;
  }

  public Add(point2: Point): Point {
    const [x2, y2] = point2.position;

    const [x1, y1] = this.position;

    return new Point(x1 + x2, y1 + y2);
  }

  public AddToX(x: number) {
    const [x1, y1] = this.position;
    return new Point(x1 + x, y1);
  }

  public AddToY(y: number) {
    const [x1, y1] = this.position;
    return new Point(x1, y1 + y);
  }

  public SubFromX(x: number) {
    const [x1, y1] = this.position;
    return new Point(x1 - x, y1);
  }

  public SubFromY(y: number) {
    const [x1, y1] = this.position;
    return new Point(x1, y1 - y);
  }

  public Substract(point2: Point): Point {
    const [x2, y2] = point2.position;

    const [x1, y1] = this.position;

    return new Point(x1 - x2, y1 - y2);
  }

  public MidPoint(point2: Point, onlyX = false, onlyY = false): Point {
    const [x2, y2] = point2.position;

    const [x1, y1] = this.position;

    const midx = (x1 + x2) / 2;
    const midy = (y1 + y2) / 2;

    if (onlyX) {
      return new Point(midx, y1);
    } else if (onlyY) {
      return new Point(x1, midy);
    }

    return new Point(midx, midy);
  }

  public ScaleUp(scalar: number): Point {
    const [x, y] = this.position;
    return new Point(x * scalar, y * scalar);
  }

  public ScaleDown(scalar: number): Point | undefined {
    const [x, y] = this.position;
    try {
      return new Point(x / scalar, y / scalar);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(
          `Exception caught, incorrect scalar ${scalar}, possible division by zero. \n Error: ${error.message}`
        );
        return undefined;
      }
    }
  }

  public Distance(point: Point): number {
    const [x1, y1] = this.position;
    const [x2, y2] = point.position;

    const d1 = x2 - x1;
    const d2 = y2 - y1;

    const distance = Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
    return distance;
  }

  public ToThePower(exponent: number): Point {
    const [x, y] = this.position;

    return new Point(Math.pow(x, exponent), Math.pow(y, exponent));
  }

  public ToString(): string {
    return JSON.stringify(this.position);
  }
}
