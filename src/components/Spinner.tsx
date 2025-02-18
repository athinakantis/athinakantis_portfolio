import { motion } from 'motion/react'

interface SpinnerProps {
  type?: 'Art' | 'Coding'
}

export const Spinner = ({ type = 'Coding' }: SpinnerProps) => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="spinner-container">
      <img src={type === 'Coding' ? '/debugging.gif' : '/painting.gif'} alt="" />
      <p>Loading...</p>
    </motion.div >
  )
}