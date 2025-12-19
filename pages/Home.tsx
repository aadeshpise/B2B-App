import React from 'react';
import { ArrowRight, CheckCircle, Leaf, Scissors, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-brand-beige">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Shapes/Bars */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-salmon/5 skew-x-12 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-brand-brown/5 -skew-x-12 -translate-x-10"></div>
          <div className="absolute top-20 left-10 w-24 h-2 bg-brand-salmon rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-32 h-2 bg-brand-black rounded-full opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-belleza text-5xl md:text-7xl font-bold text-brand-black mb-6 leading-tight">
            Crafting the Future of <br />
            <span className="text-brand-salmon">Sustainable Fashion</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Woavenir B2B is your premier partner for high-quality apparel manufacturing.
            We bridge the gap between design and production with ethical practices and premium quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-salmon text-white px-8 py-4 rounded-full font-medium hover:bg-brand-brown transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
            <a
              href="#services"
              className="bg-white text-brand-black border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-black py-10 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="bg-brand-salmon/20 p-3 rounded-full">
                        <Leaf className="text-brand-salmon" size={24} />
                    </div>
                    <div>
                        <h3 className="font-belleza text-lg">Sustainable Materials</h3>
                        <p className="text-gray-400 text-sm">Eco-friendly fabrics & processes</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="bg-brand-salmon/20 p-3 rounded-full">
                        <Scissors className="text-brand-salmon" size={24} />
                    </div>
                    <div>
                        <h3 className="font-belleza text-lg">Precision Manufacturing</h3>
                        <p className="text-gray-400 text-sm">High-quality craftsmanship</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="bg-brand-salmon/20 p-3 rounded-full">
                        <Globe className="text-brand-salmon" size={24} />
                    </div>
                    <div>
                        <h3 className="font-belleza text-lg">Global Shipping</h3>
                        <p className="text-gray-400 text-sm">Efficient logistics worldwide</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Placeholder content for "UI bars and elements" */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden relative shadow-xl">
                   <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80"
                    alt="Fashion Design"
                    className="w-full h-full object-cover"
                   />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-salmon rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-brand-brown rounded-full -z-10"></div>
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="font-belleza text-4xl text-brand-black mb-6">
                    Design to Delivery <br/>
                    <span className="text-brand-salmon">Seamlessly</span>
                </h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1">
                            <CheckCircle className="text-brand-brown" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-black">Concept Development</h4>
                            <p className="text-gray-600 mt-1">Our design team helps bring your vision to life with detailed tech packs.</p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-gray-200"></div>
                     <div className="flex items-start gap-4">
                        <div className="mt-1">
                            <CheckCircle className="text-brand-brown" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-black">Sourcing</h4>
                            <p className="text-gray-600 mt-1">Access to a vast network of premium fabric suppliers.</p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-gray-200"></div>
                     <div className="flex items-start gap-4">
                        <div className="mt-1">
                            <CheckCircle className="text-brand-brown" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-brand-black">Production</h4>
                            <p className="text-gray-600 mt-1">Scalable manufacturing lines ensuring quality control at every step.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;