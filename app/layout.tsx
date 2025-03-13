/**
 * 这是顶层布局组建，用于包裹所有页面
 * 全局样式以及字体库在此导入
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

/***** SEO 相关内容 start ******/
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
/***** SEO 相关内容 end ******/

// 顶级布局组件
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
