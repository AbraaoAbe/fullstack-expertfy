export interface User {
  id: string;
  name?: string;
  lastName: string;
  birthDate: Date;
  email: string;
  photo: string;
  phone: string;
  linkedin?: string;
  team?: string;
  employmentStartDate: Date;
  languages: string;
  seniority: string;
  area: string;
  office: string;

  [key: string]: unknown;
}
