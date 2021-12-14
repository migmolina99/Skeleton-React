import React, { useState, useEffect } from "react";
import SkeletonProfile from "./skeletons/SkeletonProfile";

const Profile = () => {
  
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      setProfile(data);
    }, 2000);
  }, []);

  return (
    <section className="profile">
      <h2>Profile</h2>
      {profile && (
        <div className="user-profile">
          <h3 className="user-profile__name">{profile.name}</h3>
          <p className="user-profile__email">{profile.email}</p>
          <a className="user-profile__website" href={profile.website}>
            {profile.website}
          </a>
        </div>
      )}
      {!profile && <SkeletonProfile />}
    </section>
  );
};

export default Profile;
