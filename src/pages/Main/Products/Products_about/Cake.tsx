import { Link } from 'react-router-dom';
import './Products_about.css';
import CakeImg from './../../../../assets/images/cake.png'; 


function Cake () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>ケーキチャレンジ</h2>
          <img src={CakeImg} alt="Cakeの写真" className='productsCardImg'/>
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
            <p>
              3週間という短い期間の中で、個人で実際に動くプロダクトを完成させることができたのは、自信につながる非常に良い経験となりました。<br/>
              一方で、時間の制約からすべての機能を実装することはできず、限られたリソースの中で何にどれだけ時間を割くかという「取捨選択」の重要性を改めて実感しました。<br/>
              センサーの値をリアルタイムで描画し、傾きを視覚的に表現した点は特に工夫したポイントです。ユーザーが直感的に楽しめるよう、インタラクティブな要素を意識して取り入れたことで、実際に体験してくれた方々からも好意的なフィードバックをいただくことができました。<br/>
              今後の開発においても、ユーザーの没入感を高めるような小さな工夫を積み重ね、より魅力的な体験を提供できるよう意識して取り組んでいきたいと思います。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <p>詳細文</p>
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

export default Cake;