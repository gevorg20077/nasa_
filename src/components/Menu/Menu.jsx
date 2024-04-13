import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../Images/logoNasa.png'
import './menu.css'
import { changeToArmenian, changeToEnglish, changeToRussian } from '../../store/slices/changeLanguage/changeLanguage'
const Menu = () => {
  const dispatch = useDispatch()
  const changeLanguage = useSelector(state=>state.changeLanguage)
  return (
    <div className='menu'>
      <div className="menu__logo">
        <img src={logo} alt="" />
        <p>NASA {changeLanguage.russian ? "Браузер" : changeLanguage.armenian ? "Բրաուզեր" : "Browser"}</p>
      </div>
      <ul className="menu__language">
        <li onClick={()=>dispatch(changeToEnglish())}><NavLink>En</NavLink></li>
        <li onClick={()=>dispatch(changeToRussian())}><NavLink>Ru</NavLink></li>
        <li onClick={()=>dispatch(changeToArmenian())}><NavLink>Hy</NavLink></li>
      </ul>
      <ul className="menu__list">
        <li><NavLink to="nasa_photo">{changeLanguage.russian ? "Астрономическое Фото Дня" : changeLanguage.armenian ? "Օրվա Աստղագիտական Նկարը" : "Astronomy Photo Of The Day"}</NavLink></li>
        <li><NavLink to="nearby_asteroids">{changeLanguage.russian ? "Ближайшие Астероиды" : changeLanguage.armenian ? "Մոտակա Աստերոիդներ" : "Nearby Asteroids"}</NavLink></li>
        <li><NavLink to="submit_new_planet">{changeLanguage.russian ? "Подтвердить Новую Планету" : changeLanguage.armenian ? "Հաստատել Նոր Մոլորակ" : "Submit New Planet"}</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu