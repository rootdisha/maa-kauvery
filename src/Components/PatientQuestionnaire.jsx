import React, { useState, useCallback, useRef } from 'react';
import { ChevronRight, ChevronLeft, Check, AlertCircle } from 'lucide-react';
import DOMPurify from 'dompurify';
import { navBarHeight } from '../utils/constants';

// Security utility functions
const SecurityUtils = {
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return '';
    return DOMPurify.sanitize(input, { 
      ALLOWED_TAGS: [], 
      ALLOWED_ATTR: [] 
    }).trim();
  },

  validateEmail: (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  validatePhone: (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    return phoneRegex.test(phone);
  },

  validateName: (name) => {
    const nameRegex = /^[a-zA-Z\s\-']{2,100}$/;
    return nameRegex.test(name);
  },

  validateAge: (age) => {
    const numAge = parseInt(age, 10);
    return !isNaN(numAge) && numAge >= 18 && numAge <= 120;
  },

  containsSQLInjection: (input) => {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
      /(--|;|\/\*|\*\/|xp_|sp_)/gi,
      /(\bOR\b.*=.*|1=1|' OR ')/gi
    ];
    return sqlPatterns.some(pattern => pattern.test(input));
  },

  containsScriptInjection: (input) => {
    const scriptPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe/gi,
      /<object/gi,
      /<embed/gi
    ];
    return scriptPatterns.some(pattern => pattern.test(input));
  },
};

