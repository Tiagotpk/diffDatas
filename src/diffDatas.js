import React, { useState } from 'react';
import { differenceInCalendarDays, differenceInYears, addDays, differenceInCalendarMonths, addMonths, isLeapYear } from 'date-fns';
import qrcode from "./pics/qrcode.svg";


export function DateCalculator(props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const diffInYears = differenceInYears(endDateObj, startDateObj);
    const diffInMonths = differenceInCalendarMonths(
      endDateObj,
      addMonths(startDateObj, diffInYears * 12)
    );
    let diffInDays = differenceInCalendarDays(
      endDateObj,
      addDays(startDateObj, diffInYears * 365)
    );

    if (isLeapYear(startDateObj > endDateObj)) {
      diffInDays -= 1;
    }

    setResult(
      `${diffInYears} ano(s), ${diffInMonths} mês(es) e ${diffInDays} dia(s)`
    );
  }

  return (
    <div>
      <label>Data Inicial:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <br />
      <label>Data Final:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <br />
      <button onClick={handleCalculate}>Calcular</button>
      <br />
      {result && <p>Resultado: {result}</p>}

      <label className='helpUs'>Nos ajude a crescer!</label>
      <img src={qrcode} alt='qr code'></img>
    </div>
  );
}

export default DateCalculator;