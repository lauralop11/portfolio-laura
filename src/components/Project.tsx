import Card from "@components/Card";
import { animate, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll} from "motion/react";
import { useRef } from "react";

export default function Project ({translation}) {
  const totalImage = 38;
  const images = Array.from({length: totalImage}).map((_,i) => `/portfolio-laura/assets/certificats/img${i + 1}.jpeg`);
  const ref = useRef(null)
  const maskImage = useScrollOverflowMask()

return (
  <section id="projects" className="banner-cards m-5 md:flex flex-col items-center">
    <h2 className="text-2xl lg:text-4xl font-bold my-6 text-center">{translation.projects.title}</h2>
    <motion.ul ref={ref} style={{ maskImage }}>
        {translation.projects["items"].map((project, index) => (
          <li key={index}>
            <Card img={project.img} description={project.description} link={project.link}/>
          </li>
        ))
        }
    </motion.ul>
    <StyleSheet />
  </section>
  )
}

const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask() {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
    )
    useMotionValueEvent("change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            )
        } else {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${opaque})`
            )
        } 
    })

    return maskImage
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>
      {`.banner-cards {
        width: 100vw;
        position: relative;
        }
        .banner-cards .bg {
          stroke: #0b1011;
        }
        .banner-cards ul {
          display: flex;
          list-style: none;
          overflow-x: scroll;
          padding: 20px 0;
          flex: 0 0 600px;
          margin: 0 auto;
          gap: 5px;
          }
        .banner-cards li {
          flex: 0 0 200px;
          background: var(--accent);
          }
      `}
    </style>
  )
}
