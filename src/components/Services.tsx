import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Bug",
    color: "text-green-400",
    bg: "bg-green-500/10",
    title: "Дезинсекция",
    description: "Уничтожение тараканов, клопов, муравьёв, блох, моли и других насекомых. Используем сертифицированные препараты, безопасные для людей и животных.",
  },
  {
    icon: "Shield",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Дезинфекция",
    description: "Обеззараживание помещений от вирусов, бактерий и грибков. Подходит для жилых домов, офисов, медицинских учреждений и предприятий общепита.",
  },
  {
    icon: "Rat",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "Дератизация",
    description: "Избавляем от крыс и мышей в жилых и производственных помещениях. Применяем современные методы без вреда для окружающей среды.",
  },
  {
    icon: "Building2",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    title: "Обработка предприятий",
    description: "Комплексная санитарная обработка складов, производств, ресторанов и торговых точек. Работаем по договору, выдаём все необходимые документы.",
  },
]

export function Services() {
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
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className={`mb-6 p-4 rounded-2xl ${service.bg} w-fit group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={32} className={service.color} fallback="Shield" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}