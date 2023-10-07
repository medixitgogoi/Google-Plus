import { quickLinks, settingMenu } from "../utils/Constants";
import { useContext } from "react";
import { Context } from "../utils/ContextApi";

const Footer = () => {

    const { mode } = useContext(Context);

    return (
        <footer className={`${mode === "light" ? "bg-[#f2f2f2]" : "bg-[#292727]"}`}>
            <div className={`flex justify-center md:justify-start py-[8px] px-[15px] md:px-[30px] border-b ${mode === "light" ? "border-[#dadce0]" :"border-[#dadce0]/[0.4]"}`}>
                <span className="text-[#70757a] leading-none">
                    India
                </span>
            </div>

            <div className=" flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
                <div className="flex justify-center">
                    {quickLinks.map((menu, index) => (
                        <span
                            key={index}
                            className="text-[#70757a] text-sm leading-none p-[10px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center">
                    {settingMenu.map((menu, index) => (
                        <span
                            key={index}
                            className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[11px]"
                        >
                            {menu}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
