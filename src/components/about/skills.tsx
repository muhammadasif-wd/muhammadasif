import {Icon} from "@iconify/react";
import {NextPage} from "next";

import Alert from "@/shared/alert";
import {ISkillsProps, TSkills} from "@/types/skills.type";

const Skills: NextPage<ISkillsProps> = async () => {
  // Get skills data with pagination
  async function getSkillsData() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill?page=${1}&limit=${1000}`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  let skillsData;
  let skillsError;

  try {
    const res = await getSkillsData();

    skillsData = res.data;
  } catch (err) {
    skillsError = (err as Error).message;
  }

  return (
    <div>
      <h1 className="text-4xl leading-relaxed text-center">
        My <span className="font-extrabold">Skills</span>
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-14 mt-10">
        {skillsData?.map(({_id, icon, name}: TSkills) => (
          <div
            key={_id}
            className="border-2 rounded border-primary dark:border-zinc-500 p-6 dark:hover:bg-light hover:bg-primary dark:hover:text-primary hover:text-light duration-300 ease-in-out"
          >
            <div className="flex justify-center">
              <Icon height={40} icon={icon ?? ""} width={40} />
            </div>
            <p className="text-center pt-5">{name}</p>
          </div>
        ))}
      </div>
      {skillsError && (
        <Alert
          message={skillsError || "Something went wrong!"}
          style="py-2 px-4 w-fit"
          type="danger"
        />
      )}
    </div>
  );
};

export default Skills;
