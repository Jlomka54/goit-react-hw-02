import style from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats:{followers, views, likes} }) => {
  return (<div className={style.container}>
    <div className={style.userInfo}>
      <img className={style.userPhoto} height={200} width={200}
        src={image}
        alt="User avatar"
      />
      <p className={style.userName}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={style.statsList}>
      <li className={style.statsListItem}>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li className={style.statsListItem}>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li className={style.statsListItem}>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
  );
 };


export default Profile;