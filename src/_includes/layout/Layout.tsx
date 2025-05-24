
interface LayoutProps {
    title: string;
    children: React.ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return (
      <div>
        <h1>{title}</h1>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;