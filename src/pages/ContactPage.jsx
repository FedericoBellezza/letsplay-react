// import email
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [emailSent, setEmailSent] = useState(false);
  // send email function
  const sendEmail = (e) => {
    e.preventDefault();
    console.log({
      name: e.target.from_name.value,
      email: e.target.from_email.value,
      object: e.target.object.value,
      message: e.target.message.value,
    });
    emailjs
      .sendForm(
        "service_n4qr5hq",
        "template_gdpzsbm",
        e.target,
        "I5U0ciuEcNnc8z7_k"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();

    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 3000);
  };
  return (
    <>
      <div className="text-amber-50 lg:py-25 pt-20  p-5 lg:p-10 rounded-2xl bg-slate-800/60 backdrop-blur-md gap-5 mt-25 mx-2">
        <div className="container px-10 mx-auto flex flex-col xl:flex-row   justify-evenly items-center xl:items-start relative">
          <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromleft mb-15">
            Contattaci
            <span
              className={`text-center xl:text-left mt-5  text-2xl block duration-500  ease-in-out    ${
                emailSent ? "opacity-100 animate-entryfromright" : "opacity-0 "
              }`}
            >
              Email Inviata con successo!
            </span>
          </h1>
          <div className="animate-entryfromright w-sm lg:w-xl">
            <form
              onSubmit={sendEmail}
              className={` space-y-4 w-full duration-500 ease-in-out lg:relative lg:top-0  ${
                emailSent ? "relative top-0" : "top-[-80px] relative"
              } `}
            >
              <Input
                required
                type="text"
                name="from_name"
                placeholder="Nome"
                className="w-full py-2.5 px-4  rounded-lg text-sm outline-none transition-all"
              />
              <Input
                required
                type="email"
                name="from_email"
                placeholder="Email"
                className="w-full py-2.5 px-4 rounded-lg text-sm outline-none transition-all"
              />
              <Input
                required
                type="text"
                placeholder="Oggetto"
                name="object"
                className="w-full py-2.5 px-4 border rounded-lg text-sm outline-none transition-all"
              />
              <Textarea
                required
                placeholder="Messaggio"
                rows="4"
                name="message"
                className="w-full px-4 border rounded-lg text-sm pt-3 outline-none transition-all"
              ></Textarea>
              <button className=" w-full bg-slate-700 hover:bg-slate-800 text-white font-bold text-sm py-2 px-4 rounded-xl transition cursor-pointer shadow-2xl ">
                Invia
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-400 lg:mt-50 mt-15  text-center">
        Oppure scrivimi alla email: <strong>lets.play@gmail.com</strong>
      </p>
    </>
  );
}
