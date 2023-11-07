"use client"
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import moment from "moment/moment"

export const Home = () => {
    moment.locale("en")
    const currentMonth = moment().format("MMMM")
    const myDay = moment().format("D")
    const myMonths = moment.months()
    const myYear = moment().year()
    const lastYear = myYear + 50
    const firstYear = myYear - 50

    const allYears = []
    for (let year = firstYear; year <= lastYear; year++) {
        allYears.push(year)
    }

    const [selectedMonth, setSelectedMonth] = useState(currentMonth)
    const [selectedYear, setSelectedYear] = useState(myYear)
    const [daysInMonth, setDaysInMonth] = useState([])
    const [currentDay, setCurrentDay] = useState(myDay)
    const dateNumeric = `${moment().month(selectedMonth).month() + 1}-${currentDay}-${selectedYear}`
    const days = []
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day)
    }

    useEffect(() => {
        const daysInCurrentMonth = moment(`${selectedYear}-${selectedMonth}`, "YYYY-MMMM").daysInMonth()
        setDaysInMonth(daysInCurrentMonth)
    }, [selectedMonth, selectedYear])

    console.log(dateNumeric)

    function decrementMonth() {
        const selectedMonthIndex = moment().month(selectedMonth).month()

        const currentMoment = moment(`${selectedYear}-${selectedMonthIndex + 1}`, "YYYY-M")

        const previousMonth = currentMoment.subtract(1, "months")

        setSelectedYear(previousMonth.year())
        setSelectedMonth(moment().month(previousMonth.month()).format("MMMM"))

        return moment().month(previousMonth.month()).format("MMMM")
    }

    function incrementMonth() {
        const selectedMonthIndex = moment().month(selectedMonth).month()

        const currentMoment = moment(`${selectedYear}-${selectedMonthIndex + 1}`, "YYYY-M")

        const previousMonth = currentMoment.add(1, "months")

        setSelectedYear(previousMonth.year())
        setSelectedMonth(moment().month(previousMonth.month()).format("MMMM"))

        return moment().month(previousMonth.month()).format("MMMM")
    }

    function incrementDay() {
        const selectedMonthIndex = moment().month(selectedMonth).month()

        const currentMoment = moment(`${selectedYear}-${selectedMonthIndex + 1}-${currentDay}`, "YYYY-M-D")
        const nextDay = currentMoment.add(1, "days")
        const nextDayOfMonth = nextDay.date()

        let newMonth = selectedMonth
        let newYear = selectedYear

        if (nextDay.month() !== selectedMonthIndex) {
            newMonth = moment().month(nextDay.month()).format("MMMM")
            newYear = nextDay.year()
        }

        setCurrentDay(nextDayOfMonth)
        setSelectedMonth(newMonth)
        setSelectedYear(newYear)
    }

    function decrementDay() {
        const selectedMonthIndex = moment().month(selectedMonth).month()

        const currentMoment = moment(`${selectedYear}-${selectedMonthIndex + 1}-${currentDay}`, "YYYY-M-D")
        const prevDay = currentMoment.subtract(1, "days")
        const prevDayOfMonth = prevDay.date()

        let newMonth = selectedMonth
        let newYear = selectedYear

        if (prevDay.month() !== selectedMonthIndex) {
            newMonth = moment().month(prevDay.month()).format("MMMM")
            newYear = prevDay.year()
        }

        setCurrentDay(prevDayOfMonth)
        setSelectedMonth(newMonth)
        setSelectedYear(newYear)
    }

    function decrementYear() {
        const currentMoment = moment(`${selectedYear}`, "YYYY")

        const previousYear = currentMoment.subtract(1, "year")

        setSelectedYear(previousYear.year())
    }

    function incrementYear() {
        const currentMoment = moment(`${selectedYear}`, "YYYY")

        const previousYear = currentMoment.add(1, "year")

        setSelectedYear(previousYear.year())
    }

    return (
        <div className='flex'>
            <div className='flex flex-col h-screen w-1/6 bg-gray-900'>
                <div className='h-5/6'>
                    <h2 className='text-2xl text-white pt-10 font-semibold text-center'>Crush It</h2>
                    <div className='flex justify-center py-4'>
                        <hr className='border-gray-600 w-2/3'></hr>
                    </div>
                    <div className='flex justify-center pt-8 pb-4'>{/* <img className='w-13 h-13' src={process.env.PUBLIC_URL + "/image1.png"} alt='Crush It Image' /> */}</div>
                    <div className='flex justify-center'>
                        <p className='w-1/2 text-lg text-white font-semibold text-center'>It's time to plan your day!</p>
                    </div>
                    <div className='flex justify-center items-center pb-20 mb-5'>
                        <div className='flex space-x-6 pt-4'>
                            <button className='shadow-lg w-25 text-white border border-white bg-gray-900 hover:bg-gray-800 font-semibold py-2 px-8 rounded-md' type='button'>
                                Plan Day
                            </button>
                        </div>
                    </div>
                </div>
                <div className='h-1/6 flex-grow flex justify-center items-center'>
                    <button className='flex shadow-lg w-25 text-white border border-white bg-gray-900 hover:bg-red-500 text-sm py-1 px-4 rounded-md' type='button'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75' />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
            <div className='w-5/6 bg-gray-100 h-screen'>
                <div className='bg-white flex p-4'>
                    <div className='flex-grow'></div>
                    <button data-testid='name' className='flex p-2 text-black border border-black hover:bg-gray-100 font-semibold rounded-md'>
                        John Doe
                    </button>
                </div>
                <div className='bg-gray-100'>
                    <div className='flex justify-center space-x-4 p-2 m-4 bg-indigo-100 rounded-2xl'>
                        <div>
                            <button data-testid='decrement-month-button' onClick={decrementMonth} className='border border-indigo-400 p-1.5 rounded-md mr-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&lt;&ensp;</div>
                            </button>
                            <button data-testid='monthID' className='border border-indigo-400 w-40 p-1.5 pl-3 rounded-md font-semibold text-s text-left'>
                                <select className='text-black' value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                                    {myMonths.map((month) => {
                                        return (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        )
                                    })}
                                </select>
                            </button>
                            <button data-testid='increment-month-button' onClick={incrementMonth} className='border border-indigo-400 p-1.5 rounded-md ml-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&gt;&ensp;</div>
                            </button>
                        </div>
                        <div>
                            <button data-testid='decrement-day-button' onClick={decrementDay} className='border border-indigo-400 p-1.5 rounded-md mr-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&lt;&ensp;</div>
                            </button>
                            <button data-testid='dayID' className='border border-indigo-400 w-16 p-1.5 pl-3 rounded-md font-semibold text-s text-left'>
                                <select className='text-black' value={currentDay} onChange={(e) => setCurrentDay(e.target.value)}>
                                    {days.map((day) => {
                                        return (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        )
                                    })}
                                </select>
                            </button>
                            <button data-testid='increment-day-button' onClick={incrementDay} className='border border-indigo-400 p-1.5 rounded-md ml-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&gt;&ensp;</div>
                            </button>
                        </div>
                        <div className='flex'>
                            <button data-testid='decrement-year-button' onClick={decrementYear} className='border border-indigo-400 p-1.5 rounded-md mr-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&lt;&ensp;</div>
                            </button>
                            <button data-testid='yearID' className='border border-indigo-400 w-28 p-1.5 pl-3 rounded-md font-semibold text-s text-left'>
                                <select className='text-black' value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                    {allYears.map((year) => {
                                        return (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        )
                                    })}
                                </select>
                            </button>
                            <button data-testid='increment-year-button' onClick={incrementYear} className='border border-indigo-400 p-1.5 rounded-md ml-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&gt;&ensp;</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 pl-4'>
                        <h2 className='text-2xl font-semibold'>Task</h2>
                        <div className='flex flex-col flex-grow'>Ruby insert your task containers here</div>
                    </div>
                    <div className='w-1/2 pl-4'>
                        <h2 className='text-2xl font-semibold'>Appointment</h2>
                        <div className='flex flex-col flex-grow'>TODO Next Sprint</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
