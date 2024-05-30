import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import Counter from '../Counter/Counter';
import UserDataForm from '../UserDataForm/UserDataForm';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleSave = (data: { id: string, name: string, address: string, email: string, phone: string }) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  };

  return (
    <div className="dashboard">
      <Typography variant="h2" className="title">Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Counter />
        </Grid>
        <Grid item xs={12} md={6}>
          <RichTextEditor userData={userData} />
        </Grid>
        <Grid item xs={12}>
          <UserDataForm onSave={handleSave} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
