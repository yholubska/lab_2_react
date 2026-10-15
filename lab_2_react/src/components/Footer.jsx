function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-8 mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Контакти</h2>
        <ul className="space-y-2">
          <li>
            Email:{" "}
            <a className="text-indigo-300 underline hover:text-white" href="mailto:yaryna.holubska.kb.2025@lpnu.ua">
              yaryna.holubska.kb.2025@lpnu.ua
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a className="text-indigo-300 underline hover:text-white" href="https://github.com/yholubska" target="_blank">
              Мій профіль
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;