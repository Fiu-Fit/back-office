export const inputs = [
  {
    name:       'name',
    label:      'Nombre',
    type:       'text',
    halfWidth:  false,
    validation: {
      required:  {
        value:   true,
        message: 'Este campo es requerido'
      },
      maxLength: {
        value:   50,
        message: 'El nombre no puede tener mas de 50 caracteres',
      },
      minLength: {
        value:   6,
        message: 'El nombre no puede tener menos de 6 caracteres',
      },
    },
  },
  {
    name:       'description',
    label:      'Descripcion',
    type:       'text',
    validation: {
      required:  {
        value:   true,
        message: 'Este campo es requerido'
      },
      maxLength: {
        value:   200,
        message: 'La descripcion no puede tener mas de 200 caracteres',
      },
    },
  },
];
