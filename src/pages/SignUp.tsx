
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { User, CreditCard, Check } from 'lucide-react';

import Navbar from '@/components/Navbar';
import FormStep from '@/components/FormStep';
import StepIndicator from '@/components/StepIndicator';

const SignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  // Form states
  const [orgData, setOrgData] = useState({
    name: '',
    industry: '',
    size: '',
    country: '',
    create: ''
  });
  
  const [adminData, setAdminData] = useState({
    fullName: '',
    role: ''
  });
  
  const [botSelections, setBotSelections] = useState({
    sales: false,
    marketing: false,
    admin: false,
    content: false
  });
  
  const [paymentData, setPaymentData] = useState({
    promoCode: '',
    billingCycle: 'monthly',
    autoRenew: false
  });
  
  const steps = [
    "Register",
    "Profile",
    "Select Bots",
    "Payment",
    "Complete"
  ];
  
  const handleNext = () => {
    // Validation logic for each step
    if (currentStep === 0) {
      // Validate organization step
      if (!orgData.name || !orgData.industry || !orgData.country) {
        toast.error("Please fill all required fields");
        return;
      }
    } else if (currentStep === 1) {
      // Validate admin profile step
      if (!adminData.fullName || !adminData.role) {
        toast.error("Please fill all required fields");
        return;
      }
    } else if (currentStep === 2) {
      // Validate bot selection step
      const hasBots = Object.values(botSelections).some(value => value);
      if (!hasBots) {
        toast.error("Please select at least one bot");
        return;
      }
    } else if (currentStep === 3) {
      // Mock payment processing
      toast.success("Payment processed successfully!");
    }
    
    // Move to next step if validation passed
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleOrgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrgData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAdminChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleBotToggle = (bot: keyof typeof botSelections) => {
    setBotSelections(prev => ({ ...prev, [bot]: !prev[bot] }));
  };
  
  const goToHome = () => {
    navigate('/');
    toast.success("Your organization is ready! Welcome to BotPlanet.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-botplanet-dark">
      <Navbar />
      
      <div className="flex-1 py-10 px-6">
        <div className="max-w-3xl mx-auto bg-botplanet-dark-blue rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-center mb-8 text-white">
            {currentStep === 0 ? "Register Your Organization" : 
             currentStep === 1 ? "Admin Profile Setup" :
             currentStep === 2 ? "Select Bots" :
             currentStep === 3 ? "Payment / Subscription" :
             "Your organization is ready!"}
          </h1>
          
          {currentStep < steps.length - 1 && (
            <StepIndicator steps={steps} currentStep={currentStep} />
          )}

          {/* Step 1: Register Organization */}
          <FormStep isActive={currentStep === 0}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input 
                  id="org-name" 
                  name="name" 
                  placeholder="Enter organization name" 
                  value={orgData.name}
                  onChange={handleOrgChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select 
                  value={orgData.industry} 
                  onValueChange={(value) => setOrgData({...orgData, industry: value})}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-size">Company Size</Label>
                <Input 
                  id="company-size" 
                  name="size" 
                  placeholder="Number of employees" 
                  value={orgData.size}
                  onChange={handleOrgChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input 
                  id="country" 
                  name="country" 
                  placeholder="Country" 
                  value={orgData.country}
                  onChange={handleOrgChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="create">Create</Label>
                <Input 
                  id="create" 
                  name="create" 
                  placeholder="Optional" 
                  value={orgData.create}
                  onChange={handleOrgChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <Button 
                onClick={handleNext}
                className="w-full bg-botplanet-purple hover:bg-botplanet-dark-purple"
              >
                Continue
              </Button>
            </div>
          </FormStep>

          {/* Step 2: Admin Profile */}
          <FormStep isActive={currentStep === 1}>
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                <User size={40} className="text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input 
                  id="full-name" 
                  name="fullName" 
                  placeholder="Enter your full name" 
                  value={adminData.fullName}
                  onChange={handleAdminChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role/Title</Label>
                <Input 
                  id="role" 
                  name="role" 
                  placeholder="Your position in the organization" 
                  value={adminData.role}
                  onChange={handleAdminChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              
              <div className="flex justify-between mt-8 space-x-4">
                <Button 
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex-1 bg-botplanet-purple hover:bg-botplanet-dark-purple"
                >
                  Next
                </Button>
              </div>
            </div>
          </FormStep>

          {/* Step 3: Select Bots */}
          <FormStep isActive={currentStep === 2}>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-1 space-y-4">
                <div className={`p-2 rounded cursor-pointer ${botSelections.sales ? 'bg-botplanet-purple/20 text-botplanet-purple' : 'text-gray-400 hover:bg-gray-800'}`} onClick={() => handleBotToggle('sales')}>
                  Sales
                </div>
                <div className={`p-2 rounded cursor-pointer ${botSelections.marketing ? 'bg-botplanet-purple/20 text-botplanet-purple' : 'text-gray-400 hover:bg-gray-800'}`} onClick={() => handleBotToggle('marketing')}>
                  Marketing
                </div>
                <div className={`p-2 rounded cursor-pointer ${botSelections.admin ? 'bg-botplanet-purple/20 text-botplanet-purple' : 'text-gray-400 hover:bg-gray-800'}`} onClick={() => handleBotToggle('admin')}>
                  Admin
                </div>
                <div className={`p-2 rounded cursor-pointer ${botSelections.content ? 'bg-botplanet-purple/20 text-botplanet-purple' : 'text-gray-400 hover:bg-gray-800'}`} onClick={() => handleBotToggle('content')}>
                  Content
                </div>
                <div className="p-2 rounded text-gray-400 cursor-pointer hover:bg-gray-800">
                  etc.
                </div>
              </div>
              
              <div className="col-span-4 bg-gray-800 rounded-lg p-4">
                {botSelections.sales && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center p-3 bg-gray-700 rounded mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="bg-botplanet-purple/20 p-2 rounded">
                          <User size={20} className="text-botplanet-purple" />
                        </div>
                        <span>Sales Assistant</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs h-7 px-2 border-gray-600">Advanced</Button>
                        <Button size="sm" variant="outline" className="text-xs h-7 px-2 border-gray-600">Try Now</Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="bg-botplanet-purple/20 p-2 rounded">
                          <CreditCard size={20} className="text-botplanet-purple" />
                        </div>
                        <span>Price Optimization</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs h-7 px-2 border-gray-600">Advanced</Button>
                        <Button size="sm" variant="outline" className="text-xs h-7 px-2 border-gray-600">Try Now</Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Display a message when no category is selected */}
                {!Object.values(botSelections).some(v => v) && (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Select a category to see available bots
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-between mt-8 space-x-4">
              <Button 
                onClick={handlePrevious}
                variant="outline"
                className="flex-1 border-gray-700 text-gray-300"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                className="flex-1 bg-botplanet-purple hover:bg-botplanet-dark-purple"
              >
                Proceed to Payment
              </Button>
            </div>
          </FormStep>

          {/* Step 4: Payment / Subscription */}
          <FormStep isActive={currentStep === 3}>
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-4">Selected Bots</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Bot Name</span>
                    <span>Quantity</span>
                  </div>
                  
                  {botSelections.sales && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sales Assistant</span>
                      <span className="text-gray-300">1</span>
                    </div>
                  )}
                  
                  {botSelections.marketing && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Marketing Bot</span>
                      <span className="text-gray-300">1</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="promo-code">Promo Code</Label>
                  <Input 
                    id="promo-code" 
                    placeholder="Enter promo code (optional)" 
                    value={paymentData.promoCode}
                    onChange={(e) => setPaymentData({...paymentData, promoCode: e.target.value})}
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Billing Cycle</Label>
                  <RadioGroup 
                    value={paymentData.billingCycle} 
                    onValueChange={(value) => setPaymentData({...paymentData, billingCycle: value})}
                    className="flex space-x-8"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" className="text-botplanet-purple" />
                      <Label htmlFor="monthly">Monthly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="annual" id="annual" className="text-botplanet-purple" />
                      <Label htmlFor="annual">Annual</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="auto-renew" 
                    checked={paymentData.autoRenew}
                    onCheckedChange={(checked) => 
                      setPaymentData({...paymentData, autoRenew: checked as boolean})}
                  />
                  <label
                    htmlFor="auto-renew"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enable auto renew
                  </label>
                </div>
              </div>
              
              <div className="flex justify-between mt-8 space-x-4">
                <Button 
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex-1 bg-botplanet-purple hover:bg-botplanet-dark-purple"
                >
                  Pay & Subscribe
                </Button>
              </div>
            </div>
          </FormStep>

          {/* Step 5: Your organization is ready! */}
          <FormStep isActive={currentStep === 4}>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-botplanet-purple/20 rounded-full flex items-center justify-center">
                <Check size={32} className="text-botplanet-purple" />
              </div>
              
              <h2 className="text-2xl font-semibold">Your organization is ready!</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                You've successfully set up your organization on BotPlanet. Your selected bots are now available in your Bot Management Dashboard.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-4 mx-auto max-w-md">
                <div className="mb-4 border-b border-gray-700 pb-2">
                  <div className="w-full h-4 bg-gray-700 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <div className="ml-2 flex-1">
                      <div className="w-3/4 h-3 bg-gray-700 rounded"></div>
                      <div className="w-1/2 h-2 mt-1 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <div className="ml-2 flex-1">
                      <div className="w-3/4 h-3 bg-gray-700 rounded"></div>
                      <div className="w-1/2 h-2 mt-1 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm">Bot Management View</div>
                      <div className="w-24 h-2 bg-gray-700 rounded mt-1"></div>
                    </div>
                    <div className="w-16 h-4 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={goToHome}
                className="bg-botplanet-purple hover:bg-botplanet-dark-purple"
              >
                Go to Dashboard
              </Button>
            </div>
          </FormStep>
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

export default SignUp;
