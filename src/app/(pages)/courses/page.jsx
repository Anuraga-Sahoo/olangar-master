"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
const Page = () => {
  const [catagories, setCatagories] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    axios.get("https://apitest.examys.com/view_all_category").then((res) => {
      setCatagories(res.data.result);
    });

    axios
      .post("https://apitest.examys.com/view_all_package", {
        page_number: 0,
        rowper_page: 30,
      })
      .then((res) => {
        setFetchedData(res.data.result);
      });
  }, []);

  return (
    <div>
      {/* hero section */}
      <div className="blue-grad p-5">
        <div className="container mx-auto md:flex justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-black">
              Online Test Series by India&apos;s Advanced Mock Test Terminal
            </p>
            <p className="text-sm font-bold text-stone-600 mt-2 md:mt-4">
              Practice test series for SSC, RRB, SBI, IBPS, RBI, CTET, KVS,
              Defence & more govt exams:
            </p>
            <ul className="*:text-sm mt-8 md:mt-12 list-disc ml-4">
              <li>Mock test + Previous yesr test + Live test</li>
              <li>Introducing Trend Test</li>
              <li>One pass & access to unlimited tests</li>
            </ul>
          </div>
          <Image
            className="hidden md:block ml-24"
            alt="Exays courses"
            src={"/static/Examys-courses.png"}
            width={400}
            height={200}
          ></Image>
        </div>
      </div>

      {/* search section */}
      <div className="container mt-5 mx-auto">
        <div className="container flex justify-between flex-col md:flex-row items-center">
          <p className="text-xl font-bold mx-auto md:mx-20 lg:mx-40">
            Search Courses
          </p>
          <div className="relative flex items-center grow my-2 md:my-10">
            <span className="material-icons-outlined absolute left-1 text-gray-500">
              search
            </span>
            <input
              type="search"
              className="default-border input icon-input w-full bg-stone-200"
              placeholder="Search courses here"
            />
          </div>
        </div>
      </div>
      {/* tabs */}
      <div className="my-5  text-2xl font-bold px-2 md:px-4 styled-logo">
        Courses offered by us
      </div>
      <div className="course-filters-result container mx-auto">
        <div className="tabs md:h-dvh md:sticky md:top-36  md:w-60 md:flex-col sticky top-16 bg-white default-border text-stone-700 flex *:p-3 w-full overflow-x-auto whitespace-nowrap overscroll-x-contain snap-mandatory snap-x">
          <span className="selected text-examys-800 font-bold">All</span>
          {catagories &&
            catagories.map((item, ind) => {
              return <span key={item._id}>{item.category_name}</span>;
            })}
        </div>
        <div className="sub-tab bg-white sticky top-28 flex p-2 overflow-x-auto whitespace-nowrap border-b">
          <span className="chip bg-examys-500 text-white">All</span>
          <span className="chip">Focus</span>
          <span className="chip">Power</span>
          <span className="chip">Combined</span>
        </div>
        <div className="tab-content p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10">
          {/* course card */}
          {fetchedData &&
            fetchedData.map((item) => {
              return (
                <div
                  className="card border rounded-2xl p-4 shadow-sm"
                  key={item._id}
                >
                  <p className="text-xl truncate grow">{item.package_name}</p>
                  <p className="text-xs text-gray-400 font-bold">
                    {item.package_duration}
                  </p>
                  <p className="mt-4 text-xs h-24">{item.package_desc}</p>
                  <p className="mt-4 text-xs">
                    Supported by <span className="font-bold">examys ai</span> &
                    <span className="font-bold">Course Journey</span>
                  </p>
                  <div className="flex justify-between mt-3">
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-green-600 font-bold">
                          &#8377; {item.package_price}
                        </span>
                        <span className="text-gray-400 text-xs line-through">
                          &#8377; {item.discounted_price}
                        </span>
                      </div>
                    </div>

                    <button className="rounded-md border px-4 text-white bg-examys-600">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
