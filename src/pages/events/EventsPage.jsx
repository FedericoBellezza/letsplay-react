import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import EventCard from "@/components/EventCard";
import { motion } from "framer-motion";

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
      setEvents(response.data);
      getCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function getCategories(events) {
    events.forEach((event) => {
      if (!categories.includes(event.category.name)) {
        categories.push(event.category.name);
      }
    });
  }
  async function orderBy(order) {
    if (order == null) {
      getEvents();
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:8080/api/events/sort/" + order
      );
      console.log("risposta: " + response);
      console.log("dati:", response.data);
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
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
          value={searchMaxPrice ? searchMaxPrice : ""}
          className={"w-2/3 md:w-[250px]"}
          placeholder="Inserisci un prezzo massimo"
          type={"number"}
          min={0}
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="w-2/3 md:w-[200px] border py-1 rounded-md bg-amber-50/30">
            Ordina per
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ordina per</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                orderBy(null);
              }}
            >
              Ripristina
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                orderBy("name");
              }}
            >
              Nome
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                orderBy("startDate");
              }}
            >
              Data di inizio
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                orderBy("price");
              }}
            >
              Prezzo
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                orderBy("category.name");
              }}
            >
              Categoria
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 grid-col-1 gap-5 lg:px-20 px-5 grid-auto-rows-1">
        {events &&
          events.map(
            (event, index) =>
              (searchCategory == null ||
                event.category.name == searchCategory) &&
              (searchMaxPrice == null || event.price <= searchMaxPrice) &&
              event.address
                .toLowerCase()
                .includes(searchAddress.toLowerCase()) && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    y: 200,
                  }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  key={event.id}
                  className="flex flex-col h-full shadow-2xl rounded-2xl"
                >
                  <EventCard index={index} event={event} />
                </motion.div>
              )
          )}
      </div>
    </>
  );
}
