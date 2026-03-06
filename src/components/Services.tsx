import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Bug",
    color: "text-green-400",
    bg: "bg-green-500/10",
    title: "Дезинсекция",
    description: "Уничтожение тараканов, клопов, муравьёв, блох, моли и других насекомых. Используем сертифицированные препараты, безопасные для людей и животных.",
    price: "от 2 500 ₽",
    priceNote: "Точная стоимость зависит от площади и степени заражения",
    details: ["Тараканы и клопы", "Муравьи и блохи", "Моль и мошки", "Гарантия до 12 месяцев"],
    serviceKey: "Дезинсекция (насекомые)",
  },
  {
    icon: "Shield",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Дезинфекция",
    description: "Обеззараживание помещений от вирусов, бактерий и грибков. Подходит для жилых домов, офисов, медицинских учреждений и предприятий общепита.",
    price: "от 1 800 ₽",
    priceNote: "Цена зависит от типа помещения и площади",
    details: ["Вирусы и бактерии", "Грибок и плесень", "Неприятные запахи", "Сертификат о проведении"],
    serviceKey: "Дезинфекция",
  },
  {
    icon: "Rat",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Дератизация",
    description: "Избавляем от крыс и мышей в жилых и производственных помещениях. Применяем современные методы без вреда для окружающей среды.",
    price: "от 3 500 ₽",
    priceNote: "Стоимость зависит от площади и типа объекта",
    details: ["Крысы и мыши", "Жилые и производственные", "Безопасные методы", "Гарантия результата"],
    serviceKey: "Дератизация (грызуны)",
  },
  {
    icon: "Building2",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    title: "Обработка предприятий",
    description: "Комплексная санитарная обработка складов, производств, ресторанов и торговых точек. Работаем по договору, выдаём все необходимые документы.",
    price: "от 8 000 ₽",
    priceNote: "Расчёт индивидуально — зависит от площади и перечня работ",
    details: ["Склады и производства", "Рестораны и кафе", "Торговые точки", "Полный пакет документов"],
    serviceKey: "Обработка предприятия",
  },
]

type Service = typeof services[number]

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const handleOrder = () => {
    onClose()
    setTimeout(() => {
      const section = document.getElementById("order-form")
      if (!section) return
      section.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const select = section.querySelector("select") as HTMLSelectElement | null
        if (select) {
          select.value = service.serviceKey
          select.dispatchEvent(new Event("change", { bubbles: true }))
        }
      }, 600)
    }, 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md bg-[#111] border border-white/10 rounded-3xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className={`mb-5 p-3 rounded-2xl ${service.bg} w-fit`}>
          <Icon name={service.icon} size={28} className={service.color} fallback="Shield" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>

        <div className="bg-white/5 rounded-2xl p-5 mb-6">
          <span className={`text-3xl font-bold ${service.color}`}>{service.price}</span>
          <p className="text-white/40 text-xs mt-1">{service.priceNote}</p>
        </div>

        <ul className="space-y-2 mb-8">
          {service.details.map((d, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/70">
              <Icon name="CheckCircle" size={16} className="text-green-400 shrink-0" />
              {d}
            </li>
          ))}
        </ul>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 hover:bg-green-500 transition-colors text-white font-semibold py-3 rounded-full text-sm"
        >
          Заказать {service.title.toLowerCase()}
        </button>
      </motion.div>
    </motion.div>
  )
}

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-400 text-sm uppercase tracking-widest font-medium mb-4"
          >
            Наши услуги
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Комплексная защита <br />
            <span className="text-gradient">вашего пространства</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                className="h-full flex flex-col justify-between group cursor-pointer hover:border-green-500/30 transition-all"
                onClick={() => setSelected(service)}
              >
                <div>
                  <div className={`mb-6 p-4 rounded-2xl ${service.bg} w-fit group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={32} className={service.color} fallback="Shield" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className={`text-lg font-bold ${service.color}`}>{service.price}</span>
                  <span className="text-xs text-white/30 group-hover:text-green-400 transition-colors">нажмите для заказа →</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ServiceModal service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
