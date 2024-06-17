import style from "./GenshinListOfArtifacts.module.css";
import { Link } from "react-router-dom";
import fallbackImage from '../assets/paimon.png'

function GenshinListOfArtifacts({
  id,
  maxRarity,
  name,
  twoPieceBonus,
  fourPieceBonus,
}) {


  const artifactsUrl = `https://genshin.jmp.blue/artifacts/${id}/circlet-of-logos`;
  const artifactsUrl2 = `https://genshin.jmp.blue/artifacts/${id}/flower-of-life`;
  const artifactsUrl3 = `https://genshin.jmp.blue/artifacts/${id}/goblet-of-eonothem`;
  const artifactsUrl4 = `https://genshin.jmp.blue/artifacts/${id}/plume-of-death`;
  const artifactsUrl5 = `https://genshin.jmp.blue/artifacts/${id}/sands-of-eon`;

  return (
    <>
      <div>
        <a id="top" />
        <div className={style.ArtifactsList}>
          <img
            className={style.ArtifactsImageItself}
            src={artifactsUrl}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage; // Set fallback image on error
            }}
          />
          <img
            className={style.ArtifactsImageItself}
            src={artifactsUrl2}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage; // Set fallback image on error
            }}
          />
          <img
            className={style.ArtifactsImageItself}
            src={artifactsUrl3}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage; // Set fallback image on error
            }}
          />
          <img
            className={style.ArtifactsImageItself}
            src={artifactsUrl4}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage; // Set fallback image on error
            }}
          />
          <img
            className={style.ArtifactsImageItself}
            src={artifactsUrl5}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage; // Set fallback image on error
            }}
          />
        
          <div className={style.artifactsName}>"{name}"</div>
          <hr />
          <div>2-PIECE-BONUS: {twoPieceBonus}</div>
          <div>4-PIECE-BONUS: {fourPieceBonus}</div>

          <div>MAX RARITY: {maxRarity}</div>

          <div className={style.BackToTopButton2}>
            {/* <a href="#top">Back to Top</a>
          <br />
          <Link to="/weapons">Go to ALL Weapons&#127919;</Link>
          <br />
          <Link to="/">Back to Home</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default GenshinListOfArtifacts;

