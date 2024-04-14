import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import IconDown from "../IconDown/IconDown";
import IconLeft from "../IconLeft/IconLeft";
import IconRight from "../IconRight/IconRight";
import './calendar.css';
import { changeDay, changeMonth, changeYear } from '../../store/slices/calendarValue/calendarValue';

const Calendar = () => {
  const dispatch = useDispatch()
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(2024)
  const calendarValue = useSelector(state => state.calendarValue)
  let arr = []
  let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let dayTheMonthBegins = new Date(year, month, 1).getDay();
  let dayTheNextMonthBegins = new Date(year, month + 1, 1).getDay()
  let daysThisMonth = new Date(year, month + 1, 0).getDate();
  let daysLastMonth = new Date(year, month, 0).getDate();
  console.log(calendarValue.day);
  const generateDays = () => {

    if (dayTheMonthBegins === 0) {
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - dayTheNextMonthBegins; i++) {
        arr.push(i)
      }
    } else if (dayTheMonthBegins === 1) {
      for (let i = daysLastMonth; i > daysLastMonth - 1; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - dayTheNextMonthBegins; i++) {
        arr.push(i)
      }
    } else if (dayTheMonthBegins === 2) {
      for (let i = daysLastMonth; i > daysLastMonth - 2; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - dayTheNextMonthBegins; i++) {
        arr.push(i)
      }
    } else if (dayTheMonthBegins === 3) {
      for (let i = daysLastMonth; i > daysLastMonth - 3; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - dayTheNextMonthBegins; i++) {
        arr.push(i)
      }
    } else if (dayTheMonthBegins === 4) {
      for (let i = daysLastMonth; i > daysLastMonth - 4; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
    } else if (dayTheMonthBegins === 5) {
      for (let i = daysLastMonth; i > daysLastMonth - 5; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - dayTheNextMonthBegins; i++) {
        arr.push(i)
      }
    } else if (dayTheMonthBegins === 6) {
      for (let i = daysLastMonth; i > daysLastMonth - 6; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= daysThisMonth; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - dayTheNextMonthBegins; i++) {
        arr.push(i)
      }
    }
  };
  const goToBack = (event) => {
    event.preventDefault()
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
    if (month === 0) {
      dispatch(changeMonth(12))
      dispatch(changeYear(year - 1))
    } else if (month === 12) {
      dispatch(changeYear(year + 1))
    } else {
      dispatch(changeMonth(month))
    }
  }
  const goAhead = (event) => {
    event.preventDefault()
    if (month === 12) {
      setMonth(1)
      setYear(year + 1)
      dispatch(changeMonth(1))
      dispatch(changeYear(year + 1))
    } else {
      setMonth(month + 1)
      dispatch(changeMonth(month + 1))
    }
  }
  generateDays()
  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__icons">
          <button className='calendar__icon' onClick={goToBack}><IconLeft /></button>
          <p>{months[month]} {year}</p>
          <button className='calendar__icon' onClick={goAhead}><IconRight /></button>
        </div>
        <div className="calendar__year">
          <p>{year} <IconDown /></p>
        </div>
        <ul className="calendar__week_days">
          <li>Su</li>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
        </ul>
      </div>
      <ul className="calendar__body">
        {arr.map((number, i) => (
          <li
            style={{
              background: number === calendarValue.day ? "#216ba5" : "white",
              color: number === calendarValue.day ? "white" : "black"
            }}
            onClick={() => dispatch(changeDay(number))}
            key={i}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
