import Link from 'next/link';
import { Container, Button } from '@mantine/core';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-50 pt-32 pb-16 flex items-center justify-center">
      <Container size="md" className="text-center">
        <div className="bg-white rounded-lg shadow-sm p-12">
          {/* Large 404 with Greek styling */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-[#0D71C9] mb-4">404</h1>
            <div className="w-24 h-1 bg-[#0D71C9] mx-auto mb-6"></div>
          </div>
          
          {/* Friendly message */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Oopa! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            It looks like this page has wandered off to the Greek islands.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            Don&apos;t worry though - our delicious menu is still here waiting for you!
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-[#0D71C9] hover:bg-[#03233C] text-white"
                leftSection={<Home className="w-5 h-5" />}
              >
                Go to Homepage
              </Button>
            </Link>
            <Link href="/menu">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0D71C9] text-[#0D71C9] hover:bg-[#0D71C9] hover:text-white"
                leftSection={<ArrowLeft className="w-5 h-5" />}
              >
                View Our Menu
              </Button>
            </Link>
          </div>
          
          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">
              <strong>Need help?</strong> Give us a call:
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