import Image from "next/image";
import Logo01 from "@/public/tech-stack/logo-1.svg";
import Logo02 from "@/public/tech-stack/logo-2.svg";
import Logo03 from "@/public/tech-stack/logo-3.svg";
import Logo04 from "@/public/tech-stack/logo-4.svg";
import Logo06 from "@/public/tech-stack/logo-9.png";
import Logo05 from "@/public/vercel.svg";
import Logo07 from "@/public/next.svg";



export default function BusinessCategories() {
  return (
    <section className="">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10">
        <div className="w-full flex items-center flex-col gap-4 justify-center">
          <h1 className="font-bold text-5xl">Tech Stack</h1>
          <p className="text-muted-foreground font-medium">
            Here is a list of the technologies we used to build CarryAI.
          </p>
        </div>
        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[324px] items-center justify-center">
            {/* Small emerald dots */}
            <div className="absolute -z-10">
              <svg
                className="fill-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" className="animate-pulse"/>
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" className="animate-pulse"/>
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" className="animate-pulse"/>
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" className="animate-pulse"/>
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" className="animate-pulse"/>
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" className="animate-pulse"/>
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" className="animate-pulse"/>
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} className="animate-pulse"/>
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                  className="animate-pulse"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                  className="animate-pulse"
                />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-emerald-500"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            
            {/* Logos */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.emerald.500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative"
                    src={Logo01}
                    width={60}
                    height={60}
                    alt="Gemini"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-foreground/20">
                <div className="absolute -translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative "
                        src={Logo02}
                        width={23}
                        height={22}
                        alt="Logo 02"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative grayscale invert"
                        src={Logo03}
                        width={22}
                        height={22}
                        alt="Logo 03"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative invert"
                        src={Logo04}
                        width={24}
                        height={22}
                        alt="Logo 04"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-y-[82px] translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative invert"
                        src={Logo05}
                        width={45}
                        height={45}
                        alt="Logo 05"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo06}
                        width={20}
                        height={18}
                        alt="Logo 06"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-neutral-800 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative invert"
                        src={Logo07}
                        width={40}
                        height={40}
                        alt="Logo 07"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}