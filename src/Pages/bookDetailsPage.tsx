import { Suspense } from 'react';
import Image from 'next/image';
import { BooksData } from '@/types/BooksData';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import ReviewForm from '@/Components/ReviewForm';

type BookType = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  reviews?: Array<{ user: string; content: string }>;
};

async function getBook(id: string): Promise<BookType | undefined> {
  return BooksData.find((book) => book.id === parseInt(id));
}

export default async function BookDetailsPage({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{book.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={300}
                height={450}
                layout="responsive"
              />
            </div>
            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <p className="text-lg mb-2">Author: {book.author}</p>
              <p className="mb-4">{book.description}</p>
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              {book.reviews && book.reviews.length > 0 ? (
                book.reviews.map((review, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-bold">{review.user}</p>
                    <p>{review.content}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
        <Suspense fallback={<div>Loading review form...</div>}>
          <ReviewForm bookId={book.id.toString()} />
        </Suspense>
      </div>
    </div>
  );
}