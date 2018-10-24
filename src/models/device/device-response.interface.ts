import { Device } from './device.interface';

export interface DeviceResponse {
    result?: {
        device?: Device,
        uid?: string
    }
    error?: {
        code?: string;
        message?: string;
    }
}