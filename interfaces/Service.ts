export interface Service {
  id: number;
  apiKey: string;
  name: string;
  description: string;
  status: ServiceStatus;
}

export enum ServiceStatus {
  Available = 'Available',
  Blocked = 'Blocked',
}
