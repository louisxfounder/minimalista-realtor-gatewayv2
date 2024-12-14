import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", email);
    toast.success("Thank you! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-black opacity-80 hero-overlay" />
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-3xl md:text-6xl font-playfair text-white mb-4 md:mb-6">
            Unlocking the Doors to Real Estate Investing
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            With the right guidance, anyone can invest confidently and build lasting wealth.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 border-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-luxury-gold hover:bg-luxury-gold/90 whitespace-nowrap">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};