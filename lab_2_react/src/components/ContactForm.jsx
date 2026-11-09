import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('formClosed')) return;
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    sessionStorage.setItem('formClosed', 'true');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-3">Зворотний зв'язок</h2>
            <form action="https://formspree.io/f/mljjyjek" method="POST">
              <input className="border w-full p-2 mb-2" type="text" name="name" placeholder="Ім'я" required />
              <input className="border w-full p-2 mb-2" type="email" name="email" placeholder="Email" required />
              <input className="border w-full p-2 mb-2" type="tel" name="phone" placeholder="Номер телефону" required />
              <textarea className="border w-full p-2 mb-2" name="message" placeholder="Ваше повідомлення" required />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Надіслати</button>
              <button type="button" onClick={closeModal} className="border px-4 py-2 rounded">Закрити</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;