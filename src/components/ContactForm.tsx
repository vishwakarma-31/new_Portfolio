import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      alert('Message sent!');
      reset();
    } catch (error) {
      alert('Failed to send. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        {...register('name', { required: 'Name is required' })}
        className="border p-2 w-full"
      />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}

      <input
        type="email"
        placeholder="Your Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: 'Email is invalid'
          }
        })}
        className="border p-2 w-full"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

      <textarea
        placeholder="Your Message"
        {...register('message', { required: 'Message is required' })}
        className="border p-2 w-full"
      />
      {errors.message && <span className="text-red-500">{errors.message.message}</span>}

      <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}