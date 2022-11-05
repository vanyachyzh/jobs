import React from 'react';
import "../index.css";
import SvgSelector from '../img/SvgSelector';

const Switcher: React.FunctionComponent = () => {


    return (
        <div className='m-auto mt-[49px] bg-white h-[52px] w-[515px] rounded-[10.4px] flex justify-center items-center gap-[30.96px] max-[414px]:w-[396px] max-[414px]:h-[40px] max-[414px]:gap-[23px] max-[414px]:mt-[26px] max-[414px]:mb-[26px]'>
            <SvgSelector id="arrow"></SvgSelector>
            <ul className=' w-[375.3px] h-[31.2px] flex justify-center items-center border-solid border-x-2 border-x-[#DEE3EF] gap-[8px] text-[#70778B] text-[20px] font-bold max-[414px]:gap-[6px] max-[414px]:w-[289px] max-[414px]:text-[16px]'>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>1</li>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>1</li>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>1</li>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>1</li>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>1</li>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>...</li>
                <li className='w-[31px] h-[31px] max-[414px]:w-[24px] max-[414px]:h-[24px]'>18</li>
            </ul>
            <div className='rotate-180'><SvgSelector id="arrow"></SvgSelector></div>

        </div>

    )
}

export default Switcher