export interface SensorReading {
  id: bigint;
  temperature: number;
  humidity: number;
  light: number | null;
  passValue: number | null;
  postAt?: Date;
}
