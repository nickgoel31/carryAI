"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
  

const ModuleAccordions = ({moduleTitle}:{moduleTitle:string}) => {
  return (
    <div className='space-y-5'>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="text-lg font-semibold">
                        Certifications
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-lg">Coursera</p>
                            <Button asChild variant={'link'}>
                                <Link target="_blank" href={`https://www.coursera.com/search?query=${moduleTitle}`}>
                                    Seach for courses
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Free courses</p>
                            <div>
                                <p>FreeCodeCamp</p>
                                <p>Codecademy</p>
                                <p>Udemy</p>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default ModuleAccordions