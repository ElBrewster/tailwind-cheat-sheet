import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { AiOutlineHeart } from 'react-icons/ai'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen flex flex-col bg-blue-800">
            <header className="flex flex-wrap justify-between bg-blue-800 shadow-lg shadow-blue-950/50">
                <h1 className="self-center px-4 text-6xl font-bold text-purple-200">
                    Vite + React
                </h1>
                <div className="flex">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                        {/* notice you can have both regular CSS use and tailwind stylings */}
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
            </header>

            <main className="flex flex-1 flex-col">
                <div className="mt-4 p-2">
                    <button
                        className="m-2 p-2 px-4 border rounded-full bg-blue-600 text-indigo-50 hover:bg-blue-650 active:bg-red-750"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        Count is {count}
                    </button>
                </div>
                <div className="m-4 p-2 bg-violet-200 border-4">
                    <h2 className="p-1 text-2xl">GRID EXAMPLE</h2>
                    <div className="grid grid-cols-3 gap-4 justify-center">
                        <div className="max-w-4 p-3 bg-blue-100 border-2 border-blue-400 text-blue-900 text-xl tracking-tighter">
                            grid item 1
                        </div>
                        <div className="p-3 bg-blue-200 border-2 text-blue-900 text-xl font-bold">
                            grid item 2
                        </div>
                        <div className="p-3 bg-blue-300 border-2 text-blue-900 text-xl italic">
                            grid item 3
                        </div>
                        <div className="p-2 bg-blue-400 border-2 text-blue-900 text-xl tracking-tight">
                            grid item 4
                        </div>
                        <div className="p-2 bg-blue-500 border-4 text-blue-900 text-xl font-bold line-through">
                            grid item 5
                        </div>
                        <div className="p-2 bg-blue-600 border-4 text-blue-900 text-xl italic">
                            grid item 6
                        </div>
                        <div className="p-4 bg-blue-700 border-4 text-blue-50 text-xl tracking-normal underline">
                            grid item 7
                        </div>
                        <div className="p-4 bg-blue-800 border-8 text-blue-50 text-xl font-bold text-center">
                            grid item 8
                        </div>
                        <div className="p-4 bg-blue-900 border-8 text-blue-50 text-xl italic text-end">
                            grid item 9
                        </div>
                        <div className="p-1 col-span-3 bg-blue-950 border-4 border-blue-300 border-x-rose-300 text-blue-50 text-xl tracking-widest">
                            grid 10
                        </div>
                    </div>
                </div>
                <div className="m-4 p-8 flex-1 rounded bg-gradient-to-b from-blue-300 from-30% to-indigo-400 text-sky-50">
                    gradient example 2 colors top to bottom
                </div>
                <button className="ml-4 min-w-fit max-w-xs rounded-md border-2 border-solid border-indigo-300 bg-blue-600 p-4 text-indigo-50 hover:bg-blue-650 active:bg-red-750">
                    <span className="text-center text-xl">Open My Diary</span>
                </button>
                <div className="m-4 p-8 flex-1 rounded bg-gradient-to-r from-blue-300 via-rose-200 to-indigo-400 text-sky-50">
                    gradient example 3 colors left to right
                </div>
                <div className="m-4 p-2 bg-blue-600 border text-violet-100">
                    <h2 className="text-xl text-blue-950 font-bold">
                        ASPECT RATIO EXAMPLE & TAILWIND'S "container"
                        <span className="text-xs italic">
                            {' '}
                            try playing with browser size to see
                        </span>
                    </h2>
                    <div className="flex flex-row flex-shrink gap-px text-blue-800">
                        <div className="container max-w-xs aspect-square bg-purple-200 rounded">
                            1
                        </div>
                        <div className="container max-w-xs bg-purple-300 rounded-md">
                            2
                        </div>
                        <div className="container max-w-xs bg-purple-400 rounded-lg">
                            3
                        </div>
                    </div>
                </div>
            </main>

            <footer className="sticky p-2 bottom-0 flex flex-row bg-indigo-950">
                <a
                    href="https://github.com/ElBrewster"
                    aria-label="Go to El's github page"
                    className="flex flex-row"
                >
                    <SiGithub className="fill-purple-200 hover:fill-yellow-100" />
                </a>
                <div>
                    <AiOutlineHeart className="fill-blue-200" />
                </div>
                <a
                    href="https://www.linkedin.com/in/el-brewster/"
                    aria-label="Go to El's linked-in page"
                    className="flex flex-row"
                >
                    <SiLinkedin className="fill-purple-200 hover:fill-teal-100" />
                </a>
            </footer>
        </div>
    )
}

export default App
