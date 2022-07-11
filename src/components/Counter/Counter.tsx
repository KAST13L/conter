import React from 'react';
import s from './Counter.module.css'
import {Button} from "../UI/Button/Button";

type CounterPropsType = {
    count: number
    setCount: (count: number) => void
    increment: () => void
    resetCount: () => void
    maxValue: number
    startValue: number
    isChange: boolean
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div>
            <div className={s.count}>
                {props.startValue < props.maxValue && props.startValue >= 0
                    ? <div>
                        {props.isChange
                            ?
                            <div style={{fontSize: '35px', paddingTop: '50px'}}>enter values and press 'set'</div>
                            : props.startValue < 0 || props.maxValue < props.startValue
                                ?  <div style={{color:'red'}}>error</div>
                                : <div className={props.count === props.maxValue ? s.error : ''}>
                                    {props.isChange ? "enter values and press 'set'" : props.count}
                                </div>

                        }
                    </div>
                    : <span style={{color:'red'}}>error</span>
                }
            </div>
            <div className={s.functional}>
                <Button title={'inc'} callBack={props.increment}
                        disabled={props.count === props.maxValue || props.isChange}/>
                <Button title={'reset'} callBack={props.resetCount}
                        disabled={props.count === props.startValue || props.isChange}/>
            </div>
        </div>
    );
};

