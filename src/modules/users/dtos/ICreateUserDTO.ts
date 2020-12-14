export default interface ICreateUserDTO {
  name: string;
  email: string;
  address: string;
  whatsapp: string;
  password: string;
  type: 'provider' | 'user';
}
