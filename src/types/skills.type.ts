export type TSkills = {
  _id: string;
  icon: string;
  name: string;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
};

export interface ISkillsProps {
  skillsData?: TSkills[];
  meta?: TMeta;
  skillsError?: string;
}
