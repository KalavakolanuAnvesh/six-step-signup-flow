
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Mock login - this would connect to your auth service in a real app
    toast.success('Login successful!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-botplanet-dark">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-10 px-6">
        <div className="w-full max-w-md bg-botplanet-dark-blue rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-center mb-6 text-white">
            Log In to Your Account
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="text-sm text-botplanet-purple hover:text-botplanet-light-purple">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-botplanet-purple hover:bg-botplanet-dark-purple"
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-botplanet-purple hover:text-botplanet-light-purple">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <footer className="py-6 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 BotPlanet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
