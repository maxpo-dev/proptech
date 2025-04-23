export interface Speaker {
  id: string;
  name: string;
  bio?: string;
  jobTitle?: string;
  company?: string;
  imageUrl?: string;
  speakersId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SpeakerFormData = Omit<Speaker, 'id' | 'createdAt' | 'updatedAt' | 'speakersId'>; 