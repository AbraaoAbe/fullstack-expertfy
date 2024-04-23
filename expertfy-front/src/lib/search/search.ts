import axios from 'axios'
import dotenv from "dotenv";
import path from 'path';

export interface Competence {
  id: number;
  name: string;
  description: string;
}

export interface Expert {
  id: number;
  name: string;
  email: string;
  photo: string;
  phone: string;
  linkedin: string;
  team: string;
  employmentStartDate: Date;
  languageId: string;
  seniorityId: string;
  areaId: string;
  office: string;
  competenceCount: number;
}


class SearchExpert {
  constructor() {
    this.baseApiUrl = "http://localhost:3000";
    // this.baseApiUrl = "https://aceb-186-241-116-65.ngrok-free.app";
    // Adicionando cabeçalho padrão para todas as requisições
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
  }

  private baseApiUrl: string | undefined;

  async getSuggestions(name: string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/competence/findByName/${name}`);
      return response.data;
      
    } catch (error) {
      console.log("Error: get Suggestions" + error);
    }
  }

  async getExpertList(selectedSuggestion: Competence | null) {
    try {
      const response = await axios.get(this.baseApiUrl + `/user/listAllByCompetenceId/${selectedSuggestion?.id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Expert List" + error);
    }
  }

  async getAllSuggestions() {
    console.log(this.baseApiUrl + `/competence`);
    try {
      const response = await axios.get(this.baseApiUrl + `/competence`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get All Suggestions" + error);
    }
  }

  async getAllAreas() {
    try {
      const response = await axios.get(this.baseApiUrl + `/area`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get All Areas" + error);
    }
  }

  async getAllLanguages() {
    try {
      const response = await axios.get(this.baseApiUrl + `/language`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get All Languages" + error);
    }
  }

  async getAllSeniorities() {
    try {
      const response = await axios.get(this.baseApiUrl + `/seniority`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get All Seniorities" + error);
    }
  }
}

export const searchExpert = new SearchExpert();