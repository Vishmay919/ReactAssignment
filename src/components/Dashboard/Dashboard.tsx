import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import Counter from '../Counter/Counter';
import UserDataForm from '../UserDataForm/UserDataForm';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
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
      <div className="header">
        <Typography variant="h6" className="title">Dashboard</Typography>
        <Button variant="contained" color="error" onClick={logout}>Logout</Button>
      </div>
      <div className="dashboard-container">
      <Grid container spacing={4} >
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
    </div>
  );
};

export default Dashboard;
