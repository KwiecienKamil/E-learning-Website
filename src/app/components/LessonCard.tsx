import Link from 'next/link'
import React, { FC } from 'react'

 type lessonTypes = {
 icon: JSX.Element,
 title: string,
 text: string,
 id:string

}

const LessonCard: FC<lessonTypes> = ({icon, title, text, id}) => {
  return (
    <Link href={`/lessons/${id}`}>
    <div className='h-[200px] flex flex-col items-center justify-center px-2 gap-2 border-gray-300 border-[1px] rounded-xl cursor-pointer hover:bg-whiteGray transition-colors duration-300'>
        <span className='text-primary'>{icon}</span>
        <h3 className='font-semibold text-center'>{title}</h3>
        <p>{text}</p>
    </div>
    </Link>
  )
}

export default LessonCard
