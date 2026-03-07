export function Footer() {
  return (
    <footer className="relative pt-16 sm:pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img
                src="https://cdn.poehali.dev/projects/c12c0a38-283d-456a-8c8b-a20ed4ebcc9f/bucket/06a7f2de-fa3f-427a-9ac0-03898357dbcf.png"
                alt="ЭкоКомфорт"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-white/50 leading-relaxed text-sm">
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
              href="tel:+79233150897"
              className="text-xl font-medium hover:text-green-400 transition-colors block mb-4"
            >
              +7 923 315 08-97
            </a>
            <a
              href="mailto:infoekokomfort@bk.ru"
              className="text-white/60 hover:text-green-400 transition-colors"
            >
              infoekokomfort@bk.ru
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between pt-8 border-t border-white/5 text-sm text-white/40 text-center md:text-left">
          <p>&copy; 2025 ЭкоКомфорт. Все права защищены.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}