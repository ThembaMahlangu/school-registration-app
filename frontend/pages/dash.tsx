import { useState } from "react";
import HotToast from "react-hot-toast";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import Input from "@/components/form/Input";
import Button from "@/components/button/Button";
import axios from "axios";

const Dash = () => {
  const [schoolForm, setSchoolForm] = useState({
    name: "",
    location: "",
    refCode: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSchoolForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!schoolForm.name || !schoolForm.location || !schoolForm.refCode) {
      HotToast.error("Please fill all fields");
    } else {
      axios
        .post("https://server.edulinkage.co.za:8000/api/schools", schoolForm)
        .then((response) => {
          HotToast.success("School has been submitted");
          setSchoolForm({
            name: "",
            location: "",
            refCode: "",
          });
        })
        .catch((error) => {
          HotToast.error(error.response?.data?.message || "Something went wrong");
        });
    }
  };

  const handleLogoutClick = () => {
    // handle logout logic
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="hidden w-[50%] md:block">
          <Logo />
          <div className="h-full w-full">
            <Image
              className="h-[100%] w-full object-contain"
              src="/assets/hero_image.png"
              alt="login"
              width={2000}
              height={300}
            />
          </div>
        </div>
        <section className="flex flex-1 flex-col bg-[#2221]">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex w-full flex-col rounded-md border-gray-700 px-6 sm:w-[90%] lg:w-[30em]">
              <div className="">
                <h2 className="pb-4 text-2xl font-medium capitalize text-purple-700">
                  Register a school below so that you can start using the School Management App
                </h2>
              </div>
              <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
                <Input
                  name="name"
                  placeholder="School Name"
                  label="School Name"
                  type="text"
                  value={schoolForm.name}
                  onChange={handleFormChange}
                />
                <Input
                  name="location"
                  placeholder="School Location"
                  label="School Location"
                  type="text"
                  value={schoolForm.location}
                  onChange={handleFormChange}
                />
                <Input
                  name="refCode"
                  placeholder="Reference Code"
                  label="Reference Code"
                  type="text"
                  value={schoolForm.refCode}
                  onChange={handleFormChange}
                />
                <Button label="Submit" radius="10px" color="#7E22CE" width="100%" />
              </form>
              <button
                onClick={handleLogoutClick}
                className="text-white mt-4 w-20 bg-red-500 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dash;