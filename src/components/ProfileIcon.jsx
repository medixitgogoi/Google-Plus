import Profile from "../assets/profile.png";
import ProfileRing from "../assets/profile-ring.svg";
import { TbGridDots } from "react-icons/tb";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-8 w-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={18} color="#5f6368" />
            </span>
            <span className="h-8 w-8 relative flex justify-center items-center">
                <img className="absolute" src={ProfileRing} alt="profile" />
                <span className="h-6 w-6 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={Profile} alt="profile" />
                </span>
            </span>
        </div>
    );
};

export default ProfileIcon;
