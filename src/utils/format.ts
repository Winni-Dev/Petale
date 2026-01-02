export function formatCurrencyXOF(amount: number | null | undefined): string {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return '0 FCFA';
  }
  try {
    // Utilise Intl pour un formatage cohérent en XOF (FCFA)
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0,
    }).format(Number(amount));
  } catch {
    // Fallback simple
    return `${Math.round(Number(amount)).toLocaleString('fr-FR')} FCFA`;
  }
}


