import axios from 'axios'

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
  async getSuggestions(name: string) {
    try {
      const response = await axios.get(`http://localhost:3000/competence/findByName/${name}`);
      return response.data;
      
    } catch (error) {
      console.log("Error: get Suggestions" + error);
    }
  }

  async getExpertList(selectedSuggestion: Competence | null) {
    try {
      const response = await axios.get(`http://localhost:3000/user/listAllByCompetenceId/${selectedSuggestion?.id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Expert List" + error);
    }
  }

  async getAllSuggestions() {
    try {
      const response = await axios.get(`http://localhost:3000/competence`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get All Suggestions" + error);
    }
  }
}

export const searchExpert = new SearchExpert();