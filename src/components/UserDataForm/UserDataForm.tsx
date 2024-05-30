import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import './UserDataForm.css';

interface UserDataFormProps {
  onSave: (data: { id: string, name: string, address: string, email: string, phone: string }) => void;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    const newData = { ...formData, id: newId };
    onSave(newData);
    setFormData({ name: '', address: '', email: '', phone: '' });
    alert('Data saved successfully!');
  };

  return (
    <div className="form">
      <Typography variant="h4" className="title">User Data Form</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth className="textField" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth className="textField" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth className="textField" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} fullWidth className="textField" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit} className="button">Save</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDataForm;
