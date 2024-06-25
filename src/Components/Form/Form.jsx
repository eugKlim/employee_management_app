import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <div className="form">
      <h2 className='form-title'>Добавить сотрудника</h2>
      <form>
        <input type="text" placeholder="ФИО" />
        <button>Добавить ➜</button>
      </form>
    </div>
  );
};

export default Form;
