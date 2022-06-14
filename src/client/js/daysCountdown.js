// Countdown - Days away
import { checkDate } from './js/dateValidation';

const oneDay = 86400000;
const leftDays = Math.ceil((Date.parse(dateEnd)) - Date.parse(dateStart)) / 86400000;
const numberDays = document.getElementById('days');
numberDays.innerText = leftDays;


