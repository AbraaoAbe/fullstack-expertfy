import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditUser.css';

import example_photo from '../../assets/user/profile-example.jpg';

const formatDateForMySQL = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const list_language_test = [
  { id: 1, name: 'Português' },
  { id: 2, name: 'Inglês' },
  { id: 3, name: 'Espanhol' },
  { id: 4, name: 'Francês' },
  { id: 5, name: 'Alemão' },
];

const list_area_test = [
  { id: 1, name: 'Desenvolvimento' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Gestão' },
  { id: 4, name: 'Marketing' },
  { id: 5, name: 'Vendas' },
];

const list_seniority_test = [
  { id: 1, name: 'Estagiário' },
  { id: 2, name: 'Júnior' },
  { id: 3, name: 'Pleno' },
  { id: 4, name: 'Sênior' },
  { id: 5, name: 'Master' },
];

const basicInfo = (label: string, list: any) => {
  return (
    <div className='edit-user-basic-info-content'>
      <label>{label}</label>
      <select>
        {list.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

const contactInfo = (label: string, value: string, name: string, onchange: any) => {
  return (
    <div className='edit-user-contact-content'>
      <label>{label}</label>
      <input type='text' value={value} name={name} onChange={onchange} />
    </div>
  );
}

const EditUser = () => {

  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    birthDate: formatDateForMySQL(new Date()),
    email: '',
    photo: '',
    phone: '',
    linkedin: '',
    team:'',
    employmentStartDate: formatDateForMySQL(new Date()),
    languageId: '',
    seniorityId: '',
    areaId: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        const userData = response.data;

        setFormData({
          name: userData.name,
          lastName: userData.lastName,
          birthDate: userData.birthDate,
          email: userData.email,
          photo: userData.photo,
          phone: userData.phone,
          linkedin: userData.linkedin,
          team: userData.team,
          employmentStartDate: userData.employmentStartDate,
          languageId: userData.languageId,
          seniorityId: userData.seniorityId,
          areaId: userData.areaId,
        });
        console.log(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sendFormData();
  };

  const sendFormData = async () => {
    try {
      const data = new FormData();

      data.append('name', formData.name);
      data.append('lastName', formData.lastName);
      data.append('birthDate', formData.birthDate);
      data.append('email', formData.email);
      data.append('photo', formData.photo);
      data.append('phone', formData.phone);
      data.append('linkedin', formData.linkedin);
      data.append('team', formData.team);
      data.append('employmentStartDate', formData.employmentStartDate);
      data.append('languageId', formData.languageId);
      data.append('seniorityId', formData.seniorityId);
      data.append('areaId', formData.areaId);

      const response = await axios.put(`http://localhost:3000/user/${id}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='edit-user-form'>
      <form onSubmit={handleSubmit}>
        {/* Profile  */}
        <span className='edit-user-subtitles'>Perfil</span>
        <div className='edit-user-profile'>
          <div className='edit-user-profile-photo'>
            <img src={example_photo} alt='profile' />
            <label>
              <span>Alterar foto</span>
              <input type="file" name="photo" accept="image/*"  />
            </label>  
          </div>
          <div className='edit-user-profile-info'>
            <h3>{formData.name}</h3>
            <p>{formData.team}</p>
            </div>
        </div>
        {/* Basic-info */}
        <span className='edit-user-subtitles'>Informações</span>
        <div className='edit-user-basic-info'>
          {basicInfo('Idioma:', list_language_test)}
          {basicInfo('Área:', list_area_test)}
          {basicInfo('Senioridade:', list_seniority_test)}
        </div>
        {/* Contact */}
        <span className='edit-user-subtitles'>Links Externos</span>
        <div className='edit-user-contact'>
          {contactInfo('Linkedin:', formData.linkedin, 'linkedin', handleInputChange)}
          {contactInfo('E-mail:', formData.email, 'email', handleInputChange)}
          {contactInfo('GitHub:', formData.email, 'email', handleInputChange)}
        </div>
        {/* Buttons */}
        <div className='edit-user-buttons'>
          <button type="button">Cancelar</button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
