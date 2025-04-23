import { Link } from 'react-router-dom';
import { useScrollStore } from './../../../store/scrollStore';
import './Products.css';
import EhhoImg from './../../../assets/images/ehho.png';
import YOFUKASHIImg from './../../../assets/images/YOFUKASHI.png';
import OmasukeImg from './../../../assets/images/omasuke.png';
import ColorImg from './../../../assets/images/color.png';
import CakeImg from './../../../assets/images/cake.png';
import IdeaImg from './../../../assets/images/idea.png';


function Products() {

  const savePosition = useScrollStore((state) => state.savePosition);

  return (
    <div className='products'>
      <h2>Products</h2>
      <div className="Products-container">
        <div className="Products-box">
          <div className='Products-peace'>
            <Link to='/products/ehho' onClick={() => savePosition(window.scrollY)}>
              <img src={EhhoImg} alt="My Icon" className="profile-image" />
              <h3>ehho</h3>
            </Link>
          </div>
          <div className='Products-peace'>
            <Link to='/products/yofukashi' onClick={() => savePosition(window.scrollY)}>
              <img src={YOFUKASHIImg} alt="My Icon" className="profile-image" />
              <h3>YOFUKASHI</h3>
            </Link>
          </div>
          <div className='Products-peace'>
            <Link to='/products/omasuke' onClick={() => savePosition(window.scrollY)}>
              <img src={OmasukeImg} alt="My Icon" className="profile-image" />
              <h3>おまスケ！</h3>
            </Link>
          </div>
          <div className='Products-peace'>
            <Link to='/products/idea' onClick={() => savePosition(window.scrollY)}>
              <img src={IdeaImg} alt="My Icon" className="profile-image" />
              <h3>アイデアみっけ</h3>
            </Link>  
          </div>
          <div className='Products-peace'>
            <Link to='/products/cake' onClick={() => savePosition(window.scrollY)}>
              <img src={CakeImg} alt="My Icon" className="profile-image" />
              <h3>ケーキチャレンジ</h3>
            </Link>
          </div>
          <div className='Products-peace'>
            <Link to='/products/color' onClick={() => savePosition(window.scrollY)}>
              <img src={ColorImg} alt="My Icon" className="profile-image" />
              <h3>カラフル漢字マスター</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;