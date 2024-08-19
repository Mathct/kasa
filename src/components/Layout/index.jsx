import '../../styles/layout.scss';


function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;