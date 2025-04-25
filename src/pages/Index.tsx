
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Feature from '@/components/Feature';
import { BookOpen, BarChart3, Layers } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-botplanet-dark">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-botplanet-purple to-botplanet-light-purple text-transparent bg-clip-text">
            The Ultimate AI Bot Marketplace
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Connect with powerful AI bots to transform your workflow, enhance productivity, and unlock new possibilities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-botplanet-purple hover:bg-botplanet-dark-purple">
                Get Started - Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-botplanet-purple text-botplanet-purple hover:bg-botplanet-purple/10">
                Log In to Your Account
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-botplanet-dark-blue/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature 
                title="Easy Integration" 
                description="Connect your bots seamlessly with our simple integration process."
                icon={<Layers />}
              />
              <Feature 
                title="Real-time Monitoring" 
                description="Monitor your bots' performance and status in real-time."
                icon={<BookOpen />}
              />
              <Feature 
                title="Advanced Analytics" 
                description="Get detailed insights and analytics about your bots' operations."
                icon={<BarChart3 />}
              />
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 BotPlanet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
