function Education() {
  return (
    <section className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 m-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">Освіта</h2>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Національний університет «Львівська політехніка»</h3>
      <p className="text-slate-600 mb-4">Спеціальність: Кібербезпека, 2025 — теперішній час</p>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Додаткова освіта</h3>
      <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
        <li className="hover:text-indigo-600">Онлайн-курси на платформах Prometheus та Coursera</li>
        <li className="hover:text-indigo-600">Шкільні курси з HTML</li>
        <li className="hover:text-indigo-600">Курси з дронів</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-800 mt-4">Школа</h3>
      <p className="text-slate-600">СЗШ № 84</p>
    </section>
  );
}

export default Education;