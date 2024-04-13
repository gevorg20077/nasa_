import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import IconDown from "../IconDown/IconDown";
import IconLeft from "../IconLeft/IconLeft";
import IconRight from "../IconRight/IconRight";
import './calendar.css';
import { closeCalendar, openCalendar } from '../../store/slices/isCalendar/isCalendar';
import { changeDay, changeMonth, changeYear } from '../../store/slices/calendarValue/calendarValue';

const Calendar = () => {
  const dispatch = useDispatch()
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(2024)
  const isCalendar = useSelector(state => state.isCalendar)
  let arr = []
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let qaniShabtiovaAmisySksum = new Date(year, month, 1).getDay();
  let myusAmisQaniShabtiovaSksum = new Date(year, month + 1, 1).getDay()
  let qaniOrKaEsAmsum = new Date(year, month + 1, 0).getDate();
  let qaniOrKaAncacAmsum = new Date(year, month, 0).getDate();
  const generateDays = () => {

    if (qaniShabtiovaAmisySksum === 0) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 0; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - myusAmisQaniShabtiovaSksum; i++) {
        arr.push(i)
      }
    } else if (qaniShabtiovaAmisySksum === 1) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 1; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - myusAmisQaniShabtiovaSksum; i++) {
        arr.push(i)
      }
    } else if (qaniShabtiovaAmisySksum === 2) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 2; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - myusAmisQaniShabtiovaSksum; i++) {
        arr.push(i)
      }
    } else if (qaniShabtiovaAmisySksum === 3) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 3; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - myusAmisQaniShabtiovaSksum; i++) {
        arr.push(i)
      }
    } else if (qaniShabtiovaAmisySksum === 4) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 4; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
    } else if (qaniShabtiovaAmisySksum === 5) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 5; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - myusAmisQaniShabtiovaSksum; i++) {
        arr.push(i)
      }
    } else if (qaniShabtiovaAmisySksum === 6) {
      for (let i = qaniOrKaAncacAmsum; i > qaniOrKaAncacAmsum - 6; i--) {
        arr.push(i)
      }
      arr.reverse()
      for (let i = 1; i <= qaniOrKaEsAmsum; i++) {
        arr.push(i)
      }
      for (let i = 1; i <= 7 - myusAmisQaniShabtiovaSksum; i++) {
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
      dispatch(changeMonth(month+1))
      console.log(month);
    }
  }
  generateDays()
  // const changeDay = (number) =>{
  // event.target.style.background = "blue"
  // dispatch(closeCalendar())
  // dispatch(changeDay(number))
  // }
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
        {arr.map((number, i) => <li onClick={() => dispatch(changeDay(number))} key={i}>{number}</li>)}
      </ul>
    </div>
  );
};

export default Calendar;
