"use client";

interface HomepageLayoutProps {
  children: React.ReactNode;
  hero: React.ReactNode;
  menu: React.ReactNode;
  social: React.ReactNode;
  reservations: React.ReactNode;
  story: React.ReactNode;
}

export default function HomepageLayout({
  children,
  menu,
  hero,
  social,
  reservations,
  story,
}: HomepageLayoutProps) {
  return (
    <div className="flex flex-col">
      {hero}
      {menu}
      {story}
      {social}
      {reservations}
      {children}
    </div>
  );
}
