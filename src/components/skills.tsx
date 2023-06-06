// import { SiGolang, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiDocker } from "react-icons/tb"
import { SiGo, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiDocker } from "react-icons/si";
export const Skills = () => {
    return (
        <>
            <div className="bg-slate-900">
                <div className="font-mono text-3xl font-bold text-center text-lime-400">Skills</div>
                <div className="bg-slate-900">
                    <div className="grid md:grid-cols-7 sm:grid-cols-2">
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1">
                                <SiGo size={40}  />
                                <div className="text-center">Go</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1">
                                <SiPython size={40} />
                                <div className="text-center">Python</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1 ">
                                <SiJavascript size={40} />
                                <div className="text-center">JavaScript</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1">
                                <SiTypescript size={40} />
                                <div className="text-center">TypeScript</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1">
                                <SiHtml5 size={40} />
                                <div className="text-center">HTML</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1">
                                <SiCss3 size={40} />
                                <div className="text-center">CSS</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start p-1">
                                <SiDocker size={40} />
                                <div className="text-center">Docker</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}