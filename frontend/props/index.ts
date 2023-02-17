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

export type userProps = {
  createdAt: string;
  email: string;
  name: string;
  organization: string;
  password: string;
  updatedAt: string;
  __v: any;
  _id: string;
};
