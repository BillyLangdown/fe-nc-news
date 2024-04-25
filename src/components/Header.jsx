import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "./Utils/api";
import NClogo from "../assets/nclogocropped.png" 
import blankDisplay from "../assets/blank-display-picture.webp"
import NavBar from "./NavBar";


export default function Header() {
 const {user, setUser} = useContext(UserContext)
 const [currentUserAvatar, setCurrentUserAvatar] = useState([])
  const [profiles, setProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    getUsers().then((response) => {
      setProfiles(response);
      setIsLoading(false)
    });
  }, []); 

  function onTopicClick(topic){
    setTopic(topic)
  }

  useEffect(() => {
    const matchingProfile = profiles.find((profile) => profile.username === user);
    if (matchingProfile) {
      setCurrentUserAvatar(matchingProfile.avatar_url);
    }
  }, [user, profiles]); 

 
  return (
    <header>
      <div className='py-3 mb-4 container-fluid d-flex justify-content-between align-items-start bg-light rounded '>
        <img src={NClogo} alt="NC-NEWS Logo" style={{width:'50%', maxWidth: '15rem', height: 'auto' }} className="img-fluid " />
        <div className="d-flex flex-row justify-content-end">
          <NavBar onTopicClick = {onTopicClick} />
           {isLoading ? <img className='rounded-circle display-picture' src={blankDisplay} alt="Default Display picture of human outline" /> : 
            <img className='rounded-circle display-picture  ' src={currentUserAvatar} alt="User's profile picture" />}
        </div>
      </div>
    </header>
  );
}
