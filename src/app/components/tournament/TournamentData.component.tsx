import { ChangeEventHandler, FC, useEffect, useState } from "react";

export type TournamentDataType = {
  date?: string;
  title?: string;
  address?: string;
};

export type TournamentDataPropsType = {
  data?: TournamentDataType;
  onSetData: (value: TournamentDataType) => void;
};

export const TournamentData: FC<TournamentDataPropsType> = ({
  data,
  onSetData,
}) => {
  const [currentData, setData] = useState<TournamentDataType>(data || {});

  const saveDateHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setData((prev) => ({ ...prev, date: event.target.value }));
  };
  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setData((prev) => ({ ...prev, title: event.target.value }));
  };
  const addressChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setData((prev) => ({ ...prev, address: event.target.value }));
  };

  useEffect(() => {
    if (currentData) onSetData(currentData);
  }, [currentData]);

  return (
    <div className="grid grid-cols-1 mt-4">
      <p className="mb-2"> اضافه کردن اطلاعات تورنومنت </p>
      <input
        placeholder="عنوان مسابقه"
        className="flex-1 mb-2 border rounded-md px-3 py-2"
        type="text"
        onChange={titleChangeHandler}
        value={currentData?.title}
      />
      <input
        placeholder="تاریخ برگزاری مسابقه"
        className="flex-1 mb-2 border rounded-md px-3 py-2"
        type="text"
        onChange={saveDateHandler}
        value={currentData?.date}
      />
      <input
        placeholder="آدرس مسابقه"
        className="flex-1 border rounded-md px-3 py-2"
        type="text"
        onChange={addressChangeHandler}
        value={currentData?.address}
      />
    </div>
  );
};
