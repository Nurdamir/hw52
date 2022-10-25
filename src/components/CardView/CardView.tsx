import React from 'react';

interface CardViewProps extends React.PropsWithChildren {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = (props) => {
  let suit = '';

  if (props.suit === "♦") {
      suit = "diams";
  } else if (props.suit === "♥") {
      suit = "hearts";
  } else if (props.suit === "♣") {
      suit = "clubs";
  } else if (props.suit === "♠") {
      suit = "spades"
  }

  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + suit;

  return (
    <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{props.suit}</span>
      </span>
    </div>
  );
};

export default CardView;