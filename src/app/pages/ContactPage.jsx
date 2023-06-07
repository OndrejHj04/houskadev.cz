"use client";
import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({ email: "", text: "" });
  const maxText = 10;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={` flex justify-center items-center p-10 z-20`}
      style={{ backgroundImage: `url(formBg.jpg)` }}
    >
      <div className="p-2 border-4 border-gray-300 shadow-2xl rounded-2xl bg-white">
        <form onSubmit={handleSubmit} method="post" acceptCharset="UTF-8">
          <div>
            <input
              name="Email"
              id="email"
              type="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm((c) => ({ ...c, email: e.target.value }))
              }
              className="border-b-2 border-gray-500 "
            />
          </div>
          <div>
            <textarea
              className="resize-none"
              rows={7}
              name="Text"
              id="text"
              type="text"
              required
              value={form.text}
              onChange={(e) => setForm((c) => ({ ...c, text: e.target.value }))}
              placeholder="Zpráva"
            />
          </div>
          <div className="flex justify-between items-center">
            <button className="px-1 border-2 rounded-lg bg-green-700 text-white font-semibold">
              submit
            </button>
            <div>
              {form.text.length}/{maxText}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
