import React, { useEffect, useState, useRef } from 'react';
import JobList from './components/JobList';
import DetailedJob from './components/DetailedJob';
import './index.css';


function App() {
  let [list, setList] = useState<any>([])
  let [key, setKey] = useState(0)
  let [isChecked, setIsChecked] = useState(false)

  function showPage(key: number) {
    setIsChecked(true)
    setKey(key)
    window.scrollTo(0, 0)
  }

  function backToList() {
    setIsChecked(false)
  }

  useEffect(() => {
    fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
      .then(r => r.json())
      .then(r => {
        setList(r)
      })
  }, [])
  return (
    <div className='w-[100%]  pt-[29px] pb-[49px]'>
      <div className=" m-auto w-[1400px] max-[414px]:w-[414px] max-[414px]:mt-[9px]">
        <JobList isChecked={isChecked} showPage={showPage} list={list}></JobList>
        <DetailedJob isChecked={isChecked} showPage={showPage} backToList={backToList} keyArg={key}></DetailedJob>
      </div>
    </div>

  );
}

export default App;
