import React from 'react';
import "../index.css";
import SvgSelector from '../img/SvgSelector';

type Props = {
    text: string,
    isAddition: boolean

}

const Title: React.FunctionComponent<Props> = ({ text, isAddition }) => {
    return (
        // if isAddition is true then render Title with additional share and save-list 
        isAddition && window.screen.width >= 414

            ? (<div className='  h-[52px] w-[723px] max-[414px]:w-[382px] flex justify-between flex-wrap gap-[24px] text-[28px] text-[#3A4562] font-bold border-b-2 solid border-gray-200'>
                {text}
                <div className='flex justify-center '>
                    <div className='h-[52px] flex justify-center items-center text-[18px] font-normal mr-[31px]'>
                        <div className='mr-[16px]'><SvgSelector id="bookmark"></SvgSelector></div>
                        Save to my list
                    </div>
                    <div className='h-[52px] flex justify-center items-center text-[18px] font-normal'>
                        <div className='mr-[16px]'><SvgSelector id="share"></SvgSelector></div>
                        Share
                    </div>
                </div>
            </div>) :
            // if isAddition is false then render just Title 
            !isAddition && window.screen.width >= 414
                ? (<div className=' h-[52px] w-[723px] max-[414px]:w-[382px] flex justify-between flex-wrap gap-[24px] text-[28px] text-[#3A4562] font-bold border-b-2 solid border-gray-200'>
                    {text}
                </div>) :
                // if isAddition is true and device is mobile then render Title with star addition
                isAddition && window.screen.width <= 414
                    ? (<div className='  h-[52px] w-[723px] max-[414px]:w-[382px] flex justify-between flex-wrap gap-[24px] text-[28px] text-[#3A4562] font-bold border-b-2 solid border-gray-200'>
                        {text}
                        <div className='flex justify-center '>
                            <div className='h-[52px] flex justify-center items-center text-[18px] font-normal mr-[31px]'>
                                <div className='mr-[16px]'><SvgSelector id="emptyStar"></SvgSelector></div>
                                Save to my list
                            </div>
                            <div className='h-[52px] flex justify-center items-center text-[18px] font-normal'>
                                <div className='mr-[16px]'><SvgSelector id="share"></SvgSelector></div>
                                Share
                            </div>
                        </div>
                    </div>) :
                    !isAddition && window.screen.width <= 414
                        ? (<div className=' h-[52px] w-[723px] max-[414px]:w-[382px] flex justify-between flex-wrap gap-[24px] text-[28px] text-[#3A4562] font-bold border-b-2 solid border-gray-200'>
                            {text}
                        </div>) : null
    )
}

export default Title