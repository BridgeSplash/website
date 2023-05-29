import Image from 'next/image'

export default function Discord() {
    return (
        <section className="w-full bg-blurple p-4 pb-10">
            <div className="flex flex-col items-center justify-center py-2">
                <p className="text-4xl font-bold">
                    Join our Discord server!
                </p>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full pb-6">
                    <p className="mt-4 text-xl">
                        Keep up to date with all of out latest news and updates!
                    </p>
                </div>
                <Image
                    src="/discord.png"
                    className="relative discord-server"
                    alt="Discord Server"
                    width={1355}
                    height={795}
                    draggable={false}
                />
            </div>
        </section>
    );
}