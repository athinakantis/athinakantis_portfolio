import { Github, Linkedin, Mail, } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export const Contact = () => {


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="contact-container">
      <h1>Our next project starts here!</h1>
      <div id="contact-actions-container">

        <button onClick={() =>
          window.open('mailto:athina.kantis@gmail.com')}>Send me an email
          <Mail />
        </button>
      </div>
      <div id="socials">
        <ul>
          <li>
            <Link to='https://github.com/athinakantis'>
              <Github />
            </Link>
          </li>
          <li>
            <Link to='https://www.linkedin.com/in/athina-kantis'>
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>
    </motion.section >
  )
}