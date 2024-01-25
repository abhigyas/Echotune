import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazam";

const SongDetails = () => {
    const dispatch =  useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);
    console.log(songData);

    return (
        <div className=" flex flex-col">
            <DetailsHeader artistid="" songData = {songData}/>
            <div className="mb-10">
                <h2 className="text-white text-3x1 font-bold">Lyrics</h2>
                <div className="mt-5">
                    {songData?.result?.sections?.[1]?.text?.map((line, i) => (
                    <p key={i} className="text-gray-400 text-base my-1">{line}</p>
                    )) || <p className="text-gray-400 text-base my-1">No Lyrics Found</p>}
                </div>
            </div>
        </div>
        );
};

export default SongDetails;
