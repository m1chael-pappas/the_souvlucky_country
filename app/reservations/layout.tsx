import type { Metadata } from 'next';

/**
 * The reservations page itself is a client component and cannot export
 * metadata, so its canonical lives here. Without it the route inherits the
 * root layout's metadata and would declare the homepage as its canonical.
 */
export const metadata: Metadata = {
  title: 'Book a Table - The Souvlucky Country | Greek Restaurant Parramatta',
  description:
    'Reserve your table at The Souvlucky Country, a family-run Greek restaurant at 316 Church St, Parramatta. Book online for authentic souvlaki, gyros and Mediterranean dishes.',
  alternates: {
    canonical: '/reservations',
  },
  openGraph: {
    title: 'Book a Table - The Souvlucky Country',
    description:
      'Reserve your table at our family-run Greek restaurant in Parramatta.',
    url: '/reservations',
    type: 'website',
  },
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
