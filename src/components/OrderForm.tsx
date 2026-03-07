import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import Icon from "@/components/ui/icon"

const SEND_ORDER_URL = "https://functions.poehali.dev/c6f8405e-48bd-4821-9247-1c4045ffb439"

const serviceOptions = [
  "Дезинсекция (насекомые)",
  "Дератизация (грызуны)",
  "Дезинфекция",
  "Комплексная обработка",
  "Обработка предприятия",
  "Акарицидная обработка",
  "Дезодорация",
]

export function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", address: "", area: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setError("")

    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        setForm({ name: "", phone: "", service: "", address: "", area: "", message: "" })
      } else {
        throw new Error(data.error || "Ошибка отправки")
      }
    } catch (e) {
      setStatus("error")
      setError(e instanceof Error ? e.message : "Что-то пошло не так. Позвоните нам напрямую.")
    }
  }

  return (
    <section id="order-form" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-green-400 text-sm uppercase tracking-widest font-medium mb-4">Онлайн-заявка</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Оставьте заявку —{" "}
              <span className="text-gradient">перезвоним за 15 минут</span>
            </h2>
            <p className="text-white/60 text-lg">Бесплатный выезд специалиста для оценки объёма работ</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <Icon name="CheckCircle" size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Заявка отправлена!</h3>
                    <p className="text-white/60 mb-6">Наш специалист свяжется с вами в течение 15 минут</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 rounded-full border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Ваше имя *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Иван Иванов"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Телефон *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+7 923 000 00-00"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Услуга</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all appearance-none"
                      >
                        <option value="" className="bg-gray-900">Выберите услугу</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-gray-900">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Адрес объекта</label>
                        <input
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          placeholder="ул. Ленина, 10"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/60 mb-2">Площадь, м²</label>
                        <input
                          type="text"
                          name="area"
                          value={form.area}
                          onChange={handleChange}
                          placeholder="например, 60"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-white/60 mb-2">Комментарий</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Опишите проблему или укажите площадь помещения..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <Icon name="AlertCircle" size={18} className="text-red-400 shrink-0" />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        <>
                          <Icon name="Send" size={20} />
                          Отправить заявку
                        </>
                      )}
                    </button>

                    <p className="text-xs text-white/30 text-center">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <a
              href="tel:+79233150897"
              className="flex items-center gap-2 px-5 py-3 glass rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              <Icon name="Phone" size={18} className="text-green-400" />
              +7 923 315 08-97
            </a>
            <a
              href="mailto:infoekokomfort@bk.ru"
              className="flex items-center gap-2 px-5 py-3 glass rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              <Icon name="Mail" size={18} className="text-green-400" />
              infoekokomfort@bk.ru
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}