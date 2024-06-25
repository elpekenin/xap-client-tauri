// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { XAPDevice } from "./XAPDevice";
import type { XAPSecureStatus } from "./XAPSecureStatus";

export type FrontendEvent = { kind: "NewDevice", data: { device: XAPDevice, } } | { kind: "RemovedDevice", data: { id: string, } } | { kind: "SecureStatusChanged", data: { id: string, secure_status: XAPSecureStatus, } } | { kind: "LogReceived", data: { id: string, log: string, } } | { kind: "KeyTester", data: { id: string, pressed: boolean, row: number, col: number, } };