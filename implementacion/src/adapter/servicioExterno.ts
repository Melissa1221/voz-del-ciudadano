// Servicio externo con interfaz ajena: solo la carcasa, sin el algoritmo real.
export class ServicioExterno {
  verificarDocumento(numero: string): { ok: boolean } {
    // Simulacion: valido si tiene 8 digitos.
    return { ok: /^\d{8}$/.test(numero) };
  }
}
