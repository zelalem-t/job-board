import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-regular-svg-icons';

export default function JobRow(){
    return (
        
        <div className="bg-white p-6 rounded-lg shadow-sm relative">
            <div className="absolute cursor-pointer top-4 right-4">
                <FontAwesomeIcon className="size-4 text-gray-400" icon={faHeart}/>
            </div>

            <div className="flex gap-4 grow">
                <div className="content-center">
                    <img className="size-12"src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"/>
                

                </div>
                <div className="grow sm:flex">
                    <div className="grow">
                        <div className="text-gray-500">Spotify</div>
                        <div className="font-bold text-lg mb-2">Product Designer</div>
                        <div className="text-sm text-gray-500">
                            Fulltime &middot;Addis Ababa &middot; Ethiopia
                        </div>
                    </div>
                    <div className="content-end text-gray-600 text-sm">
                        2 weeks ago
                    </div>
                </div>
            </div>
        </div>
       
    );
}