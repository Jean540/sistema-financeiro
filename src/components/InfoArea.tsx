import { formatCurrenMonth } from "@/helpers/dateFilter";
import { ResumeItem } from "./ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <div className="flex max-[560px]:flex-col w-[100%] items-center bg-white shadow shadow-[#CCC] rounded-[10px] p-5 max-[300px]:p-1 mt-[-40px]">
      <div className="MonthArea flex-1 flex items-center">
        <div
          className="MonthArrow w-[40px] text-center text-[25px] cursor-pointer"
          onClick={handlePrevMonth}
        >
          ←
        </div>
        <div className="MonthTitle flex-1 text-center">
          {formatCurrenMonth(currentMonth)}
        </div>
        <div
          className="MonthArrow w-[40px] text-center text-[25px] cursor-pointer"
          onClick={handleNextMonth}
        >
          →
        </div>
      </div>
      <div className="ResumeArea flex flex-[2] max-[560px]:w-[100%]">
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem title="Balanço" value={income - expense} />
      </div>
    </div>
  );
};
