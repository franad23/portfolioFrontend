export interface State {
  token: string; 
  name: string | null;
  language: boolean;
  isAuth: boolean;
}

export interface Actions {
  setToken: (token: string) => void;
  setName: (name: string) => void;
  setLanguage: (language: boolean) => void;
  setLogout: () => void;
}

export interface PropsProtecredRoutes {
  isAllowed:  boolean;
  children?: React.ReactNode;
} 