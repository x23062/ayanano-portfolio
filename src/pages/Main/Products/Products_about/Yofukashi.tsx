import { Link } from 'react-router-dom';
import './Products_about.css';
import YofukashiImg from './../../../../assets/images/YOFUKASHI.png'; 


function Yofukashi () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>YOFUKASHI</h2>
          <img src={YofukashiImg} alt="Yofukashiの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
              エンジニアをターゲットとしたストレス解消サービスです。当時、サークルでは深夜に部室で作業するメンバーが多く、集中力や思考力の低下によるストレスで部室内の雰囲気が悪化していました。<br/>
              そこで、愚痴や叫び声などを検知すると、対象者に「変な動き」を促すサービスを開発しました。この「変な動き」には血行促進や目覚まし、ストレス軽減の効果があり、深夜帯の作業環境を改善することができました。<br/>
            
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              フロントエンド<br/>
              ・React<br/>
              バックエンド<br/>
              ・Firebase<br/>
              ・Google Cloud
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>担当部分</h3>
            <p>
              ・フロントエンド<br/>
              ・UI/UX設計
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>感想</h3>
            <p>
              この制作を通して、ユーザー視点での細やかな配慮の大切さを改めて実感しました。特にUI/UX面では、「ただ動けば良い」ではなく、「使う人にとって心地よい体験とは何か」を常に意識して設計しました。<br/>
              たとえば、作業中は背景が夜空になり、終了時には明るい朝空へと切り替わる演出を取り入れました。これは、深夜作業の疲れを和らげるための視覚的な工夫で、現実の空に近い色味にすることで、自然で違和感のない体験を目指しました。<br/>
              また、「お疲れ様！」というボタンの文言には、「頑張ったことを誰かに認めてもらいたい」というユーザーの声を反映しました。実際に「この文字を見ると労ってもらえている気がして嬉しい」といったフィードバックをいただけたことは、自分の工夫が確かにユーザーに届いているという手応えにもなりました。<br/>
              この経験を通して、ただ動くプロダクトを作るだけでなく、「人の気持ちに寄り添ったサービスを設計すること」の面白さと奥深さを学ぶことができました。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://yofukashi.web.app/">アプリページ</a>
            <a href="https://github.com/geekcamp-2023-11-18">GitHub</a>
            <a href="https://www.canva.com/design/DAGiANf0nPY/C5hG-cDaufYVMtHPeT8BTA/edit">発表スライド</a>
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

export default Yofukashi;