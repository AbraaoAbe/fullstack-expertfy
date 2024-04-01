import React from 'react';
import './ElementList.css';

interface Expert {
  id: number;
  name: string;
  seniority: string;
  email: string;
  photo: string; //way for the image in backend
  competenceCount: number;
}

interface ElementListProps {
  userList: Expert[];
}




const ElementList: React.FC<ElementListProps> = ({ userList }) => {
  return (
    <div className="expert-list">
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <div className='user-name'>
              {user.name}
            </div>
            <div className='user-seniority'>
              {user.seniority}
            </div>
            <div className='user-email'>
              {user.email}
            </div>
            <div className='user-photo'>
              <img src={user.photo} alt={user.photo} />
            </div>
            <div className='user-competence-count'>
              {user.competenceCount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ElementList;
