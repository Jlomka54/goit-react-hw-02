import css from "./FriendListItem.module.css"
import clsx from "clsx"

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <>
          <img src={avatar} alt="Avatar" width="70" />
  <p className={css.info}>{name}</p>
            <p className={clsx(css.info, {[css.online] : isOnline, [css.offline] : !isOnline})}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
</>

  )
}

export default FriendListItem