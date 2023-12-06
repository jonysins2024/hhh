import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { Navigate, useNavigate } from "react-router-dom";
import '../Login/Login.css'
import ChoosePhoto from '../../Components/ChoosePhoto/ChoosePhoto'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
  };


  return (
    <div className="login-wrapper py-12">
      <div className="container my-20">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <Fade direction="up" cascade damping={0.2} triggerOnce>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral mb-8 text-center">
                Register
              </h1>
              <div>
                {/* photo url */}
                <ChoosePhoto/>
                {/* name */}
                <div className="form-control mb-4">
                  <label className="label" htmlFor="name">
                    <span className="label-text text-[#555656]">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="name"
                    className="input md:py-7 border-[#D5D5D5] border-2 focus:outline-none focus:border-primary"
                    {...register("name", { required: true })}
                  />
                </div>
                {/* email */}
                <div className="form-control mb-4">
                  <label className="label" htmlFor="email">
                    <span className="label-text text-[#555656]">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    className="input md:py-7 border-[#D5D5D5] border-2 focus:outline-none focus:border-primary"
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                </div>

                {/* role */}
                <div className="form-control mb-4">
                <label for="phone" className="text-sm text-[#555656]">Role</label>

                <div className="w-full rounded-lg outline-none border-2 bg-white border-[#D5D5D5] p-5 pe-12 text-sm">
                    <select className='w-full outline-none' name="" id="">
                        <option value="">Seller</option>
                        <option value="">Buyer</option>
                    </select>
                </div>
            </div>

                {/* password */}
                <div className="form-control mb-4 relative">
                  <label className="label" htmlFor="password">
                    <span className="label-text text-[#555656]">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    className="input md:py-7 border-[#D5D5D5] border-2 focus:outline-none focus:border-primary pr-12"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-14 md:top-14 text-lg"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {/* confirm password */}
                <div className="form-control mb-4 relative">
                  <label className="label" htmlFor="password2">
                    <span className="label-text text-[#555656]">Confirm Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password2"
                    placeholder="confirm password"
                    className="input md:py-7 border-[#D5D5D5] border-2 focus:outline-none focus:border-primary pr-12"
                    {...register("password2")}
                  />
                </div>

                {/* register button */}
                <div className="form-control mb-6">
                  <button
                    type="submit"
                    className="rounded bg-gradient-to-r from-red-500 to-yellow-500 text-white md:py-4 md:px-8 md:text-xl disabled:text-white"
                  >
                    Register
                  </button>
                </div>
                {/* link to login page */}
                <div className="flex items-center justify-center gap-x-5">
                  <span className="label-text text-[#555656] flex items-center gap-x-2">
                    Already have an account? Click here <HiArrowLongRight />
                  </span>

                  <input
                    type="checkbox"
                    onClick={(e) =>
                      e.target.checked &&
                      setTimeout(() => navigate("/login"), 500)
                    }
                    className="toggle toggle-secondary"
                    defaultChecked={false}
                  />
                </div>
              </div>
            </Fade>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;