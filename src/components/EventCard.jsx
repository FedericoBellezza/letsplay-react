import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EventCard({ event }) {
  function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(2)}`;
  }

  return (
    <div>
      <Link
        to={`/events/${event.id}`}
        className="hover:scale-102 transition xl:grayscale hover:grayscale-0 h-full "
      >
        <Card className={"bg-slate-800/60 backdrop-blur-md border-0 h-full"}>
          <CardHeader className={"h-full "}>
            <CardTitle
              className={
                "text-xl text-white flex justify-between items-baseline "
              }
            >
              <div className="w-9/10">{event.name}</div>
              <span className="italic font-normal text-sm w-2/10 text-end">
                {event.price == 0 || !event.price
                  ? "Gratuito"
                  : "€ " + event.price}
              </span>
            </CardTitle>
            <CardDescription
              className={
                "text-md text-gray-200 flex justify-between items-baseline"
              }
            >
              <span>{event.category.name}</span>
              <div className="text-end text-sm mt-3">
                <span>{formatDate(event.startDate)} </span>
                {event.endDate && <span>- {formatDate(event.endDate)}</span>}
              </div>
            </CardDescription>
            <CardDescription
              className={
                "text-gray-200 italic text-sm flex justify-between mt-3"
              }
            >
              <div className="text-start">
                <span>{event.address}</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={event.mainImage || "./imgs/heroImage.png"}
              className="w-full rounded-2xl aspect-square bg-white object-cover"
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
