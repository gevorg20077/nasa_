import { useEffect, useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import { useSelector, useDispatch } from 'react-redux';
import { openCalendar } from '../../store/slices/isCalendar/isCalendar';
import './photoPage.css';

const PhotoPage = () => {
  const dispatch = useDispatch();
  const changeLanguage = useSelector(state => state.changeLanguage);
  const isCalendar = useSelector(state => state.isCalendar);
  const calendarValue = useSelector(state => state.calendarValue);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (calendarValue) {
      setInputValue(`${calendarValue.day}/${calendarValue.month}/${calendarValue.year}`);
    }
  }, [calendarValue]);

  return (
    <form className="photoPage">
      <input type="text" value={inputValue} onClick={() => dispatch(openCalendar())} readOnly />
      {isCalendar && <Calendar />}
      <button>{changeLanguage.russian ? "Поиск" : changeLanguage.armenian ? "Փնտրել" : "Search"}</button>
    </form>
  );
};

export default PhotoPage;