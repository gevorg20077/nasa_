import { useEffect, useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import { currentDateTime } from '../../store/slices/date/date';
import './asteroidsPage.css';
import { useSelector, useDispatch } from 'react-redux';

const AsteroidsPage = () => {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const dispatch = useDispatch();
  const changeLanguage = useSelector(state => state.changeLanguage);
  const calendarValue = useSelector(state => state.calendarValue);
  const [inpValue, setInpValue] = useState('');

  useEffect(() => {
    dispatch(currentDateTime());
  }, [dispatch]);

  const calendarStart = () => {
    setIsStart(true);
    setIsEnd(false);
  };

  const calendarEnd = () => {
    setIsEnd(true);
    setIsStart(false);
  };
  useEffect(() => {
    if (calendarValue) {
      setInpValue(`${calendarValue.day}/${calendarValue.month}/${calendarValue.year}`);
    }
  }, [calendarValue]);

  return (
    <div className="asteroidsPage">
      <h3 className='asteroidsPage__text'>{changeLanguage.russian ? "Поиск астероидов по дате их наибольшего сближения с Землей" : changeLanguage.armenian ? "Փնտրել Աստերոիդներ Իրենց Հետագծով Երկրանգնդին Ամենամոտ Գտնվելու Օրով" : "Search for Asteroids based on their closest approach date to Earth"}</h3>
      <h5 className='asteroidsPage__text'>{changeLanguage.russian ? "Вы можете выбрать максимальный диапазон 7 дней." : changeLanguage.armenian ? "Դուք Կարող եք Ընտրել Ամենաշատը 7 Օրվա Միջակայք" : "You could select the range maximum for 7 days"}</h5>
      <div className="asteroidsPage__date">
        <div className="asteroidsPage__start_date">
          <p>{changeLanguage.russian ? "Начальная Дата:" : changeLanguage.armenian ? "Սկզբնական Ամսաթիվ:" : "Start Date:"}</p>
          <input type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)} onFocus={calendarStart} />
          {isStart && <Calendar />}
        </div>
        <div className="asteroidsPage__end_date">
          <p>{changeLanguage.russian ? "Конечная Дата:" : changeLanguage.armenian ? "Վերջնական Ամսաթիվ:" : "End Date:"}</p>
          <input type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)} onFocus={calendarEnd} />
          {isEnd && <Calendar />}
        </div>
        <button className='asteroidsPage__button'>{changeLanguage.russian ? "Поиск" : changeLanguage.armenian ? "Փնտրել" : "Search"}</button>
      </div>
    </div>
  );
};

export default AsteroidsPage;
