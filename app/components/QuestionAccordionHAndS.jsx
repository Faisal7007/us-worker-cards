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
import items from '../healthAndSafetyData';



const QuestionAccordionHAndS = () => {
    return (
        <div>
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
                    <AccordionPanel pb={4}>
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

export default QuestionAccordionHAndS
