const groups = [
  {
    title: "Технічні",
    color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
    items: ["HTML, React (базовий рівень)", "C#, Python", "Git, VS Code", "Cisco Packet Tracer"],
  },
  {
    title: "Мови",
    color: "bg-teal-100 text-teal-800 hover:bg-teal-200",
    items: ["Українська — рідна", "Англійська — B1", "Польська — A2–B1", "Німецька — A1", "Японська — початковий рівень"],
  },
  {
    title: "Особисті",
    color: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    items: ["Уважність", "Відповідальність", "Вміння працювати в команді", "Лідерські якості"],
  },
];

function Skills() {
  return (
    <section className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 m-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">Навички</h2>
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="text-lg font-semibold text-slate-800 mt-4">{g.title}</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {g.items.map((item) => (
              <li key={item} className={`rounded-full px-3 py-1 transition hover:scale-105 ${g.color}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;