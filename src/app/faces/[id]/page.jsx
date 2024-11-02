"use client";
import { useEffect, useState } from "react";
import css from "./page.module.css";
import Link from "next/link";
const Page = ({ params }) => {
  const { id } = params;
  const [dataToRender, setDataToRender] = useState([]);
  useEffect(() => {
    const req = async () => {
      await fetch(`/api/getmodels?id=${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((json) => {
          setDataToRender(json.faceData);
        });
    };
    req();
  }, []);

  return (
    <div className={css.page}>
      <div className={css.slider_wrapper}></div>
      {dataToRender && (
        <div className={css.bio}>
          <div className={css.title}>{dataToRender.title}</div>
          {dataToRender.params &&
            Object.entries(dataToRender.params).map(([key, value]) => {
              return (
                <div className={css.param_wrapper}>
                  {key}:{value}
                </div>
              );
            })}
          <div className={css.title}>
            Scouted for Agency: {dataToRender.byAgency}
          </div>
          {dataToRender.instOfAgency && (
            <div>
              <a href={`https://instagram.com/${dataToRender.instOfAgency}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40px"
                  height="40px"
                  style={{ transform: "translateY(7px)" }}
                >
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                </svg>
              </a>
            </div>
          )}
          {dataToRender.www && <a href={dataToRender.www}>go to website</a>}
          {dataToRender.mailToAgency && (
            <a href={`mailto:${dataToRender.mailToAgency}`}>
              mail to Agency: {dataToRender.mailToAgency}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
// instOfAgency

export default Page;
