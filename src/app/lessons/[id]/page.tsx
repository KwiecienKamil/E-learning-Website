import React from 'react'


import { lessons } from '../page'

const LessonDetails = ({params}:{
    params: {id: string}
}) => {
  const currLesson = lessons.filter(item => item.id === params.id)
  return (
    <div className='my-[80px] flex justify-center'>
      <div>
      <h2 className='text-3xl font-semibold text-center pt-4 text-primary'>Lesson {params.id}</h2>
      {currLesson.map(item => (
        <div className="flex flex-col gap-4" key={item.key}>
          <div>
            <h3 className='text-center pb-4'>{item.title}</h3>
          </div>
          <div className='flex flex-col gap-16'>
            {item.topics?.map(topic => (
              <div className="flex flex-col gap-2 border-[1px] rounded-xl overflow-hidden">
                <p className='md:w-[550px] w-[350px] px-4 pt-1'>{topic.desc}</p>
                <span className='max-w-[550px] px-4 py-2 bg-gray-300 font-logo'>{topic.usage}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
      <div className=""></div>
    </div>
  )
}

export default LessonDetails
