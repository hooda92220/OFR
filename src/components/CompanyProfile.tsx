import React from 'react';
import { Building, Award, Shield, Leaf, Factory, Users, Target, Scale, Zap, CheckCircle, Wrench, FileText } from 'lucide-react';

const CompanyProfile = () => {
  return (
    <div className="bg-white">
      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Are the Essential Link</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Expertise</h3>
              <p className="text-gray-600">Leading manufacturer of FRP/GRP/ARP/Optical Fibre Cables/ Fibre Accessories &  Passive products, delivering high-performance solutions at the forefront of the industry.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">Delivering core strength and reliability to build the future for every valued customer</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be recognized as one of the most respected companies for quality and commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Infrastructure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-700 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Existing Capacity</h3>
              <p>120,000 KM Per Month</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">FRP Machines</h3>
              <p>15 Units</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Coating Extruders</h3>
              <p>3 Units</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">FRP Rewinders</h3>
              <p>13 Units</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-[#1a365d] p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Production Area</h3>
              <p>10,000 Square Feet</p>
            </div>
            <div className="bg-[#1a365d] p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Additional Capacity</h3>
              <p>70,000 KM Per Month</p>
            </div>
            <div className="bg-[#1a365d] p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">New FRP Machines</h3>
              <p>5 Units</p>
            </div>
            <div className="bg-[#1a365d] p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Printing Machines</h3>
              <p>3 Units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Strengths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Strengths</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="h-8 w-8 text-blue-700 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO Certifications</h3>
                  <ul className="space-y-2">
                    <li>• ISO 9001:2015 - Quality Management System</li>
                    <li>• ISO 14001:2015 - Environmental Management System</li>
                    <li>• ISO 45001:2018 - Occupational Health & Safety Management System</li>
                    <li>• One Star Export House - Certified for foreign trade excellence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-blue-700 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Process</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-700 mr-2" />
                      <span>All processes have documented SOPs displayed prominently</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="h-5 w-5 text-blue-700 mr-2" />
                      <span>Equipment calibrated by certified agencies to ensure accuracy</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-700 mr-2" />
                      <span>Ensuring equipment reliability and workplace safety</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-700 mr-2" />
                      <span>Process transparency and quality control</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-blue-700 mr-2" />
                      <span>Only certified operators are deployed in production</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizational Strengths</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span>Partnerships with reputable global raw material suppliers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span>Optimized operating costs for competitive pricing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span>Strategic inventory and production management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span>Trusted supplier to major OFC companies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span>Comprehensive global customer support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span>Forward-thinking approach to innovation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                  alt="Modern manufacturing facility"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;