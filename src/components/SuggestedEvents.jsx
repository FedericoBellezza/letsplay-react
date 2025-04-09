import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

export default function SuggestedEvents() {
  return (
    <section className="flex flex-col justify-between items-center bg-slate-800/60 backdrop-blur-md p-10 rounded-2xl gap-10">
      <h2 className="font-bold text-3xl">I più popolari</h2>
      <div className="flex gap-5">
        <Link
          className={
            "w-1/4 pb-0 hover:scale-102 transition cursor-pointer grayscale hover:grayscale-0"
          }
          href=""
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                className="rounded-xl aspect-square object-cover"
                src="./imgs/heroImage.png"
                alt=""
              />
            </CardContent>
          </Card>
        </Link>
        <Link
          className={
            "w-1/4 pb-0 hover:scale-102 transition cursor-pointer grayscale hover:grayscale-0"
          }
          href=""
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                className="rounded-xl aspect-square object-cover"
                src="./imgs/heroImage.png"
                alt=""
              />
            </CardContent>
          </Card>
        </Link>
        <Link
          className={
            "w-1/4 pb-0 hover:scale-102 transition cursor-pointer grayscale hover:grayscale-0"
          }
          href=""
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                className="rounded-xl aspect-square object-cover"
                src="./imgs/heroImage.png"
                alt=""
              />
            </CardContent>
          </Card>
        </Link>
        <Link
          className={
            "w-1/4 pb-0 hover:scale-102 transition cursor-pointer grayscale hover:grayscale-0"
          }
          href=""
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                className="rounded-xl aspect-square object-cover"
                src="./imgs/heroImage.png"
                alt=""
              />
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  );
}
