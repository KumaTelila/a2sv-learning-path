// export interface Jobs {
//   id: string;
//   title: string;
//   description: string;
//   responsibilities: string[];
//   location: string[];
//   ideal_candidate: {
//     age: string;
//     gender: string;
//     traits: string[];
//   };
//   when_where: string;
//   about: {
//     posted_on: string;
//     deadline: string;
//     location: string;
//     start_date: string;
//     end_date: string;
//     categories: string;
//     required_skills: string;
//   };
//   company: string;
//   image: string;
// }
// export interface JobPosting {
//   id: number;
//   title: string;
//   description: string;
//   responsibilities: [string];
//   ideal_candidate: {
//     age: string;
//     gender: string;
//     traits: [string];
//   };
//   when_where: string;
//   about: {
//     categories: [string];
//     deadline: string;
//     end_date: string;
//     location: string;
//     posted_on: string;
//     required_skills: [string];
//     start_date: string;
//   };
// }

export interface JobPosting {
  id: string;
  title: string;
  logoUrl: string;
  description: string;
  responsibilities: string;
  idealCandidate: string;
  whenAndWhere: string;
  datePosted: string; // Note: The JSON field is "datePosted", but JSX uses "posted_on"
  deadline: string;
  location: string[];
  startDate: string; // Note: The JSON field is "startDate", but JSX uses "start_date"
  endDate: string; // Note: The JSON field is "endDate", but JSX uses "end_date"
  categories: string[];
  requiredSkills: string[];
  opType: string;
  orgName: string;
}
