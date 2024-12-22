"use client";
import Link from 'next/link';

import {
  Button,
  Container,
} from '@mantine/core';

export default function Reservations() {
  return (
    <div className="bg-[#F8F8F8] py-24">
      <Container size="md" className="text-center">
        <h2 className="font-sedgwick text-5xl mb-8 text-[#0D71C9]">
          Reservations
        </h2>
        
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12 text-lg">
          Join us for an authentic Greek dining experience. 
          For parties of 6 or more, we recommend making a reservation.
        </p>

        <div className="space-y-6">
        <Link href="/reservations">
          <Button
            variant="filled"
            size="xl"
            radius="md"
            className="bg-[#0D71C9] hover:bg-[#0A4E8C] transition-colors px-12"
          >
            Make a Reservation
          </Button>
          </Link>
          
          <div className="text-gray-600">
            <p className="font-medium">Hours of Operation</p>
            <p>Monday - Friday: 12:00PM - 10:00PM</p>
            <p>Saturday - Sunday: 12:00PM - 11:00PM</p>
          </div>
        </div>
      </Container>
    </div>
  );
}