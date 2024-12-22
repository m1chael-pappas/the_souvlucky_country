import { Loader } from '@mantine/core';

export default function HomepageLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader color="blue" />
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
}
