import * as React from 'react';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
  isLoggedIn?: boolean;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return <section className="layout-section">{children}</section>;
};

export default Layout;
