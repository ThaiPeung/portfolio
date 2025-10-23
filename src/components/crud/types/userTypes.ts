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
  id: number;
  username: string;
  email: string;
  accountNonLocked: boolean;
};
