"use client";
import { FormArea } from "@/components/FormArea";
import { InfoArea } from "@/components/InfoArea";
import { TableArea } from "@/components/TableArea";
import { categories } from "@/data/categories";
import { items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/item";
import { useEffect, useState } from "react";

const Page = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let expenseCount = 0;
    let incomeCount = 0;

    filteredList.forEach((e) => {
      if (categories[e.category].expense) expenseCount += e.value;
      else incomeCount = e.value;
    });

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <div className="mx-auto ">
      <div className=" bg-blue-900 h-[150px] text-center">
        <h1 className="m-0 p-0 text-white pt-[30px] text-3xl font-bold">
          Sistema Financeiro
        </h1>
      </div>

      <div className="mx-auto max-w-[980px] mb-[50px]">
        {/* Área de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <FormArea list={list} setList={setList} />
        {/* Área de inserção */}

        {/* Tabela de itens */}
        <TableArea list={filteredList} />
      </div>
    </div>
  );
};

export default Page;
