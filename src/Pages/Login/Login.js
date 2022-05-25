import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if(user){
       console.log(user)
   }
   const onSubmit = data => {
    console.log(data);
   }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-secondary">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  
  </label>
  <input
  {...register("email", {
      required:{
      value:true,
      message:'Email is required'
      },
    pattern: {
      value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
      message: 'Provide a valid email'
    }
  })}
  type="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{error.email.message}</span>}
  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{error.email.message}</span>}
    
    
  </label>
</div>
          <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
  
  </label>
  <input
  {...register("password", {
      required:{
      value:true,
      message:'Password is required'
      },
    minLength: {
      value: 6,
      message: 'More than or equal six characters'
    }
  })}
  type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{error.email.message}</span>}
  {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{error.email.message}</span>}
    
    
  </label>
</div>
      
      <input className='btn border-0 bg-gradient-to-r from-primary to-secondary text-white font-bold w-full max-w-xs' type="submit" value="Login" />
    </form>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline ">Continoue With Google</button>
        </div>
      </div>
        </div>
    );
};

export default Login;