import Papa from 'papaparse';

// Fetch and parse doctors CSV
export const fetchDoctorsData = async () => {
  try {
    const response = await fetch('/doctors_data.csv');
    if (!response.ok) throw new Error('CSV file not found');
    
    const csvText = await response.text();
    
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim()
    });

    return parsed.data;
  } catch (error) {
    console.error('Error loading doctors:', error);
    return [];
  }
};

// Get unique locations
export const getLocations = async () => {
  const doctors = await fetchDoctorsData();
  
  const locations = [...new Set(
    doctors
      .map(doctor => doctor.Location?.trim())
      .filter(Boolean)
  )].sort();

  return locations;
};

// Get locations with doctor count
export const getLocationsWithCount = async () => {
  const doctors = await fetchDoctorsData();
  
  const locationCounts = {};
  doctors.forEach(doctor => {
    const loc = doctor.Location?.trim();
    if (loc) {
      locationCounts[loc] = (locationCounts[loc] || 0) + 1;
    }
  });

  return Object.keys(locationCounts)
    .sort()
    .map(location => ({
      name: location,
      count: locationCounts[location]
    }));
};