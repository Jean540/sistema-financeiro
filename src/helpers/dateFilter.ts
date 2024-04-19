import { Item } from "@/types/item";

export const getCurrentMonth = () => {
  const now = new Date();

  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string) => {
  const [year, month] = date.split("-");
  return list.filter(
    (e) =>
      e.date.getFullYear() == parseInt(year) &&
      e.date.getMonth() + 1 == parseInt(month)
  );
};

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

export const shortFormatDate = (date: Date): string => {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}`;
};

const addZeroToDate = (n: number): string => (n > 10 ? `${n}` : "0" + n);

export const formatCurrenMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");

  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[parseInt(month) - 1]} de ${year}`;
};

export const stringToDate = (string: string) => {
  const [year, month, day] = string.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
