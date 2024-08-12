"use client"

import { completedSubpaths } from '@/helpers/logical/completeSubpaths'
import useUserDB from '@/hooks/useUserDB'
import { cn } from '@/lib/utils'
import { LearningPathSubpath } from '@prisma/client'
import { interval } from 'date-fns'
import { Check } from 'lucide-react'
import React, { useEffect } from 'react'


const PomodoroTimer = ({subPaths}:{subPaths:LearningPathSubpath[]}) => {
    const [timer, setTimer] = React.useState({minutes: 25, seconds: 0})
    const [isTimerRunning, setIsTimerRunning] = React.useState(false)
    const [isBreak, setIsBreak] = React.useState(false)

    const [completedTasks, setCompletedTasks] = React.useState<LearningPathSubpath[]>([])
    const [subPathState, setSubPathState] = React.useState<LearningPathSubpath[]>(subPaths)



    function showNotification() {
        //if(document.visibilityState === "visible") {
          //  return;
        //   }
        let title = "JavaScript Jeep";
        let icon = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
        let body = "Message to be displayed";
        var notification = new Notification('Title', { body, icon });
        notification.onclick = () => {
             notification.close();
             window.parent.focus();
        }
     }

    function requestAndShowPermission() {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                showNotification();
            }
        });
    }
     

    useEffect(() => {
        // let permission = Notification.permission;

        // if(permission === "granted"){
        // showNotification();
        // } else if(permission === "default"){
        // requestAndShowPermission();
        // } else {
        // alert("Use normal alert");
        // }

        const timerInterval = setInterval(() => {
            if(isTimerRunning && !isBreak){
                if(timer.minutes === 0 && timer.seconds === 0){
                    setIsTimerRunning(false)
                    setIsBreak(true)
                    clearInterval(timerInterval)
                }else{
                    if(timer.seconds === 0){
                        setTimer({
                            minutes: timer.minutes - 1,
                            seconds: 59
                        })
                    }else{
                        setTimer({
                            minutes: timer.minutes,
                            seconds: timer.seconds - 1
                        })
                    }
                }
            } else if (isTimerRunning && isBreak){
                if(timer.minutes === 0 && timer.seconds === 0){
                    setIsTimerRunning(false)
                    setIsBreak(false)
                    clearInterval(timerInterval)
                }else{
                    if(timer.seconds === 0){
                        setTimer({
                            minutes: timer.minutes - 1,
                            seconds: 59
                        })
                    }else{
                        setTimer({
                            minutes: timer.minutes,
                            seconds: timer.seconds - 1
                        })
                    }
                }
            } else {
                clearInterval(timerInterval)
            }
            if(isBreak && !isTimerRunning){
                setTimer({minutes: 5, seconds: 0})
            }
            if(!isBreak && !isTimerRunning){
                setTimer({minutes: 25, seconds: 0})
            }
        }, 1000)
        return () => clearInterval(timerInterval)
    },[timer, isTimerRunning, isBreak])
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6'>
        <div className='border rounded-lg p-8 gap-4 px-16 flex flex-col items-center backdrop-blur-sm bg-gradient-to-tr from-emerald-400/0 to-cyan-500/5 w-96'>
            <span className='rounded-full px-2 py-1 bg-emerald-400 text-emerald-950 text-sm font-medium'>{isBreak ? 'Break' : 'Complete Task'}</span>
            <div className='timer font-bold text-8xl '>
                <span>{timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}</span>:<span>{timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}</span>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <button onClick={() => setIsTimerRunning(!isTimerRunning)} className='rounded-lg p-3 px-6 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white font-medium'>
                {isTimerRunning ? 'Pause':'Start'}
            </button>
            {isTimerRunning && (
                <button onClick={() => {
                    setIsTimerRunning(false)
                    setIsBreak(!isBreak)
                }} className='text-sm font-medium'>
                    {isBreak ? 'Back to work':'Call it a break'}
                </button>
            )}
        </div>
        <div className='tasks w-full flex flex-col max-w-screen-sm mx-auto gap-4'>
            <h2 className='text-xl font-semibold'>Tasks</h2>
            <ul className='w-full gap-3'>
                {subPathState.map((subpath, index) => (
                    <li key={index} className={cn('flex items-center gap-2 border w-full rounded-md p-4 justify-between px-6', completedTasks.includes(subpath) && 'opacity-50')}>
                        <p className='font-medium'>
                            {subpath.title}
                        </p>
                        <Check />
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default PomodoroTimer