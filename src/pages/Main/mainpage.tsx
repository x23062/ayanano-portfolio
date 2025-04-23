import { useEffect , useRef } from 'react';
import { useScrollStore } from '../../store/scrollStore.tsx';
import Profile from './Profile/Profile.tsx';
import Skills from './Skills/Skills.tsx';
import Products from './Products/Product.tsx';
import './Main.css';

// Extend the Window interface to include _sectionRefs
declare global {
  interface Window {
    _sectionRefs?: {
      profile: React.RefObject<HTMLDivElement | null>;
      skills: React.RefObject<HTMLDivElement | null>;
      products: React.RefObject<HTMLDivElement | null>;
    };
  }
}

function Main() {
  const scrollY = useScrollStore((state) => state.position);
  const clearPosition = useScrollStore((state) => state.clearPosition);

    // スクロール用の ref を作成
    const profileRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const productsRef = useRef<HTMLDivElement>(null);
    

  useEffect(() => {
    window.scrollTo(0, scrollY); // スクロール復元
    clearPosition();            // 一度復元したらリセット
  }, []);

    // グローバルな場所で使えるように window に一時的にセット（他の方法でも可）
    useEffect(() => {
      window._sectionRefs = {
        profile: profileRef,
        skills: skillsRef,
        products: productsRef,
      };
    }, []);

  return (
    <main>
      <div id='profile' ref={profileRef}><Profile /></div>
      <div id='skills' ref={skillsRef}><Skills /></div>
      <div id='products' ref={productsRef}><Products /></div>
    </main>
  );
}

export default Main;
