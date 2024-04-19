export const ResumeItem = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <div className="flex-1">
      <div className="text-center font-bold text-[#888] mb-[5px]">{title}</div>
      <div
        className={`text-center font-bold  ${
          title == "Balanço"
            ? value >= 0
              ? "text-green-500"
              : "text-red-500"
            : "text-black"
        }`}
      >
        R$ {value.toFixed(2)}
      </div>
    </div>
  );
};
