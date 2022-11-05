import React, { useState } from 'react';
import "../index.css";
import SvgSelector from '../img/SvgSelector';
import Switcher from './Switcher';

interface Props {
    list: [any],
    showPage: (keyArg:number) => void,
    isChecked: boolean
}

let currentKey =1

const JobList: React.FunctionComponent<Props> = ({ list, showPage, isChecked}) => {


    return (
        !isChecked ?(           <ul>
            {list.map((item, key) => {
                return (<li onClickCapture={(e)=>{currentKey = key}} key={item.id} className='bg-[#FFFFFF] h-[164px] rounded-lg relative mb-[8px] max-[414px]:h-[206px] max-[414px]:w-[396px] max-[414px]:m-auto max-[414px]:mb-[8px] max-[414px]:bg-[#EFF0F5] max-[414px]:overflow-hidden '>

                    <img className='absolute top-[24px] left-[16px] w-[85px] h-[85px] rounded-full  max-[414px]:top-[45px] max-[414px]:w-[66px] max-[414px]:h-[66px] ' src={item.pictures[0]} alt="User photo" />

                    <div onClickCapture={()=>{showPage(currentKey)}} className='absolute top-[24px] left-[127px] w-[850px] h-[50px] font-bold text-[20px] leading-6 text-[#3A4562] max-[414px]:top-[44px] max-[414px]:left-[101px] max-[414px]:w-[278px] max-[414px]:h-[48px] max-[414px]:text-[18px] max-[414px]:font-normal max-[414px]:overflow-hidden max-[414px]:leading-6 cursor-pointer	'>{item.title}</div>

                    <div className='absolute top-[82px] left-[127px] w-[712px] font-normal text-[16px] leading-6 text-[#878D9D] max-[414px]:text-[16px] max-[414px]:font-normal max-[414px]:w-[279px] max-[414px]:h-[50px] max-[414px]:left-[101px] max-[414px]:top-[97px]'>Department name •  {item.name}</div>

                    <div className='absolute top-[116px] left-[127px] w-[712px] flex justify-start items-center gap-[8px] text-[#878D9D] max-[414px]:top-[155px] max-[414px]:left-[101px]'>
                        <SvgSelector id="location"></SvgSelector> {item.address}
                    </div>

                    <div className='absolute top-[73px] left-[1118px] flex justify-start max-[414px]:top-[17px] max-[414px]:left-[101px]'>
                        <SvgSelector id="star"></SvgSelector>
                        <SvgSelector id="star"></SvgSelector>
                        <SvgSelector id="star"></SvgSelector>
                    </div>

                    <div className='absolute top-[23.33px] right-[24px] max-[414px]:hidden'><SvgSelector id="bookmark"></SvgSelector></div>

                    <div className='absolute bottom-[24px] right-[16px]  text-[#878D9D] text-[16px] max-[414px]:top-[13px] max-[414px]:text-[14px] max-[414px]:font-light '> Posted {Math.round((Date.now() - Date.parse(item.createdAt)) / 86400000)} days ago</div>
                </li>)
            })}

            <Switcher></Switcher>

        </ul>): null


    )
}

export default JobList

