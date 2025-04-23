import { Link } from 'react-router-dom';
import './Products_about.css';
import ColorImg from './../../../../assets/images/color.png'; 


function Color () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>カラフル漢字マスター</h2>
          <img src={ColorImg} alt="Colorの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
              AIの音声認識を使用した脳トレゲームです。<br/>
              まず、色のついた漢字が表示されます。その色を声に出して音声入力、漢字をキーボードで入力という2つの動作を同時に行います。<br/>
              入力された色と漢字が2つとも表示されたものと一致していたらスコア加算され、最終的にスコアを表示します。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・HTML<br/>
              ・CSS<br/>
              ・JavaScript<br/>
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>
              ・デザイン<br/>
              ・デバック
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>
              制作の中では、いくつかの課題に直面しました。<br/>
              特に苦労したのは、音声認識における誤認識の問題です。似たような発音の言葉を正しく識別できず、不一致が生じる場面がありました。そこで、認識対象のワードを手動で増やし、認識の精度を高めることで対応しました。<br/>
              また、ゲーム中に中断や再挑戦ができないことも課題として挙がったため、終了ボタンを新たに追加。タイムアタック中でも途中でゲームを終了できるよう改善を施しました。<br/>
              こうした細かな調整を通して、ユーザーがより快適にプレイできるよう工夫を重ねた点は、大きな学びとなりました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://www.canva.com/design/DAGj94ZnFMs/un_xuvUbJIWPTLstTmFxAw/edit">発表スライド</a>
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

export default Color;