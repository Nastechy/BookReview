
import { StaticImageData } from 'next/image';
import image1 from '../public/placeholder_Car.jpg'


export type BookType = {
    id: number;
    title?: string;
    author?: string;
    coverImage: string | StaticImageData;
    description?: string;
    reviews?: Array<{ user: string; content: string }>;
};

export const BooksData: BookType[] = [
    {
        id: 1,
        title: "The Power of Discipline",
        author: "Brian Tracy",
        coverImage: image1,
        description: "21 ways to achieve lasting happiness and success",
        reviews: [{ user: 'Emeka', content: 'Great book!' }],
    },
    {
        id: 2,
        title: "The Art of War",
        author: "Sun TZU",
        coverImage: image1,
        description: "A dystopian and cautionary book.",
        reviews: [{ user: 'Joy', content: 'Great book!' }],
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        coverImage: image1,
        description: "A novel of warmth and humor about racial.",
        reviews: [{ user: 'Happiness', content: 'Great book!' }],
    },
    {
        id: 4,
        title: "Understanding the Life",
        author: "Harper Lee",
        coverImage: image1,
        description: "About racial injustice in the Deep South.",
        reviews: [{ user: 'Johnson', content: 'Great book!' }],
    },
];
