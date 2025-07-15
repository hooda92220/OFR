import React, { useState, useEffect } from 'react';
import { Cable, Box, Zap, Settings, ArrowRight, Shield, Layers, Wrench, ChevronDown, ChevronUp, Network, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const productCategories = [
  {
    id: 'frp-products',
    title: 'FRP (Fiber Reinforced Plastic) Products',
    icon: Cable,
    description: 'Comprehensive range of fiber reinforced plastic solutions for cable reinforcement',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'Uncoated Bare FRP',
        description: 'High-strength bare FRP rods for basic reinforcement applications',
        specs: ['Pure glass fiber construction', 'High tensile strength', 'Lightweight design', 'Cost-effective solution']
      },
      {
        name: 'EAA Coated FRP',
        description: 'Enhanced adhesion coating for superior bonding with cable materials',
        specs: ['EAA coating technology', 'Superior adhesion properties', 'Enhanced bonding strength', 'Improved cable performance']
      },
      {
        name: 'HDPE/LDPE/LSZH Coated FRP',
        description: 'Multi-layer coated FRP for enhanced protection and performance',
        specs: ['Multiple coating options', 'Chemical resistance', 'Fire retardant properties', 'Enhanced durability']
      },
      {
        name: 'Water Blocking FRP',
        description: 'Specialized FRP with water-blocking properties for moisture protection',
        specs: ['Water-blocking technology', 'Moisture protection', 'Swelling compounds', 'Long-term reliability']
      },
      {
        name: 'Thermal FRP',
        description: 'High-temperature resistant FRP solutions for extreme thermal environments',
        specs: ['Temperature range: -40°C to +85°C', 'Thermal stability', 'Low thermal expansion', 'Heat resistant coating']
      },
      {
        name: 'UV Resistant FRP',
        description: 'UV-stabilized FRP products for outdoor applications with enhanced weather resistance',
        specs: ['UV protection coating', 'Weather resistant', 'Long-term outdoor durability', 'Color stability']
      },
      {
        name: 'Flat FRP',
        description: 'Flat profile FRP for specialized cable applications',
        specs: ['Flat cross-section design', 'Space-efficient', 'Custom dimensions', 'Specialized applications']
      },
      {
        name: 'Coloured FRP',
        description: 'Color-coded FRP for identification and aesthetic purposes',
        specs: ['Multiple color options', 'Color-fast properties', 'Identification coding', 'Custom colors available']
      },
      {
        name: 'FRP with Steel/Copper Wire',
        description: 'Hybrid FRP with integrated metallic components for enhanced properties',
        specs: ['Integrated metal wires', 'Enhanced conductivity', 'Improved strength', 'Hybrid construction']
      },
      {
        name: 'FRP with Fiber Tube',
        description: 'FRP integrated with fiber optic tubes for advanced cable designs',
        specs: ['Integrated fiber tubes', 'Advanced cable design', 'Space optimization', 'Enhanced performance']
      },
      {
        name: 'High Diameter FRP',
        description: 'Large diameter FRP rods for heavy-duty applications',
        specs: ['Large diameter options', 'Heavy-duty applications', 'High load capacity', 'Industrial grade']
      },
      {
        name: 'Customised FRP',
        description: 'Tailored FRP solutions designed to meet specific customer requirements',
        specs: ['Custom specifications', 'Tailored solutions', 'Application-specific design', 'Engineering support']
      }
    ]
  },
  {
    id: 'frp-rodder',
    title: 'FRP Rodder & Installation Tools',
    icon: Wrench,
    description: 'Professional-grade FRP rodders and tools for cable installation and maintenance',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'Standard FRP Rodder',
        description: 'High-quality FRP rodders for cable pulling and installation work',
        specs: ['Various lengths available', 'High flexibility', 'Excellent pushing force', 'Durable construction']
      },
      {
        name: 'Heavy Duty FRP Rodder',
        description: 'Industrial-grade rodders for demanding installation environments',
        specs: ['Enhanced strength', 'Extended length options', 'Superior durability', 'Professional grade']
      }
    ]
  },
  {
    id: 'arp-products',
    title: 'ARP (Aramid Reinforced Plastic)',
    icon: Shield,
    description: 'Advanced aramid reinforced plastic solutions for superior strength and performance',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'Uncoated ARP',
        description: 'Pure aramid reinforced plastic rods with exceptional strength properties',
        specs: ['Aramid fiber construction', 'Ultra-high strength', 'Lightweight', 'Chemical resistance']
      },
      {
        name: 'Coated ARP',
        description: 'Coated ARP with enhanced surface properties and protection',
        specs: ['Protective coating', 'Enhanced durability', 'Improved handling', 'Extended service life']
      }
    ]
  },
  {
    id: 'cable-fillers',
    title: 'Cable Fillers & Materials',
    icon: Box,
    description: 'High-quality filling materials for cable construction and void management',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'HDPE Fillers',
        description: 'High-density polyethylene fillers for cable void filling and structural support',
        specs: ['High-density polyethylene', 'Excellent chemical resistance', 'Structural support', 'Void filling']
      },
      {
        name: 'LDPE Fillers',
        description: 'Low-density polyethylene fillers for flexible cable applications',
        specs: ['Low-density polyethylene', 'Flexibility', 'Easy processing', 'Cost-effective']
      }
    ]
  },
  {
    id: 'optical-fiber-cables',
    title: 'Optical Fiber Cables',
    icon: Zap,
    description: 'Complete range of fiber optic cables for telecommunications and data transmission',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'Armoured Optical Cables',
        description: 'Heavy-duty armoured fiber optic cables for harsh environments and direct burial',
        specs: ['Steel armor protection', 'Rodent resistance', 'Crush protection', 'Direct burial capability']
      },
      {
        name: 'ADSS Cables (All-Dielectric Self-Supporting)',
        description: 'Self-supporting aerial cables for power line installations without metallic components',
        specs: ['Self-supporting design', 'All-dielectric construction', 'Aerial installation', 'High span capability']
      },
      {
        name: 'Duct Cables',
        description: 'Specialized cables designed for underground duct and conduit installations',
        specs: ['Duct installation optimized', 'Compact design', 'Easy pulling', 'High fiber count options']
      },
      {
        name: 'FTTH Cables (Fiber-to-the-Home)',
        description: 'Drop cables for residential and commercial last-mile connectivity',
        specs: ['Drop cable design', 'Bend-insensitive fibers', 'Easy termination', 'Indoor/outdoor rated']
      },
      {
        name: 'Loose Tube Cables',
        description: 'Outdoor cables with loose tube construction for long-haul applications',
        specs: ['Loose tube design', 'Water blocking', 'Temperature stability', 'Long-haul applications']
      },
      {
        name: 'Tight Buffer Cables',
        description: 'Indoor cables with tight buffer construction for premises applications',
        specs: ['Tight buffer design', 'Easy handling', 'Indoor applications', 'Direct termination']
      }
    ]
  },
  {
    id: 'passive-components',
    title: 'Passive Optical Components',
    icon: Network,
    description: 'Essential passive components for fiber optic network infrastructure',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'Optical Splitters (PLC)',
        description: 'Planar Lightwave Circuit splitters for signal distribution in PON networks',
        specs: ['PLC technology', 'Multiple split ratios (1:2 to 1:64)', 'Low insertion loss', 'High reliability']
      },
      {
        name: 'Optical Couplers',
        description: 'Fused fiber couplers for signal combining and splitting applications',
        specs: ['Fused biconical taper', 'Low excess loss', 'High directivity', 'Environmental stability']
      },
      {
        name: 'Wavelength Division Multiplexers (WDM)',
        description: 'WDM devices for combining multiple wavelengths on single fiber',
        specs: ['CWDM/DWDM options', 'Low insertion loss', 'High isolation', 'Compact design']
      },
      {
        name: 'Optical Attenuators',
        description: 'Fixed and variable attenuators for signal level control',
        specs: ['Fixed and variable types', 'Precise attenuation', 'Low back reflection', 'Stable performance']
      },
      {
        name: 'Pigtails',
        description: 'Pre-terminated fiber pigtails for splicing applications',
        specs: ['Factory terminated', 'Low insertion loss', 'Various connector types', 'Single/multimode options']
      },
      {
        name: 'Fiber Optic Connectors',
        description: 'High-performance connectors for various applications',
        specs: ['SC, LC, ST, FC types', 'Low insertion loss', 'High return loss', 'Field installable options']
      },
      {
        name: 'Fiber Optic Adapters',
        description: 'Coupling adapters for connecting fiber optic connectors',
        specs: ['Various connector types', 'Low insertion loss', 'Precise alignment', 'Durable construction']
      }
    ]
  },
  {
    id: 'connectivity-accessories',
    title: 'Connectivity & Accessories',
    icon: Settings,
    description: 'Complete range of fiber optic connectivity solutions and installation accessories',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        name: 'Fiber Management Systems (FMS)',
        description: 'Rack-mounted fiber management and distribution systems',
        specs: ['19-inch rack mounting', 'High density design', 'Cable management', 'Easy access']
      },
      {
        name: 'Fiber Distribution Management Systems (FDMS)',
        description: 'Wall-mounted fiber distribution and management solutions',
        specs: ['Wall mounting', 'Compact design', 'Splice management', 'Port flexibility']
      },
      {
        name: 'Patch Cords',
        description: 'Pre-terminated patch cables for equipment connections',
        specs: ['Factory terminated both ends', 'Low insertion loss', 'Various lengths', 'Multiple connector types']
      },
      {
        name: 'Indoor Termination Boxes',
        description: 'Indoor fiber termination and distribution enclosures',
        specs: ['Wall/rack mounting', 'Splice management', 'Port flexibility', 'Easy access design']
      },
      {
        name: 'Outdoor Termination Boxes',
        description: 'Weather-resistant outdoor termination and distribution solutions',
        specs: ['IP65/IP68 rated', 'Weather resistant', 'Vandal resistant', 'Multiple entry options']
      },
      {
        name: 'Splice Closures',
        description: 'Environmental protection for fiber splices in outdoor applications',
        specs: ['Waterproof sealing', 'Multiple cable entries', 'Splice organization', 'Re-enterable design']
      },
      {
        name: 'Splice Protection Sleeves (SPS)',
        description: 'Heat-shrink sleeves for individual splice protection',
        specs: ['Heat shrink technology', 'Mechanical protection', 'Various sizes', 'Easy installation']
      }
    ]
  }
];

