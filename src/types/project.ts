export interface Project {
  id: string;
  title: string;
  organizer: string;
  address: string;
  ageRange: string;
  requirements: string;
  duration: string;
  hoursPerWeek: string;
  accommodation: string;
  food: string;
  description: string;
  status?: 'verification' | 'approved' | 'completed';
  reportAvailable?: boolean;
}

export interface UserProfile {
  name: string;
  surname: string;
  phone: string;
  email: string;
  livesInKrakow: boolean;
  skills: string[];
}

export interface Recommendation {
  id: string;
  from: string;
  text: string;
}
