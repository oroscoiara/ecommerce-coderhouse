import React, { useState } from 'react';

const Form = ({ setBuyerInfo }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      if (
        formData.name === '' ||
        formData.surname === '' ||
        formData.phone === '' ||
        formData.email === '' ||
        formData.emailVerification === ''
      ) {
        alert('Debes completar todos los campos.');
      } else {
        if (formData.email !== formData.emailVerification) {
          alert('Verifica que tu correo electrónico coincida con el anterior.');
        } else {
          setBuyerInfo(formData);
        }
      }
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    };
  
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      phone: '',
      email: '',
      emailVerification: '',
    });
  
    return (
      <div>
        <h2>Datos de su compra</h2>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            id="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="emailVerification">Repita su e-mail</label>
          <input
            type="email"
            id="emailVerification"
            value={formData.emailVerification}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Comprar
        </button>
      </div>
    );
  };
  
  export default Form;