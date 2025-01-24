"use client"
import React, { createContext } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import items from '../constants/accordionData';



const QuestionAccordion = () => {
    return (
        <div className='text-justify media-max-545px:text-[14px]'>
            <Accordion allowToggle>
    {
        items.map((item,id)=>{
            return(
                <AccordionItem key={id}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' className='font-bold' textAlign='left'>
                                {item.heading}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className='media-max-545px:text-[14px] '>
                      {item.content}
                    </AccordionPanel>
                </AccordionItem>

            )
        })
    }
            </Accordion>
        </div>
    )
}

export default QuestionAccordion
