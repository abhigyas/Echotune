import { Link } from "react-router-dom";
const DetailsHeader = ({ imgUrl, artistData, songData }) => {
  console.log(imgUrl);
  console.log(artistData);
  console.log(songData);
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-48"/>
      <div className="absolute inset-0 flex items-center">
        <img className = "w-32 h-32 mx-left rounded-lg"  
          alt="artist_img"
          src={imgUrl}
        />
      </div>
    </div>
  );
};
export default DetailsHeader;