import React, { useEffect, useRef, useState } from "react";
import iconmenu from "../../assets/icons/IconMenuVertical.png";
import DropMenu from "../DropMenu/DropMenu";
import { useDispatch } from "react-redux";
import { deleteTour, updateStatus } from "../../redux/tourStore/toursActions";

const TourItem = ({ tourInfo }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    //console.log('me ejecute');
    Swal.fire({
      title: `Do you want to eliminate ${tourInfo.nameTour} from "tours"?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteTour(tourInfo.id));
        Swal.fire("Saved changes!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  const handleStatus = (e) => {
    e.preventDefault();
    //console.log('ahora:', e.target.value);
    dispatch(updateStatus(tourInfo.id, e.target.value));
  };

  // const statusStyle = {
  //   backgroundColor: tourInfo.status === "disabled" ? "green" : "red",
  //   color: "black",
  //   padding: "5px 10px",
  //   borderRadius: "5px",
  // };
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
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
      <div className="w-2/6 flex flex-row items-center justify-around">
        <img
          src={tourInfo.image}
          alt={tourInfo.nameTour}
          className="h-14 rounded-3xl"
        />
        <b>{tourInfo.nameTour}</b>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-around">
        <b>{tourInfo.initialDate}</b>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-around">
        <b>
          {tourInfo.places}/{tourInfo.capacity}
        </b>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-around">
        <b>${tourInfo.price}</b>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-around">
        {/* <div style={statusStyle}> */}
        <div className="w-1/6 flex flex-row items-center font-bold justify-center">
          {/* <b>{tourInfo.status}</b> */}
          <select
            name="status"
            onChange={(e) => handleStatus(e)}
            defaultValue={tourInfo.status}
          >
            <option 
            className="bg-primary rounded-full p-2"
            value="enabled">Enabled</option>
            <option 
            className="bg-red-600 rounded-full p-2"
            value="disabled">Disabled</option>
          </select>
        </div>
      </div>
      <div className="w-1/6 flex flex-row items-center justify-center">
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

export default TourItem;
