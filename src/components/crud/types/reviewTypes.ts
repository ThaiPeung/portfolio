export type paginationType = {
  content: reviewType[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: true;
  last: false;
};

export type reviewType = {
  id: number;
  bookId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
};