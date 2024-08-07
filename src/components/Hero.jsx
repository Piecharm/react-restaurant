function Hero() {
    return (
        <div className="max-w-screen-xl px-4 py-10 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h2 className="mt-1 text-3xl font-medium leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl font-family:cursive">
                        it is not just Food,
                    </h2>
                    <h2 className="mt-1 text-3xl font-medium leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl font-family:cursive">
                        It is an Experience!
                    </h2>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla labore minus tenetur in necessitatibus quibusdam
                        ea aperiam incidunt, dolor similique eos culpa, hic
                        autem quod architecto soluta odio! Totam, commodi.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <button className="text-base font-medium text-white bg-[#d11b27] py-4 px-14 rounded-full flex items-center gap-3 mx-5">
                            View Menu
                        </button>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button className="text-base font-medium text-gray-900 bg-[#f0f0f0] py-4 px-14 rounded-full flex items-center gap-3 mx-5">
                                Book a Table
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <div className="relative justify-end hidden w-full lg:flex">
                        <img src="/Hero.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
