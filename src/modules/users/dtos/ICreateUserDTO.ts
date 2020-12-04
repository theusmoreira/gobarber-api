export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  type: 'provider' | 'user';
  address: string;
  whatsapp: string;
}
