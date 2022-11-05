import React, { useEffect, useState } from 'react';
import "../index.css";
import SvgSelector from '../img/SvgSelector';
import Title from './Title';
import JobInfo from './JobInfo';

interface Props {
    isChecked: boolean,
    showPage: (key: number) => void,
    backToList: () => void,
    keyArg: number
}

const DetailedJob: React.FunctionComponent<Props> = ({ isChecked, showPage, keyArg, backToList }) => {
    let [title, setTitle] = useState("")
    let [salary, setSalary] = useState("")
    let [description, setDescription] = useState("")
    let [date, setDate] = useState("")
    let [responsibilities, setResponsibilities] = useState<[]>([])
    let [compensation, setCompensation] = useState<[]>([])
    let [benefits, setBenefits] = useState<[]>([])
    let [type, setType] = useState<[]>([])


    useEffect(() => {
        fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
            .then(r => r.json())
            .then(r => {
                setTitle(r[keyArg].title)
                setDate(r[keyArg].createdAt)
                setSalary(r[keyArg].salary)
                setDescription(r[keyArg].description.split("Responsopilities:")[0])
                setResponsibilities(r[keyArg].description.split("Responsopilities:")[1])
                setCompensation(r[keyArg].description.split("Compensation & Benefits:")[1].split("."))
                setBenefits(r[keyArg].benefits)
                setType(r[keyArg].employment_type)
            })
    })

    return (

        isChecked
            ? (<div className='absolute top-0 left-0 w-[100%] bg-white'>
                <div className='w-[1258px] max-[414px]:w-[382px] mt-[56px] max-[414px]:mt-[24px] m-auto relative'>

                    <Title text='Job Details' isAddition={true}></Title>

                    <button className='uppercase bg-[#384564] w-[127px] h-[52px] text-[12px] text-white font-semibold rounded-lg mt-[39px] max-[414px]:hidden'>apply now</button>

                    <JobInfo compensation={compensation} responsibilities={responsibilities} date={date} title={title} salary={salary} description={description} benefits={benefits} type={type}></JobInfo>

                    <button onClick={backToList} className='uppercase max-[414px]:hidden bg-[#d7d8dd] w-[213px] h-[50px] text-[12px] text-[#3A4562] font-semibold rounded-lg mt-[89px] flex justify-center items-center gap-[19px] ml-[-90px] mb-[50px]'><SvgSelector id="arrow2"></SvgSelector>RETURN TO JOB BOARD</button>

                    <img className='absolute top-0 right-0 max-[414px]:static max-[414px]:mt-[24px] max-[414px]:mb-[30px]' src={require("../img/Contacts section.png")} alt="" />

                </div>
            </div>) : (null)
    )
}

export default DetailedJob
