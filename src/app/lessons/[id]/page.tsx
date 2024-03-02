import React from 'react'

const LessonDetails = ({params}:{
    params: {id: string}
}) => {
  return (
    <div className='mt-[80px]'>
      Details about lesson {params.id}
    </div>
  )
}

export default LessonDetails
