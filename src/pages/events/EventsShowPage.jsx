import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function EventsShowPage() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvent();
  }, []);

  async function getEvent() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/events/" + id
      );
      console.log("risposta: " + response);
      console.log("dati:", response.data);
      setEvent(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(2)}`;
  }

  return (
    <>
      {event && (
        <div className="flex flex-col xl:flex-row justify-between p-5 gap-10">
          <img
            className="xl:w-1/3 md:w-2/3 lg:w-3/5 mx-auto rounded-3xl hover:scale-102 hover:rotate-1 transition"
            src={event.image}
            alt="Immagine di locandina"
          />
          <div className="lg:w-2/3 flex flex-col gap-5">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold">{event.name}</h1>
              <span className="text-gray-200 italic text-xl">
                {event.category.name}
              </span>
            </div>
            <div className="lg:text-xl text-md">
              {event.description.split(/\r?\n/).map((riga, index) => (
                <div key={index}>
                  {riga}
                  <br />
                </div>
              ))}
            </div>
            <ul className="text-lg">
              <li className="list-disc list-inside">
                <span className="font-bold">Inizio evento: </span>
                <span>{formatDate(event.startDate)}</span>
              </li>
              {event.endDate && (
                <li className="list-disc list-inside ">
                  <span className="font-bold">Fine evento: </span>
                  <span>{formatDate(event.endDate)}</span>
                </li>
              )}
              {event.registrationOpeningDate && (
                <li className="list-disc list-inside mt-3">
                  <span className="font-bold">Apertura iscrizioni: </span>
                  <span>{formatDate(event.registrationOpeningDate)}</span>
                </li>
              )}
              {event.registrationClosingDate && (
                <li className="list-disc list-inside">
                  <span className="font-bold">Chiusura iscrizioni: </span>
                  <span>{formatDate(event.registrationClosingDate)}</span>
                </li>
              )}
              <li className="list-disc list-inside mt-3">
                <span className="font-bold">Indirizzo: </span>
                <span>{event.address}</span>
              </li>
              <li className="list-disc list-inside mt-3">
                <span className="font-bold">Prezzo: </span>
                <span>
                  {event.price == 0 || !event.price
                    ? "Gratuito"
                    : "€ " + event.price}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
