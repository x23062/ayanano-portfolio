import './Header.css';
import GithubImage from './../../assets/images/github_square_logo.png';
import XIcon from './../../assets/images/X_Twitter.png';

function Header() {

  const handleScroll = (section: 'profile' | 'skills' | 'products', e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // ページ遷移を防ぐ
    const refs = window._sectionRefs;
    if (refs && refs[section]?.current) {
      refs[section]!.current!.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='header'>
      <h1>Portfolio</h1>
      <div className='header-right'>
      <nav>
        <ul className='nav'>
          <li><a href="#profile" onClick={(e) => handleScroll('profile', e)}>profile</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll('skills', e)}>skills</a></li>
          <li><a href="#products" onClick={(e) => handleScroll('products', e)}>Products</a></li>
        </ul>
      </nav>
      <div className='link-outside'>
        <a href="https://github.com/x23062" target="_blank" rel="noopener noreferrer">
          <img src={GithubImage} alt="GitHub" />
        </a>
        <a href="https://x.com/aya99310010" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X" />
        </a>
      </div>
      </div>

    </header>
  );
}

export default Header;
