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

  public Add(point2: Point): void {
    const [x2, y2] = point2.position;

    const [x1, y1] = this.position;

    this.position[0] = x1 + x2;
    this.position[1] = y1 + y2;
  }

  public AddToX(x: number) {
    this.position[0] += x;
  }

  public AddToY(y: number) {
    this.position[1] += y;
  }

  public SubFromX(x: number) {
    this.position[0] -= x;
  }

  public SubFromY(y: number) {
    this.position[1] -= y;
  }

  public Substract(point2: Point): void {
    const [x2, y2] = point2.position;

    const [x1, y1] = this.position;

    this.position[0] = x1 - x2;
    this.position[1] = y1 - y2;
  }

  public MidPoint(point2: Point, onlyX = false, onlyY = false): void {
    const [x2, y2] = point2.position;

    const [x1, y1] = this.position;

    const midx = (x1 + x2) / 2;
    const midy = (y1 + y2) / 2;

    if (onlyX) {
      this.position[0] = midx;
      return;
    } else if (onlyY) {
      this.position[1] = midy;
      return;
    }

    this.position[0] = midx;
    this.position[1] = midy;
  }

  public ScaleUp(scalar: number): void {
    this.position[0] *= scalar;
    this.position[1] *= scalar;
  }
}
