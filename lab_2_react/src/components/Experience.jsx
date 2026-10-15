function Experience() {
  return (
    <section className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 m-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">Досвід і навчальні проєкти</h2>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">SMM-менеджерка</h3>
      <p className="text-slate-600 mb-2">Теперішній час</p>
      <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
        <li className="hover:text-indigo-600">Ведення соціальних мереж і створення контенту</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Членкиня молодіжної громадської організації «Гарта»</h3>
      <p className="text-slate-600 mb-2">Напрям: інновації</p>
      <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
        <li className="hover:text-indigo-600">Розвиток інноваційного напряму організації</li>
        <li className="hover:text-indigo-600">Лекції та навчання з теми дронів</li>
        <li className="hover:text-indigo-600">Відвідування курсів з дронів</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Організація освітніх заходів</h3>
      <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
        <li className="hover:text-indigo-600">Організація вишколу з історії для учасників віком 15–20 років</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Університетські заходи</h3>
      <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
        <li className="hover:text-indigo-600">Проведення заняття з тактичної медицини на тижні першокурсника</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Навчальні проєкти у Львівській політехніці</h3>
      <ul className="list-disc list-inside text-slate-700 space-y-1">
        <li className="hover:text-indigo-600">Лабораторні роботи з комп'ютерних мереж: налаштування мережі в Cisco Packet Tracer (VLAN, статична маршрутизація)</li>
        <li className="hover:text-indigo-600">Програми мовою C# у Visual Studio</li>
        <li className="hover:text-indigo-600">Завдання мовою Python</li>
        <li className="hover:text-indigo-600">Вебпроєкт: резюме на HTML та React із використанням Git</li>
      </ul>
    </section>
  );
}

export default Experience;