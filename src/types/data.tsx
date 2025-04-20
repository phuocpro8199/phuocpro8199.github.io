export type PersonalInfoProfile = {
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  gitlab: string;
  linkedin: string;
  cv: string;
}

export type PersonalInfo = {
  name: string;
  title: string;
  description: string;
  profile: PersonalInfoProfile
}

export type Skill = {
  name: string;
  items: string[];
}

export type ExperienceDetail = {
  name: string;
  tasks: string[];
  tools: string[];
}

export type Experience = {
  name: string;
  company: string;
  period: string;
  details: ExperienceDetail[]
}

export type Education = {
  degree: string
  school: string
  period: string
  gpa: string
}

export type Data = {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}
