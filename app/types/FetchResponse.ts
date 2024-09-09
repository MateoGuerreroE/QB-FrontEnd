export interface FetchResponse<T> {
  data: T;
  metadata: unknown;
  statusCode: number;
}
