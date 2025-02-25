import type nodeReadline from "node:readline";
import type { Abortable } from "node:events";
import { EventEmitter } from "node:events";

export class Interface extends EventEmitter implements nodeReadline.Interface {
  terminal = false;
  line = "";
  cursor = 0;

  getPrompt() {
    return "";
  }
  setPrompt(prompt: string): void {}
  prompt(preserveCursor?: boolean | undefined): void {}
  question(query: string, callback: (answer: string) => void): void;
  question(
    query: string,
    options: Abortable,
    callback: (answer: string) => void,
  ): void;
  question(query: unknown, options: unknown, callback?: unknown): void {
    callback && typeof callback === "function" && callback("");
  }

  resume() {
    return this;
  }
  close() {}
  write(data: string | Buffer, key?: nodeReadline.Key | undefined): void;
  write(data: string | Buffer | null | undefined, key: nodeReadline.Key): void;
  write(data: unknown, key?: unknown): void {}
  getCursorPos(): nodeReadline.CursorPos {
    return {
      rows: 0,
      cols: 0,
    };
  }
  pause() {
    return this;
  }

  async *[Symbol.asyncIterator](): NodeJS.AsyncIterator<string> {
    yield "";
  }
}
