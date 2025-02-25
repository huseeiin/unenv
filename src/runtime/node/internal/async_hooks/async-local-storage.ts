import type nodeAsyncHooks from "node:async_hooks";

// https://nodejs.org/api/async_context.html#class-asynclocalstorage

class _AsyncLocalStorage<T> implements nodeAsyncHooks.AsyncLocalStorage<T> {
  readonly __unenv__ = true;

  _currentStore: undefined | T;
  _enterStore: undefined | T;
  _enabled: boolean = true;

  getStore() {
    return this._currentStore ?? this._enterStore;
  }

  disable() {
    this._enabled = false;
  }

  enable() {
    this._enabled = true;
  }

  enterWith(store: any) {
    this._enterStore = store;
  }

  run<R, TArgs extends any[]>(
    store: any,
    callback: (...args: TArgs) => R,
    ...args: TArgs
  ): R {
    this._currentStore = store;
    const res = callback(...args);
    this._currentStore = undefined;
    return res;
  }

  exit<R, TArgs extends any[]>(
    callback: (...args: TArgs) => R,
    ...args: TArgs
  ): R {
    const _previousStore = this._currentStore;
    this._currentStore = undefined;
    const res = callback(...args);
    this._currentStore = _previousStore;
    return res;
  }

  static snapshot(): any {
    throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
  }
}

export const AsyncLocalStorage: typeof nodeAsyncHooks.AsyncLocalStorage =
  (globalThis as any).AsyncLocalStorage || _AsyncLocalStorage;
