"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import data from "@/data";
import { josfin_slab_600 } from "@/util/font";
import Image from "next/image";
import Arrow from "../../../assets/studentDetailArrow.svg";
import Link from "next/link";

export default function StudentDetail() {
  const { record } = useParams();
  const [student, setStudent] = useState(
    ...data.filter(({ id }) => Number(record) === id)
  );
  return (
    <div className=" h-screen w-screen relative bg-detailPrimary">
      <div className="bg-detailPrimary h-1/3 w-full flex justify-center">
        <Link href={"/records"}>
          <Image src={Arrow} />
        </Link>
        <div>
          <span className="">Student Photo</span>
          <div className="bg-white h-[180px] w-[180px] rounded-full"></div>
        </div>
        <div>
          <div className="py-2 px-4 bg-white text-center rounded-full shadow-xl cursor-pointer">
            Update
          </div>
          <span>Student Profile</span>
        </div>
        <div></div>
      </div>
      <div className="bg-detailSecondary w-full h-2/3 rounded-t-3xl flex flex-col justify-center gap-14 items-center">
        <div className={`${josfin_slab_600.className} text-5xl`}>
          {student.name}
        </div>
        <div
          className={`flex justify-center items-center h-16 gap-20 w-full text-3xl ${josfin_slab_600.className}`}
        >
          <span>{student.matricNo}</span>
          <div className="border border-[#823cab] h-full" />
          <span>{student.college}</span>
          <div className="border border-[#823cab] h-full" />
          <span>{student.department}</span>
        </div>
        <div>{student.email}</div>
      </div>
    </div>
  );
}
