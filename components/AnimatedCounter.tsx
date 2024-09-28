'use client';
import CountUp from 'react-countup'
import { formatAmount } from '../lib/utils';

const AnimatedCounter = ({ amount } : { amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp end={amount} duration={2} formattingFn={formatAmount}/>
    </div>
  )
}

export default AnimatedCounter