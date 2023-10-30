export type Project = {
  id: number;
  name: string;
  price: number;
  floor: number;
  size: number;
  material: string;
  about: string;
  wardrobe: number;
  bathroom: number;
  bedroom: number;
  plan: string;
};

export type IdProject = Project['id'];

export type State = {
  projects: Project[];
  error: string | undefined;

  // photos: PhotoProject[]
};

export type IdPhotoProject = PhotoProject['id'];

export type PhotoProject = {
  id: number;
  photo: string;
  projectId: number;
};
