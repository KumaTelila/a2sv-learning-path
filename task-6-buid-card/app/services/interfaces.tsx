export interface Jobs {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string;
    required_skills: string;
  };
  company: string;
  image: string;
}
export interface JobPosting {
  id: number;
  title: string;
  description: string;
  responsibilities: [string];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: [string];
  };
  when_where: string;
  about: {
    categories: [string];
    deadline: string;
    end_date: string;
    location: string;
    posted_on: string;
    required_skills: [string];
    start_date: string;
  };

}
