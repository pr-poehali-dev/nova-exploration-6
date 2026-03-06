export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <img
                src="https://cdn.poehali.dev/files/a82cb591-0a60-4878-ad66-37bf785b89e7.png"
                alt="ЭкоКомфорт"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-white/50 leading-relaxed">
              Профессиональная дезинфекция, дезинсекция и дератизация в Красноярске и области. Работаем с 2015 года.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Услуги</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Дезинсекция</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Дезинфекция</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Дератизация</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Обработка предприятий</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Связаться с нами</h4>
            <p className="text-white/60 mb-2">Красноярск и область</p>
            <a
              href="tel:+73912000000"
              className="text-xl font-medium hover:text-green-400 transition-colors block mb-4"
            >
              +7 (391) 200-00-00
            </a>
            <a
              href="mailto:info@ekokomfort24.ru"
              className="text-white/60 hover:text-green-400 transition-colors"
            >
              info@ekokomfort24.ru
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2025 ЭкоКомфорт. Все права защищены.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
