import Image from 'next/image';
import Link from 'next/link';

import {
  Button,
  Container,
} from '@mantine/core';

export default function MenuSection() {
  return (
    <Container fluid className="px-0 py-20">
      <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-[2000px] ">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 ">
          <div className="relative w-full h-[700px]">
            <Image
              src="/souvlucky1.jpeg"
              alt="Greek cuisine"
              fill
              priority
              className="object-cover object-[center_75%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 p-6  lg:py-0">
          <div className="border border-[#0D71C9] rounded-xl p-8 lg:p-12 w-full h-[700px] flex flex-col justify-center">
            {" "}
            <h2 className="text-[#0D71C9] font-sedgwick text-5xl mb-10">
              {" "}
              Our Menus
            </h2>
            <p className="text-gray-700 leading-relaxed mb-12 font-light text-lg">
              {" "}
              Experience the authentic flavors of Greece through our carefully
              crafted menu. From traditional souvlaki and gyros to fresh Greek
              salads and homemade tzatziki, each dish tells a story of our rich
              culinary heritage. Our recipes have been passed down through
              generations, bringing the true taste of Mediterranean cuisine to
              Parramatta.
            </p>
            <Link href="/menu">
              <Button
                className="bg-[#0D71C9] hover:bg-[#0A4E8C] transition-colors px-10 py-3 text-white uppercase tracking-wider text-lg"
                variant="filled"
              >
                View Menus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
