import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../index.css";
import SvgSelector from '../img/SvgSelector';
import Title from './Title';


type Props = {
    title: string,
    salary: string,
    date: string,
    description: string,
    type: [],
    benefits: [],
    responsibilities: [],
    compensation: []
}

const JobInfo: React.FunctionComponent<Props> = ({ title, salary, date, description, type, benefits, responsibilities, compensation }) => {

    compensation.pop()
    return (
        window.screen.width >= 414 ? (<div>
            <div className='mt-[32px] w-[530px] max-[414px]:w-[382px] font-bold text-[23px] leading-6 text-[#3A4562]  max-[414px]:mt-[79px] max-[414px]:overflow-hidden max-[414px]:leading-6'>
                {title}
            </div>

            <div className='absolute max-[414px]:static max-[414px]:float-right max-[414px]:mt-[5px]  top-[175px] right-[535px] font-normal text-[17px] max-[414px]:text-[18px] leading-6 text-[#3A4562] '>
                <div className='font-bold text-[19px] max-[414px]:text-[20px] leading-6 text-[#3A4562]'>{salary}</div>
                Brutto, per year
            </div>

            <div className='mt-[7px] max-[414px]:mt-[21px] text-[#878D9D] font-normal text-[18px]'> Posted {Math.round((Date.now() - Date.parse(date)) / 86400000)} days ago</div>


            <p className='mt-[7px] max-[414px]:w-[382px] max-[414px]:mt-[21px] w-[721px] font-normal text-[18px] leading-6 text-[#3A4562] '>{description}</p>


            <div className='mt-[39px] max-[414px]:w-[382px] max-[414px]:mt-[43px] w-[721px] font-bold text-[20px] leading-6 text-[#3A4562]'>Responsopilities</div>

            <p className='mt-[12px] w-[721px] max-[414px]:w-[382px]  font-normal text-[18px] leading-6 text-[#3A4562]'> {responsibilities}</p>

            <div className='mt-[39px] max-[414px]:w-[382px] max-[414px]:mt-[20px] w-[721px] font-bold text-[20px] leading-6 text-[#3A4562]'>Compensation & Benefits:</div>

            <ul className=' p-0 mt-[20px] max-[414px]:w-[382px]'>
                {compensation.map((item) => {
                    return <li className='p-0 relative w-[721px] max-[414px]:w-[382px] font-normal text-[18px] leading-6 text-[#3A4562]' key={item}> <SvgSelector id='cube'></SvgSelector> {item} </li>
                })}
            </ul>

            <button className='uppercase max-[414px]:ml-[127px]  bg-[#384564] w-[127px] h-[52px] text-[12px] text-white font-semibold rounded-lg mt-[39px] mb-[86px] max-[414px]:mt-[30px] max-[414px]:mb-[135px]'>apply now</button>

            <Title isAddition={false} text='Additional Info'></Title>

            <h3 className='fonnt-sans-serif font-normal text-[18px] text-[#3A4562] mt-[15px] mb-[10px]'>Employment type</h3>

            <ul className='w-[701px] max-[414px]:w-[382px] flex justify-start align-center gap-[8px]'>
                {type.map((item) => {
                    return <li className='w-[222px] max-[414px]:w-[134px] h-[49px] bg-[#e1e6f4] text-center leading-[49px] text-[17px] font-bold text-[#55699E] border-[1px] solid border-[#55699E4D] rounded-lg' key={item}>{item}</li>;
                })}
            </ul>

            <h3 className='fonnt-sans-serif font-normal text-[18px] text-[#3A4562] mt-[15px] mb-[10px]'>Benefits</h3>

            <ul className='w-[701px] max-[414px]:w-[382px]  flex justify-start align-center gap-[8px] mb-[87px]'>
                {benefits.map((item) => {
                    return <li className='w-[222px] max-[414px]:w-[134px] h-[49px] bg-[#FFCF0026] text-center leading-[49px] text-[17px] font-bold text-[#988B49] border-[1px] solid border-[#FFCF00] rounded-lg' key={item}>{item}</li>;
                })}
            </ul>

            <Title text='Attached images' isAddition={false}></Title>

            <ul className='w-[701px] max-[414px]:w-[382px] flex justify-start align-center wrap gap-[8px] mt-[25px] max-[414px]:overflow-hidden'>
                <li className='w-[200px] overflow-hidden	 rounded-lg'><img src={require("../img/Bitmap.png")} alt="" /></li>
                <li className='w-[200px] overflow-hidden	 rounded-lg'><img src={require("../img/Bitmap (1).png")} alt="" /></li>
                <li className='w-[200px] overflow-hidden	 rounded-lg'><img src={require("../img/Bitmap3.png")} alt="" /></li>
            </ul>
        </div>) :
            (<div>
                <div className='mt-[32px] w-[530px] max-[414px]:w-[382px] font-bold text-[23px] leading-6 text-[#3A4562]  max-[414px]:mt-[79px] max-[414px]:overflow-hidden max-[414px]:leading-6'>
                    {title}
                </div>

                <div className='absolute max-[414px]:static max-[414px]:float-right max-[414px]:mt-[5px]  top-[175px] right-[535px] font-normal text-[17px] max-[414px]:text-[18px]  leading-6 text-[#3A4562] text-right'>
                    Brutto, per year
                    <div className='font-bold text-[19px] max-[414px]:text-[20px] leading-6 text-[#3A4562]'>{salary}</div>
                </div>

                <div className='mt-[7px] max-[414px]:mt-[21px] text-[#878D9D] font-normal text-[18px]'>{date}</div>


                <p className='mt-[7px] max-[414px]:w-[382px] max-[414px]:mt-[21px] w-[721px] font-normal text-[18px] leading-6 text-[#3A4562] '>{description}</p>


                <div className='mt-[39px] max-[414px]:w-[382px] max-[414px]:mt-[43px] w-[721px] font-bold text-[20px] leading-6 text-[#3A4562]'>Responsopilities</div>

                <p className='mt-[12px] w-[721px] max-[414px]:w-[382px]  font-normal text-[18px] leading-6 text-[#3A4562]'> {responsibilities}</p>

                <div className='mt-[39px] max-[414px]:w-[382px] max-[414px]:mt-[20px] w-[721px] font-bold text-[20px] leading-6 text-[#3A4562]'>Compensation & Benefits:</div>

                <ul className=' p-0 mt-[20px] max-[414px]:w-[382px]'>
                    {compensation.map((item) => {
                        return <li className='p-0 relative w-[721px] max-[414px]:w-[382px] font-normal text-[18px] leading-6 text-[#3A4562]' key={item}> <SvgSelector id='cube'></SvgSelector> {item} </li>
                    })}
                </ul>

                <button className='uppercase max-[414px]:ml-[127px]  bg-[#384564] w-[127px] h-[52px] text-[12px] text-white font-semibold rounded-lg mt-[39px] mb-[86px] max-[414px]:mt-[30px] max-[414px]:mb-[135px]'>apply now</button>

                <Title text='Attached images' isAddition={false}></Title>

                <ul className='w-[701px] max-[414px]:w-[382px] flex justify-start align-center wrap gap-[8px] mt-[25px] mb-[55px]  max-[414px]:overflow-hidden'>
                    <li className='w-[200px] overflow-hidden	 rounded-lg'><img src={require("../img/Bitmap.png")} alt="" /></li>
                    <li className='w-[200px] overflow-hidden	 rounded-lg'><img src={require("../img/Bitmap (1).png")} alt="" /></li>
                    <li className='w-[200px] overflow-hidden	 rounded-lg'><img src={require("../img/Bitmap3.png")} alt="" /></li>
                </ul>

                <Title isAddition={false} text='Additional Info'></Title>

                <h3 className='fonnt-sans-serif font-normal text-[18px] text-[#3A4562] mt-[15px] mb-[10px]'>Benefits</h3>

                <ul className='w-[701px] max-[414px]:w-[382px]  flex justify-start align-center gap-[8px] mb-[22px]'>
                    {benefits.map((item) => {
                        return <li className='w-[222px] max-[414px]:w-[134px] h-[49px] bg-[#FFCF0026] text-center leading-[49px] text-[17px] font-bold text-[#988B49] border-[1px] solid border-[#FFCF00] rounded-lg' key={item}>{item}</li>;
                    })}
                </ul>

                <h3 className='fonnt-sans-serif font-normal text-[18px] text-[#3A4562] mb-[10px]'>Employment type</h3>

                <ul className='w-[701px] max-[414px]:w-[382px] flex justify-start align-center gap-[8px] max-[414px]:mb-[63px]'>
                    {type.map((item) => {
                        return <li className='w-[222px] max-[414px]:w-[134px] h-[49px] bg-[#e1e6f4] text-center leading-[49px] text-[17px] font-bold text-[#55699E] border-[1px] solid border-[#55699E4D] rounded-lg' key={item}>{item}</li>;
                    })}
                </ul>

                <Title isAddition={false} text='Contacts'></Title>
            </div>)



    )
}

export default JobInfo