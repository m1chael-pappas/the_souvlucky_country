'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container, Button } from '@mantine/core';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-sea-mist pt-32 pb-16 flex items-center justify-center">
          <Container size="md" className="text-center">
            <div className="bg-white rounded-lg shadow-sm p-12">
              {/* Error icon */}
              <div className="mb-8">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <div className="w-24 h-1 bg-red-500 mx-auto"></div>
              </div>
              
              {/* Error message */}
              <h2 className="text-3xl font-bold text-ink mb-4">
                Application Error
              </h2>
              <p className="text-story text-lg mb-2">
                Our kitchen experienced a technical difficulty.
              </p>
              <p className="text-story text-lg mb-8">
                We&apos;re working to get everything back to normal.
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  onClick={reset}
                  className="bg-aegean hover:bg-midnight text-white"
                  leftSection={<RefreshCw className="w-5 h-5" />}
                >
                  Try Again
                </Button>
                <Link href="/">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-aegean text-aegean hover:bg-aegean hover:text-white"
                    leftSection={<Home className="w-5 h-5" />}
                  >
                    Go to Homepage
                  </Button>
                </Link>
              </div>
              
              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-story mb-2">
                  <strong>Need immediate assistance?</strong>
                </p>
                <a 
                  href="tel:0298914174" 
                  className="text-aegean font-semibold text-lg hover:underline"
                >
                  Call us: (02) 9891 4174
                </a>
              </div>
            </div>
          </Container>
        </div>
      </body>
    </html>
  );
}