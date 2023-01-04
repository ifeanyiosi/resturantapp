import React, { useState } from "react";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { motion } from "framer-motion";
import { IoFastFood } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import { categories } from "../../utils/data";
import Loader from "../Loader";
import Button from "../Button";
import { storage } from "../../firebase.config";
import { saveItem } from "../../utils/firebaseFunctions";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error, Pleasee try again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
            setIsLoading(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    });
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCalories("Select Category");
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Please Fill the required fields");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title,
          imageURL: imageAsset,
          category,
          calories,
          qty: 1,
          price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Upload Successful");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
          clearData();
          setIsLoading(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error try again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center min-h-screen">
      <div className="w-[90%] md-[75%] border border-gray-3 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-3 flex items-center gap-2">
          <IoFastFood className="text-xl text-gray-6" />
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Give a title"
            className="w-full h-full text-lg bg-transparent text-primary-8 outline-none border-none placeholder:text-gray-4"
          />
        </div>

        <div className="w-full ">
          <select
            className="outline-none w-full text-base border-b-2 border-gray-2 p-2 rounded-md cursor-pointer"
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id=""
          >
            <option
              className="bg-white"
              value="other
            "
            >
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-primary-8"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className=" group flex justify-center items-center flex-col border-2 border-dotted border-gray-3 w-full h-[225px] md:h-[420px] cursor-pointer gap-2">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <BsUpload className="text-gray-5 text-3xl hover:text-gray-6" />
                      <p className=" text-gray-5 text-3xl hover:text-gray-6 ">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      className="w-0 h-0"
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div className="absolute bottom-3 right-3 flex items-center justify-center rounded-full">
                      <Button
                        onClick={deleteImage}
                        type="button"
                        variant="alt"
                        label=""
                        prefix={<AiFillDelete className="text-white" />}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-3 flex items-center gap-2">
            <MdFoodBank className="text-gray-6 text-2xl" />
            <input
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              type="text"
              required
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent text-primary-8 outline-none border-none placeholder:text-gray-4"
            />
          </div>
          <div className="w-full py-2 border-b border-gray-3 flex items-center gap-2">
            <TbCurrencyNaira className="text-gray-6 text-2xl" />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              required
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent text-primary-8 outline-none border-none placeholder:text-gray-4"
            />
          </div>
        </div>
        <div className=" flex items-center w-full ml-0 md:ml-auto md:w-auto">
          <Button onClick={saveDetails} type="button" label="Save" />
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
