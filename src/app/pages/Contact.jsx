export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-7xl flex mb-16">
      <div className="flex-1 mx-2">
        <div className="p-2 bg-red-400">
          <h1 className="text-4xl">A toto ještě není všechno!</h1>
        </div>
      </div>
      <div className="mx-2 border-2 shadow-2xl p-2 rounded-2xl">
        <h2 className="text-3xl text-center font-semibold">Napište nám!</h2>
        <h3>...a určitě se na něčem domluvíme.</h3>
        <div className="flex flex-col">
          <input className="outline-none" placeholder="Předmět" />
          <div className="h-0.5 w-full bg-gray-200"></div>
          <textarea
            rows="8"
            className="outline-none resize-none"
            placeholder="Text zprávy..."
          />
        </div>
      </div>
    </div>
  );
}
