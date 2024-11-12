import { FC } from "react";
import { TournamentDataType } from "../tournament";

export type CompetitionDataType = {
  first?: string;
  second?: string;
  time?: string;
};

export const TimeTable: FC<{
  teams: CompetitionDataType[];
  tournamentData?: TournamentDataType;
}> = ({ teams, tournamentData }) => {
  return (
    <div className="rounded-xl bg-slate-200 border-gray-500">
      <div className="flex justify-between pt-3 pb-2 px-3">
        <h4 className="text-center"> {tournamentData?.title} </h4>
        <p>{tournamentData?.date}</p>
      </div>

      {teams?.map((p, i) => (
        <div
          className={`flex bg-blue-400 py-3 ${
            i + 1 < teams?.length ? "mb-4" : ""
          }`}
          key={`${i}-competition`}
        >
          <div className="flex align-middle w-4/5">
            <span className="pr-3 pl-2"> {p.first} </span>:
            <span className="px-2"> {p.second} </span>
          </div>
          <p className="px-2 border-r-2 border-gray-700 w-1/5">{p.time}</p>
        </div>
      ))}

      <p className="text-lg font-bold px-3 pb-3 text-md ">
        <span className="text-gray-700"> آدرس </span>: {tournamentData?.address}
      </p>
    </div>
  );
};
