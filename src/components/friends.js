export const FriendsItem = ({ friends: {avatar, name, isOnline} }) => {
    return (
        <div className="item">
            <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div>
    )
};