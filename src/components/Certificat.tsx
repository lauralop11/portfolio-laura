import { animate, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll} from "motion/react";
import { useRef } from "react";

export default function Certificat() {
  const totalImage = 38;
  const images = Array.from({length: totalImage}).map((_,i) => `/portfolio-laura/assets/certificats/img${i + 1}.jpeg`);
  const ref = useRef(null)
  const maskImage = useScrollOverflowMask()

return (
  <div id="Banner">
      <motion.ul ref={ref} style={{ maskImage }} className="h-[220px]">
        {images.map((img, index) => (
          <li>
            <img src={img} alt="Photo" className="rounded-sm" />
          </li>
        ))
        }
      </motion.ul>
      <StyleSheet />
  </div>
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
      {`#Banner {
        width: 100vw;
        position: relative;
        }
        #Banner .bg {
          stroke: #0b1011;
        }
        #Banner ul {
          display: flex;
          list-style: none;
          overflow-x: scroll;
          padding: 20px 0;
          flex: 0 0 600px;
          margin: 0 auto;
          gap: 20px;
          }
        #Banner li {
          flex: 0 0 200px;
          background: var(--accent);
          }
      `}
    </style>
  )
}
