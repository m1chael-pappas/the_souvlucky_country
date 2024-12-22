import Link from 'next/link';

import { Button } from '@mantine/core';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl">Page Not Found</h2>
      <Button component={Link} href="/">
        Return Home
      </Button>
    </div>
  );
}
