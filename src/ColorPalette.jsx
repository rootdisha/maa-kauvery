import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState(null);
  const [isSimpleMode, setIsSimpleMode] = useState(false);

  const colors = [
    {
      name: 'purple-100',
      value: '#f3e8ff',
      usage: 'Instead of white or gray',
      type: 'utility'
    },
    {
      name: 'pink-100', 
      value: '#fce7f3',
      usage: 'Instead of white or gray',
      type: 'utility'
    },
    {
      name: 'Primary Purple',
      value: '#9781bc',
      usage: 'Primary colour of the website',
      type: 'primary'
    },
    {
      name: 'Primary Dark',
      value: '#70308A',
      usage: 'Primary dark colour',
      type: 'primary'
    },
    {
      name: 'Hover Purple',
      value: '#876dad',
      usage: 'For hover accents',
      type: 'accent'
    },
    {
      name: 'Maa Kauvery CTA',
      value: '#B83A63',
      usage: 'Maa Kauvery CTA colour. Representing MK',
      type: 'brand'
    },
    {
      name: 'Gold Accent',
      value: '#D2A855',
      usage: 'In colour gradients',
      type: 'accent'
    }
  ];

  const gradients = [
    {
      name: 'Transformation Gradient (with opacity)',
      value: 'linear-gradient(to right, #9781bc70, #D2A85560, #B83A6360)',
      css: 'bg-gradient-to-r via-[#D2A855]/60 from-[#9781bc]/70 to-[#B83A63]/60',
      usage: 'Transforming client\'s life via Maa Kauvery - colours from logo'
    },
    {
      name: 'Transformation Gradient (solid)',
      value: 'linear-gradient(to right, #9781bc, #D2A855, #B83A63)',
      css: 'bg-gradient-to-r via-[#D2A855] from-[#9781bc] to-[#B83A63]',
      usage: 'Transforming client\'s life via Maa Kauvery - colours from logo'
    }
  ];

  const copyToClipboard = (text, colorName) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getContrastColor = (hexColor) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Maa Kauvery Color Palette</h1>
          <p className="text-gray-600 mb-6">Brand colors and design system</p>
          
          {/* Mode Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setIsSimpleMode(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !isSimpleMode 
                  ? 'bg-[#9781bc] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Developer Mode
            </button>
            <button
              onClick={() => setIsSimpleMode(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isSimpleMode 
                  ? 'bg-[#B83A63] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Creative Mode
            </button>
          </div>
        </div>

        {/* Simple Mode for Creatives */}
        {isSimpleMode ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Solid Colors */}
            {colors.map((color, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-32 flex items-end p-4"
                  style={{ backgroundColor: color.value }}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{color.name}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{color.usage}</p>
                </div>
              </div>
            ))}
            
            {/* Gradients */}
            {gradients.map((gradient, index) => (
              <div key={`grad-${index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow md:col-span-2">
                <div 
                  className="h-32 flex items-end p-4"
                  style={{ background: gradient.value }}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{gradient.name}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{gradient.usage}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Detailed Mode for Developers - existing content
          <>
            {/* Solid Colors */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Colors</h2>
              <div className="grid gap-6">
                {colors.map((color, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    
                    {/* Color Swatch */}
                    <div className="md:col-span-2">
                      <div 
                        className="w-full h-20 rounded-lg shadow-inner border-2 border-white flex items-center justify-center text-sm font-medium"
                        style={{ 
                          backgroundColor: color.value,
                          color: getContrastColor(color.value)
                        }}
                      >
                        {color.value}
                      </div>
                    </div>

                    {/* Color Info */}
                    <div className="md:col-span-8">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{color.name}</h3>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          color.type === 'primary' ? 'bg-blue-100 text-blue-800' :
                          color.type === 'brand' ? 'bg-purple-100 text-purple-800' :
                          color.type === 'accent' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {color.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{color.usage}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-mono text-gray-500">HEX: {color.value}</span>
                        <span className="font-mono text-gray-500">CSS: text-[{color.value}]</span>
                      </div>
                    </div>

                    {/* Copy Button */}
                    <div className="md:col-span-2 flex justify-end">
                      <button
                        onClick={() => copyToClipboard(color.value, color.name)}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
                      >
                        {copiedColor === color.name ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-gray-600" />
                            <span className="text-gray-600">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradients */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gradients</h2>
              <div className="grid gap-6">
                {gradients.map((gradient, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    
                    {/* Gradient Swatch */}
                    <div className="mb-6">
                      <div 
                        className="w-full h-24 rounded-lg shadow-inner border-2 border-white"
                        style={{ background: gradient.value }}
                      ></div>
                    </div>

                    {/* Gradient Info */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{gradient.name}</h3>
                      <p className="text-gray-600 mb-4">{gradient.usage}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Tailwind CSS:</span>
                          <button
                            onClick={() => copyToClipboard(gradient.css, gradient.name + '-css')}
                            className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs transition-colors"
                          >
                            {copiedColor === gradient.name + '-css' ? (
                              <>
                                <Check className="w-3 h-3 text-green-600" />
                                <span className="text-green-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-gray-600" />
                                <span className="text-gray-600">Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <code className="block bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 overflow-x-auto">
                          {gradient.css}
                        </code>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">CSS Linear Gradient:</span>
                          <button
                            onClick={() => copyToClipboard(gradient.value, gradient.name + '-linear')}
                            className="flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs transition-colors"
                          >
                            {copiedColor === gradient.name + '-linear' ? (
                              <>
                                <Check className="w-3 h-3 text-green-600" />
                                <span className="text-green-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-gray-600" />
                                <span className="text-gray-600">Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <code className="block bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 overflow-x-auto">
                          background: {gradient.value};
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Examples */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Usage Examples</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Button Examples */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Buttons</h3>
                  <div className="space-y-3">
                    <button className="px-6 py-3 bg-[#9781bc] text-white rounded-lg hover:bg-[#876dad] transition-colors">
                      Primary Button
                    </button>
                    <button className="px-6 py-3 bg-[#B83A63] text-white rounded-lg hover:bg-[#70308A] transition-colors">
                      CTA Button
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r via-[#D2A855] from-[#9781bc] to-[#B83A63] text-white rounded-lg">
                      Gradient Button
                    </button>
                  </div>
                </div>

                {/* Card Examples */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Cards</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-100 border-l-4 border-[#9781bc] rounded-r-lg">
                      <p className="text-[#70308A]">Card with purple-100 background</p>
                    </div>
                    <div className="p-4 bg-pink-100 border-l-4 border-[#B83A63] rounded-r-lg">
                      <p className="text-[#70308A]">Card with pink-100 background</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}