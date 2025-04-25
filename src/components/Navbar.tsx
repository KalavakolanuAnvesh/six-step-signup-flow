
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BotLogo from './BotLogo';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("w-full py-4 px-6 flex justify-between items-center", className)}>
      <div className="flex items-center space-x-2">
        <BotLogo />
        <span className="text-xl font-semibold bg-gradient-to-r from-botplanet-purple to-botplanet-light-purple text-transparent bg-clip-text">
          BotPlanet
        </span>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white/80 hover:text-white transition-colors">
          Home
        </Link>
        <Link to="#" className="text-white/80 hover:text-white transition-colors">
          Inside Sales
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login">
          <Button variant="link" className="text-botplanet-light-purple hover:text-botplanet-purple">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-botplanet-purple hover:bg-botplanet-dark-purple text-white">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
