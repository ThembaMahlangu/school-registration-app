export type registerProps = {
  name: string;
  organization: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type loginProps = {
  email: string;
  password: string;
};