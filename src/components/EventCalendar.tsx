'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
    {
        id: 1,
        title: "and typesetting",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
        id: 2,
        title: "Lorem Ipsum ",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting"

    },
    {
        id: 3,
        title: "Lorem typesetting",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting"

    }
]


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            <div className='flex flex-col rounded-md'>
                {
                    events.map((event) => (
                        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurle'
                            key={event.id}>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                                <span className='text-gray-300 text-xs'>{event.time}</span>
                            </div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default EventCalendar