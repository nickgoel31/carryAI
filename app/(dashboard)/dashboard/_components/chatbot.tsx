'use client';

import { Message, continueConversation } from '@/actions/ai-models/carryAiChat';
import { readStreamableValue } from 'ai/rsc';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Sparkles } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from 'next/navigation';
import { findCurrentPageInfo } from '@/helpers/logical/find';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const CarryAIChatBot = () => {
    const pathname = usePathname()
    const firstQuery = pathname.split('/')[1]
    const secondQuery = pathname.split('/')[2]
    const [currentPageInfo, setCurrentPageInfo] = useState<any>(null)

    
    
    useEffect(() => {
        findCurrentPageInfo(pathname, firstQuery, secondQuery).then((data) => {
            setCurrentPageInfo(data)
        })
    }, [pathname, firstQuery, secondQuery])
  return (
    <Sheet>
        <SheetTrigger>
            <p className='text-sm font-bold'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-cyan-300'>Talk to carry</span>
            </p>
        </SheetTrigger>
        <SheetContent className='p-0 h-screen py-6'>
            <SheetHeader className='px-7 pb-2'>
                <SheetTitle className='flex items-center gap-2'>
                    <Sparkles className='text-violet-400' size={15}/>
                    CarryAI
                </SheetTitle>
                <SheetDescription>
                    CarryAI is your personal assistant, ask anything!
                </SheetDescription>
            </SheetHeader>

            <ChatBotMessageArea currentPageInfo={currentPageInfo}/>
        </SheetContent>
    </Sheet>

  )
}

export default CarryAIChatBot

const ChatBotMessageArea = ({currentPageInfo}:{currentPageInfo:any}) => {
    const [conversation, setConversation] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [input2, setInput2] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        setConversation([...conversation, { role: 'user', content: input }]);
        setInput('');
        setLoading(true);
        const { messages } = await continueConversation([
            ...conversation.map(({ role, content }) => ({ role, content })),
            { role: 'user', content: input2 },
        ], currentPageInfo);
        setInput2('')

        setConversation([
            ...messages
        ]);
        setLoading(false);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or any other default behavior
            handleSubmit();
        }
    };


    return (
        <ScrollArea className='relative w-full h-full overflow-y-scroll '>
                <div className='flex flex-col justify-end gap-4 p-6 pb-32'>
                    {conversation.map((message, index) => (
                        <>
                            {message.role === 'assistant' ? <ChatBotMessage key={index} message={message.content}/> : <HumanMessage key={index} message={message.content}/>}
                            {message.display}
                        </>
                    ))}

                    {loading && (
                        <div className='flex items-center justify-center gap-2 w-full rounded-md bg-gradient-to-tr text-transparent  from-violet-400 to-purple-500 py-4 bg-clip-text animate-pulse'>
                            <p className='font-semibold text-sm text-violet-400'>Carry is typing...</p>
                            <Sparkles size={20} className='text-violet-400'/>
                        </div>
                    )}
                    
                </div>
            
            <div className='absolute bottom-8 w-full p-4 left-0 bg-background/80 backdrop-blur-lg border-t '>
                <div className='relative'>
                    <input
                        value={input}
                        ref={inputRef}
                        onChange={event => {setInput(event.target.value);setInput2(event.target.value)}}
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder='Type a message'
                        className='w-full bg-foreground/5 px-4 pr-10 py-2 rounded-md text-sm font-medium outline-none text-white'
                    />
                    <button
                        onClick={handleSubmit}
                        className='absolute right-0 top-0 h-full px-4 flex items-center justify-center'
                    >
                        <Sparkles size={20} className='text-violet-400'/>
                    </button>
                </div>
            </div>
        </ScrollArea>
    )
}

const ChatBotMessage = ({message}:{message:string}) => {
    return (
        <div className='p-4 px-6 bg-[#151515] dark:bg-[#171717] rounded-lg self-start'>
            <p className='text-sm font-medium text-muted-foreground'>{message}</p>
        </div>
    )
}

const HumanMessage = ({message}:{message:string}) => {
    return (
        <div className='p-4 px-6 bg-[#151515] dark:bg-[#171717] rounded-lg self-end'>
            <p className='text-sm font-medium text-muted-foreground text-right'>{message}</p>
        </div>
    )
}
