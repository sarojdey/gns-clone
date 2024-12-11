import { useState } from "react";
import { AiFillFileImage, AiOutlineCloudUpload } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const UploadCV = () => {
  const [cv, setCv] = useState(false);
  const [wrongImageType, setWrongImageType] = useState(false);

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    setCv(selectedFile);

    if (selectedFile.type === "file/pdf") {
      setWrongImageType(false);
    } else {
      setWrongImageType(true);
    }
  };

  return (
    <section className="bg-[#2d2265] text-white text-center flex justify-center items-center">
      <div className="h-full w-full lg:p-20 p-10 flex gap-10 md:flex-row flex-col justify-start items-center">
        <div className="basis-full flex justify-center items-center flex-col gap-5">
          <h2
            className="text-gradient uppercase text-4xl font-semibold"
            style={{ textShadow: "2px -2px white" }}
          >
            upload your cv
          </h2>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quo esse cupiditate odit possimus deleniti vel velit tenetur ut
            deserunt.
          </p>
        </div>

        <div className="basis-full flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3  h-420">
          {!cv ? (
            <label>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-2xl">
                    <AiOutlineCloudUpload />
                  </p>
                  <p className="text-lg">Click to upload</p>
                </div>

                <p className={`text-gray-400 mt-20 `}>
                  Recommendation : Use only PDF file
                </p>
              </div>
              <input
                type="file"
                name="upload-image"
                onChange={uploadImage}
                className="w-0 h-0"
              />
            </label>
          ) : (
            <>
              <div className="relative h-full">
                <AiFillFileImage className="w-56 h-56" />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setCv(false)}
                >
                  <MdDelete className="text-black shadow-2xl" />
                </button>
              </div>
              <p
                className={`mt-32 ${
                  wrongImageType ? " text-gray-400" : "text-red-400"
                } `}
              >
                Recommendation : Use only PDF file
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadCV;
