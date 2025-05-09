// https://nodejs.org/api/http.html
import type nodeHttp from "node:http";
import { notImplemented, notImplementedClass } from "../_internal/utils.ts";
import { IncomingMessage } from "./internal/http/request.ts";
import { ServerResponse } from "./internal/http/response.ts";
import { Agent } from "./internal/http/agent.ts";
import {
  METHODS,
  STATUS_CODES,
  maxHeaderSize,
} from "./internal/http/constants.ts";

export { METHODS, STATUS_CODES, maxHeaderSize };
export * from "./internal/http/request.ts";
export * from "./internal/http/response.ts";
export { Agent } from "./internal/http/agent.ts";

export const createServer =
  /*@__PURE__*/ notImplemented<typeof nodeHttp.createServer>(
    "http.createServer",
  );
export const request =
  /*@__PURE__*/ notImplemented<typeof nodeHttp.request>("http.request");
export const get =
  /*@__PURE__*/ notImplemented<typeof nodeHttp.get>("http.get");

export const Server: typeof nodeHttp.Server =
  /*@__PURE__*/ notImplementedClass("http.Server");

export const OutgoingMessage: typeof nodeHttp.OutgoingMessage =
  /*@__PURE__*/ notImplementedClass("http.OutgoingMessage");

export const ClientRequest: typeof nodeHttp.ClientRequest =
  /*@__PURE__*/ notImplementedClass("http.ClientRequest");

export const globalAgent: typeof nodeHttp.globalAgent = new Agent();

export const validateHeaderName = /*@__PURE__*/ notImplemented<
  typeof nodeHttp.validateHeaderName
>("http.validateHeaderName");

export const validateHeaderValue = /*@__PURE__*/ notImplemented<
  typeof nodeHttp.validateHeaderValue
>("http.validateHeaderValue");

export const setMaxIdleHTTPParsers = /*@__PURE__*/ notImplemented<
  typeof nodeHttp.setMaxIdleHTTPParsers
>("http.setMaxIdleHTTPParsers");

export const _connectionListener = /*@__PURE__*/ notImplemented(
  "http._connectionListener",
);

export const WebSocket =
  globalThis.WebSocket ||
  /*@__PURE__*/ notImplementedClass<WebSocket>("WebSocket");

export const CloseEvent =
  globalThis.CloseEvent ||
  /*@__PURE__*/ notImplementedClass<CloseEvent>("CloseEvent");

export const MessageEvent =
  globalThis.MessageEvent ||
  /*@__PURE__*/ notImplementedClass<MessageEvent>("MessageEvent");

export default {
  METHODS,
  STATUS_CODES,
  maxHeaderSize,
  IncomingMessage: IncomingMessage as any as typeof nodeHttp.IncomingMessage,
  ServerResponse: ServerResponse as any as typeof nodeHttp.ServerResponse,
  WebSocket: WebSocket as any as typeof nodeHttp.WebSocket,
  CloseEvent: CloseEvent as any as typeof nodeHttp.CloseEvent,
  MessageEvent: MessageEvent as any as typeof nodeHttp.MessageEvent,
  createServer,
  request,
  get,
  Server,
  OutgoingMessage,
  ClientRequest,
  Agent,
  globalAgent,
  validateHeaderName,
  validateHeaderValue,
  setMaxIdleHTTPParsers,
  _connectionListener,
} as /* TODO: use satisfies */ typeof nodeHttp;
