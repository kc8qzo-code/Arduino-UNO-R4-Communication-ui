export interface SensorReading {
  id: string | null;
  temperature: number;
  humidity: number;
  light?: number;
}
