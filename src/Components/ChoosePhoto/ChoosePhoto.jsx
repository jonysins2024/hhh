import { FaUser } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import './ChoosePhoto.css'

const ChoosePhoto = () => {
    return (
        <div className="upload mx-auto">
            < FaUser className="user-icon text-center mx-auto" size={80}/>
            <div className="round flex items-center justify-center">
                <input type="file" className="" />
                <FaCamera className="text-white"/>
            </div>
        </div>
    );
};

export default ChoosePhoto;
