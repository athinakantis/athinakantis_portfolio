import { motion } from 'motion/react'

export const Spinner = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="spinner-container">
      <img src="/debugging.gif" alt="" />
      <p>Loading...</p>
    </motion.div >
  )
}