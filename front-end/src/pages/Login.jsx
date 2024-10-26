import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const password = e.target.userPassword.value;
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/v1/user/signin',
      data: {
        userName,
        password,
      },
      withCredentials: true,
    })
      .then((response) => {
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section>
      <div className='flex justify-center items-center h-[80vh]'>
        <div className='w-[600px] rounded-[15px] shadow-2xl p-[25px]'>
          <h1 className='text-3xl font-bold '>Wellcome Back :-)</h1>
          <p className='text-lg font-medium mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className='mt-5' onSubmit={handleLogin}>
            <div className='flex flex-col gap-3'>
              <label htmlFor='userName' className='text-xl font-semibold'>
                User Name<span className='text-red-600'>*</span>
              </label>
              <input
                required
                type='text'
                name='userName'
                id='userName'
                placeholder='Please Type Your UserName'
                className='outline-none p-4 border-[2px] border-gray-500 rounded-[10px] w-[500px]'
              />
            </div>
            <div className='flex flex-col gap-3 mt-4'>
              <label htmlFor='userPassword' className='text-xl font-semibold'>
                Password<span className='text-red-600'>*</span>
              </label>
              <input
                required
                type='password'
                name='userPassword'
                id='userPassword'
                placeholder='Please Type Your Password'
                className='outline-none p-4 border-[2px] border-gray-500 rounded-[10px] w-[500px]'
              />
            </div>
            <button className='px-[25px] py-[12px] rounded-[10px] text-lg font-bold bg-lime-900 mt-[25px] text-white'>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
