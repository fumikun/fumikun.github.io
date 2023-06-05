import icon from "../assets/img/computer_switching_hub.png"
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { TbBrandGolang, TbBrandTypescript, TbBrandJavascript, TbBrandPython, TbBrandHtml5, TbBrandCss3, TbBrandPhp } from "react-icons/tb"
export const Introduction = () => {
    return (
        <>
            <div className="items-center justify-center p-5 font-mono text-center bg-center bg-auto bg-cover bg-about text-slate-200" id="#about">
                <div className="font-mono text-3xl font-bold text-center text-lime-500">About me</div>
                <div className="items-center justify-center md:flex">
                    <div className="items-center justify-center">
                        <img src={icon} className="w-1/2 pt-1 pb-1 m-1 mx-auto bg-white rounded-full" />
                    </div>
                    <div className="items-center justify-center h-full p-3 m-1 text-black bg-white rounded md:w-full lg:w-fit">
                        <div className="font-mono text-xl font-bold text-lime-500">fumikun's Property</div>
                        某国立高専に通う高専生です。<br></br>
                        Web系を中心としたネットワークに興味があります。<br></br>
                        フロントエンドとバックエンドを一人で細々作ってます。
                    </div>

                </div>
                <br></br>
                <div className="flex items-center justify-center">
                    <div className="items-center justify-center h-full p-3 m-1 text-black bg-white rounded md:w-full lg:w-fit">
                        <div className="items-center text-black bg-white rounded ">
                            <p className="font-mono text-xl font-bold text-lime-500">Language</p>
                            <div className="flex justify-center">
                                <TbBrandGolang size={30} />
                                <TbBrandTypescript size={30} />
                                <TbBrandJavascript size={30} />
                                <TbBrandPython size={30} />
                                <TbBrandHtml5 size={30} />
                                <TbBrandCss3 size={30} />
                                <TbBrandPhp size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-center h-full p-3 m-1 text-black bg-white rounded md:w-full lg:w-fit">
                        <div className="items-center text-black bg-white rounded ">
                            <p className="font-mono text-xl font-bold text-lime-500">Link</p>
                            <div className="flex justify-center">
                                <div className="flex items-center">
                                    <a className="flex items-center" href="https://github.com/fumikun">
                                        <FaGithub size={30} />
                                        <p className="pt-1 ps-1">GitHub</p>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}