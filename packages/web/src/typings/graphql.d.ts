export type Response<T, U extends string> = {
  [key in U]: T;
}

export as namespace GraphQL;

