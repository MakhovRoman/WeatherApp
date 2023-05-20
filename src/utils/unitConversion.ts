export class UnitConversion {
  static windVelocity(v: number) {
    return Math.round(v * 10 * 1000 / 3600) / 10;
  }

  static pressure(p: number) {
    return Math.round(p * 0.750062);
  }
}
