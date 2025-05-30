interface LayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const data = {
  layout: "main",
  title: "Home",
};

const Layout: React.FC<LayoutProps> = ({ children, title, className }) => {
  return (
    <>
      <html lang="en">
        <head>
          <script src="./assets/scripts/polyfill.js"></script>
          <link rel="stylesheet" href="./assets/styles.css"/>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
        </head>
        <body>
          <div>
            <main className={className}>{children}</main>
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
