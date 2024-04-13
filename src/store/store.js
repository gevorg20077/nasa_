import { configureStore } from "@reduxjs/toolkit"
import { changeLanguageReducer } from "./slices/changeLanguage/changeLanguage"
import { dateReducer } from "./slices/date/date"
import { isCalendarReducer } from "./slices/isCalendar/isCalendar"
import { calendarValueReducer } from "./slices/calendarValue/calendarValue"

const store = configureStore({
  reducer: {
    changeLanguage: changeLanguageReducer,
    date: dateReducer,
    isCalendar: isCalendarReducer,
    calendarValue: calendarValueReducer
  },
  middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware()]
})

export default store