import { useLocation } from 'react-router-dom';

export const usePath = () => {
  const { pathname } = useLocation();
  const isCurrentPath = (link: string) => {
    if (link === pathname) return true;

    return false;
  };

  return {
    isCurrentPath,
  };
};
