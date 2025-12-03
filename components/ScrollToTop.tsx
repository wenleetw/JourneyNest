import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 確保在路由變化時立即滾動到頂部
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

