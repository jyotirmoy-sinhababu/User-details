import React from 'react';

const UserForm = () => {
  return (
    <div>
      <form>
        <label>Enter the name</label>
        <input className='' type='text' />
        <label>Enter the email</label>
        <input className='' type='email' />
        <label>Enter the phone number</label>
        <input className='' type='number' />
      </form>
    </div>
  );
};

export default UserForm;
