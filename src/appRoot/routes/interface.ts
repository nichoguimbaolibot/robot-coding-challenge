export interface IComponentRoutes {
  isLoggedIn: boolean;
}

export interface IPath {
  id?: string;
  exact?: boolean;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}
