import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={image}
          alt="User avatar"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.value}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.value}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
