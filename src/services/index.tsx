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


// export function getAllSchedules(): Promise<Schedule[]> {
//   return axios
//     .get<Schedule[]>("http://teste-frontend.saperx.com.br/api/schedule")
//     .then((response) => response.data);
// }
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

export function updateSchedule(
  id: number,
  schedule: Schedule
): Promise<Schedule> {
  return axios
    .put<Schedule>(
      `http://teste-frontend.saperx.com.br/api/schedule/${id}`,
      schedule
    )
    .then((response) => response.data);
}

export function deleteSchedule(id: number): Promise<void> {
  return axios
    .delete(`http://teste-frontend.saperx.com.br/api/schedule/${id}`)
    .then(() => {});
}
