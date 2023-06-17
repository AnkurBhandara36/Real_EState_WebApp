import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState} from 'react-accessible-accordion';

    import 'react-accessible-accordion/dist/fancy-example.css';
    import { MdOutlineArrowDropDown} from 'react-icons/md';
    import data from '../../utlis/Accordion';
    import '../value/value.css'

function Value() {
    const[className,setClassName]=useState('')
  return (
    <div className='v-wrapper'>
        <div className='v-conatiner'>
            <div className='left'>
                <div className='image-containers'>
                    <img src='https://images.pexels.com/photos/3639539/pexels-photo-3639539.jpeg?auto=compress&cs=tinysrgb&w=300' alt='not load'/>
                </div>
            </div>


            <div className='v-right'>
                <span > Our Value</span>
                <span>Value We Give to You </span>
                <span className='para-1'>We always ready to help by providing the best services for you.
                <br/>
                We believe a good blace to live can make your life better
                </span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}>
               
                    {   
                            data.map((item,i)=>{
                        
                                return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton'>

                                            <AccordionItemState>
                                            {({expanded})=>{
                                                expanded ? setClassName("expanded"):
                                                setClassName("collapsed")
                                            }}

                                            </AccordionItemState>

                                            <div className='icon'>
                                                {item.icon}
                                            </div>
                                            <span className='heading'>
                                                {item.heading}
                                            </span>
                                            <div className='icon '>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                        
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className='panel'>{item.detail}</p>
                                 </AccordionItemPanel>                     
                                </AccordionItem>
                            )
                            })
                    }
                </Accordion>

            </div>
        </div>
      
    </div>
  )
}

export default Value
