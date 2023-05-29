import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">
          Welcome to BridgeSplash network!
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="/store" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Store &rarr;</h3>
            <p className="mt-4 text-xl">
              Find the best NFTs on the market!
            </p>
          </a>
          <a href="/discord" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Discord &rarr;</h3>
            <p className="mt-4 text-xl">
              Get latest updates and news!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
