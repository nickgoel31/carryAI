"use client"
import { Book, Briefcase, Earth, HelpCircle, Home, LucideIcon, PenTool, Presentation, RouteIcon, Settings, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { EyeClosedIcon, HomeIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import { usePathname } from 'next/navigation'
  

const SidebarBtns = [
    {
        name: 'Home',
        href: '/',
        icon: Home,
    },
    {
        name: 'Roadmap',
        href: '/roadmap',
        icon: RouteIcon,
    },
    // {
    //     name: 'Job insights',
    //     href: '/jobs',
    //     icon: Briefcase,
    // },
    {
        name: 'Settings',
        href: '/settings',
        icon: Settings,
    },
    {
        name: 'Help',
        href: '/help',
        icon: HelpCircle,
    },
    
    
]

const DashboardSidebar = () => {
  return (
    <div className='fixed top-14 h-[calc(100vh-3.5rem)] w-20 flex flex-col items-center justify-center gap-4 backdrop-blur-sm z-[10]'>
        {SidebarBtns.map((btn, index) => (
            <SidebarBtn key={index} title={btn.name} link={`/dashboard/redirect${btn.href}`} icon={btn.icon} />
        ))}
    </div>
  )
}

export default DashboardSidebar

const SidebarBtn = ({title, link, icon}:{title:string, link:string, icon:LucideIcon}) => {
    const Icon = icon
    const pathname = usePathname()
    let path = pathname.split('/')[3]
    if(path === undefined) path = '';
    
    const isActive = link.split('/')[2] === path

    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger >
                    <div className={`border rounded-md p-3 ${isActive ? 'bg-foreground text-background' : ''}`}>
                        <Link href={link} className=''>
                            <Icon />
                        </Link>
                    </div>
                </TooltipTrigger>
                <TooltipContent side='right'>
                    <p>{title}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}