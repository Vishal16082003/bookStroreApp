import { Link } from "react-router-dom"
import { useForm, } from "react-hook-form"

function Contact() {
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()
        const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className="">
        <div className="flex justify-center ">
             <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="flex justify-between ">
                        <h3 className="font-bold text-2xl">Contact Us</h3>
                            {/* if there is a button in form, it will close the modal */}
                            {" "}
                            {/* <Link to="/" className="btn btn-sm btn-circle btn-ghost ">✕</Link> */}
                        
                        
                          </div>
                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your name"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                 {...register("name", { required: true })} />
                                  <br />
                                {errors.text &&
                                    <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Emaill */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Email address"
                                className="w-80 px-3 py-1 border rounded-md outline-none" 
                                {...register("email", { required: true })} />
                                <br />
                                {errors.email &&
                                    <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <span>Message</span>
                            <br />
                            <textarea className="w-80 px-3 py-1 border rounded-md outline-none"
                            placeholder="Type Your message">

                            </textarea>
                            {/* <input type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none" 
                               /> */}
                               
                        </div>
                        <div className=" mt-4 ">
                            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-300 cursor-pointer">Submit</button>
                            
                          
                            
                        </div>
                     </form>
        </div>
    </div>
    </>
  )
}

export default Contact