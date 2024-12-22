'use client';

import { Button } from '@mantine/core';

export default function HomepageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl">Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
