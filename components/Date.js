import React from "react";
import style from "../css/date.module.css";
import { format, parseISO } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={style.date}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
