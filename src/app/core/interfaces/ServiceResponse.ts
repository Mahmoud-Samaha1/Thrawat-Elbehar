export interface ServiceResponse<T> {
  dismiss: any;
  data: T;
  message: string;
  success: Boolean;
}
export interface CollectionResponse<T> {
  collection: T[];
  length: number;
}
