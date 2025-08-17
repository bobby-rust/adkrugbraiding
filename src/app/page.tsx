import { Button } from "@/components/ui/button";
import HeroCard from "./components/ui/hero-card";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pt-20">
      <div className="flex flex-col gap-5 justify-center align-center max-w-[70vw]">
        <div className="flex gap-10">
          <iframe src="https://www.youtube.com/embed/_j75w-36gY4" className="min-w-1/2 xl:w-full xl:h-[400px] sm:h-[300px]" />
          <div className="flex flex-col gap-10">
            <h1 className="heading-1">Welcome to Adirondack Rug Braiding</h1>
            <p className="flex flex-col gap-10 min-w-1/2">
              <span>
                At the Adirondack Rug Braiding web site you can <b>view and purchase rugs from the Adirondack Rug Series</b> and the <b>English Country Rug Series</b>, request a <b>custom rug</b>,
                order hand braided <b>baskets and wreaths</b>, get <b>rug braiding supplies</b>, including a video on learning to braid your own rug, and request a quote on braided rug repair.
              </span>
              <span>
                For more information about my hand braided wool rugs or rug braiding classes, you can contact me by <b>leaving me a message here</b> or calling me at (315) 265-4722.
              </span>
              <span className="text-center">
                <i><b>Please note: </b>you can also email me at my new email address: <b>hcondon@cnymail.com</b></i>
              </span>
            </p>
            <Button>Order now</Button>
          </div>
        </div>
        <div className="py-20">
          <p className="paragraph">Helen Condon creates hand braided wool Adirondack rugs, baskets, wreaths and custom heirloom gifts. Built in 1863, her Parishville, NY studio functioned as a boarding house until 1923 when it was purchased by the Parishville Grange. It was then used as a meeting place and dance hall until 1963, attracting crowds from distant towns in horse-drawn wagons and sleighs for prestigious social events. After it had lain dormant for many years, Helen restored the old hall in 2001. "The Grange" is now an ideal setting for the creation of hand braided Adirondack rugs, baskets and gifts that become family heirlooms.</p>
        </div>
      </div>
    </div>
  );
}
