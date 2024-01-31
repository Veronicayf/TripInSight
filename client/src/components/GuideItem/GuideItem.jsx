import React, { useEffect, useRef, useState } from "react";
import iconmenu from "../../assets/icons/IconMenuVertical.png";
import DropMenu from "../DropMenu/DropMenu";
import { useDispatch } from "react-redux";
import { deleteGuide } from "../../redux/guideStore/guidesActions";
import { useNavigate } from "react-router-dom";
import { getGuideId } from "../../redux/guideStore/guidesActions";

const GuideItem = ({ guideInfo }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    //console.log('me ejecute');
    Swal.fire({
      title: `Do you want to eliminate ${guideInfo.forename} from "guides"?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteGuide(guideInfo.id));
        Swal.fire("Saved changes!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const guideId = guideInfo.id;
    console.log(guideId);
    dispatch(getGuideId(guideInfo.id));
    // Navigate to the update form for the specific guide using useNavigate
    navigate(`/admin/updateguide/${guideId}`);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div id="Item" className="flex flex-row w-full justify-between py-4">
      <div className="w-1/6 flex flex-row items-center justify-around">
        <p className="text-[12px]">{guideInfo.id}</p>
      </div>
      <div className="w-2/6 flex flex-row items-center justify-around">
        <img
          src={guideInfo.image}
          alt={guideInfo.nameTour}
          className="h-12 rounded-3xl"
        />
        <b>
          {guideInfo.forename} {guideInfo.surname}
        </b>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-around">
        <b>{guideInfo.birthDate}</b>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-around">
        <div className=" relative flex flex-row items-center gap-2">
          <button
            className="h-10 w-10 flex justify-center items-center bg-primary rounded-full hover:bg-btn-hover"
            onClick={(e) => handleEdit(e)}
          >
            <span className="material-symbols-outlined text-white">edit</span>
          </button>
          <button
            className="h-10 w-10 flex justify-center items-center bg-red-600 rounded-full hover:bg-btn-hover"
            onClick={(e) => handleDelete(e)}
          >
            <span className="material-symbols-outlined text-white">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideItem;
