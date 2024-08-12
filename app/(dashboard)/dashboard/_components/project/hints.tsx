"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  

const ProjectHintsList = ({hints}:{hints: string[]}) => {
  return (
    <Accordion type="single" collapsible>
        {hints.map((hint, index) => (
            <AccordionItem key={index+1} value={`hint-${index+1}`}>
                <AccordionTrigger>Hint {index+1}</AccordionTrigger>
                <AccordionContent>
                    {hint}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>

  )
}

export default ProjectHintsList