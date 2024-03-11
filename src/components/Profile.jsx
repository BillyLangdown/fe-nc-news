import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/User";
import { getUsers } from "./Utils/api";
import ProfileCard from "./ProfileCard";


export default function Profile(){
    const { user } = useContext(UserContext);
    const [profiles, setProfiles] = useState([])

    useEffect(()=>{
        getUsers().then((users)=>{
            setProfiles(users)
        })

    }, [])
    return (
        <div>
          <h2 className="text-center m-5 p-5" >Choose profile</h2>
          <div className="container d-flex justify-content-center ">
            <div className="row">
              {profiles.map((profile, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <ProfileCard profile={profile} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      
      
      
}