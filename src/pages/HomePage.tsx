import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Target, Users, Zap, MapPin, Award, Phone, Network, Satellite, Cable, Box, Wrench, Layers, Settings } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const stats = [
    { number: '20+', label: 'Countries', icon: Globe },
    { number: '190K', label: 'KM Monthly Capacity', icon: Cable },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Global Partners', icon: Network }
  ];

  const productCategories = [
    {
      id: 'frp-products',
      title: 'FRP Products',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
      description: 'Comprehensive fiber reinforced plastic solutions for cable reinforcement',
      icon: Cable,
      products: ['Uncoated Bare FRP', 'EAA Coated FRP', 'Water Blocking FRP', 'Thermal FRP']
    },
    {
      id: 'frp-rodder',
      title: 'FRP Rodder & Tools',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
      description: 'Professional installation tools and rodders',
      icon: Wrench,
      products: ['Standard FRP Rodder', 'Heavy Duty Rodder']
    },
    {
      id: 'arp-products',
      title: 'ARP Products',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
      description: 'Advanced aramid reinforced plastic solutions',
      icon: Shield,
      products: ['Uncoated ARP', 'Coated ARP']
    },
    {
      id: 'cable-fillers',
      title: 'Cable Fillers',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80',
      description: 'Quality filling materials for cable construction',
      icon: Box,
      products: ['HDPE Fillers', 'LDPE Fillers']
    },
    {
      id: 'optical-fiber-cables',
      title: 'Optical Fiber Cables',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      description: 'Complete range of fiber optic cables',
      icon: Zap,
      products: ['Armoured Cables', 'ADSS Cables', 'Duct Cables', 'FTTH Cables']
    },
    {
      id: 'passive-components',
      title: 'Passive Components',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      description: 'Essential passive optical components',
      icon: Network,
      products: ['Optical Splitters', 'Couplers', 'WDM Devices', 'Attenuators', 'Pigtails', 'Connectors', 'Adapters']
    },
    {
      id: 'connectivity-accessories',
      title: 'Connectivity & Accessories',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
      description: 'Complete connectivity and installation accessories',
      icon: Settings,
      products: ['FMS/FDMS', 'Patch Cords', 'Termination Boxes', 'Splice Closures']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'ISO Certified',
      description: 'Quality management system ensuring consistent excellence',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Global Reach',
      description: 'Serving customers across multiple continents',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals and technicians',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous R&D for cutting-edge solutions',
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with YouTube Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Local Video Background */}
        <VideoBackground 
          videoSrc="/Assets/hero-video.mp4"
          posterSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="z-0"
          enableControls={true}
        />
        
        {/* Enhanced Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-800/60 to-blue-900/75 z-10"></div>
        
        {/* Additional overlay for mobile readability */}
        <div className="absolute inset-0 bg-black/30 z-20 md:hidden"></div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-4 py-20 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-400/40 mb-6">
              <Satellite className="h-5 w-5 text-blue-200 mr-2" />
              <span className="text-blue-100 text-sm font-medium">Connecting the Global Network</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            <span className="block mb-2">Connecting the World</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 leading-relaxed drop-shadow-none">
              Through Fiber Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Leading manufacturer of fiber optic solutions, delivering innovation and quality 
            across the interconnected global network
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button
              onClick={() => handleNavigation('/products')}
              className="group inline-flex items-center px-8 py-4 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-500/30"
            >
              <span className="text-lg font-semibold">Explore Products</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="group inline-flex items-center px-8 py-4 border-2 border-white/90 text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-lg font-semibold">Contact Us</span>
            </button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/25 hover:bg-white/25 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1 drop-shadow-md">{stat.number}</div>
                <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Complete Product Range Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From FRP reinforcement solutions to complete fiber optic systems - engineered for excellence and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <category.icon className="h-6 w-6 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="space-y-1 mb-4">
                    {category.products.slice(0, 3).map((product, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {product}
                      </div>
                    ))}
                    {category.products.length > 3 && (
                      <div className="text-xs text-blue-600 font-medium">
                        +{category.products.length - 3} more products
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleNavigation(`/products#${category.id}`)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose OFR Telecom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in every connection, innovation in every solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Teaser */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 text-blue-300 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Global Network, Local Expertise</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From Asia to America, Europe to Africa - we're connecting the world with reliable fiber optic solutions
          </p>
          <button
            onClick={() => handleNavigation('/global-presence')}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <MapPin className="h-5 w-5 mr-3" />
            Explore Our Global Presence
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Connect?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our fiber optic solutions can power your next project
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleNavigation('/contact')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <Phone className="h-5 w-5 mr-3" />
              Get Quote
            </button>
            <button
              onClick={() => handleNavigation('/products')}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              View Catalog
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;