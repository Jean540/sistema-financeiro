import { Item } from "@/types/item";
import { TableItem } from "./TableItem";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <div className="w-[100%] p-5 max-[385px]:text-sm max-[300px]:p-1 bg-white shadow shadow-[#CCC] rounded-[10px] mt-[20px]">
      <table className=" w-[100%] ">
        <thead>
          <tr>
            <th className="py-[10px] text-left w-[100px]">Data</th>
            <th className="py-[10px] text-left w-[130px]">Categoria</th>
            <th className="py-[10px] text-left">Título</th>
            <th className="py-[10px] text-left w-[150px]">Valor</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
