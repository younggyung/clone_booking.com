import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-[#013B94]'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
                <div className="flex lg:flex-1">
                    <Link href="" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Booking.com</span>
                            <img className='h-8 w-auto'
                            src="https://th.bing.com/th/id/R.f03f3ab22b2147f45cda0cc7abb58ee3?rik=fPvlEteuBUNpAg&riu=http%3a%2f%2fmanager.presspage.com%2fcontent%2fuploads%2f685%2fbooking.com_logo_white_1000.jpg&ehk=vCQU67%2fuF4bpGpKXY%2f7nD2Hd%2faj%2b4fuEJB7uVumpvlw%3d&risl=&pid=ImgRaw&r=0"
                            alt=""/>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;