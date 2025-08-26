"use client";

import { Card } from "@/lib/generated/prisma";

interface Props {
  data: Card;
  index: number;
}

export const CardItem = ({ data, index }: Props) => {
  return (
    <div
      role="button"
      className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
    >
      {data.title}
    </div>
  );
};
