import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { ThemeProvider } from "@/shared/lib/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denwa - бесплатная фриланс-биржа для лучших специалистов",
  description:
    "Denwa - это процветающая платформа для фрилансеров, где опытные профессионалы находят своих клиентов. Наша платформа предлагает разнообразных экспертов в различных областях, от веб-разработки и дизайна до написания контента и маркетинга. В качестве фрилансера вы получите возможность работать без комиссии, доступ к высококачественным проектам и свободу для демонстрации своих навыков.",
  keywords:
    "Фриланс, Платформа, Специалисты, Веб-разработка, Дизайн, Написание контента, Маркетинг ,Карьера, Проекты, Бесплатно, Свобода, Эксперты, Клиенты, Комиссия, Условия, Работа, Исполнение заказов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
