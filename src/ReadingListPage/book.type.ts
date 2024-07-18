export type Book = {
  name: string;
  author: string;
  isbn: string;
  status: "Done" | "DNF" | "TBR" | "Not Recommended";
  rating: number;
  coverURL: string;
  notes: string;
  order: number;
};
