import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'
const CoursesList = () => {

    const { navigate, allCourses } = useContext(AppContext)
    const { input } = useParams()
    const [filteredCourse, setFilteredCourse] = useState([])

    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const tempCourses = allCourses.slice()

            input ?
                setFilteredCourse(tempCourses.filter(item => item.courseTitle.toLowerCase().includes(input.toLowerCase()))) : setFilteredCourse(tempCourses)
        }
    }, [allCourses, input])

    return (

        <>
            <div className='relative md:px-36 px-8 pt-20 text-left'>

                {/* TOP SECTION */}
                <div className='flex md:flex-row flex-col gap-6 items-center justify-between w-full'>

                    {/* LEFT SIDE */}
                    <div>
                        <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>

                        <p className='text-gray-500 mt-2'>
                            <span
                                className='text-blue-600 cursor-pointer'
                                onClick={() => navigate('/')}
                            >
                                Home
                            </span> / <span>Course List</span>
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className='w-full md:w-auto'>
                        <SearchBar data={input} />
                    </div>
                </div>

                {
                    input && <div className='inline-flex items-center gap-4 py-4 py-2 mt-8-mb-8 text-gray-800'>
                        <p>{input}</p>
                        <img src={assets.cross_icon} alt='' className='cursor-pointer' onClick={() => navigate('/course-list')} />

                    </div >
                }

                {/* CARDS SECTION */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
                    {filteredCourse.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default CoursesList