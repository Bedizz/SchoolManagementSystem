"use client";
import { ITEM_PER_PAGE } from "@/lib/itemPerPage";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className=" p-4 flex items-center justify-center gap-4">
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-md " onClick={()=> changePage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.ceil(count / ITEM_PER_PAGE) }, (_, i) => (
          <button
            key={i}
            className={`px-2 rounded-md ${page === i + 1 ? "bg-maSky" : ""}`}
            onClick={() => {
              changePage(i + 1);
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-md " onClick={()=> changePage(page + 1)} disabled={page === Math.ceil(count / ITEM_PER_PAGE)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
