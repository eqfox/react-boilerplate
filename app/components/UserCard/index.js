import React from 'react';

import styles from './styles.scss';

type Props = {
  info: Object
};

const UserCard = ({ info } : Props) => (
  <div className={styles.UserCard}>
    <h4>User Card</h4>
    <ul>
      <li>姓名: {info.name}</li>
      <li>Phone: {info.phone}</li>
      <li>Email: {info.email}</li>
      <li>Website: {info.website}</li>
    </ul>
  </div>
);

UserCard.defaulProps = {
  info: {
    name: '',
    phone: '',
    email: '',
    website: '',
  },
};

export default UserCard;
