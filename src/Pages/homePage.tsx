
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { BookType, BooksData } from '@/types/BooksData';
import Image from 'next/image';
import Link from 'next/link';

interface BookListProps {
    books: BookType[];
}

export default function HomePage({ books = BooksData }: BookListProps) {

    return (
        <div className='p-8'>
            <h1 className="text-3xl font-bold mb-6">Featured Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[100%] " >
                {books.map((book) => (
                    <Card key={book.id} className='w-[100%]'>
                        <CardHeader>
                            <CardTitle className='text-xl font-semibold'>{book.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={typeof book.coverImage === 'string' ? book.coverImage : book.coverImage.src}
                                alt={`Cover of ${book.title}`}
                                width={200}
                                height={300}
                                layout="responsive"
                                loading="lazy"
                            />
                            <p className=" text-gray-600 mt-6">{book.author}</p>
                            <p className="mt-2 text-gray-700 font-[500]">{book.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Link href={`booklist/${book.id}`} className="text-green-500 font-[500] hover:underline">
                                View Details
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

