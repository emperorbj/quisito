import Image from "next/image"

const Navbar = () => {
    return (
            <nav className="mx-auto max-w-screen-xl px-4 py-8 sm:px-8 sm:py-5 lg:px-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <a className="flex gap-1 items-center">
                            <Image src="/logo.jfif"
                            alt="logo"
                            width={80}
                            height={80}
                            />
                            <h2 className="text-2xl font-bold">Qui
                                <span className="text-yellow-400">sito</span></h2>
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 sm:mt-0 sm:flex-row  sm:items-center mt-4">
                        <button
                            className="inline-block rounded bg-sky-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            Create Post
                        </button>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
