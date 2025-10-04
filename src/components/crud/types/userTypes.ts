export type paginationType = {
  content: userType[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: true;
  last: false;
};

export type userType = {
  username: string;
  email: string;
};