
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import UseAuth from "../../Hooks/UseAuth";
import { getToken, saveUser } from "../../api/auth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
// import axios from "axios";


const SignUp = () => {
    const navigate = useNavigate();
    const {createUser, updateUserProfile, signInWithGoogle, loding} = UseAuth();
    
    const handleSubmit = async event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
    
        try{
            //1. upload image....
            const imageData = await imageUpload(image)

            //2. firebase sign Up
            const result = await createUser(email, password)                  
            
            //3. Update profile.....
            await updateUserProfile(name, imageData?.data?.display_url)
            console.log(result)

            //4. save user data in database....
            const dbResponce = await saveUser(result?.user)
            console.log(dbResponce)
            
            // 5. Get token
            await getToken(result?.user?.email)
            navigate('/');
            toast.success('signUp successfull')
        }
        catch (error){
            console.log(error)
            toast.error(error?.message)
        }
        console.log(name, email, password)
    }
    const handleGoogleSignIn = async () =>{
        try{
            
            const result = await signInWithGoogle()                  

            // save user data in database....
            const dbResponce = await saveUser(result?.user)
            console.log(dbResponce)
            
            //  Get token
            await getToken(result?.user?.email)
            navigate('/');
            toast.success('signUp successfull')
        }
        catch (error){
            console.log(error)
            toast.error(error?.message)
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Welcome to StayVista</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Enter your Name Hare" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" data-temp-mail-org='0' />
            </div>
            <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                    Select Image
                </label>
                <input required type="file" id="image" name="image" accept="image/*"/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                    Email Address
                </label>
                <input type="text" name="email" id="email" required placeholder="Enter Your email Hare" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" data-temp-mail-org='o' />
            </div>
            <div>
                <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                    Password
                </label>
                </div>
                <input type="password" name="password" autoComplete="new-password" id="password" required placeholder="********" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" />
            </div>
            </div>

            <div>
               
                <button type="submit" className="bg-rose-500 w-full rounded-md py-3 text-white">
                {
                loding? <TbFidgetSpinner className="animate-spin m-auto"/> : 
                'Continue'
                }
            </button>
               
            </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">SignUp with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
            <FcGoogle size={32}></FcGoogle>

            <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">Already have an account?{''}
            <Link to='/login' className="hover:underline hover:text-rose-500 text-gray-600">
            Login
            </Link>
            .
            </p>
            </div>
            
        </div>
    );
};

export default SignUp;