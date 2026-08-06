import { Container, Loader } from '@mantine/core';

export default function Loading() {
  return (
    <div className="min-h-screen bg-sea-mist pt-32 pb-16 flex items-center justify-center">
      <Container size="md" className="text-center">
        <div className="bg-white rounded-lg shadow-sm p-12">
          {/* Loading animation */}
          <div className="mb-8">
            <Loader size="xl" color="#0D71C9" className="mx-auto mb-6" />
          </div>
          
          {/* Loading message */}
          <h2 className="text-2xl font-bold text-aegean mb-4">
            Preparing Your Greek Experience...
          </h2>
          <p className="text-story text-lg mb-4">
            Just like our fresh souvlaki, good things take a moment to prepare.
          </p>
          
          {/* Greek-themed loading dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-aegean rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-aegean rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-aegean rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          {/* Fun loading text */}
          <p className="text-story text-sm italic">
            &quot;Patience is the key to a perfect meal&quot; - Greek Proverb
          </p>
        </div>
      </Container>
    </div>
  );
}