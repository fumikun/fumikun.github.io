import icon from "../assets/img/computer_switching_hub.png"
import { SiGithub, SiTwitter, SiQiita } from "react-icons/si";
export const Introduction = () => {
    return (
        <>
            <div className="bg-auto bg-cover bg-about text-slate-100 bg-slate-100">
                <div className="items-center justify-center p-5 font-mono text-center bg-center text-slate-900" id="#about">
                    <div className="font-mono text-3xl font-bold text-center text-lime-500">About me</div>
                    <div className="items-center justify-center p-3 pb-1 m-1 md:flex">
                        <div className="items-center justify-center">
                            <img src={icon} className="w-1/2 pt-1 pb-1 m-1 mx-auto bg-white rounded-full shadow" />
                        </div>
                        <div className="items-center justify-center h-full p-3 m-1 mt-3 border border-black rounded bg-slate-100 md:w-full lg:w-fit">
                            <div className="font-mono text-xl font-bold text-lime-500">fumikun</div>
                            某国立高専に通う高専生です。<br></br>
                            Web系を中心としたネットワークに興味があります。<br></br>
                            フロントエンドとバックエンドを一人で細々作ってます。
                            <div className="flex items-center justify-center gap-3 font-sans">
                                <div className="flex justify-center">
                                    <div className="flex items-center">
                                        <a className="flex items-center" href="https://github.com/fumikun">
                                            <SiGithub size={30} />
                                            <p className="pt-1 ps-1">GitHub</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex items-center">
                                        <a className="flex items-center" href="https://twitter.com/fumikun_dev">
                                            <SiTwitter size={30} />
                                            <p className="pt-1 ps-1">Twitter</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex items-center">
                                        <a className="flex items-center" href="https://qiita.com/fumikun">
                                            <SiQiita size={50} />
                                            <p className="pt-1 ps-1">Qiita</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}