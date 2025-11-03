/* tslint:disable */
/* eslint-disable */
export class SearchEngine {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  static new(data_path: string): SearchEngine;
  /**
   * Search the database and return a `Vec` of results, ordered by relevance to query.
   */
  search(query: string): string[];
}
