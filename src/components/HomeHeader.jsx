import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="h-12 flex justify-between items-center md:justify-end gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black font-medium text-[13px] hover:underline cursor-pointer">Gmail</span>
                <span className="text-black font-medium text-[13px] hover:underline cursor-pointer">Images</span>
            </div>
            <ProfileIcon />
        </header>
    );
};

export default HomeHeader;
