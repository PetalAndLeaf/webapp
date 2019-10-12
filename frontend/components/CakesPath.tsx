import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles/theme'

const strokeVariants = {
  hidden: {
    pathLength: 0
  },
  visible: (i: number) => ({
    pathLength: 1,
    transition: {
      duration: 0.5,
      delay: (i + 1) * 0.8,
      ease: 'easeInOut'
    }
  })
}

export default function CakesPath({ width = '1440' }) {
  return (
    <motion.svg
      width={width}
      // height={height}
      viewBox="0 0 1440 900"
      fill="none"
      initial={false}
      x="0px"
      y="0px"
    >
      <motion.path
        stroke-miterlimit="10"
        strokeWidth="3"
        stroke="#ffffff"
        variants={strokeVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        d="M379.8,594.1c-20.4-39.2-24.6-74.9,6.3-120.8c15.1-22.5,35.9-32.4,61.2-43.9c85.6-39.2,130.3-9.1,164.8-43.9
c32.9-33.2,7.1-75.5,37.7-105.1c36.8-35.7,111.6-12.2,146-1.6c15.8,4.9,232.2,74.8,237,229.1c1.4,44.9-6.6,106.3-37.7,117.7
c-34.6,12.7-83.2,25.1-133.4-31.4c-11.2-12.6-24.8,10.3-39.2,18.8c-61,36.3-103,41.2-158.8,47.8c-73.1,8.6-118.5,14.5-188.1-2.1
C428.4,647.5,400.2,633.3,379.8,594.1z"
      />
      <motion.path
        stroke-miterlimit="10"
        strokeWidth="3"
        fill="none"
        stroke="#ffffff"
        variants={strokeVariants}
        initial="hidden"
        animate="visible"
        strokeDasharray="12,12"
        custom={1}
        d="M839.4,620.2c-2.8,2.3-5.7,4.6-8.9,6.4c-63.8,38-108.4,43.2-164.8,49.9l-4.6,0.5c-38.1,4.5-68.3,8.1-99.3,8.1
        c-30,0-58.6-3.5-90.1-11c-49.4-11.8-82.6-27.4-106.2-72.7c-26-50-23.8-91,7.2-137.1c18-26.7,43.3-38.3,67.8-49.6
        c45.8-21,80.2-23.2,107.8-25.1c26.6-1.8,40-3.2,52.3-15.6c12.6-12.7,13.8-27.7,15.2-44.9c1.6-19.6,3.4-41.7,22.7-60.5
        c16.1-15.6,39-23.5,68.1-23.5c34.9,0,71.1,11.2,92.8,17.9l0.9,0.3c6.7,2.1,67.6,21.5,126.7,60.5c34.1,22.5,61.6,47.5,81.5,74.2
        c25.3,33.9,38.8,70.6,40,109.3c0.8,26.8-0.2,115.6-48.2,133.2c-15.8,5.8-34.9,11.7-56.4,11.7c-29.9,0-57.7-11.9-82.8-35.4"
      />
      <motion.path
        id="p1"
        stroke-miterlimit="16"
        strokeWidth="10"
        stroke={styles.palette.primary.main}
        variants={strokeVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        d="M359.5,455.4c20.5-30.5,47.9-43,74.4-55.2c48.5-22.2,86-24.7,113.4-26.5c25.2-1.7,34.1-2.9,42-10.9
c8.1-8.2,9.2-17.1,10.6-34.9c1.6-20.1,3.8-47.7,27.5-70.7c19.2-18.6,45.9-28,79.3-28c37.3,0,75,11.6,97.5,18.6l0.9,0.3"
      />
      <motion.path
        stroke-miterlimit="16"
        strokeWidth="10"
        stroke={styles.palette.primary.main}
        variants={strokeVariants}
        initial="hidden"
        animate="visible"
        custom={3}
        d="M1021.4,388.4c27.4,36.6,41.9,76.4,43.2,118.4c1.2,37.8-2.2,128.1-58.6,148.7c-17.1,6.3-37.9,12.7-61.9,12.7"
      />
      <motion.path
        stroke-miterlimit="16"
        strokeWidth="10"
        stroke={styles.palette.primary.main}
        variants={strokeVariants}
        initial="hidden"
        animate="visible"
        custom={4}
        d="M838.7,640.4c-66.7,39.7-115.1,45.4-171.1,52L663,693c-38.7,4.6-69.2,8.2-101.2,8.2c-31.3,0-61.1-3.6-93.8-11.4
"
      />

      {/* <g>
        <g>
          <motion.path
            class="st3"
            d="M857,612.6c-1.4-1.4-2.8-2.8-4.2-4.3c-1.4,1.1-3,2.6-4.5,3.9"
          />
          <motion.path
            class="st4"
            d="M839.4,620.2c-2.8,2.3-5.7,4.6-8.9,6.4c-63.8,38-108.4,43.2-164.8,49.9l-4.6,0.5c-38.1,4.5-68.3,8.1-99.3,8.1
        c-30,0-58.6-3.5-90.1-11c-49.4-11.8-82.6-27.4-106.2-72.7c-26-50-23.8-91,7.2-137.1c18-26.7,43.3-38.3,67.8-49.6
        c45.8-21,80.2-23.2,107.8-25.1c26.6-1.8,40-3.2,52.3-15.6c12.6-12.7,13.8-27.7,15.2-44.9c1.6-19.6,3.4-41.7,22.7-60.5
        c16.1-15.6,39-23.5,68.1-23.5c34.9,0,71.1,11.2,92.8,17.9l0.9,0.3c6.7,2.1,67.6,21.5,126.7,60.5c34.1,22.5,61.6,47.5,81.5,74.2
        c25.3,33.9,38.8,70.6,40,109.3c0.8,26.8-0.2,115.6-48.2,133.2c-15.8,5.8-34.9,11.7-56.4,11.7c-29.9,0-57.7-11.9-82.8-35.4"
          />
        </g>
      </g>
      <g>
        <motion.line class="st5" x1="445.5" y1="286.3" x2="475.2" y2="286.3" />
        <motion.line class="st5" x1="434.3" y1="248.4" x2="434.3" y2="273.7" />
        <motion.path class="st5" d="M422.9,286.3" />
        <motion.path class="st5" d="M386.8,286.3" />
        <motion.path class="st5" d="M422.9,286.3" />
        <motion.line class="st5" x1="397.9" y1="286.3" x2="422.9" y2="286.3" />
        <motion.path class="st5" d="M439.2,297.1" />
        <motion.line class="st5" x1="434.3" y1="324.2" x2="434.3" y2="297.1" />
      </g>
      <g>
        <motion.line class="st5" x1="1045.1" y1="230.5" x2="1088" y2="230.5" />
        <motion.line
          class="st5"
          x1="1028.9"
          y1="175.9"
          x2="1028.9"
          y2="212.3"
        />
        <motion.path class="st5" d="M1012.5,230.5" />
        <motion.path class="st5" d="M960.4,230.5" />
        <motion.path class="st5" d="M1012.5,230.5" />
        <motion.line class="st5" x1="976.4" y1="230.5" x2="1012.5" y2="230.5" />
        <motion.path class="st5" d="M1035.9,246.1" />
        <motion.line
          class="st5"
          x1="1028.9"
          y1="285.2"
          x2="1028.9"
          y2="246.1"
        />
      </g>
      <g>
        <motion.line class="st5" x1="956" y1="755.5" x2="979.1" y2="755.5" />
        <motion.line class="st5" x1="947.4" y1="726.1" x2="947.4" y2="745.7" />
        <motion.path class="st5" d="M938.6,755.5" />
        <motion.path class="st5" d="M910.6,755.5" />
        <motion.path class="st5" d="M938.6,755.5" />
        <motion.line class="st5" x1="919.2" y1="755.5" x2="938.6" y2="755.5" />
        <motion.path class="st5" d="M951.1,763.9" />
        <motion.line class="st5" x1="947.4" y1="784.8" x2="947.4" y2="763.9" />
      </g> */}
    </motion.svg>
  )
}
