import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Work } from "@/components/Work"
import { Footer } from "@/components/Footer"
import { OrderForm } from "@/components/OrderForm"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "1 500+", label: "Обработанных объектов" },
  { value: "10 лет", label: "На рынке Красноярска" },
  { value: "100%", label: "Гарантия результата" },
  { value: "30 мин", label: "Время выезда" },
]

const reviews = [
  {
    name: "Анна К.",
    text: "Обратились с проблемой тараканов — приехали в тот же день, обработали быстро и профессионально. Уже 3 месяца тишина!",
    rating: 5,
  },
  {
    name: "Сергей М.",
    text: "Заказывал дератизацию на складе. Всё чётко: приехали, оценили, сделали. Документы выдали сразу. Рекомендую!",
    rating: 5,
  },
  {
    name: "Ольга Р.",
    text: "Очень довольна работой ЭкоКомфорт. Дезинфекция после болезни прошла быстро, запаха не осталось. Отличная компания.",
    rating: 5,
  },
]

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Work />

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-green-400 text-sm uppercase tracking-widest font-medium mb-4"
              >
                О компании
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                ЭкоКомфорт —<br />
                <span className="text-gradient">ваша защита</span> в Красноярске
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 leading-relaxed mb-6 text-lg"
              >
                Мы — профессиональная служба дезинфекции, дезинсекции и дератизации. Работаем в Красноярске и области с 2015 года. За это время обработали более 1500 объектов: квартиры, офисы, рестораны, склады и производственные помещения.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 leading-relaxed mb-10 text-lg"
              >
                Используем только сертифицированные препараты, безопасные для детей и домашних животных. Все специалисты прошли профессиональную подготовку и имеют соответствующие допуски.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {["Лицензия СЭС", "Сертификаты качества", "Страхование ответственности", "Договор и гарантия"].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                    <Icon name="CheckCircle" size={16} className="text-green-400" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="text-center p-8">
                    <p className="text-4xl font-bold text-green-400 mb-2">{stat.value}</p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-400 text-sm uppercase tracking-widest font-medium mb-4 text-center"
          >
            Отзывы
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Нам доверяют клиенты
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">"{review.text}"</p>
                  <p className="font-semibold text-white">{review.name}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OrderForm />

      {/* Call to Action Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Готовы избавиться <br />
            <span className="text-gradient">от вредителей?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Оставьте заявку — наш специалист свяжется с вами в течение 15 минут и бесплатно проконсультирует.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-10 py-5 bg-green-600 text-white rounded-full font-bold text-xl hover:scale-105 hover:bg-green-500 transition-all shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)]">
              Заказать обработку
            </button>
            <a
              href="tel:+79233150897"
              className="px-10 py-5 glass rounded-full font-bold text-xl text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              +7 923 315 08-97
            </a>
          </motion.div>
        </div>

        {/* Background Gradient for CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-green-900/20 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  )
}

export default Index