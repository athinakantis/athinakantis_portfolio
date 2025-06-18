import { motion } from 'motion/react';
import './AnimatedLogo.css';

type AnimatedLogoProps = {
  isFirstVisit: boolean;
};

export const AnimatedLogo = ({ isFirstVisit }: AnimatedLogoProps) => {
  return (
    <div id='animatedlogo'>
      <svg
        width='85'
        id='athina_a_1'
        height='89'
        viewBox='0 0 85 89'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? { pathLength: 1, opacity: 1, transition: { duration: 0.1 } }
              : {}
          }
          d='M48.2773 15.0476C48.2773 15.0476 30.8873 -0.732424 19.5573 18.6876C8.22726 38.1076 2.97726 74.1076 19.5573 75.7176C36.1373 77.3276 47.8673 36.4776 48.2773 19.4976C48.2773 19.4976 47.4673 65.2076 55.9673 74.1076C64.4673 83.0076 70.9373 80.9876 75.7873 68.0376'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        width='34'
        id='athina_t_1'
        height='134'
        viewBox='0 0 34 134'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.1 },
              }
              : {}
          }
          d='M12.63 8.5C12.63 8.5 3.33004 110.03 12.63 121.76C21.93 133.49 25.17 112.86 25.17 112.86'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        width='64'
        id='athina_t_2'
        height='32'
        viewBox='0 0 64 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.2 },
              }
              : {}
          }
          d='M8.5 22.67C8.5 22.67 47.87 5.06001 52.72 9.10001C57.57 13.14 52.99 14.04 52.99 14.04'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='athina_h'
        width='50'
        height='139'
        viewBox='0 0 50 139'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.3 },
              }
              : {}
          }
          d='M12.6801 8.5C12.6801 8.5 11.6701 17.13 10.0701 26.83C7.8601 40.24 8.6301 113.94 8.6301 113.94C8.6301 113.94 15.9101 62.16 31.8201 62.97C47.7301 63.78 37.2101 95.06 37.2101 95.06C37.2101 95.06 29.1201 128.5 27.5001 129.58'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        width='52'
        id='athina_i'
        height='85'
        viewBox='0 0 52 85'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.4 },
              }
              : {}
          }
          d='M9 17.227C9 17.227 27.61 3.74697 40.28 11.297C52.95 18.847 20.32 42.037 20.32 42.037C20.32 42.037 15.2 44.467 22.21 45.547C29.22 46.627 38.66 48.787 36.77 51.747C34.88 54.707 22.21 67.117 24.37 70.627C26.53 74.137 28.95 76.117 28.95 76.117'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='athina_i_x_1'
        width='50'
        height='36'
        viewBox='0 0 50 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.5 },
              }
              : {}
          }
          d='M8.5 8.5C8.5 8.5 38.46 26.84 40.89 26.57'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='athina_i_x_2'
        width='49'
        height='44'
        viewBox='0 0 49 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.6 },
              }
              : {}
          }
          d='M9.34 35.33C9.34 35.33 7.45 33.17 9.34 32.36C11.23 31.55 24.14 8.48999 39.77 8.48999'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='athina_n'
        width='69'
        height='142'
        viewBox='0 0 69 142'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.7 },
              }
              : {}
          }
          d='M18.85 8.5C18.85 8.5 12.55 67.22 18.85 80.78C18.85 80.78 7.07004 77.57 8.64004 62.32C10.63 42.9 28.01 20.98 50.29 21.22C72.57 21.46 48.16 94.1 48.16 94.1C48.16 94.1 34.6 136.73 42.59 133.09C50.58 129.45 48.4 131.15 48.4 131.15'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='athina_a_2'
        width='62'
        height='85'
        viewBox='0 0 62 85'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.8 },
              }
              : {}
          }
          d='M39.0301 8.56999C39.0301 8.56999 15.3701 5.76999 10.1101 34.57C4.85009 63.37 14.1501 68.13 14.1501 68.13C14.1501 68.13 17.9901 71.06 22.8501 66.61C27.7101 62.16 42.0601 50.43 40.0401 11.4C40.0401 11.4 31.9501 65.2 49.9501 75.71H53.1901'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='kantis_k_1'
        width='43'
        height='104'
        viewBox='0 0 43 104'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 0.9 },
              }
              : {}
          }
          d='M8.5 8.5C8.5 8.5 29.57 80.23 32.81 95.33C36.05 110.43 29.57 80.23 29.57 80.23'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='kantis_k_2'
        width='57'
        height='70'
        viewBox='0 0 57 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1 },
              }
              : {}
          }
          d='M41.566 9C41.566 9 7.74599 52.44 9.03599 57.01C9.03599 57.01 46.156 58.89 48.316 60.51'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='kantis_a_1'
        width='54'
        height='90'
        viewBox='0 0 54 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.2 },
              }
              : {}
          }
          d='M9 76.7629C9 76.7629 17.09 11.2329 28.15 9.07285C39.21 6.91285 48.37 53.2929 43.52 80.5329'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='kantis_a_2'
        width='60'
        height='20'
        viewBox='0 0 60 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_27_34)'>
          <motion.path
            className='letter_path'
            initial={
              isFirstVisit
                ? { pathLength: 0, opacity: 0 }
                : { pathLength: 1, opacity: 1 }
            }
            animate={
              isFirstVisit
                ? {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.1, delay: 1.3 },
                }
                : {}
            }
            d='M8.5 11.2C8.5 11.2 41.44 9.04 50.86 8.5'
            stroke='#443FCC'
            strokeWidth='17'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_27_34'>
            <rect
              width='59.36'
              height='19.7'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        id='kantis_n'
        width='55'
        height='78'
        viewBox='0 0 55 78'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.4 },
              }
              : {}
          }
          d='M9.04996 68.561C9.04996 68.561 10.4 17.721 9.04996 9.701C7.69996 1.681 34.13 65.051 37.36 68.561C37.36 68.561 36.55 22.181 46.26 14.361'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='kantis_t_1'
        width='28'
        height='86'
        viewBox='0 0 28 86'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.5 },
              }
              : {}
          }
          d='M8.5 76.6C8.5 76.6 11.92 19.68 18.98 8.5'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='kantis_t_2'
        width='55'
        height='23'
        viewBox='0 0 55 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.6 },
              }
              : {}
          }
          d='M9 9C9 9 18.92 9.26 28.64 10.2C36.19 10.93 43.62 12.08 46.21 13.85'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='kantis_i'
        width='30'
        height='72'
        viewBox='0 0 30 72'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.7 },
              }
              : {}
          }
          d='M20.9568 9C20.9568 9 7.74685 54.3 9.09685 62.66'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='kantis_i_x'
        width='24'
        height='22'
        viewBox='0 0 24 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.8 },
              }
              : {}
          }
          d='M14.89 8.5C14.89 8.5 2.26002 12.28 12.51 12.54'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        id='kantis_s'
        width='69'
        height='112'
        viewBox='0 0 69 112'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 1.9 },
              }
              : {}
          }
          d='M60.23 9C60.23 9 28.14 9.54 29.22 28.96C30.3 48.38 52.68 49.72 46.48 71.84C40.28 93.96 18.44 109.05 9 99.88'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='kantis_s_x'
        width='24'
        height='22'
        viewBox='0 0 24 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 2 },
              }
              : {}
          }
          d='M14.89 8.5C14.89 8.5 2.26002 12.28 12.51 12.54'
          stroke='#443FCC'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        width='219'
        id='long_line'
        height='27'
        viewBox='0 0 219 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 2.4 },
              }
              : {}
          }
          className='letter_path'
          d='M9 18.2416C9 18.2416 174.44 6.91163 209.63 9.34163'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg
        id='short_line'
        width='79'
        height='23'
        viewBox='0 0 79 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          className='letter_path'
          initial={
            isFirstVisit
              ? { pathLength: 0, opacity: 0 }
              : { pathLength: 1, opacity: 1 }
          }
          animate={
            isFirstVisit
              ? {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.1, delay: 2.6 },
              }
              : {}
          }
          d='M8.5 13.35C8.5 13.35 47.04 16.59 69.96 8.5'
          stroke='#E969FF'
          strokeWidth='17'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};
