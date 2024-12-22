"use client";
import { Container } from '@mantine/core';

interface ShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function Shell({ children, className = "" }: ShellProps) {
  return (
    <Container size="xl" className={`p-0 max-w-full min-h-screen ${className}`}>
      {children}
    </Container>
  );
}
