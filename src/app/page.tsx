"use client";

import { useEffect, useState } from "react";
import { CompetitionDataType, TimeTable } from "./components/timetable";
import {
  CompetitionTeams,
  CompetitionTeamsType,
} from "./components/competition";
import { CheckIsAvailable } from "./utils";
import Image from "next/image";
import {
  TournamentData,
  TournamentDataPropsType,
  TournamentDataType,
} from "./components/tournament";

export default function Home() {
  const [teams, setTeams] = useState<Array<CompetitionDataType>>();
  const [tournamentData, setTournamentData] = useState<TournamentDataType>();
  const [submitted, setSubmitted] = useState(false);

  const onChangeHandler: CompetitionTeamsType["onSetData"] = (data) => {
    setTeams((prev) => [...(prev || []), data]);
  };

  const changeTournamentData: TournamentDataPropsType["onSetData"] = (
    value
  ) => {
    setTournamentData(value);
  };

  const clickHandler = () => {
    if (CheckIsAvailable.window && teams) {
      localStorage.setItem("teams", JSON.stringify(teams));
      localStorage.setItem("tournament", JSON.stringify(tournamentData));
      setSubmitted(true);
    }
  };

  const deleteHandler = () => {
    if (CheckIsAvailable.window && teams) {
      localStorage.removeItem("teams");
      localStorage.removeItem("tournament");
      setTeams(undefined);
      setTournamentData(undefined);

      location.reload()
    }
  };

  useEffect(() => {
    const teamsData = localStorage.getItem("teams");
    const tournamentData = localStorage.getItem("tournament");

    if (teamsData) setTeams(JSON.parse(teamsData));
    if (tournamentData) setTournamentData(JSON.parse(tournamentData));
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className=" justify-between pt-4">
        <Image
          alt="afghan"
          className="mx-auto"
          width={200}
          height={50}
          src="/afghan-football.png"
        />
        <div className="px-6 py-2 mt-4 bg-blue-500 text-center rounded-lg mb-4">
          <h1 className="text-white">
            {" "}
            دومین دور تورنومنت فوتسال جام همبستگی قوم دهقان{" "}
          </h1>
        </div>

        {/* <Image
          alt="afghan"
          width={200}
          height={200}
          src="/afghanistan-flag.png"
        /> */}
      </div>

      {teams?.length && (
        <TimeTable teams={teams} tournamentData={tournamentData} />
      )}

      <TournamentData data={tournamentData} onSetData={changeTournamentData} />
      <CompetitionTeams onSetData={onChangeHandler} />

      <div className="flex">
        <button
          type="button"
          disabled={!!submitted}
          className={`py-2 px-8 rounded-lg mt-4 mb-6 ml-2 w-1/2 ${
            submitted ? "bg-gray-500 text-gray-900" : "bg-green-700 text-white"
          }`}
          onClick={clickHandler}
        >
          تایید نهایی
        </button>
        <button
          type="button"
          className={`py-2 px-8 rounded-lg mt-4 mb-6 mr-2 w-1/2 ${
            submitted
              ? "bg-gray-500 text-gray-900"
              : "text-green-700 bg-white border border-green-700"
          }`}
          onClick={deleteHandler}
        >
          حذف دیتا
        </button>
      </div>
    </div>
  );
}
