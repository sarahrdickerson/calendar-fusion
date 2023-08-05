"use client";

import React, { useState, useEffect} from 'react';
import { generateDate } from '@/lib/utils';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

type MonthCalendarProps = {
  selectedDay: Dayjs;
  setSelectedDay: React.Dispatch<React.SetStateAction<Dayjs>>;
};

const MonthCalendar: React.FC<MonthCalendarProps> = ({selectedDay, setSelectedDay}) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const currentDate = dayjs();
    
    const [ today, setToday ] = useState(currentDate);

  return (
    <div className='w-96 h-96'>
        <div className='flex flex-row justify-between font-semibold'>
            <h1 className='text-xl'>{today.format('MMMM YYYY')}</h1>
            <div className='flex items-center gap-5'>
                <GrFormPrevious 
                    className='cursor-pointer rounded-full h-4 w-4 place-content-center
                    hover:bg-gray-200 transition-all duration-200' 
                    onClick={() => setToday(today.subtract(1, 'month'))}
                />
                <button 
                    onClick={() => {
                        setToday(dayjs());
                        setSelectedDay(dayjs());
                    }}
                    className='btn btn-ghost btn-xs'
                >
                    Today
                </button>
                <GrFormNext 
                    className='cursor-pointer rounded-full h-4 w-4 place-content-center
                    hover:bg-gray-200 transition-all duration-200' 
                    onClick={() => setToday(today.add(1, 'month'))}
                />
            </div>
        </div>
        <div className='w-full grid grid-cols-7'>
            {days.map((day, index) => {
                return (
                    <h1 key={index}
                        className='h-14 grid place-content-center text-sm'
                    >
                        {day}
                        </h1>
                )
            })}
        </div>
        <div className='w-full grid grid-cols-7'>
            {generateDate(today.month(), today.year()).map(({date, currentMonth, today},index) => {
                return (
                    <div 
                        key={index}
                        className='h-14 border-t grid place-content-center text-sm'
                    >
                        <h1
                            className={` 
                                ${currentMonth ? 'text-black' : 'text-gray-300'} 
                                ${selectedDay.toDate().toDateString() === date.toDate().toDateString() ? 'bg-violet-100' : ''}
                                ${today ? 'bg-violet-400 hover:bg-violet-300 transition-all duration-200 cursor-pointer' : ' hover:bg-gray-200 transition-all duration-200 cursor-pointer'}
                                rounded-full h-10 w-10 grid place-content-center
                                `}
                                
                            onClick={() => setSelectedDay(date)}
                        >{date.date()}</h1>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default MonthCalendar