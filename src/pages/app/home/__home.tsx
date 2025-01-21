import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imgExample from "@/assets/images/temporary/side-view-smiley-couple-indoors.jpg";

export function Home() {
  return (
    <div>
      <div className=" relative bottom-[4.5vw] h-[70vh] z-0 flex items-center justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="w-full h-[33vw] flex items-center justify-center relative">
              <img
                src={imgExample}
                alt=""
                className="bg-no-repeat bg-cover bg-center w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/30"></div>
            </CarouselItem>

            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="relative left-[1vw] bottom-[15vw]" />
          <CarouselNext className="relative left-[96vw] bottom-[15vw]" />
        </Carousel>
      </div>
    </div>
  );
}
