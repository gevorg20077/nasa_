import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import './newPlanetPage.css'
const NewPlanetPage = () => {
  const changeLanguage = useSelector(state=>state.changeLanguage)
  const planetValue = (value)=>{
    if(value === ''){
      return "Planet field is required"
    } else if(value.length <= 16){
      return "Min length is 16 symbols"
    }
  }
  const distanceValue = (value) =>{
    if(value === ''){
      return "Distance field is required"
    }
  }
  const nameValue = (value) => {
    if(value === ''){
      return 'Your Name field is required'
    } else if (/\d/.test(value)) {
      return "The name must not contain numbers"
    }
  }
  const emailValue = (value) =>{
    if(value === ''){
      return "Email field is required"
    }else if(!value.includes('@') || !value.includes('.')){
      return 'Please Enter Valid Email'
    }
  }
  return (
    <Formik initialValues={{ planet: '', diametr: '', distance: '', name: '', email: '' }} onSubmit>
      <div className="newPlanetPage">
        <h3 className='newPlanetPage__text'>{changeLanguage.russian ? "Если вы нашли новую планету, вы можете добавить ее в наш каталог (демо реактивных форм)" : changeLanguage.armenian ? "Եթե դուք հայտնաբերել եք նոր մոլորակ, ապա կարող եք ավելացնել այն մեր կատալոգում" : "If you find a new planet, you can add it to our catalog (reactive forms demo)"}</h3>
        <Form className="newPlanetPage__form">
          <Field name="planet" type="text" placeholder={changeLanguage.russian ? "Название Планеты" : changeLanguage.armenian ? "Մոլորակի անունը" : "Planet Name"} validate={planetValue} />
          <ErrorMessage className='newPlanetPage__error' component="p" name='planet'/>
          <select name="" id="">
            <option value="">{changeLanguage.russian ? "Название галактики" : changeLanguage.armenian ? "Գալակտիկայի անունը" : "Galaxy Name"}</option>
            <option value="">Milky Way</option>
            <option value="">Messier 83</option>
            <option value="">Black Eye Galaxy</option>
            <option value="">Pinwheel</option>
            <option value="">Canis Major Dwarf</option>
            <option value="">Somewhere else</option>
          </select>
          <Field name="diametr" type="number" placeholder={changeLanguage.russian ? "Диаметр" : changeLanguage.armenian ? "Տրամագիծ(կմ)" : "Diameter (km)"} />
          <Field name="distance" type="number" placeholder={changeLanguage.russian ? "Дистанция" : changeLanguage.armenian ? "Հեռավորություն (կմ)" : "Distance(km)"} validate={distanceValue} />
          <ErrorMessage className='newPlanetPage__error' component="p" name='distance'/>
          <Field name="name" type="text" placeholder={changeLanguage.russian ? "Ваше имя" : changeLanguage.armenian ? "Ձեր անունը" : "Your Name"} validate={nameValue} />
          <ErrorMessage className='newPlanetPage__error' component="p" name='name'/>
          <Field name="email" type="text" placeholder="Email" validate={emailValue} />
          <ErrorMessage className='newPlanetPage__error' component="p" name='email'/>
          <button className='newPlanetPage__button'>{changeLanguage.russian ? "Подтвердить" : changeLanguage.armenian ? "Հաստատել" : "Submit"}</button>
        </Form>
      </div>
    </Formik>
  )
}

export default NewPlanetPage