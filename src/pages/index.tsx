import Head from 'next/head'
import Image from 'next/image'

const Home: PageWithLayout = () => {
    return (
        <div className="p-5">
            <Head>
                <title>Home</title>
                <meta name="description" content="Kyle pham's portfolio" />
            </Head>
            <div className="text-white">
                <div className="bg-white p-3 text-center rounded-md bg-opacity-10">
                    Hello, I&apos;m a frontend developer based in Vietnam
                </div>
                <div className="mt-3 flex flex-col">
                    <span className="font-bold text-lg">
                        Khoa Pham Duy Dang
                    </span>
                    <span className="font-thin text-sm">
                        Developer | Tech enthusiast
                    </span>
                </div>
                <div className="relative my-3 mx-auto w-[100px] h-[100px] rounded-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] bg-white rounded-full "></div>
                    <Image
                        className="rounded-full"
                        width={100}
                        height={100}
                        src="/profile-avatar.jpg"
                        alt="user avatar"
                    />
                </div>
                <div className="space-y-5">
                    {' '}
                    <div>
                        <h1 className="font-medium underline underline-offset-2">
                            Work
                        </h1>
                        <p className="indent-5">
                            Kyle is a fulltime and freelance frontend developer
                            based in Vietnam with a position of building web
                            application. Kyle is currently worked as a frontend
                            developer for Publish One which is a tool that would
                            allow authors to publish in a future-proof and easy
                            way.{' '}
                            <a
                                className="text-indigo-400 hover:text-indigo-300 transition-colors hover:underline"
                                href="https://publishone.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                My work
                            </a>
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h1 className="font-medium underline underline-offset-2">
                            Bio
                        </h1>
                        <div className="grid gap-10 grid-cols-10">
                            <span className="font-bold col-span-1">1999</span>
                            <p className="col-span-8">
                                Born in Tan An, Vietnam
                            </p>
                        </div>
                        <div className="grid gap-10 grid-cols-10">
                            <span className="font-bold col-span-1">2020</span>
                            <p className="col-span-8">
                                Worked at{' '}
                                <a
                                    className="text-indigo-400 hover:text-indigo-300 transition-colors hover:underline"
                                    href="https://www.terralogic.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Terralogic
                                </a>
                            </p>
                        </div>
                        <div className="grid gap-10 grid-cols-10">
                            <span className="font-bold col-span-1">2021</span>
                            <p className="col-span-8">
                                Worked at{' '}
                                <a
                                    className="text-indigo-400 hover:text-indigo-300 transition-colors hover:underline"
                                    href="https://www.keepfika.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Fika
                                </a>
                            </p>
                        </div>
                        <div className="grid gap-10 grid-cols-10">
                            <span className="font-bold col-span-1">2021</span>
                            <p className="col-span-8">
                                Graduated from Vietnam National University, Ho
                                Chi Minh University of Science. Majored in
                                (Knowledge Engineering) Information Technology
                            </p>
                        </div>
                        <div className="grid grid-cols-10">
                            <span className="font-bold col-span-3">
                                2021 to present
                            </span>
                            <p className="col-span-5">
                                Currently work at Idealogic
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.layout = true

export default Home
