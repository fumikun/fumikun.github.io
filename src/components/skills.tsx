import { SiGo, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiDocker } from "react-icons/si";
export const Skills = () => {
    return (
        <>
            <div className="text-center text-slate-900 bg-slate-100" id="#skill">
                <div className="pt-3 font-mono text-4xl font-bold text-center text-lime-400">Skills</div>
                <div className="p-3 border rounded ms-3 me-3 border-slate-100 ">
                    <div className="grid md:grid-cols-7 sm:grid-cols-2">
                        <div className="grid m-3 text-center border rounded shadow justify-items-center border-sky-500 text-slate-900">
                            <div className="flex items-center justify-start p-1">
                                <SiGo size={40} />
                                <div className="text-center">Go</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border border-yellow-500 rounded shadow justify-items-center text-slate-900">
                            <div className="flex items-center justify-start p-1">
                                <SiPython size={40} />
                                <div className="text-center">Python</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border border-yellow-500 rounded shadow justify-items-center text-slate-900">
                            <div className="flex items-center justify-start p-1 ">
                                <SiJavascript size={40} />
                                <div className="text-center">JavaScript</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border border-blue-500 rounded shadow justify-items-center text-slate-900">
                            <div className="flex items-center justify-start p-1">
                                <SiTypescript size={40} />
                                <div className="text-center">TypeScript</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border border-red-500 rounded shadow justify-items-center text-slate-900">
                            <div className="flex items-center justify-start p-1">
                                <SiHtml5 size={40} />
                                <div className="text-center">HTML</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded shadow justify-items-center border-cyan-500 text-slate-900">
                            <div className="flex items-center justify-start p-1">
                                <SiCss3 size={40} />
                                <div className="text-center">CSS</div>
                            </div>
                        </div>
                        <div className="grid m-3 text-center border rounded shadow justify-items-center border-sky-500 text-slate-900">
                            <div className="flex items-center justify-start p-1">
                                <SiDocker size={40} />
                                <div className="text-center">Docker</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="p-3 m-3 text-center border rounded shadow w-fit border-slate-900">
                        {/* My Skills<br></br> */}
                        <table className="table-auto text-start">
                            <thead>
                                <tr>
                                    <th>Content</th>
                                    <th>Example</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>バックエンド開発</td>
                                    <td>Go、Pythonを用いたバックエンド開発</td>
                                    <td>★★★★★</td>
                                </tr>
                                <tr>
                                    <td>フロントエンド開発</td>
                                    <td>TypeScript、Reacrを用いたフロントエンド開発</td>
                                    <td>★★★★☆</td>
                                </tr>
                                <tr>
                                    <td>Webアプリ総合開発</td>
                                    <td>フロントエンド・バックエンドをDocker-composeで組み合わせたWebアプリ開発</td>
                                    <td>★★★☆☆</td>
                                </tr>
                                <tr>
                                    <td>Docker</td>
                                    <td>Dockerでコンテナ</td>
                                    <td>★★☆☆☆</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900">
            </div>
        </>
    )
}