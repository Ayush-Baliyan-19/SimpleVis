import React from "react";
import "./Carousel.scss";
import Image from "next/image";
import paper1 from "../../assets/paper1.jpg";
import paper2 from "../../assets/paper2.jpg";

const slideWidth = 20;

const _items = [
  {
    player: {
      title: "In Conference proceedings",
      desc: 'A genetic algorithm for automatic dashboard generation: first results',
      image: paper2,
    },
  },
  {
    player: {
      title: "In Conference proceedings",
      desc: "Challenges for automatic dashboard generation systems in the context of novice users",
      image: paper1,
    },
  },
  {
    player: {
      title: "In Conference proceedings",
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: paper1,
    },
  },
  {
    player: {
      title: "In Conference proceedings",
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: paper1,
    },
  },
  {
    player: {
      title: "In Conference proceedings",
      desc: "Challenges for automatic dashboard generation systems in the context of novice users",
      image: paper1,
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item= {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
    //   item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({
  pos,
  idx,
  activeIdx,
}) => {
  const item = createItem(pos, idx);
  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <Image
          src={item.player.image}
          alt={item.player.title}
          width={100}
          height={100}
          quality={100}
          className="object-contain blur-none rounded-lg shadow-lg"
        />
      </div>
      <div
        className="carousel-slide-item__body cursor-pointer"
        onClick={(e) => {
          window.location.replace(
            "https://insep.hal.science/LIRFAI/hal-03868784v1"
          );
        }}
      >
        <h4 className=''>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="wholeContainer flex flex-1 justify-center items-center w-[100%]">
      <div className="carousel__wrap w-[80%] flex justify-center items-center">
        <div className="carousel__inner w-[calc(20rem*3)] flex items-center relative">
          <button
            className="carousel__btn carousel__btn--prev fill-black text-black -left-40 absolute"
            onClick={() => prevClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--left w-6 h-6 fill-black" />
          </button>
          <div className="carousel__container flex justify-center items-center">
            <ul className="carousel__slide-list">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>
          <button
            className="carousel__btn carousel__btn--next -right-40 absolute"
            onClick={() => nextClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--right w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
