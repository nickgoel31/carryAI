import Link from "next/link";

export async function YoutubeVideoDisplayer({link}:{link:string}) {
  return (
    <Link href={link} target="_blank" className="w-[60%] aspect-video border p-1 rounded-md flex items-center justify-center">
        <p className="text-sm font-medium text-center">Watch video in new tab</p>
    </Link>
  )
}