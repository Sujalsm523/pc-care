export type Trainer = {
    slug: string; name: string; focus: string; years: number; languages: string[]; rating: number;
    bio: string; certifications: string[]; availability: string[]; approach: string[];
  };
  
  export const trainers: Trainer[] = [
    {
      slug: "ananya-mehta", name: "Ananya Mehta", focus: "Women's Strength & Mobility", years: 7,
      languages: ["English", "Hindi", "Marathi"], rating: 4.9,
      bio: "Fictional demo profile. Ananya builds sustainable strength routines around energy levels and everyday schedules.",
      certifications: ["Strength coaching certificate (demo)", "Mobility specialist (demo)"],
      availability: ["Mon 7:00 AM", "Wed 6:30 PM", "Fri 8:00 AM"],
      approach: ["Start with movement quality", "Match intensity to energy", "Progress gradually"],
    },
    {
      slug: "rhea-kapoor", name: "Rhea Kapoor", focus: "Yoga & Low-impact Cardio", years: 5,
      languages: ["English", "Hindi"], rating: 4.8, bio: "Fictional demo profile.",
      certifications: ["Yoga teacher (demo)"], availability: ["Tue 7:00 AM"], approach: ["Breath-led flows"],
    },
    {
      slug: "sana-iyer", name: "Sana Iyer", focus: "Home Workouts & Walking Plans", years: 4,
      languages: ["English", "Tamil"], rating: 4.7, bio: "Fictional demo profile.",
      certifications: ["Group fitness (demo)"], availability: ["Thu 6:00 PM"], approach: ["Small consistent habits"],
    },
  ];