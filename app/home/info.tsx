export default function Info() {
    return (
        <section className="w-full bg-dark mt-6 p-16 ">
            <div className="flex flex-col items-center justify-center py-2">
                <p className="text-2xl font-bold">
                    Welcome to BridgeSplash network!
                </p>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full pb-6">
                    <p className="mt-4 text-xl">
                        We are a new network working on fun and unique gamemodes!
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a href="https://store.bridgesplash.net" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Store &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Check out our new store Items!
                        </p>
                    </a>
                    <a href="https://discord.bridgesplash.net" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Discord &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Get latest updates and news!
                        </p>
                    </a>
                    <a href="/support" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Support &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Bugs, Appeals, Staff Applications and more!
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
}