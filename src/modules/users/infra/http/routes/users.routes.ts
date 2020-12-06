import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig.multer);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const myCustomJoi = Joi.extend(require('joi-phone-number'));

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      type: Joi.string().valid('provider', 'user').required(),
      address: Joi.string().required(),
      whatsapp: myCustomJoi
        .string()
        .phoneNumber({ defaultCountry: 'BR', format: 'national', strict: true })
        .required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
