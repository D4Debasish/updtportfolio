import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 12,
      defination: "Tech Mastered",
    },
    {
      num: 28,
      defination: "Git Repo",
    },
    {
      num: 10,
      defination: "plus Projects",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container  mx-auto xl:mx-1 ">
        <div className="flex flex-wrap gap-11 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, key) => {
            return (
              <div
                className="flex-1 flex  flex-col gap-3 items-center justify-center xl:justify-start xl:flex-row "
                key={key}
              >
                <CountUp
                  start={0}
                  end={item.num}
                  delay={3}
                  duration={8}
                  className="text-2xl xl:text-4xl font-extrabold"
                />
                <p
                  className={`${
                    item.defination.length < 10
                      ? "max-w-[80px]"
                      : "max-w-[150px]"
                  } `}
                >
                  {item.defination}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