const ProductModal = ({ product, onClose, isVisible }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, onClose]);

  if (!isVisible || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
          
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Specifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ category, isExpanded, onToggle, isHighlighted }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const closeProductModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <div 
        id={category.id}
        className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
          isHighlighted 
            ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-2xl transform scale-[1.02] bg-gradient-to-br from-blue-50 to-white' 
            : 'hover:shadow-xl'
        }`}
      >
        <div className="relative">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center mb-2">
              <category.icon className="h-8 w-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>
            <p className="text-gray-200 text-sm">{category.description}</p>
          </div>
        </div>
        
        <div className="p-6">
          <button
            onClick={() => onToggle(category.id)}
            className={`w-full flex items-center justify-between text-left mb-4 p-4 rounded-xl transition-all duration-300 ${
              isHighlighted 
                ? 'bg-blue-100 hover:bg-blue-200 border-2 border-blue-300' 
                : 'bg-blue-50 hover:bg-blue-100'
            }`}
          >
            <span className={`font-semibold ${isHighlighted ? 'text-blue-800' : 'text-blue-900'}`}>
              View Products ({category.products.length})
            </span>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-blue-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-blue-600" />
            )}
          </button>

          {isExpanded && (
            <div className="space-y-4 animate-fade-in">
              {category.products.map((product, index) => (
                <div 
                  key={index} 
                  className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                  onClick={() => openProductModal(product)}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors duration-200">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.specs.slice(0, 4).map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-500">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct}
        onClose={closeProductModal}
        isVisible={isModalVisible}
      />
    </>
  );
};

const Products = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [highlightedCategory, setHighlightedCategory] = useState(null);
  const location = useLocation();

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  useEffect(() => {
    // Handle navigation from other pages with hash
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetCategory = productCategories.find(cat => cat.id === targetId);
      
      if (targetCategory) {
        // Delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            // Scroll to element with offset for navbar
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });

            // Highlight the category
            setHighlightedCategory(targetId);
            
            // Auto-expand the category
            setExpandedCategories(prev => 
              prev.includes(targetId) ? prev : [...prev, targetId]
            );

            // Remove highlight after 5 seconds
            setTimeout(() => {
              setHighlightedCategory(null);
            }, 5000);
          }
        }, 100);
      }
    }
  }, [location]);

  // Handle scroll spy for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const category of productCategories) {
        const element = document.getElementById(category.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            // Only highlight if not already highlighted from navigation
            if (!highlightedCategory) {
              setHighlightedCategory(category.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [highlightedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Product Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From FRP reinforcement solutions to complete fiber optic systems - engineered for excellence and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <ProductCard
                key={category.id}
                category={category}
                isExpanded={expandedCategories.includes(category.id)}
                onToggle={toggleCategory}
                isHighlighted={highlightedCategory === category.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our engineering team can develop customized products to meet your specific requirements
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Contact Engineering Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;