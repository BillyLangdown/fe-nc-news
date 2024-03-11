import { useContext } from "react";
import { UserContext } from "../contexts/User";


export default function ProfileCard({ profile }) {

    const {user, setUser} = useContext(UserContext)
    const isCurrentUser = profile.username === user;

    function handleProfileClick(){
        setUser(profile.username)
    }

    return (
        <div className="d-flex align-items-center mb-3 text-center">
          <div className={`profile-card ${isCurrentUser ? 'current-user' : ''}`} onClick={handleProfileClick}>
            <img
              className="rounded-circle "
              src={profile.avatar_url}
              alt="Profile Avatar"
              style={{
                width: '10rem',
                height: '10rem',
                objectFit: 'cover',
                marginRight: '1rem',
                transition: 'box-shadow 0.3s ease',
              }}
            />
          </div>
          <div>
            <h5>{profile.name}</h5>
            <p>{profile.username}</p>
            {isCurrentUser && <p className="text-danger">Current user</p>}
          </div>
        </div>
      );      
  }
  