interface HomepageLayoutProps {
  children: React.ReactNode;
  hero: React.ReactNode;
  popular?: React.ReactNode;
  menu: React.ReactNode;
  social: React.ReactNode;
  story: React.ReactNode;
}

export default function HomepageLayout({
  children,
  menu,
  hero,
  popular,
  social,
  story,
}: HomepageLayoutProps) {
  return (
    <div className="flex flex-col">
      {hero}
      {/* {menu} */}
      {popular}
      {story}
      {social}
      {children}
    </div>
  );
}
