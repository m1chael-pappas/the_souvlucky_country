import { Container } from '@mantine/core';

export default function Story() {
  return (
    <div className="bg-white py-24">
      <Container size="md" className="text-center">
        <h2 className="font-sedgwick text-5xl mb-8 text-[#0D71C9]">
          A Taste of Greece in Parramatta
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12 text-lg">
          Experience authentic Greek cuisine in a warm, inviting atmosphere. Our
          family recipes bring the rich flavors and traditions of Mediterranean
          dining to your table, creating an unforgettable dining experience.
        </p>

        <div
          className="flex flex-col items-center justify-center min-h-[680px] w-full p-10 gap-10 bg-cover bg-center"
          style={{
            backgroundImage: "url(/souvlucky3.png)", 
          }}
        ></div>
      </Container>
    </div>
  );
}
