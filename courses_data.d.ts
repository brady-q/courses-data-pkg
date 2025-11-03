/* tslint:disable */
/* eslint-disable */
export class SearchEngine {
  free(): void;
  [Symbol.dispose](): void;
  static new(data_path: string): SearchEngine;
  /**
   * Create a search engine from bytes that are added to the (wasm) binary at compile time.
   *
   * Because that happens at compile time, this causes a compile error if
   * the serialized search engine doesn't exist. But the code to create that
   * engine would not compile too! To solve this bootstrapping chicken and
   * egg problem, we lock this function behind a conditional-compilation feature.
   *
   * See how this gets used in the project justfile.
   */
  constructor();
  /**
   * Search the database and return a `Vec` of results, ordered by relevance to query.
   */
  search(query: string): string[];
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_searchengine_free: (a: number, b: number) => void;
  readonly searchengine_new: (a: number, b: number) => number;
  readonly searchengine_search: (a: number, b: number, c: number) => [number, number];
  readonly searchengine_from_include_bytes: () => any;
  readonly wasm_bindgen__convert__closures_____invoke__h06e685b12973e965: (a: number, b: number, c: any) => void;
  readonly wasm_bindgen__closure__destroy__heb938d8490fb5a71: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures_____invoke__h4666a87517ff844e: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
