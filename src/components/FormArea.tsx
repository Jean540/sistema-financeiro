import { categories } from "@/data/categories";
import { stringToDate } from "@/helpers/dateFilter";
import { Item } from "@/types/item";
import { useState } from "react";

type Props = {
  list: Item[];
  setList: (list: Item[]) => void;
};

export const FormArea = ({ list, setList }: Props) => {
  const [category, setCategory] = useState("food");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number>();
  const [date, setDate] = useState<Date>();

  const handleAddNewItem = () => {
    if (title.length > 0 && value && value > 0 && date) {
      let item = { title, value, date, category };
      setList([...list, item]);
      setTitle("");
      setValue(0);
      setDate(undefined);
    } else {
      alert("Favor preencha todos os campos");
    }
  };

  const dateToString = (date: Date | undefined): string => {
    return date ? date.toISOString().split("T")[0] : "";
  };

  return (
    <div className="grid grid-cols-5 max-md:grid-cols-4 max-[540px]:grid-cols-3 w-[100%] p-5 max-[300px]:p-1 bg-white shadow shadow-[#CCC] rounded-[10px] mt-[20px]  gap-3">
      <label htmlFor="date" className="flex flex-col flex-1 font-bold">
        Data{" "}
        <input
          type="date"
          id="date"
          className="rounded border p-1 text-sm font-normal"
          onChange={(e) => setDate(stringToDate(e.target.value))}
          value={dateToString(date)}
        />
      </label>
      <label htmlFor="category" className="flex flex-col flex-1 font-bold">
        Categoria
        <select
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="rounded border  p-[6px] text-sm font-normal"
        >
          <option value="food">{categories.food.title}</option>
          <option value="rent">{categories.rent.title}</option>
          <option value="salary">{categories.salary.title}</option>
        </select>
      </label>
      <label htmlFor="title" className="flex flex-col flex-1 font-bold">
        Título{" "}
        <input
          type="text"
          id="title"
          className="rounded border p-[6px] text-sm font-normal"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="value" className="flex flex-col flex-1 font-bold">
        Valor{" "}
        <input
          type="number"
          id="value"
          className="rounded border placeholder:text-black p-[6px] text-sm font-normal"
          onChange={(e) => setValue(parseInt(e.target.value))}
          value={value}
          placeholder="0"
        />
      </label>

      <button
        className="p-[6px] flex-1 justify-center text-sm bg-[#B6DCE8] h-fit mt-auto rounded flex items-end max-md:col-start-2 max-md:col-end-4 "
        onClick={handleAddNewItem}
      >
        Adicionar
      </button>
    </div>
  );
};
