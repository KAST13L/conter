import React, {ChangeEvent} from 'react';
import s from './SettingsCounter.module.css'
import {Button} from "../UI/Button/Button";

type SettingsCounterPropsType = {
    count: number
    setCount: (number: number) => void
    maxValue: number
    startValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    changeMinMaxNumbers: (startValue: number, maxValue: number) => void
    setIsChange: (isChange:boolean) => void
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIsChange(true)
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIsChange(true)
        props.setStartValue(+e.currentTarget.value)
    }
    let errorButton = props.startValue < 0 || props.maxValue <= props.startValue
    const classNameErrorMaxValue = props.maxValue <= props.startValue ? s.error : '';
    const classNameErrorStartValue = props.startValue < 0 || props.startValue >= props.maxValue ? s.error : '';

    return (
        <div className={s.settingsPage}>
            <div className={s.numbers}>
                <span>Max value: </span>
                <input
                    type="number"
                    value={props.maxValue}
                    onChange={onChangeMaxValueHandler}
                    className={classNameErrorMaxValue}
                /><br/>
                <span>Start value: </span>
                <input
                    type="number"
                    value={props.startValue}
                    onChange={onChangeMinValueHandler}
                    className={classNameErrorStartValue}
                />
            </div>
            <div className={s.functional}>
                <Button title={'Set'}
                         callBack={() => {
                             props.changeMinMaxNumbers(props.startValue, props.maxValue)
                         }}
                         disabled={errorButton}
            />
            </div>
        </div>
    );
};

