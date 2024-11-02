import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <a>Listed Books</a>
      </li>
      <li>
        <NavLink to={'dashboard'}>Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div className='mb-5'>
      {/* ========== Nav Bar ========== */}
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          {/* ========== Small Device Navbar ========== */}
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow'
            >
              {links}
            </ul>
          </div>
          <a className='btn btn-ghost text-xl md:text-2xl lg:text-3xl text-start'>
            Book Vibe
          </a>
        </div>
        {/* ========== Large Device Navbar ========== */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 md:text-lg'>{links}</ul>
        </div>
        <div className='navbar-end space-x-2'>
          <a className='primary-btn'>Sign In</a>
          <a className='secondary-btn'>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
