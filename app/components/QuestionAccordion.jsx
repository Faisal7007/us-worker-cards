"use client"
import React, { createContext } from 'react'
import items from '../accordionData';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const QuestionAccordion = () => {
    return (
        <div>
            <Accordion allowZeroExpanded className='mb-10'>
                {
                    items.map((item, id) => {
                        return (
                            <AccordionItem key={id}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {item.heading}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {item.content}
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default QuestionAccordion
