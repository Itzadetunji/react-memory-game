import './SingleCard.css';

export default function SingleCard({card}) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="Card Front" />
        <img className="back" src="/img/cover.png" alt="Card Back" />
      </div>
    </div>
   );
};