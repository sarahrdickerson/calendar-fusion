"use client";

import React, { useState, useEffect } from 'react';
import MonthCalendar from '@/components/calendar/MonthCalendar';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

const CalendarPage = () => {
    const currentDate = dayjs();
    const [selectedDay, setSelectedDay] = useState(currentDate);
  
    return (
      <div className='justify-center grid z-10 mx-auto gap-10 h-screen w-screen items-center bg-gray-100'>
          <div className='flex flex-row gap-5'>
              <div className='text-gray-500'>
                  <MonthCalendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
              </div>
              
              <div className=''>
                  <h1 className='font-semibold'>Schedule for {selectedDay.toDate().toDateString()}</h1>
              </div>        
          </div>
          
        </div>
    )
}

export default CalendarPage