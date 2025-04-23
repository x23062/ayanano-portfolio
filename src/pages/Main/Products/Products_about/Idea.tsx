import { Link } from 'react-router-dom';
import './Products_about.css';
import IdeaImg from './../../../../assets/images/idea.png'; 


function Idea () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>アイデアみっけ</h2>
          <img src={IdeaImg} alt="Ideaの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
              「アイデアみっけ」は、ブレインストーミングを支援するWebアプリです。<br/>
              アイデアを出すことが難しいと感じる人や、ブレインストーミングの進行役を務める人にとって、アイデアを広げる手助けとなることを目指して開発しました。<br/>
              ブレインストーミングのテーマとなる単語を入力すると、テーマに関連する単語をAIがランダムに出力します。<br/>
              出力結果から出力結果から気に入った単語を選択し、さらにその単語をテーマにした新たな単語をAIが出力します。<br/>
              これを繰り返すことで、アイデアを広げていくことができます。<br/>
              さらに、選択した単語を一覧で見返せる履歴表示画面も実装し、振り返りがしやすい設計にしました。<br/>
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・HTML<br/>
              ・CSS<br/>
              ・Python<br/>
              ・API：ChatGPT 4o-mini
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>
              ・HTML<br/>
              ・Python
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>
              今回の制作では、アイデアを多く出すことを重視し、出力を複数にする工夫を取り入れました。ブレインストーミングでは量が質を生むと考え、とにかく多くの案が出るような仕組みにしています。<br/>
              さらに、選択した単語を一覧で見返せる履歴表示画面も実装し、振り返りがしやすい設計にしました。<br/>
              一方で、同じ単語が繰り返し出力されてしまうことや、似た単語がループする問題が課題として残りました。これに対しては、一度選んだ単語をリスト化し、新たな出力と照らし合わせる仕組みを導入することで改善できると考えており、今後試してみたいです。<br/>
              また、履歴画面の表示順が直感的ではない点も気になったため、より見やすくするためにUIの再設計にも取り組む必要があると感じました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://www.canva.com/design/DAGkSRjr6BI/ILQtvBnFeO73y7Zz3oSEwQ/edit">発表スライド</a>
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

export default Idea;