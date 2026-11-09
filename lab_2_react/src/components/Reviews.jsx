import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/8/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Відгуки колишніх роботодавців</h2>
      {comments.map(c => (
        <div key={c.id} className="border rounded p-3 mb-3">
          <h3 className="font-semibold">{c.name}</h3>
          <p className="italic">{c.email}</p>
          <p>{c.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;