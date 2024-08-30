export interface User {
  id: string;
  name?: string;
  lastName: string;
  birthDate: Date;
  email: string;
  photo: string;
  phone: string;
  linkedin?: string;
  teams?: string;
  employmentStartDate: Date;
  languages: string;
  seniority: string;
  area: string;
  office: string;

  [key: string]: unknown;
}
