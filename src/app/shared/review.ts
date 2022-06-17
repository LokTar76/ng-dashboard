export interface Review {
  id: number;
  hbn: string;
  ref: string;
  timeStart: Date;
  timeDone: Date;
  cneeName: string;
  cneeEmail: string;
  cneeTel: string;
  cnorCity: string;
  cnorState: string;
  pkg: number;
  weight: number;
  timeArrived: Date;
  shipmentId: number;
  cargoProcessId: number;
  status: number;
  timeCreated: Date;
  timeProcessed: Date;
  problem: string;
  comment: string;
}
