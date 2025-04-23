import './Profile.css';
import MyIcon from './../../../assets/images/myicon.png';

function Profile() {
  return (
    <div className='profile'>
      <h2>Profile</h2>
      <div className="profile-container">
        <img src={MyIcon} alt="My Icon" className="profile-image" />
        <div className="profile-text">
          <h3>中村 彩七</h3>
          <p>愛知工業大学<br/>
          情報科学部 情報科学科<br/>
          メディア情報専攻</p>
          <p>出身：愛知</p>
          <p>趣味：散歩 ゲーム 読書 音楽鑑賞</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
