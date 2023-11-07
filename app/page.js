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

    const [showS1, setShowS1] = useState(false)
    const [showS2, setShowS2] = useState(false)
    const [showS3, setShowS3] = useState(false)

    return (
        <div
            className='flex'
            onClick={() => {
                showS1 ? setShowS1(false) : ""
                showS2 ? setShowS2(false) : ""
                showS3 ? setShowS3(false) : ""
            }}>
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
                            <button onClick={() => setShowS1(!false)} data-testid='monthID' className={`relative border border-indigo-400 w-40 p-1.5 pl-3 rounded-md font-semibold text-s text-left ${showS1 ? "bg-white" : ""} `}>
                                <span className='text-black font-bold flex justify-between pr-2 items-center'>
                                    <p>{selectedMonth}</p>{" "}
                                    {showS1 ? (
                                        <svg className='h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                                            <g id='SVGRepo_iconCarrier'>
                                                {" "}
                                                <path
                                                    d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z'
                                                    fill='#818cf8'></path>{" "}
                                                <path
                                                    d='M16 14.75C15.9015 14.7505 15.8038 14.7313 15.7128 14.6935C15.6218 14.6557 15.5393 14.6001 15.47 14.53L12 11.06L8.53003 14.53C8.38785 14.6625 8.19981 14.7346 8.00551 14.7312C7.81121 14.7278 7.62582 14.649 7.48841 14.5116C7.35099 14.3742 7.27228 14.1888 7.26885 13.9945C7.26543 13.8002 7.33755 13.6122 7.47003 13.47L11.47 9.47001C11.6107 9.32956 11.8013 9.25067 12 9.25067C12.1988 9.25067 12.3894 9.32956 12.53 9.47001L16.53 13.47C16.6705 13.6106 16.7494 13.8013 16.7494 14C16.7494 14.1988 16.6705 14.3894 16.53 14.53C16.4608 14.6001 16.3782 14.6557 16.2872 14.6935C16.1962 14.7313 16.0986 14.7505 16 14.75Z'
                                                    fill='#818cf8'></path>{" "}
                                            </g>
                                        </svg>
                                    ) : (
                                        <svg className='h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                                            <g id='SVGRepo_iconCarrier'>
                                                {" "}
                                                <path
                                                    d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z'
                                                    fill='#818cf8'></path>{" "}
                                                <path
                                                    d='M12 14.75C11.9015 14.7505 11.8038 14.7313 11.7128 14.6935C11.6218 14.6557 11.5392 14.6001 11.47 14.53L7.47 10.53C7.33752 10.3879 7.2654 10.1998 7.26882 10.0055C7.27225 9.81121 7.35096 9.62582 7.48838 9.48841C7.62579 9.351 7.81118 9.27228 8.00548 9.26885C8.19978 9.26543 8.38782 9.33755 8.53 9.47003L12 12.94L15.47 9.47003C15.6122 9.33755 15.8002 9.26543 15.9945 9.26885C16.1888 9.27228 16.3742 9.351 16.5116 9.48841C16.649 9.62582 16.7277 9.81121 16.7312 10.0055C16.7346 10.1998 16.6625 10.3879 16.53 10.53L12.53 14.53C12.4608 14.6001 12.3782 14.6557 12.2872 14.6935C12.1962 14.7313 12.0985 14.7505 12 14.75Z'
                                                    fill='#818cf8'></path>{" "}
                                            </g>
                                        </svg>
                                    )}
                                </span>
                                {showS1 && (
                                    <div className='absolute top-8 left-0 p-2 bg-white w-full rounded-b-md outline-none border-l border-b border-r border-indigo-400'>
                                        <select
                                            size='5'
                                            className=' text-black w-full outline-none  py-2 px-2 myScroll'
                                            value={selectedMonth}
                                            onChange={(e) => {
                                                setSelectedMonth(e.target.value)
                                                setShowS1(false)
                                            }}>
                                            {myMonths.map((month) => {
                                                return (
                                                    <option className='bg-white cursor-pointer p-1' key={month} value={month}>
                                                        {month}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                )}
                            </button>
                            <button data-testid='increment-month-button' onClick={incrementMonth} className='border border-indigo-400 p-1.5 rounded-md ml-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&gt;&ensp;</div>
                            </button>
                        </div>
                        <div>
                            <button data-testid='decrement-day-button' onClick={decrementDay} className='border border-indigo-400 p-1.5 rounded-md mr-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&lt;&ensp;</div>
                            </button>
                            <button onClick={() => setShowS2(!false)} data-testid='dayID' className={`relative border border-indigo-400 w-16 p-1.5 pl-3 rounded-md font-semibold text-s text-left ${showS2 ? "bg-white" : ""}`}>
                                <span className='text-black font-bold flex justify-between  items-center'>
                                    <p>{currentDay}</p>{" "}
                                    {showS2 ? (
                                        <svg className='h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                                            <g id='SVGRepo_iconCarrier'>
                                                {" "}
                                                <path
                                                    d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z'
                                                    fill='#818cf8'></path>{" "}
                                                <path
                                                    d='M16 14.75C15.9015 14.7505 15.8038 14.7313 15.7128 14.6935C15.6218 14.6557 15.5393 14.6001 15.47 14.53L12 11.06L8.53003 14.53C8.38785 14.6625 8.19981 14.7346 8.00551 14.7312C7.81121 14.7278 7.62582 14.649 7.48841 14.5116C7.35099 14.3742 7.27228 14.1888 7.26885 13.9945C7.26543 13.8002 7.33755 13.6122 7.47003 13.47L11.47 9.47001C11.6107 9.32956 11.8013 9.25067 12 9.25067C12.1988 9.25067 12.3894 9.32956 12.53 9.47001L16.53 13.47C16.6705 13.6106 16.7494 13.8013 16.7494 14C16.7494 14.1988 16.6705 14.3894 16.53 14.53C16.4608 14.6001 16.3782 14.6557 16.2872 14.6935C16.1962 14.7313 16.0986 14.7505 16 14.75Z'
                                                    fill='#818cf8'></path>{" "}
                                            </g>
                                        </svg>
                                    ) : (
                                        <svg className='h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                                            <g id='SVGRepo_iconCarrier'>
                                                {" "}
                                                <path
                                                    d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z'
                                                    fill='#818cf8'></path>{" "}
                                                <path
                                                    d='M12 14.75C11.9015 14.7505 11.8038 14.7313 11.7128 14.6935C11.6218 14.6557 11.5392 14.6001 11.47 14.53L7.47 10.53C7.33752 10.3879 7.2654 10.1998 7.26882 10.0055C7.27225 9.81121 7.35096 9.62582 7.48838 9.48841C7.62579 9.351 7.81118 9.27228 8.00548 9.26885C8.19978 9.26543 8.38782 9.33755 8.53 9.47003L12 12.94L15.47 9.47003C15.6122 9.33755 15.8002 9.26543 15.9945 9.26885C16.1888 9.27228 16.3742 9.351 16.5116 9.48841C16.649 9.62582 16.7277 9.81121 16.7312 10.0055C16.7346 10.1998 16.6625 10.3879 16.53 10.53L12.53 14.53C12.4608 14.6001 12.3782 14.6557 12.2872 14.6935C12.1962 14.7313 12.0985 14.7505 12 14.75Z'
                                                    fill='#818cf8'></path>{" "}
                                            </g>
                                        </svg>
                                    )}
                                </span>
                                {showS2 && (
                                    <div className='absolute top-8 left-0 p-2 bg-white w-full rounded-b-md outline-none border-l border-b border-r border-indigo-400'>
                                        <select
                                            size='5'
                                            className=' text-black w-full outline-none  py-2 pr-2 myScroll'
                                            value={currentDay}
                                            onChange={(e) => {
                                                setCurrentDay(e.target.value)
                                                setShowS2(false)
                                            }}>
                                            {days.map((day) => {
                                                return (
                                                    <option className='bg-white cursor-pointer p-1' key={day} value={day}>
                                                        {day}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                )}
                            </button>
                            <button data-testid='increment-day-button' onClick={incrementDay} className='border border-indigo-400 p-1.5 rounded-md ml-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&gt;&ensp;</div>
                            </button>
                        </div>
                        <div className='flex'>
                            <button data-testid='decrement-year-button' onClick={decrementYear} className='border border-indigo-400 p-1.5 rounded-md mr-1'>
                                <div className='rounded-full bg-indigo-400 text-indigo-100 text-s'>&ensp;&lt;&ensp;</div>
                            </button>
                            <button onClick={() => setShowS3(!false)} data-testid='yearID' className={`relative border border-indigo-400 w-28 p-1.5 pl-3 rounded-md font-semibold text-s text-left ${showS3 ? "bg-white" : ""}  `}>
                                <span className='text-black font-bold flex justify-between  items-center'>
                                    <p>{selectedYear}</p>{" "}
                                    {showS3 ? (
                                        <svg className='h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                                            <g id='SVGRepo_iconCarrier'>
                                                {" "}
                                                <path
                                                    d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z'
                                                    fill='#818cf8'></path>{" "}
                                                <path
                                                    d='M16 14.75C15.9015 14.7505 15.8038 14.7313 15.7128 14.6935C15.6218 14.6557 15.5393 14.6001 15.47 14.53L12 11.06L8.53003 14.53C8.38785 14.6625 8.19981 14.7346 8.00551 14.7312C7.81121 14.7278 7.62582 14.649 7.48841 14.5116C7.35099 14.3742 7.27228 14.1888 7.26885 13.9945C7.26543 13.8002 7.33755 13.6122 7.47003 13.47L11.47 9.47001C11.6107 9.32956 11.8013 9.25067 12 9.25067C12.1988 9.25067 12.3894 9.32956 12.53 9.47001L16.53 13.47C16.6705 13.6106 16.7494 13.8013 16.7494 14C16.7494 14.1988 16.6705 14.3894 16.53 14.53C16.4608 14.6001 16.3782 14.6557 16.2872 14.6935C16.1962 14.7313 16.0986 14.7505 16 14.75Z'
                                                    fill='#818cf8'></path>{" "}
                                            </g>
                                        </svg>
                                    ) : (
                                        <svg className='h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                                            <g id='SVGRepo_iconCarrier'>
                                                {" "}
                                                <path
                                                    d='M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z'
                                                    fill='#818cf8'></path>{" "}
                                                <path
                                                    d='M12 14.75C11.9015 14.7505 11.8038 14.7313 11.7128 14.6935C11.6218 14.6557 11.5392 14.6001 11.47 14.53L7.47 10.53C7.33752 10.3879 7.2654 10.1998 7.26882 10.0055C7.27225 9.81121 7.35096 9.62582 7.48838 9.48841C7.62579 9.351 7.81118 9.27228 8.00548 9.26885C8.19978 9.26543 8.38782 9.33755 8.53 9.47003L12 12.94L15.47 9.47003C15.6122 9.33755 15.8002 9.26543 15.9945 9.26885C16.1888 9.27228 16.3742 9.351 16.5116 9.48841C16.649 9.62582 16.7277 9.81121 16.7312 10.0055C16.7346 10.1998 16.6625 10.3879 16.53 10.53L12.53 14.53C12.4608 14.6001 12.3782 14.6557 12.2872 14.6935C12.1962 14.7313 12.0985 14.7505 12 14.75Z'
                                                    fill='#818cf8'></path>{" "}
                                            </g>
                                        </svg>
                                    )}
                                </span>
                                {showS3 && (
                                    <div className='absolute top-8 left-0 p-2 bg-white w-full rounded-b-md outline-none border-l border-b border-r border-indigo-400'>
                                        <select size='5' className=' text-black w-full outline-none  py-2 pr-2 myScroll' value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                            {allYears.map((year) => {
                                                return (
                                                    <option className='bg-white cursor-pointer p-1' key={year} value={year}>
                                                        {year}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                )}
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
