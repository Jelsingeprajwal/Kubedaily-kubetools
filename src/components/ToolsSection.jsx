import React, { useState } from "react";
import entries from "../data/entries";
function ToolsSection() {
    const [search, setSearch] = useState("");
    console.log(entries);
    return (
        <div className="bg-bgPrimary w-full px-6 py-6  max-w-4xl mx-auto">
            <div className="flex w-fit justify-center items-center gap-4 mx-auto bg-bgGray rounded-xl">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={
                        "w-full md:w-[515px] lg:w-[768px] rounded-sm rounded-l-xl h-[48px] p-4 text-black"
                    }
                    placeholder="search"
                />
                <label className=" text-xl pr-4">🔍</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-[40px]">
                {entries
                    .filter((entry) => {
                        return search.toLocaleLowerCase() === ""
                            ? entry
                            : entry.title.toLocaleLowerCase().includes(search);
                    })
                    .map((entry, index) => (
                        <div
                            key={index}
                            className="w-full border min-w-[315px] border-pink-600 pt-10 px-4 pb-4 rounded-md"
                        >
                            <div>
                                <h3 className="text-[28px] font-semibold">{entry.title}</h3>
                                <p className="text-base text-grayFill">{entry.description}</p>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                                <span className="font-mono">{entry.tag}</span>
                                <div className="flex gap-2 ">
                                    <div className=" py-2 px-4 rounded-3xl h-[36px] flex items-center bg-bgGray font-semibold cursor-pointer">
                                        <a
                                            target={"_blank"}
                                            href={entry.link !== "" ? entry.link : "/"}
                                        >
                                            Source
                                        </a>
                                    </div>
                                    <div className=" py-2 px-4 rounded-3xl h-[36px] flex items-center bg-bgGray font-semibold cursor-pointer">
                                        <a
                                            target={"_blank"}
                                            href={
                                                entry.github !== ""
                                                    ? "https://www.github.com/" + entry.github
                                                    : "/"
                                            }
                                        >
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ToolsSection;
