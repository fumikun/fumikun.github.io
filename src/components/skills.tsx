import { TbBrandGolang, TbBrandPython, TbBrandJavascript, TbBrandTypescript, TbBrandHtml5, TbBrandCss3, TbBrandDocker } from "react-icons/tb"
export const Skills = () => {
    return (
        <>
            <div className="bg-slate-900">
                <div className="font-mono text-3xl font-bold text-center text-lime-500">Skills</div>
                <div className="bg-slate-900">
                    <div className="grid grid-cols-7">
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandGolang size={50} />
                                <div className="text-center">Go</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandPython size={50} />
                                <div className="text-center">Python</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandJavascript size={50} />
                                <div className="text-center">JavaScript</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandTypescript size={50} />
                                <div className="text-center">TypeScript</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandHtml5 size={50} />
                                <div className="text-center">HTML</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandCss3 size={50} />
                                <div className="text-center">CSS</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded justify-items-center border-slate-100 text-slate-100">
                            <div className="flex items-center justify-start">
                                <TbBrandDocker size={50} />
                                <div className="text-center">Docker</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}