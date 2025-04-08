import '@/app/ui/global.css';
import { monse } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monse.className} antialiased`}>{children}</body>
    </html>
  );
}
