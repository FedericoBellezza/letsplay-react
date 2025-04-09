import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";

export default function EventsPage() {
  // states
  const [events, setEvents] = useState([]);
  const [searchCategory, setSearchCategory] = useState(undefined);
  const [searchMaxPrice, setSearchMaxPrice] = useState(null);
  const [searchAddress, setSearchAddress] = useState("");
  const [categories, setCategories] = useState([]);

  // functions
  async function getEvents() {
    try {
      const response = await axios.get("http://localhost:8080/api/events");
      console.log("risposta: " + response);
      console.log("dati:", response.data);
      setEvents(response.data);
      getCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(2)}`;
  }
  function getCategories(events) {
    events.forEach((event) => {
      if (!categories.includes(event.category.name)) {
        categories.push(event.category.name);
      }
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
  }, []);

  if (searchMaxPrice == "") {
    setSearchMaxPrice(null);
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-10 px-5">Eventi</h1>
      <div className="my-10 flex flex-col md:flex-row items-center gap-3 justify-center px-5">
        <Select onValueChange={setSearchCategory}>
          <SelectTrigger className="w-2/3 md:w-[200px] ">
            <SelectValue className="placeholder:text-gray-100" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={undefined}>Categoria</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* address input */}
        <Input
          onChange={(e) => setSearchAddress(e.target.value)}
          value={searchAddress}
          className={"w-2/3 md:w-[300px]"}
          placeholder="Cerca nella tua zona"
        />
        {/* price input */}
        <Input
          onChange={(e) => setSearchMaxPrice(e.target.value)}
          value={searchMaxPrice}
          className={"w-2/3 md:w-[250px]"}
          placeholder="Inserisci un prezzo massimo"
          type={"number"}
          min={0}
        />
      </div>

      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-col-1  gap-5 px-20 md:px-5">
        {events &&
          events.map(
            (event) =>
              (searchCategory == null ||
                event.category.name == searchCategory) &&
              (searchMaxPrice == null || event.price <= searchMaxPrice) &&
              event.address
                .toLowerCase()
                .includes(searchAddress.toLowerCase()) && (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="hover:scale-102 transition xl:grayscale hover:grayscale-0 "
                >
                  <Card className={"bg-slate-800/60 backdrop-blur-md border-0"}>
                    <CardHeader>
                      <CardTitle
                        className={
                          "text-2xl text-white flex justify-between items-baseline"
                        }
                      >
                        {event.name}
                        <span className="italic font-normal text-sm">
                          {event.price == 0 ? "Gratuito" : "€ " + event.price}
                        </span>
                      </CardTitle>
                      <CardDescription
                        className={
                          "text-lg text-gray-200 flex justify-between items-baseline"
                        }
                      >
                        <span>{event.category.name}</span>
                      </CardDescription>
                      <CardDescription
                        className={
                          "text-gray-200 italic text-sm flex justify-between"
                        }
                      >
                        <div>
                          <span>{formatDate(event.startDate)} - </span>
                          <span>{formatDate(event.endDate)}</span>
                        </div>
                        <div className="text-end">
                          <span>{event.address}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={event.mainImage || "./imgs/heroImage.png"}
                        className="w-full rounded-2xl aspect-square bg-white"
                      />
                    </CardContent>
                  </Card>
                </Link>
              )
          )}
      </div>
    </>
  );
}
