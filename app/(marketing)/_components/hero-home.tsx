"use client"

import Image from "next/image";
import Link from "next/link";


export default function HeroHome() {
  return (
    <section className="bg-background dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full bg-gray-200/10 hover:bg-gray-200/20 " role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-emerald-600 font-semibold px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Quizzes are out!</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
            Empower your career with AI
        </h1>
        <p className="mb-8 text-lg font-normal text-muted-foreground lg:text-xl sm:px-16 xl:px-48">Transform the way your learn with intelligent roadmaps. CarryAI helps you learn in a structured way, with quizzes, projects and more.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="https://www.youtube.com/watch?" target='_blank' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border  focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36  flex flex-col items-center gap-6">
            <span className="font-semibold text-gray-400 uppercase">COMPETING IN</span>
            <div className="">
                <Link href={`https://ai.google.dev/competition`}>
                    <div className="w-28 ">
                        <Image src={'/google-gemini.svg'} alt="gemini" width={500} height={500} className="w-full h-full"/>     
                    </div>   
                </Link>             
            </div>
        </div> 
    </div>
</section>
  );
}