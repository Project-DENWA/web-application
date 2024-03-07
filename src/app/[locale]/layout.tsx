import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import ThemeProvider from '@/shared/lib/Providers';
import './globals.css';
import CookieModal from '@/app/components/CookieModal/CookieModal';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Denwa - бесплатная фриланс-биржа для лучших специалистов',
  description:
    'Denwa - это процветающая платформа для фрилансеров, где опытные профессионалы находят своих клиентов. Наша платформа предлагает разнообразных экспертов в различных областях, от веб-разработки и дизайна до написания контента и маркетинга. В качестве фрилансера вы получите возможность работать без комиссии, доступ к высококачественным проектам и свободу для демонстрации своих навыков.',
  keywords:
    'Фриланс, Платформа, Специалисты, Веб-разработка, Дизайн, Написание контента, Маркетинг ,Карьера, Проекты, Бесплатно, Свобода, Эксперты, Клиенты, Комиссия, Условия, Работа, Исполнение заказов',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logotype.svg',
        href: '/logotype.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logotype dark.svg',
        href: '/logotype dark.svg',
      },
    ],
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <CookieModal />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
