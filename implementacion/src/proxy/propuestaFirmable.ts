// Interfaz comun entre la propuesta real y su proxy sellado.
export interface PropuestaFirmable {
  firmar(dni: string, dia: number): void;
  firmasValidas(): number;
  sellada(): boolean;
}
