import React from 'react';

import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        
       
            <div className="min-h-screen bg-slate-800 text-white text-center flex ">
            <div className="m-auto">
                <h1 className="text-4xl font-bold uppercase">Learn Hiragana and Katakana</h1>
                <div className="p-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex justify-center">
                            <button
                                className="px-4 py-2 font-semibold text-base bg-sky-500/100 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300"
                                onClick={()=> {navigate("/Katakana");}}>
                                Katakana Quiz
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="px-4 py-2 font-semibold text-base bg-sky-500/100 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300"
                                onClick={()=> {navigate("/Hiragana");}}>
                                Hiragana Quiz
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
    )
}

export default Home
