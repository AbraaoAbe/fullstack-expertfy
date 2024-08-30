import axios from 'axios'

class Account {
  constructor() {
    this.baseApiUrl = "http://localhost:3000";
    // this.baseApiUrl = "https://6004-186-241-116-65.ngrok-free.app";

    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
  }

  private baseApiUrl: string | undefined;

  async getAccountInfo(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/person/accountInfo/${id}`);
      // console.log(response.data);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Account Info" + error);
    }
  }

  async getCountScoreByUser(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/humanTask/countByPersonGroupBySkill/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Count Score" + error);
    }
  }



  async getTableListByUser(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/humanTask/tableListByPersonId/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Skill List By User" + error);
    }
  }

  async getTotalScoreForAll() {
    try {
      const response = await axios.get(this.baseApiUrl + `/humanTask/total/CountGroupBySkill`);
      return response.data;
    } catch (error) {
      console.log("Error: get Count Total Score" + error);
    }
  }

  async createSkillEndorsement(skillId : string, personId : string) {
    try {

      const dateStringFormat = Account.formatDate(new Date());
      const jsonPost = { skillId, personId, description: "uma descrição", date: dateStringFormat };
      // console.log(jsonPost);

      const response = await axios.post(this.baseApiUrl + `/skillEndors`, jsonPost);
      return response.data;
    }
    catch (error) {
      console.log("Error: create Skill Endorsement" + error);
    }
  }

  async getCountEndorsementByUser(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/skillEndors/person/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Count Endorsement" + error);
    }
  }

  async getSkillIdByPersonAndSkillType(personId : string, skillTypeId : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/person/getSkillIdByPersonAndSkillType/${personId}/${skillTypeId}`);

      var skillId = response.data.skillId
      // console.log(skillId)
      return skillId
    } catch (error) {
      console.log(error);
    }
  }

  public static formatDate(date: Date): string {
    var dateSTR = ''
    try {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
      const day = String(date.getDate()).padStart(2, '0');
      dateSTR = `${year}-${month}-${day}`
    } catch (error) {
      console.log(error);
    }
    // console.log(dateSTR);
    return dateSTR
  }



}

export const accountInfo = new Account();
