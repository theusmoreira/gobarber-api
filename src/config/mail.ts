interface IMailConfig {
  driver: 'ethereal' | 'smtp' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'me@matheussantosdev.com',
      name: 'Matheus Santos do GoBarber',
    },
  },
} as IMailConfig;
