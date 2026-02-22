import React, { useEffect, useState, MouseEvent } from "react";
import { DATA } from "../../data/resume";
import WorkItems from "./WorkItems";

interface NavItem {
  name: string;
}

const Works: React.FC = () => {
  const [item, setItem] = useState<NavItem>({ name: "all" });
  const [projects, setProjects] = useState(DATA.projects.items);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(DATA.projects.items);
    } else {
      const newProjects = DATA.projects.items.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    setItem({ name: target.textContent?.toLowerCase() || "all" });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {DATA.projects.categories.map((navItem, index) => {
          return (
            <span
              onClick={(e) => { handleClick(e, index); }}
              className={`${active === index ? "active-work" : ""} work_item`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>

      <div className="work_container container grid">
        {projects.map((projectItem) => {
          return <WorkItems item={projectItem} key={projectItem.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
