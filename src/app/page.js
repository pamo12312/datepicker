"use client"
import { Button, Calendar, CalendarCell, CalendarGrid, DatePicker, Heading } from 'react-aria-components';

export default function Home() {
    return (
        <div className={"bg-black w-screen h-screen text-white flex justify-center items-center"}>
            <DatePicker className="flex justify-center items-center mt-35vh">
                <Calendar className="react-aria-Calendar">
                    <header className="w-full h-1/4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Heading className="text-2xl" />
                            <Button slot="next" className="border-none bg-black text-blue-500 text-3xl">&gt;</Button>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button slot="previous" className="border-none bg-black text-blue-500 text-3xl">&lt;</Button>
                            <Button slot="next" className="border-none bg-black text-blue-500 text-3xl">&gt;</Button>
                        </div>
                    </header>
                    <CalendarGrid className="w-full h-full">
                        {(date) => <CalendarCell date={date} className="w-full h-full flex justify-center items-center text-3xl focus:bg-blue-500 hover:bg-transparent rounded-full p-1" />}
                    </CalendarGrid>
                </Calendar>
            </DatePicker>
        </div>
    );
}
