import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// This is the place responsible for grouping all providers from the app
const MainProvider = ({ children }: Props) => <>{children}</>;

export default MainProvider;
