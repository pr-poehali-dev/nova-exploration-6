import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

const services = [
  {
    title: "Дезинсекция",
    category: "Жилые помещения",
    image: "https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/files/500ed5bc-8278-49ef-bd64-88e6346ce8cf.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    description: "Полное уничтожение тараканов, клопов, муравьёв и других насекомых. Гарантируем результат с первого визита.",
    tags: ["Тараканы", "Клопы", "Муравьи", "Блохи"],
    price: "от 2 000 ₽",
  },
  {
    title: "Дератизация",
    category: "Склады и предприятия",
    image: "https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/files/c997b705-8c71-4c76-903c-7ebb71481c43.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Избавление от крыс и мышей в любых помещениях. Применяем современные безопасные методы борьбы с грызунами.",
    tags: ["Крысы", "Мыши", "Склады", "Производство"],
    price: "от 3 500 ₽",
  },
  {
    title: "Дезинфекция",
    category: "Офисы и квартиры",
    image: "https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/files/4726a504-8a6b-4340-9cf6-c1dc269c1090.jpg",
    color: "from-teal-500/20 to-green-500/20",
    description: "Профессиональное обеззараживание помещений от вирусов, бактерий и грибков. Все сертификаты и документы включены.",
    tags: ["Вирусы", "Бактерии", "Грибок", "Запахи"],
    price: "от 1 800 ₽",
  },
  {
    title: "Акарицидная обработка",
    category: "Участки и парки",
    image: "https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/files/e20f9de8-fdfd-46b6-9001-742714b9d072.jpg",
    color: "from-lime-500/20 to-green-500/20",
    description: "Уничтожение клещей на приусадебных участках и зонах отдыха. Защита на весь сезон, безопасно для детей и животных.",
    tags: ["Клещи", "Участки", "Газоны", "Сезонная защита"],
    price: "от 3 500 ₽",
  },
  {
    title: "Дезодорация",
    category: "Жилые и офисные помещения",
    image: "https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/files/602d774e-73d6-46f9-acf0-0c69a6189f0b.jpg",
    color: "from-sky-500/20 to-blue-500/20",
    description: "Устранение стойких запахов после пожара, залива или животных. Свежий воздух без маскировки — результат с первого визита.",
    tags: ["После пожара", "Запахи животных", "Залив", "Плесень"],
    price: "от 2 000 ₽",
  },
]

export function Work() {
  return (
    <section id="work" className="py-16 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-green-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-green-400 text-sm uppercase tracking-widest font-medium mb-4"
            >
              Наши цены
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6"
            >
              Прозрачные цены <br />
              <span className="text-gradient">без скрытых платежей</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 max-w-md"
            >
              Точная стоимость зависит от площади и сложности обработки. Выезд специалиста для оценки — бесплатно.
            </motion.p>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-green-500/40 hover:bg-green-500/10 transition-colors text-sm font-medium text-green-400"
          >
            Рассчитать стоимость
          </motion.a>
        </div>

        <div className="space-y-10 sm:space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-0 overflow-hidden group" hoverEffect={false}>
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="p-6 sm:p-12 flex flex-col justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="relative z-10">
                      <span className="text-sm font-medium text-white/50 mb-4 block uppercase tracking-wider">
                        {service.category}
                      </span>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 md:group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                      <p className="text-3xl font-bold text-green-400 mb-6">{service.price}</p>
                      <p className="text-white/70 mb-8 max-w-md">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                        {service.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[220px] sm:h-[320px] md:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}