import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter/Counter";
import s from './App.module.css'
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";
//sad
export const App = () => {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState<number>(startValue)
    const [isChange,setIsChange] = useState<boolean>(false)

    const increment = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(startValue)
    }
    const changeMinMaxNumbers = (startValue: number, maxNumb: number) => {
        setIsChange(false);
        setStartValue(startValue)
        setMaxValue(maxNumb)
        setCount(startValue)
    }

    useEffect(()=>{
        let valueAsString = localStorage.getItem('countValue')
        if (valueAsString){
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
        let valueAsStringMaxValue = localStorage.getItem('maxValue')
        if (valueAsStringMaxValue){
            let newValue = JSON.parse(valueAsStringMaxValue)
            setMaxValue(newValue)
        }
        let valueAsStringStartValue = localStorage.getItem('startValue')
        if (valueAsStringStartValue){
            let newValue = JSON.parse(valueAsStringStartValue)
            setStartValue(newValue)
        }

    }, [])
    useEffect(()=>{
        localStorage.setItem('countValue', JSON.stringify(count))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [count])

  return (
    <div className={s.main}>
        <div className={s.app}>
            <SettingsCounter
                count={count}
                setCount={setCount}
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                changeMinMaxNumbers={changeMinMaxNumbers}
                setIsChange={setIsChange}
            />
        </div>
        <div className={s.app}>
            <Counter
                count={count}
                setCount={setCount}
                increment={increment}
                resetCount={resetCount}
                maxValue={maxValue}
                startValue={startValue}
                isChange={isChange}
            />
        </div>
    </div>
  );
}


