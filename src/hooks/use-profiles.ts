import { profiles } from "./constants";
import type { MembersList } from "./types";

export const useProfiles = () => {
  const getTargetProfile = (name: MembersList) => {
    return profiles[name];
  };

  const getAllProfiles = () => {
    return Object.values(profiles);
  };

  return { getTargetProfile, getAllProfiles };
};
