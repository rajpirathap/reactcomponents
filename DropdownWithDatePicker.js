import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Constraint.css';

const DropdownWithDatePicker = ({ isDropdownOpen, setSelectedDate, selectedDate, datePickerValues }) => {

  let defaultDate = Date();
  //console.log(isDropdownOpen);
  if (selectedDate instanceof Date && !isNaN(selectedDate)) {
    defaultDate = selectedDate;
  }

  return (
    <div className="dropdown-container" style={{ position: 'relative' }}>
      {isDropdownOpen && (
        <ul className="dropdown-menu custom-dropdown-menu" style={dropdownMenuStyles}>
          <li className="dropdown-item" style={dropdownItemStyles} disabled>Select...</li>
          {datePickerValues.map((option) => (
            <li className="dropdown-item" style={dropdownItemStyles} onClick={() => setSelectedDate(option )}>{option}</li>
          ))}
          <li className="dropdown-item" style={dropdownItemStyles}>
            <div>Select a Date:</div>
            <DatePicker
              selected={defaultDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Click to select a date"
            />
          </li>
        </ul>
      )}
    </div>
  );
};

// Basic styling
const dropdownMenuStyles = {
  position: 'absolute',//relative
  top: '100%',
  left: 0,
  zIndex: 1000,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  width: '200px',
};

const dropdownItemStyles = {
  padding: '10px',
  cursor: 'pointer',
  borderBottom: '1px solid #ddd',
};

export default DropdownWithDatePicker;
