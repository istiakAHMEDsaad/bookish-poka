import React from 'react';

const Footers = () => {
  return (
    <>
      <footer className='footer bg-base-200 text-base-content p-10 font-work-sans'>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
        <form>
          <h6 className='footer-title'>Newsletter</h6>
          <fieldset className='form-control w-80'>
            <label className='label'>
              <span className='label-text'>Enter your email address</span>
            </label>
            <div className='join'>
              <input
                type='text'
                placeholder='username@site.com'
                className='input input-bordered join-item'
              />
              <button className='btn btn-primary join-item'>Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className='footer footer-center bg-base-300 text-base-content p-4 font-work-sans'>
        <aside>
          <p>
            Copyright &copy; {new Date().getFullYear()} - All right reserved by
            Istiak Ahmed Saad
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footers;
