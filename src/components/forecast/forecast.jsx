import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label htmlFor="" className="title">
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label htmlFor="" className="day">
                    {forecastDays[idx]}
                  </label>
                  <label htmlFor="" className="description">
                    {item.weather[0].description}
                  </label>
                  <label htmlFor="" className="description">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Wind speed:</label>
                  <label htmlFor="">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Sea level:</label>
                  <label htmlFor="">{item.main.see_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels like:</label>
                  <label htmlFor="">{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
