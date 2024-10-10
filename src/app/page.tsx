
import React from 'react'
import HomePage from './home/page'
import { BooksData } from '@/types/BooksData'

const page = () => {
  return (
    <div>
     <HomePage books={BooksData} />
    </div>
  )
}

export default page
