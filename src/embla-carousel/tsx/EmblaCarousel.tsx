/* eslint-disable */
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Box, Typography, Avatar } from "@mui/material";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  content: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Tony",
    role: "Vuoropäällikkö",
    content:
      "Täppä on helpottanut suuresti omavalvonnan seurantaa ja inventaarion ylläpitoa. Erityisesti inventaarion tekeminen on huomattavasti jouhevampaa, tuotteiden lisääminen ja poistaminen onnistuu paljon nopeammin kuin kynällä ja paperilla.",
  },
  {
    id: 2,
    name: "Noora",
    role: "Tarjoilija",
    content:
      "Erittäin hyvä ratkaisu, eikä pelkästään paperijätteen vähentämisen takia - Täpän ulkoasu on selkeä ja helppokäyttöinen, eikä siinä ole mitään turhaa, kaikki ovat oppineet käyttämään sitä nopeasti!",
  },
  {
    id: 3,
    name: "Teemu",
    role: "Keittiömestari",
    content:
      "Inventaarioon käytettävä aika on pudonnut alle puoleen entisestä Täpän avulla. Tarpeen mukaan uusien ominaisuuksien lisääminen on onnistunut pyynnöstä nopeasti.",
  },
  {
    id: 4,
    name: "Emmi",
    role: "Ravintolapäällikkö",
    content:
      "Jokainen työntekijämme pystyy laskemaan inventaarion Täpän selkeän käyttöliittymän avulla hetkessä, ja sen lähettäminen tilitoimistoon suoraan sovelluksesta pitää kirjanpidon ajantasalla. Iso plussa myös huomattavasti pienentyneestä paperimäärästä!",
  },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 700000, stopOnInteraction: false }),
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div className="embla__slide" key={testimonial.id}>
              <Box className="embla__slide__number">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ mb: 2, fontSize: "1.1rem" }}
                  >
                    "{testimonial.content}"
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.8, fontStyle: "italic" }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </div>
          ))}
        </div>
      </div>
      <Box
        className="embla__controls"
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Box
          className="embla__buttons"
          sx={{ display: "flex", gap: 10, mt: 1 }}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>

        <Box className="embla__dots" sx={{ display: "flex", gap: 1 }}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default EmblaCarousel;
