import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAuthenticated';

const Header = () => {
  const {isAuthenticated} = useAuthenticated();
  return (
    <>
      <section>
        <div className='w-[1144px] mx-auto'>
          <div className='flex items-center py-5'>
            <div className='w-[30%]'>
              <h1 className='text-2xl font-bold'>TASKio</h1>
            </div>
            <div className='w-[70%]'>
              <ul className='flex gap-4 items-center justify-end'>
                {!isAuthenticated ? (
                  <>
                    <li className='text-xl font-bold'>
                      <Link to={'/signup'}>Signup</Link>
                    </li>
                    <li className='text-xl font-bold'>
                      <Link to={'/login'}>Login</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className='text-xl font-bold'>
                      <Link to={'/create-post'}>Create Post</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
