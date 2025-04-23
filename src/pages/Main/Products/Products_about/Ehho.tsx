import { Link } from 'react-router-dom';
import './Products_about.css';
import EhhoImg from './../../../../assets/images/ehho.png'; 


function Ehho () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>Ehho</h2>
          <img src={EhhoImg} alt="Ehhoの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>詳細文</p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://github.com/watagassa/ehho">GitHub</a>
            <a href="https://www.canva.com/design/DAGjRlNGFfU/4OHJXQJUC-ol8NWQPRLdgg/edit">発表スライド</a>
          </div>
        </div>
        <div className='backButtonContainer'>
          <Link to='/'>
          <button className='backButton'>戻る</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ehho;