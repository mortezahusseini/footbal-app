import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { CompetitionDataType } from "../timetable";

export type CompetitionTeamsType = {
  data?: CompetitionDataType;
  onSetData: (data: CompetitionDataType) => void;
};

export const CompetitionTeams: FC<CompetitionTeamsType> = ({
  data,
  onSetData,
}) => {
  const [teams, setTeams] = useState<CompetitionDataType>();

  useEffect(() => {
    setTeams(data);
  }, [data]);

  const firstTeamChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTeams((prev) => ({ ...prev, first: e.target.value }));
  };

  const secondTeamChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTeams((prev) => ({ ...prev, second: e.target.value }));
  };

   const timeChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTeams((prev) => ({ ...prev, time: e.target.value }));
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (teams) onSetData(teams);
  };

  return (
    <div className="my-4">
      <h5 className="text-bold mb-2"> اضافه کردن تیم ها: </h5>
      <form className="w-100" onSubmit={submitHandler}>
        <div className="flex-1 grid grid-cols-2">
          <input
            placeholder="تیم اول"
            className="ml-2 border rounded-md px-3 py-2"
            type="text"
            onChange={firstTeamChangeHandler}
          />
          <input
            placeholder="تیم دوم"
            className="border rounded-md px-3 py-2"
            type="text"
            onChange={secondTeamChangeHandler}
          />
        </div>
        <div className="flex items-center mt-2">
          <input
            placeholder="ساعت مسابقه"
            className="ml-2 border rounded-md px-3 py-2 flex-1"
            type="text"
            onChange={timeChangeHandler}
          />
          <button
            type="submit"
            className="bg-purple-500 rounded-md w-50 mx-auto py-2 px-4 mr-auto text-white h-full"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};