export default function FertilityQuestionnaire() {
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [securityWarning, setSecurityWarning] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitAttempts = useRef(0);
  const lastSubmitTime = useRef(Date.now());
  const MAX_ATTEMPTS = 5;
  const TIME_WINDOW = 60000;

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    age: '',
    height: '',
    weight: '',
    physicalActivity: '',
    sleep: '',
    smoking: '',
    alcohol: '',
    stress: '',
    laptopOnLap: '',
    mobilePhoneExposure: '',
    relaxationPractices: '',
    diabetes: '',
    hypertension: '',
    thyroidDisorder: '',
    maritalDuration: '',
    sexualFrequency: '',
    sexualFunctionDifficulties: '',
    gender: '',
    // Female specific
    ageOfMenarche: '',
    menstrualCyclePattern: '',
    pcosPcod: '',
    priorPregnancy: '',
    antralFollicleCount: '',
    familyHistoryEarlyMenopause: '',
    iuiHistory: '',
    ivfIcsiHistory: '',
    fallopianTubeStatus: '',
    gynecologicSurgeriesDiseases: '',
    // Male specific
    partnerPriorPregnancy: '',
    spermConcentration: '',
    progressiveSpermMotility: '',
  });

  const getTotalPages = () => {
    // Pages: 1 (Contact), 2 (Lifestyle), 3 (Health + Gender), 4 or 5 (Gender-specific)
    return 4; // Base pages, gender-specific page is the 4th page
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setErrors(prev => ({ ...prev, [name]: '' }));
    setSecurityWarning('');

    if (SecurityUtils.containsSQLInjection(value)) {
      setSecurityWarning('Suspicious input detected. Please enter valid information.');
      return;
    }

    if (SecurityUtils.containsScriptInjection(value)) {
      setSecurityWarning('Invalid characters detected. Please enter valid information.');
      return;
    }

    const sanitizedValue = SecurityUtils.sanitizeInput(value);

    let error = '';
    if (name === 'name' && sanitizedValue && !SecurityUtils.validateName(sanitizedValue)) {
      error = 'Name should only contain letters, spaces, and hyphens';
    } else if (name === 'email' && sanitizedValue && !SecurityUtils.validateEmail(sanitizedValue)) {
      error = 'Please enter a valid email address';
    } else if (name === 'mobileNumber' && sanitizedValue && !SecurityUtils.validatePhone(sanitizedValue)) {
      error = 'Please enter a valid phone number';
    } else if (name === 'age' && sanitizedValue && !SecurityUtils.validateAge(sanitizedValue)) {
      error = 'Age must be between 18 and 120';
    }

    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  }, []);

  const validateCurrentPage = () => {
    const newErrors = {};
    
    if (currentPage === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      else if (!SecurityUtils.validateName(formData.name)) {
        newErrors.name = 'Please enter a valid name';
      }

      if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
      else if (!SecurityUtils.validatePhone(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid phone number';
      }

      if (!formData.email) newErrors.email = 'Email is required';
      else if (!SecurityUtils.validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.age) newErrors.age = 'Age is required';
      else if (!SecurityUtils.validateAge(formData.age)) {
        newErrors.age = 'Age must be between 18 and 120';
      }
    } else if (currentPage === 2) {
      if (!formData.height) newErrors.height = 'Height is required';
      if (!formData.weight) newErrors.weight = 'Weight is required';
      if (!formData.physicalActivity) newErrors.physicalActivity = 'This field is required';
      if (!formData.sleep) newErrors.sleep = 'Sleep hours is required';
      if (!formData.smoking) newErrors.smoking = 'This field is required';
      if (!formData.alcohol) newErrors.alcohol = 'This field is required';
      if (!formData.stress) newErrors.stress = 'This field is required';
      if (!formData.laptopOnLap) newErrors.laptopOnLap = 'This field is required';
      if (!formData.mobilePhoneExposure) newErrors.mobilePhoneExposure = 'This field is required';
      if (!formData.relaxationPractices) newErrors.relaxationPractices = 'This field is required';
    } else if (currentPage === 3) {
      if (!formData.diabetes) newErrors.diabetes = 'This field is required';
      if (!formData.hypertension) newErrors.hypertension = 'This field is required';
      if (!formData.thyroidDisorder) newErrors.thyroidDisorder = 'This field is required';
      if (!formData.maritalDuration) newErrors.maritalDuration = 'Marital duration is required';
      if (!formData.sexualFrequency) newErrors.sexualFrequency = 'This field is required';
      if (!formData.sexualFunctionDifficulties) newErrors.sexualFunctionDifficulties = 'This field is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    } else if (currentPage === 4) {
      if (formData.gender === 'Female') {
        if (!formData.ageOfMenarche) newErrors.ageOfMenarche = 'This field is required';
        if (!formData.menstrualCyclePattern) newErrors.menstrualCyclePattern = 'This field is required';
        if (!formData.pcosPcod) newErrors.pcosPcod = 'This field is required';
        if (!formData.priorPregnancy) newErrors.priorPregnancy = 'This field is required';
        if (!formData.antralFollicleCount) newErrors.antralFollicleCount = 'This field is required';
        if (!formData.familyHistoryEarlyMenopause) newErrors.familyHistoryEarlyMenopause = 'This field is required';
        if (!formData.iuiHistory) newErrors.iuiHistory = 'This field is required';
        if (!formData.ivfIcsiHistory) newErrors.ivfIcsiHistory = 'This field is required';
        if (!formData.fallopianTubeStatus) newErrors.fallopianTubeStatus = 'This field is required';
        if (!formData.gynecologicSurgeriesDiseases) newErrors.gynecologicSurgeriesDiseases = 'This field is required';
      } else if (formData.gender === 'Male') {
        if (!formData.partnerPriorPregnancy) newErrors.partnerPriorPregnancy = 'This field is required';
        if (!formData.spermConcentration) newErrors.spermConcentration = 'This field is required';
        if (!formData.progressiveSpermMotility) newErrors.progressiveSpermMotility = 'This field is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentPage()) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmitTime.current < TIME_WINDOW) {
      if (submitAttempts.current >= MAX_ATTEMPTS) {
        setSecurityWarning('Too many submission attempts. Please wait a moment and try again.');
        return;
      }
    } else {
      submitAttempts.current = 0;
    }

    if (!validateCurrentPage()) {
      return;
    }

    setIsSubmitting(true);
    submitAttempts.current += 1;
    lastSubmitTime.current = now;

    try {
      const sanitizedData = Object.keys(formData).reduce((acc, key) => {
        acc[key] = typeof formData[key] === 'string' 
          ? SecurityUtils.sanitizeInput(formData[key]) 
          : formData[key];
        return acc;
      }, {});

      console.log('Sanitized form data ready for submission:', sanitizedData);

      // TODO: CALL API ENDPOINTS TO SUBMIT
      await new Promise(resolve => setTimeout(resolve, 1500));

      setCurrentPage(5); // Show success page
    } catch (error) {
      console.error('Submission error:', error);
      setSecurityWarning('An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const RadioGroup = ({ name, options, label, required = true }) => (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        {label} {required && <span className="text-[#B83A63]">*</span>}
      </label>
      {errors[name] && (
        <div className="mb-2 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{errors[name]}</span>
        </div>
      )}
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
              formData[name] === option.value
                ? 'border-[#9781bc] bg-purple-50'
                : errors[name]
                ? 'border-red-300 hover:border-red-400'
                : 'border-gray-200 hover:border-[#9781bc]/50 hover:bg-purple-50/30'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={formData[name] === option.value}
              onChange={handleInputChange}
              className="w-5 h-5 text-[#9781bc] focus:ring-[#9781bc] focus:ring-2"
            />
            <span className="ml-3 text-gray-800">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const progressPercentage = (currentPage / getTotalPages()) * 100;

  return (
    <div className={navBarHeight}>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {securityWarning && (
          <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 font-semibold">Security Alert</p>
              <p className="text-red-700 text-sm">{securityWarning}</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-t-3xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#9781bc] via-[#D2A855] to-[#B83A63] p-8 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
              Fertility Evaluation and Assessment
            </h1>
            <p className="text-purple-100 text-sm sm:text-base text-center leading-relaxed">
              Kindly fill in the form for your reproductive specialist to understand your fertility status. 
              We have taken utmost care of data privacy, the information shared will only be shared with the clinical team.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-200">
            <div
              className="h-full bg-gradient-to-r from-[#9781bc] to-[#B83A63] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-lg rounded-b-3xl p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            
            {/* Page 1: Contact Information */}
            {currentPage === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#9781bc]">
                  Page 1 of {getTotalPages()}
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      maxLength={100}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      maxLength={15}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.mobileNumber ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.mobileNumber && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.mobileNumber}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      maxLength={254}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age (years) <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="18"
                      max="120"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.age ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.age && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.age}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Page 2: Lifestyle Based Assessment */}
            {currentPage === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#9781bc]">
                  Page 2 of {getTotalPages()} - Lifestyle Based Assessment
                </h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Height in centimeters (cms) <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      min="50"
                      max="300"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.height ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.height && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.height}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Weight in kgs <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      min="20"
                      max="300"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.weight ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.weight && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.weight}</span>
                      </div>
                    )}
                  </div>

                  <RadioGroup
                    name="physicalActivity"
                    label="Physical activity"
                    options={[
                      { value: 'Sedentary', label: 'Sedentary (Household chores/Desk Job)' },
                      { value: 'Light', label: 'Light (<150 mins a week)' },
                      { value: 'Moderate', label: 'Moderate (150-300 mins a week)' },
                      { value: 'Heavy', label: 'Heavy (>300 mins/week)' },
                    ]}
                  />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sleep (hours/day) <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="number"
                      name="sleep"
                      value={formData.sleep}
                      onChange={handleInputChange}
                      min="0"
                      max="24"
                      step="0.5"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.sleep ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.sleep && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.sleep}</span>
                      </div>
                    )}
                  </div>

                  <RadioGroup
                    name="smoking"
                    label="Smoking"
                    options={[
                      { value: 'Non Smoker', label: 'Non Smoker' },
                      { value: 'Ex Smoker', label: 'Ex Smoker' },
                      { value: 'Light (1-4)', label: 'Light (1-4 Cigarettes/day)' },
                      { value: 'Moderate (5-10)', label: 'Moderate (5-10 Cigarettes/day)' },
                      { value: 'Heavy (>10)', label: 'Heavy (>10 Cigarettes/day)' },
                    ]}
                  />

                  <RadioGroup
                    name="alcohol"
                    label="Alcohol"
                    options={[
                      { value: 'Non Alcoholic', label: 'Non Alcoholic' },
                      { value: '1-3 times/month', label: '1-3 times a month / <2 drinks a day' },
                      { value: '1-2 times/week', label: '1-2 times a week / 2-3 drinks a day' },
                      { value: '>3 times/week', label: '>3 times a week / 3-4 drinks a day' },
                    ]}
                  />

                  <RadioGroup
                    name="stress"
                    label="How stressed were you in the last two weeks?"
                    options={[
                      { value: 'Not at all', label: 'Not at all' },
                      { value: 'Several days', label: 'Several days a week' },
                      { value: 'More than half', label: 'More than half of the days a week' },
                      { value: 'Nearly every day', label: 'Nearly every day' },
                    ]}
                  />

                  <RadioGroup
                    name="laptopOnLap"
                    label="Laptop on lap (daily)"
                    options={[
                      { value: 'Rare/desk only', label: 'Rare/desk only' },
                      { value: '≤1-2 h', label: '≤1-2 h' },
                      { value: '>2 h', label: '>2 h' },
                    ]}
                  />

                  <RadioGroup
                    name="mobilePhoneExposure"
                    label="Mobile phone exposure"
                    options={[
                      { value: 'Minimal', label: 'Minimal' },
                      { value: 'Moderate', label: 'Moderate' },
                      { value: 'High', label: 'High' },
                    ]}
                  />

                  <RadioGroup
                    name="relaxationPractices"
                    label="Relaxation practices"
                    options={[
                      { value: 'Yes', label: 'Yes' },
                      { value: 'No', label: 'No' },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* Page 3: Health History */}
            {currentPage === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#9781bc]">
                  Page 3 of {getTotalPages()} - Health History
                </h2>

                <div className="space-y-6">
                  <RadioGroup
                    name="diabetes"
                    label="Diabetes"
                    options={[
                      { value: 'No', label: 'No' },
                      { value: 'Yes', label: 'Yes' },
                    ]}
                  />

                  <RadioGroup
                    name="hypertension"
                    label="Hypertension"
                    options={[
                      { value: 'No', label: 'No' },
                      { value: 'Yes', label: 'Yes' },
                    ]}
                  />

                  <RadioGroup
                    name="thyroidDisorder"
                    label="Thyroid disorder"
                    options={[
                      { value: 'No', label: 'No' },
                      { value: 'Yes', label: 'Yes' },
                    ]}
                  />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Marital duration (trying to conceive in years) <span className="text-[#B83A63]">*</span>
                    </label>
                    <input
                      type="number"
                      name="maritalDuration"
                      value={formData.maritalDuration}
                      onChange={handleInputChange}
                      min="0"
                      max="50"
                      step="0.1"
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#9781bc]/20 outline-none transition ${
                        errors.maritalDuration ? 'border-red-500' : 'border-gray-200 focus:border-[#9781bc]'
                      }`}
                      required
                    />
                    {errors.maritalDuration && (
                      <div className="mt-1 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.maritalDuration}</span>
                      </div>
                    )}
                  </div>

                  <RadioGroup
                    name="sexualFrequency"
                    label="Sexual frequency"
                    options={[
                      { value: '≥3×/week', label: '≥3×/week in fertile window' },
                      { value: '1-2×/week', label: '1-2×/week' },
                      { value: '<1×/week', label: '<1×/week' },
                    ]}
                  />

                  <RadioGroup
                    name="sexualFunctionDifficulties"
                    label="Sexual function difficulties"
                    options={[
                      { value: 'None', label: 'None' },
                      { value: 'Occasional', label: 'Occasional' },
                      { value: 'Frequent', label: 'Frequent (needs Rx)' },
                    ]}
                  />

                  <RadioGroup
                    name="gender"
                    label="Gender"
                    options={[
                      { value: 'Male', label: 'Male' },
                      { value: 'Female', label: 'Female' },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* Page 4: Gender-Specific Questions */}
            {currentPage === 4 && formData.gender === 'Female' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#9781bc]">
                  Page 4 of {getTotalPages()} - Fertility Questionnaire for Female Partner
                </h2>

                <div className="space-y-6">
                  <RadioGroup
                    name="ageOfMenarche"
                    label="Age of menarche"
                    options={[
                      { value: '10-13 years', label: '10-13 years' },
                      { value: '<10 or >13 years', label: '<10 or >13 years' },
                    ]}
                  />

                  <RadioGroup
                    name="menstrualCyclePattern"
                    label="Menstrual cycle Pattern"
                    options={[
                      { value: 'Regular 28-35 d', label: 'Regular 28-35 d' },
                      { value: '<22 d or >35 d', label: '<22 d or >35 d' },
                      { value: 'Irregular', label: 'Irregular' },
                      { value: 'Only with medications', label: 'Only with medications' },
                    ]}
                  />

                  <RadioGroup
                    name="pcosPcod"
                    label="PCOS/PCOD"
                    options={[
                      { value: 'No/Unknown', label: 'No/Unknown' },
                      { value: 'Yes (normal/low wt)', label: 'Yes (normal/low wt)' },
                      { value: 'Yes (overweight/obese)', label: 'Yes (overweight/obese)' },
                    ]}
                  />

                  <RadioGroup
                    name="priorPregnancy"
                    label="Prior pregnancy (self)"
                    options={[
                      { value: 'Yes (live birth)', label: 'Yes (live birth)' },
                      { value: 'Yes (miscarriage only)', label: 'Yes (miscarriage only)' },
                      { value: 'No', label: 'No' },
                    ]}
                  />

                  <RadioGroup
                    name="antralFollicleCount"
                    label="Antral follicle count (AFC)"
                    options={[
                      { value: '≥10 (best ovary)', label: '≥10 (best ovary)' },
                      { value: '5-9', label: '5-9' },
                      { value: '<5', label: '<5' },
                      { value: 'Not done/Unknown', label: 'Not done/Unknown' },
                    ]}
                  />

                  <RadioGroup
                    name="familyHistoryEarlyMenopause"
                    label="Family history of early menopause"
                    options={[
                      { value: 'No', label: 'No' },
                      { value: 'Yes', label: 'Yes' },
                      { value: 'Unknown', label: 'Unknown' },
                    ]}
                  />

                  <RadioGroup
                    name="iuiHistory"
                    label="IUI history"
                    options={[
                      { value: 'Not tried', label: 'Not tried' },
                      { value: 'Tried 1-3 (failed/miscarriage)', label: 'Tried 1-3 (failed/miscarriage)' },
                      { value: 'Tried 1-3 (live birth)', label: 'Tried 1-3 (live birth)' },
                    ]}
                  />

                  <RadioGroup
                    name="ivfIcsiHistory"
                    label="IVF/ICSI history"
                    options={[
                      { value: 'Not tried', label: 'Not tried' },
                      { value: 'Tried (failed/miscarriage)', label: 'Tried (failed/miscarriage)' },
                      { value: 'Tried (live birth)', label: 'Tried (live birth)' },
                    ]}
                  />

                  <RadioGroup
                    name="fallopianTubeStatus"
                    label="Fallopian tube status"
                    options={[
                      { value: 'Both patent', label: 'Both patent' },
                      { value: 'One blocked', label: 'One blocked' },
                      { value: 'Both blocked/hydrosalpinx', label: 'Both blocked / hydrosalpinx' },
                      { value: 'Not done/Unknown', label: 'Not done/Unknown' },
                    ]}
                  />

                  <RadioGroup
                    name="gynecologicSurgeriesDiseases"
                    label="Gynecologic surgeries/diseases"
                    options={[
                      { value: 'None', label: 'None' },
                      { value: 'Present (treated/controlled)', label: 'Present (treated/controlled)' },
                      { value: 'Present (recurrent/active)', label: 'Present (recurrent/active)' },
                    ]}
                  />
                </div>
              </div>
            )}

            {currentPage === 4 && formData.gender === 'Male' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-[#9781bc]">
                  Page 4 of {getTotalPages()} - Fertility Questionnaire for Male Partner
                </h2>

                <div className="space-y-6">
                  <RadioGroup
                    name="partnerPriorPregnancy"
                    label="Partner had prior pregnancy"
                    options={[
                      { value: 'Yes (Live birth)', label: 'Yes (Live birth)' },
                      { value: 'Yes (Miscarriage)', label: 'Yes (Miscarriage)' },
                      { value: 'No', label: 'No' },
                      { value: 'Unknown', label: 'Unknown' },
                    ]}
                  />

                  <RadioGroup
                    name="spermConcentration"
                    label="Sperm concentration (As per last report)"
                    options={[
                      { value: '>15 million/mL', label: '>15 million/mL' },
                      { value: '11-15 million/mL', label: '11-15 million/mL' },
                      { value: '6-10 million/mL', label: '6-10 million/mL' },
                      { value: '2-5 million/mL', label: '2-5 million/mL' },
                      { value: '<1 million/mL', label: '<1 million/mL' },
                      { value: 'Not Known', label: 'Not Known' },
                    ]}
                  />

                  <RadioGroup
                    name="progressiveSpermMotility"
                    label="Progressive sperm motility (last)"
                    options={[
                      { value: '>32%', label: '>32%' },
                      { value: '21-32%', label: '21-32%' },
                      { value: '5-20%', label: '5-20%' },
                      { value: '<5%', label: '<5%' },
                      { value: 'Not known', label: 'Not known' },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* Success Page */}
            {currentPage === 5 && (
              <div className="text-center py-12 animate-fadeIn">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
                <p className="text-gray-600 text-lg mb-4">
                  Your questionnaire has been submitted successfully.
                </p>
                <p className="text-gray-600 mb-4">
                  A member of our clinical team will review your information and contact you within 24-48 hours to schedule your consultation.
                </p>
                <p className="text-[#9781bc] font-semibold text-lg">
                  We look forward to helping you on your fertility journey!
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentPage <= 4 && (
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-100 text-[#9781bc] hover:bg-purple-200'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <div className="text-sm text-gray-600">
                  Page {currentPage} of {getTotalPages()}
                </div>

                {currentPage < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9781bc] to-[#B83A63] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9781bc] to-[#B83A63] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Check className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
    </div>
  );
}