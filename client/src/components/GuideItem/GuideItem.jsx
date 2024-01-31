import React, { useEffect, useRef, useState } from "react";
import iconmenu from "../../assets/icons/IconMenuVertical.png";
import DropMenu from "../DropMenu/DropMenu";
import { useDispatch } from "react-redux";
import { deleteGuide } from "../../redux/guideStore/guidesActions";

const GuideItem = ({ guideInfo }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('me ejecute');
    Swal.fire({
      title: `Do you want to eliminate ${guideInfo.forename} from "guides"?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log('idddddddd', guideInfo.id);
        dispatch(deleteGuide(guideInfo.id));
        Swal.fire("Saved changes!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
  }


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

  const toggleMenu = () => {
    setOpen(!open);
  };
  const options = [
    { label: "Edit", to: `/profilefavs/` },
    { label: "Disable", to: `/profile/` },
  ];

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
        <div className=" relative flex flex-row items-center">
          <button
            className="h-10 w-10 bg-primary rounded-2xl hover:bg-btn-hover"
            onClick={toggleMenu}
          >
            {open && (
              <DropMenu options={options} onClose={() => setOpen(false)} />
            )}
            <img src={iconmenu} alt="icon menu" />
          </button>
          <button
            className="h-10 w-10 flex justify-center items-center bg-primary rounded-full hover:bg-btn-hover"
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
