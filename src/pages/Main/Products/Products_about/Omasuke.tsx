import { Link } from 'react-router-dom';
import './Products_about.css';
import OmasukeImg from './../../../../assets/images/omasuke.png'; 


function Omasuke () {
  return (
    <div className='productsPage'>
      <div className='ProductsCard'>
        <div className='ProductsCardTitle'>
          <h2>おまスケ！</h2>
          <img src={OmasukeImg} alt="Omasukeの写真" className='productsCardImg'/>
        </div>
        <div className='productsCardText'>
          <div className='productsCardText_content'>
            <h3>概要</h3>
            <p>
              本アプリは、人が考えたスケジュールをメルカリのように共有できるWebアプリです。気になるスケジュールを選んで体験し、その後に感想を投稿することで、他のユーザーと体験を共有できます。
              このアイデアは、「日常に刺激が足りないと感じたとき、人は新しいことに挑戦したくなる」という心理から着想を得ました。
              新しい体験は楽しく、学びも多いものですが、いざ何かを始めようとすると、時間やお金の制約、アイデア不足などのハードルがあります。
              そこで、他の人が考えたスケジュールを閲覧・参考にできるプラットフォームを作ることで、「やってみたい！」という気持ちを後押しし、実際に行動へとつなげる仕組みを設計しました。
              新しいことをもっと気軽に始められるきっかけを提供するサービスです。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              フロントエンド<br/>
              ・Next.js<br/>
              UIライブラリ<br/>
              ・daisyUI<br/>
              バックエンド<br/>
              ・Firebase
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
              このハッカソンでは、残念ながらプロダクトを完成させるには至りませんでしたが、多くの気づきと学びを得る貴重な経験となりました。<br/>
              アイデア出しに熱が入りすぎた結果、実装にかける時間が不足してしまい、限られた期間内で形にすることができませんでした。また、メンバー間でのスケジュール共有が不十分だったことから、チームとしての足並みが揃わなかった点も課題でした。<br/>
              さらに、新しい技術を取り入れようとするあまり、学習に時間をかけすぎてしまい、実装作業に十分な時間を確保できなかったことも反省点の一つです。<br/>
              この経験を通じて、アイデアと実装のバランスの大切さや、スケジュールの可視化、チーム内での進捗共有の重要性を実感しました。<br/>
              以降のチーム開発では、まず手を動かしてみることを意識し、議論は時間を区切って効率的に進めるようにしています。学びを次に活かし、チームとしてより良いアウトプットが出せるよう継続的に工夫と改善を重ねています。
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>関連リンク</h3>
            <a href="https://www.canva.com/design/DAGjRtLjtf0/Vd4D1vhV2TFshBbZO5xPRg/edit">発表スライド</a>
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

export default Omasuke;