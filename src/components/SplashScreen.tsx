import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LOGO_URL =
  "https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/bucket/06a7f2de-fa3f-427a-9ac0-03898357dbcf.png"

export function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
        >
          <motion.img
            src={LOGO_URL}
            alt="ЭкоКомфорт"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ mixBlendMode: "screen" }}
            className="w-[min(60vw,360px)] h-auto object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
