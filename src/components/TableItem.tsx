import { categories } from "@/data/categories";
import { formatDate, shortFormatDate } from "@/helpers/dateFilter";
import { Item } from "@/types/item";
import { useEffect, useState } from "react";

export const TableItem = ({ item }: { item: Item }) => {
  type Color = {
    [tag: string]: string;
  };

  const colorMap: Color = {
    red: "bg-red-900",
    green: "bg-green-900",
    blue: "bg-blue-900",
    brown: "bg-[brown]",
  };

  const [showDate, setShowDate] = useState(true);

  const [size, setSize] = useState<number>(window.innerWidth);
  window.addEventListener("resize", () => setSize(window.innerWidth));

  useEffect(() => {
    if (size < 337) {
      setShowDate(false);
    } else {
      setShowDate(true);
    }
  }, [size]);

  return (
    <tr className="">
      <td className="py-[10px]">
        {showDate ? formatDate(item.date) : shortFormatDate(item.date)}
      </td>
      <td
        className={`px-[10px] max-[385px]:px-[5px] py-[5px] my-[10px] inline-block rounded-md text-white ${
          colorMap[categories[item.category].color]
        }`}
      >
        {categories[item.category].title}
      </td>
      <td className="py-[10px]">{item.title}</td>
      {categories[item.category].expense ? (
        <td className="py-[10px] text-red-500">R${item.value}</td>
      ) : (
        <td className="py-[10px] text-green-500">R${item.value}</td>
      )}
    </tr>
  );
};
