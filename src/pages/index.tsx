
import Link from "next/link";
import Head from "next/head";

const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function Home () {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center relative">
      <Head>
        <title>Share Cat TV</title>
      </Head>
      <div className="text-2xl text-center pt-8">Start Streaming Right Now</div>
      <div className="p-8 flex justify-between items-center max-w-2xl flex-col animate-fade-in">
        <StreamBtn disabled={false}/>
        <div className="p-2" />
      </div>
      <div className="w-full text-xl text-center pb-2">
        <a href="https://github.com/ChloeWhen117/sharecattv">Github</a>
        <span className="p-4">{"-"}</span>
        <Link href="/results">
          <a>Results</a>
        </Link>
        <span className="p-4">{"-"}</span>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  )
}


const StreamBtn: React.FC<{
  disabled: boolean;
}> = (props) => {
  return (
    <div
      className={`flex flex-col items-center transition-opacity ${
        props.disabled && "opacity-0"
      }`}
    >
      <button
        className={btn}
        disabled={props.disabled}
      >
        Start Stream 
      </button>
    </div>
  );
};
