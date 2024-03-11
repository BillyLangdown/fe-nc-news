import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "./Utils/api";
import NClogo from "../assets/nclogocropped.png" 


export default function Header() {
 const {user, setUser} = useContext(UserContext)
 const [currentUserAvatar, setCurrentUserAvatar] = useState([])
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    getUsers().then((response) => {
      setProfiles(response);
    });
  }, []); 

  useEffect(() => {
    const matchingProfile = profiles.find((profile) => profile.username === user);
    if (matchingProfile) {
      setCurrentUserAvatar(matchingProfile.avatar_url);
    }
  }, [user, profiles]); 

 
  return (
    <header>
      <div className='py-3 mb-4 container-fluid d-flex justify-content-around align-items-center '>
        <img src={NClogo} alt="NC-NEWS Logo" style={{ width: '15rem', height: 'auto' }} className="img-fluid " />
        <img className='rounded-circle display-picture ' src={currentUserAvatar} alt="User's profile picture" />
      </div>
    </header>
  );
}
