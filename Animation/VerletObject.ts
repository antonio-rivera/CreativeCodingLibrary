import { Vector } from "../Vector/Vector";
export abstract class VerletObject {
  protected current_pos: Vector = new Vector(0, 0);
  protected old_pos: Vector = new Vector(0, 0);
  protected acceleration?: Vector;

  constructor(c_pos: Vector) {
    this.acceleration = new Vector(0, 0);
    this.current_pos = Vector.fromPoint(c_pos.point);
    this.old_pos = Vector.fromPoint(c_pos.point);
  }

  public UpdatePosition(dt: number, deltaTimeMultiplier: number): void {
    const velocity = this.current_pos.Sub(this.old_pos);

    this.old_pos = Vector.fromPoint(this.current_pos.point);
    this.current_pos = this.current_pos
      .Add(velocity)
      .Add(this.acceleration.Scale(dt * dt));

    this.acceleration = new Vector(0, 0);
  }

  public Accelerate(acc: Vector): void {
    this.acceleration = this.acceleration?.Add(acc);
  }
}
