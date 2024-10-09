'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BooksData } from '@/types/BooksData';
import { Input } from '@/Components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/Components/ui/form';
import { Button } from '@/Components/ui/button';

const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
});

type BookType = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  description: string;
};

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<BookType[]>([]);

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
    },
  });

  const onSubmit = (data: z.infer<typeof searchSchema>) => {
    const filtered = BooksData.filter(
      (book) =>
        book.title.toLowerCase().includes(data.query.toLowerCase()) ||
        book.author.toLowerCase().includes(data.query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Books</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search Query</FormLabel>
                <FormControl>
                  <Input placeholder="Enter book title or author" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>

      {searchResults.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <ul className="space-y-4">
            {searchResults.map((book) => (
              <li key={book.id} className="border p-4 rounded-md">
                <h3 className="font-bold">{book.title}</h3>
                <p>Author: {book.author}</p>
                <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-24 h-auto my-2" />
                <p>{book.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}