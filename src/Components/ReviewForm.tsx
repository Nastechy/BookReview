'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';

const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  rating: z.number().min(1).max(5),
  content: z.string().min(10, 'Review must be at least 10 characters long'),
});

interface ReviewFormProps {
  bookId: string;
}

export default function ReviewForm({ bookId }: ReviewFormProps) {
  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      rating: 5,
      content: '',
    },
  });

  const onSubmit = async (data: any) => {
    console.log('Submitting review:', { bookId, ...data });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input type="number" min="1" max="5" {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10))} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your review here" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit Review</Button>
      </form>
    </Form>
  );
}