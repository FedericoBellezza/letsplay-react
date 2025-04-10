import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center p-5 lg:p-10 rounded-2xl bg-slate-800/60 backdrop-blur-md gap-5">
      <div className="lg:w-6/10 flex flex-col justify-between items-center gap-5">
        <div className="flex flex-col  items-baseline gap-5">
          <h1 className="font-bold text-4xl  lg:text-8xl">Let's Play</h1>
          <h2 className="lg:text-3xl text-2xl italic">
            Trova il tuo prossimo evento, ovunque tu sia.
          </h2>
          <NavLink to="/events">
            <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl transition cursor-pointer">
              Inizia a cercare
            </button>
          </NavLink>
        </div>
      </div>
      <div className="lg:w-5/10">
        <img
          className="rounded-2xl w-full aspect-square object-cover hover:scale-102 hover:rotate-1 transition"
          src="./imgs/heroImage.png"
          alt=""
        />
      </div>
    </section>
  );
}
