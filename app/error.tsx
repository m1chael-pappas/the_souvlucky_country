'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container, Button } from '@mantine/core';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-blue-50 pt-32 pb-16 flex items-center justify-center">
      <Container size="md" className="text-center">
        <div className="bg-white rounded-lg shadow-sm p-12">
          {/* Error icon */}
          <div className="mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          {/* Error message */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Something Went Wrong
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Even the best chefs sometimes burn the souvlaki.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            We&apos;re working to fix this issue. Please try again.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={reset}
              className="bg-[#0D71C9] hover:bg-[#03233C] text-white"
              leftSection={<RefreshCw className="w-5 h-5" />}
            >
              Try Again
            </Button>
            <Link href="/">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0D71C9] text-[#0D71C9] hover:bg-[#0D71C9] hover:text-white"
                leftSection={<Home className="w-5 h-5" />}
              >
                Go to Homepage
              </Button>
            </Link>
          </div>
          
          {/* Error details for development */}
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-gray-100 p-4 rounded mt-8">
              <summary className="font-semibold text-gray-700 cursor-pointer mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-sm text-gray-600 overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
          
          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">
              <strong>Still having issues?</strong> Contact us:
            </p>
            <a 
              href="tel:0298914174" 
              className="text-[#0D71C9] font-semibold text-lg hover:underline"
            >
              (02) 9891 4174
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}