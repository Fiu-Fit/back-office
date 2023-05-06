export enum Unit {
  SECONDS = 0,
  REPETITIONS = 1,
  METERS = 2,
  UNRECOGNIZED = -1,
}

export const unitToString = (unit: Unit): string => {
  const translation = {
    [Unit.SECONDS]:      'Segundos',
    [Unit.REPETITIONS]:  'Repeticiones',
    [Unit.METERS]:       'Metros',
    [Unit.UNRECOGNIZED]: 'Desconocido',
  };

  return translation[unit];
};
