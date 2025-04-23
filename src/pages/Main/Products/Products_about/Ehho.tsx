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
            <p>
              「トレーニング×かわいい」をテーマにした運動初心者向けのトレーニングアプリを開発。
              運動系アプリはスタイリッシュで本格的なものが多く、初心者には敷居が高いという課題に着目。ポケモンスリープのように「かわいさ」で継続力を高めるアプローチを採用し、ネットミームで話題になったメンフクロウの「ｴｯﾎｴｯﾎ」をモチーフに、かわいいメンフクロウと一緒に運動できるアプリを制作した。
              機能はシンプルに絞り込み、以下の3つを実装：<br/>
              ・ログイン<br/>
              ・トレーニング開始・終了<br/>
              ・トレーニング計測履歴の表示<br/>
              （運動時間・距離・消費カロリー・平均ペース）<br/>
            </p>
          </div>
          <div className='productsCardText_content'>
            <h3>技術構成</h3>
            <p>
              ・フロントエンド：Flutter（Dart）<br/>
              ・バックエンド：Supabase<br/>
              ・認証：Google Cloudの認証機能を利用<br/>
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
              このハッカソンは、初対面同士の即席チームでの参加でした。<br/>
              チームメンバーは遠方に住んでいたため、開発は基本的にオンラインで行いました。ハッカソン前日までは毎日22時から1時間のミーティングを行い、進捗報告や次に取り組むIssueの確認を徹底しました。初対面でもチームの雰囲気を良くするため、最初の顔合わせでは雑談や自己紹介などアイスブレイクにも力を入れました。<br/>
              また、チーム全体が質問しやすい環境を意識し、些細なことでもその都度連絡を取るように心がけました。毎日こまめにフィードバックを行ったことで、作業がスムーズに進み、発表準備にも十分な時間を確保できました。<br/>
              さらに、ユーザーが楽しみながら継続できるよう、ゲーム感覚の要素も取り入れました。累計運動量が一定の値を超えると実績が解除される仕組みを実装し、達成感を感じられるようにしました。<br/>
              加えて、複数のメンフクロウのイラストを用意し、実績を解除するたびにメンフクロウが少しずつ成長していく演出を加えました。これにより、運動の継続が楽しみになるよう工夫しました。<br/>
              受賞はできなかったものの、今回は担当する裁量が大きく、フロントエンドの大半を自分の力で実装できたため、非常に良い経験となりました。<br/>
            </p>
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