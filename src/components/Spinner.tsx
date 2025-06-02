import { motion } from 'motion/react'
import debugging from '../assets/etc/debugging.gif'
import painting from '../assets/etc/painting.gif'
interface SpinnerProps {
  type?: 'Art' | 'Coding'
}

export const Spinner = ({ type = 'Coding' }: SpinnerProps) => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="spinner-container">
      <img src={type === 'Coding' ? debugging : painting} alt="" />
      <p>Loading...</p>
    </motion.div >
  )
}