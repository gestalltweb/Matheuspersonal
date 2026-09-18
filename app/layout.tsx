import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matheus Martins — Personal Trainer',
  description: 'Treinamento baseado em evidência para performance, hipertrofia e condicionamento.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
