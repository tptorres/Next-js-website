import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark mb-2 '>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Tyler Torres
        </a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Software</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/about'>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
