import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

interface Profile {
  name: string;
  bio: string;
  website?: string;
}
interface InfoProps {
  profile: Profile;
}

const Info: React.FC <CardProps> = ({ profile }) =>{
    return(
        <div classname="card">
            <Avatar />
            <Info profile={profile}/>          
        </div>
    ) 
}
export default Info;
