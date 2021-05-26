import * as React from "react";
import { motion, useMotionValue, useTransform, } from "framer-motion";

export const Example = () =>        <motion.button
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
/>

// export const Example2 = () =>       <motion.div
// whileHover={{ scale: 1.1 }}
// whileTap={{ scale: 10.9 }}

// drag
// dragConstraints={{
//   top: -50,
//   left: -50,
//   right: 50,
//   bottom: 50,
// }}
// />

// export const Example3 = () => {
//   const x = useMotionValue(0)
//   const background = useTransform(
//     x,
//     [-100, 0, 100],
//     ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
//   )

//   return (
//     <motion.div style={{ background }}>
//       <motion.div
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x }}
//       >
//       </motion.div>
//     </motion.div>
//   )
// }
