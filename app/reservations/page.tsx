"use client";

import React from 'react';

import Image from 'next/image';

import {
  Button,
  Notification,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

export default function ReservationsPage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      datetime: '', 
      partySize: "2 guests",
      note: "",
    },

    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        value.trim().length === 0 ? "Phone is required" : null,
      datetime: (value) =>
        !value ? "Date and time are required" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    const reservationDateTime = values.datetime.toString();
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          datetime: reservationDateTime, 
        }),
      });
      const data = await response.json();

      if (response.ok) {
        <Notification title="Your reservation request was sent successfully!"></Notification>;
        form.reset();
      } else {
        <Notification
          title={`Error: ${data.message ?? "Failed to send"}`}
        ></Notification>;
        alert();
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-36">
      {/* Title */}
      <h1 className="text-5xl font-semibold font-sedgwick text-center text-[#0D71C9] mb-8">
        Make a reservation
      </h1>

      {/* Hero Image */}
      <div className="container mx-auto mb-8 px-4">
        <Image
          src="/your-restaurant.jpg"
          alt="Restaurant interior"
          width={1200}
          height={800}
          className="mx-auto border-4 border-dashed border-[#0D71C9]"
        />
      </div>

      {/* Instructions */}
      <div className="container mx-auto mb-4 px-4 text-center">
        <p>
          To help us find the best table for you, select the preferred party
          size, date, and time of your reservation:
        </p>
      </div>

      {/* Form */}
      <div className="container mx-auto border-2 rounded-xl  border-[#0D71C9] p-7 mb-8 max-w-xl">
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
          className="space-y-4"
        >
          <TextInput
            label="Name"
            placeholder="Name"
            withAsterisk
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email"
            placeholder="Email address"
            withAsterisk
            {...form.getInputProps("email")}
          />

          <TextInput
            label="Phone"
            placeholder="Phone number"
            withAsterisk
            {...form.getInputProps("phone")}
          />

          <div className="grid grid-cols-2 gap-4">
            <DateTimePicker
              label="Date & Time"
              placeholder="Select date & time"
              withAsterisk
              {...form.getInputProps("datetime")}
            />

            <Select
              label="Party size"
              data={[
                "1 guest",
                "2 guests",
                "3 guests",
                "4 guests",
                "5 guests",
                "6 guests",
                "7 guests",
                "8 guests",
                "9 guests",
                "10 guests",
              ]}
              {...form.getInputProps("partySize")}
            />
          </div>

          <Textarea
            label="Note"
            placeholder="Any special requests (optional)"
            {...form.getInputProps("note")}
          />

          <Button
            type="submit"
            className="mx-auto block bg-[#0D71C9] hover:bg-[#0c5da3]"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
