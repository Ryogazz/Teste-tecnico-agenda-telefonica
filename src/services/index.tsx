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

export interface CreateSchedule {
  name: string;
  numbers: string[];
  email: string;
  cpf: string;
  date_born: string; // format: YYYY-mm-dd
}

export function createSchedule(schedule: CreateSchedule) {
  return axios
    .post("http://teste-frontend.saperx.com.br/api/schedule", schedule, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response.data);
}

interface UpdateSchedule {
  name: string;
  email: string;
  cpf: string;
  date_born: string;
  numbers: string[];
}

export function updateSchedule(id: number, updateSchedule: UpdateSchedule) {
  return axios
    .put(
      `http://teste-frontend.saperx.com.br/api/schedule/${id}`,
      updateSchedule
    )
    .then((response) => response.data);
}

export function deleteSchedule(id: number): Promise<void> {
  return axios
    .delete(`http://teste-frontend.saperx.com.br/api/schedule/${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(() => {});
}

export interface tel {
  id: number;
  id_schedule: number;
  number: string;
}
