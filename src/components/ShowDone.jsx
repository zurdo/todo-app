import React from 'react';

export const ShowDone = ({ isChecked, setShowDone, handleDeleteDone }) => {
  const handleDelete = () => {
    setTimeout(() => {
      if (window.confirm('sure you want to delete all the tasks done?')) {
        handleDeleteDone();
      }
    }, 250);
  };

  return (
    <>
      <div className='showdone-container'>
        <label htmlFor='switch' className='showdone-label'>
          Show Completed Task
        </label>
        <input
          className='showdone-input-hidden'
          type='checkbox'
          id='switch'
          checked={isChecked}
          onChange={e => setShowDone(e.target.checked)}
        />
        <label htmlFor='switch' className='showdone-label-hidden'></label>
      </div>
      {isChecked && (
        <button onClick={handleDelete} className='button' type='button'>
          Delete all
        </button>
      )}
    </>
  );
};
