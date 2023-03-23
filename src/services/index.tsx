import axios from "axios";

export interface Schedule {
  status: boolean;
  data: {
    id: number;
    name: string;
    numbers: {
      id: number;
      id_schedule: number;
      number: string;
    }[];
    email: string;
    cpf: string;
    date_born: string; // format: YYYY-mm-dd
  }[];
}

export function getAllSchedules(): Promise<Schedule> {
  return axios
    .get<Schedule>("http://teste-frontend.saperx.com.br/api/schedule")
    .then((response) => response.data);
}


export function createSchedule(schedule: Schedule): Promise<Schedule> {
  return axios
    .post<Schedule>(
      "http://teste-frontend.saperx.com.br/api/schedule",
      schedule
    )
    .then((response) => response.data);
}

interface updateSchedule {
  name: string;
  email: string;
  cpf: string;
  date_born: string;
  numbers: {
    id: number;
    id_schedule: number;
    number: string;
  }[];
}

interface updateSchedulePromise {
  status: boolean;
  mesaage: string;
}

export function updateSchedule(
  id: number,
  updateSchedule: updateSchedule
): Promise<updateSchedulePromise> {
  return axios
    .put<updateSchedulePromise>(
      `http://teste-frontend.saperx.com.br/api/schedule/${id}`,
      updateSchedule
    )
    .then((response) => response.data);
}

export function deleteSchedule(id: number): Promise<void> {
  return axios
    .delete(`http://teste-frontend.saperx.com.br/api/schedule/${id}`)
    .then(() => {});
}

export interface tel {
  id: number;
    id_schedule: number;
    number: string;
}
export interface contact {
  id: number;
  name: string;
  numbers: tel[];
  email: string;
  cpf: string;
  date_born: string; // format: YYYY-mm-dd
}    
export interface ScheduleById {
  status: boolean;
  data: contact[];
}

export function getScheduleById(id: number): Promise<ScheduleById> {
  return axios
    .get(`http://teste-frontend.saperx.com.br/api/schedule/${id}`)
    .then((response) => response.data);
}

