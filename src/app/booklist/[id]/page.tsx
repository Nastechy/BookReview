'use client'

import React from 'react';
import { useParams } from 'next/navigation'; 
import BookDetailsPage from '@/Pages/bookDetailsPage';

const BookPage = () => {
  const { id } = useParams(); 

  console.log(id, 'oooooo');
  

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BookDetailsPage params={{ id }} /> 
    </div>
  );
};

export default BookPage;
