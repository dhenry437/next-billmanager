import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  // Protected route (middleware is not working with Prisma ATM)
  if (!session?.user)
    redirect(`${process.env.NEXT_PUBLIC_SIGNIN_PATH}?callbackUrl=/dashboard`);

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentDate = "2024-1-12";
  const currentDateObj = new Date(currentDate);
  const selectedDate = "2024-1-22";
  const selectedDateObj = new Date(selectedDate);
  const calendarDates = [
    { date: "2023-12-27", events: [] },
    { date: "2023-12-28", events: [] },
    { date: "2023-12-29", events: [] },
    { date: "2023-12-30", events: [] },
    { date: "2023-12-31", events: [] },
    { date: "2024-1-1", events: [] },
    { date: "2024-1-2", events: [] },
    {
      date: "2024-1-3",
      events: [
        { time: "10AM", name: "Design review" },
        { time: "2PM", name: "Sales meeting" },
      ],
    },
    { date: "2024-1-4", events: [] },
    { date: "2024-1-5", events: [] },
    { date: "2024-1-6", events: [] },
    { date: "2024-1-7", events: [{ time: "6PM", name: "Date night" }] },
    { date: "2024-1-8", events: [] },
    { date: "2024-1-9", events: [] },
    { date: "2024-1-10", events: [] },
    { date: "2024-1-11", events: [] },
    {
      date: "2024-1-12",
      events: [{ time: "2PM", name: "Sam's birthday party" }],
    },
    { date: "2024-1-13", events: [] },
    { date: "2024-1-14", events: [] },
    { date: "2024-1-15", events: [] },
    { date: "2024-1-16", events: [] },
    { date: "2024-1-17", events: [] },
    { date: "2024-1-18", events: [] },
    { date: "2024-1-19", events: [] },
    { date: "2024-1-20", events: [] },
    { date: "2024-1-21", events: [] },
    {
      date: "2024-1-22",
      events: [
        { time: "3PM", name: "Maple syrup museum" },
        { time: "7PM", name: "Hockey game" },
      ],
    },
    { date: "2024-1-23", events: [] },
    { date: "2024-1-24", events: [] },
    { date: "2024-1-25", events: [] },
    { date: "2024-1-26", events: [] },
    { date: "2024-1-27", events: [] },
    { date: "2024-1-28", events: [] },
    { date: "2024-1-29", events: [] },
    { date: "2024-1-30", events: [] },
    { date: "2024-1-31", events: [] },
    { date: "2024-2-1", events: [] },
    { date: "2024-2-2", events: [] },
    { date: "2024-2-3", events: [] },
    {
      date: "2024-2-4",
      events: [{ time: "9PM", name: "Cinema with friends" }],
    },
    { date: "2024-2-5", events: [] },
    { date: "2024-2-6", events: [] },
  ];

  return (
    <div className="px-6 pt-20 lg:px-8">
      <div className="bg-gray-50 lg:h-0 lg:min-h-[768px] rounded-md">
        <div className="lg:flex lg:h-full lg:flex-col">
          <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 flex-none">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              <time dateTime="2022-01">January 2022</time>
            </h1>
            <div className="flex items-center">
              <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                <button
                  type="button"
                  className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 hover:relative md:w-9 md:pr-0 hover:bg-gray-50">
                  <span className="sr-only">Previous month</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:relative md:block">
                  Today
                </button>
                <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                <button
                  type="button"
                  className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 hover:relative md:w-9 md:pl-0 hover:bg-gray-50">
                  <span className="sr-only">Next month</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-1 lg:flex-col">
            <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 flex-none">
              {weekdays.map(weekday => (
                <div className="bg-white py-2">
                  {Array.from(weekday)[0]}
                  <span className="sr-only sm:not-sr-only">
                    {weekday.substring(1)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-1">
              <div className="hidden w-full lg:grid lg:grid-cols-7 grid-rows-6 gap-px">
                {calendarDates.map(calendarDate => {
                  const { date, events } = calendarDate;
                  const dateObj = new Date(date);
                  const isCurrentMonth =
                    dateObj.getMonth() === currentDateObj.getMonth();
                  const isCurrentDate =
                    dateObj.getDate() === currentDateObj.getDate();
                  return (
                    <div
                      className={`${
                        isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-500"
                      } relative px-3 py-2`}>
                      <time
                        className={
                          isCurrentDate
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                            : ""
                        }
                        dateTime={date}>
                        {dateObj.getDate()}
                      </time>
                      {events && (
                        <ol className="mt-2">
                          {events.map(event => {
                            const { time, name } = event;

                            return (
                              <a href="#" className="hover:visible flex">
                                <p className="flex-1 truncate font-medium text-gray-900 hover:text-indigo-600">
                                  {name}
                                </p>
                                <time
                                  dateTime="2022-01-03T10:00"
                                  className="ml-3 hidden flex-none text-gray-500 hover:text-indigo-600 xl:block">
                                  {time}
                                </time>
                              </a>
                            );
                          })}
                        </ol>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                {calendarDates.map(calendarDate => {
                  const { date, events } = calendarDate;
                  const dateObj = new Date(date);
                  const isCurrentMonth =
                    dateObj.getMonth() === currentDateObj.getMonth();
                  const isCurrentDate =
                    dateObj.getDate() === currentDateObj.getDate();
                  const isSelectedDate =
                    dateObj.getDate() === selectedDateObj.getDate();
                  return (
                    <button
                      type="button"
                      className={`${
                        isCurrentMonth
                          ? isSelectedDate
                            ? "bg-white font-semibold text-white"
                            : isCurrentDate
                            ? "bg-white font-semibold text-indigo-600"
                            : "bg-white text-gray-900"
                          : "bg-gray-50 text-gray-500"
                      } flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10`}>
                      <time
                        dateTime={date}
                        className={`${
                          isSelectedDate
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-gray-900"
                            : ""
                        } ml-auto`}>
                        {dateObj.getDate()}
                      </time>
                      <span className="sr-only">0 events</span>
                      {events && (
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                          {events.map(event => (
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                          ))}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-4 py-10 sm:px-6 lg:hidden">
            <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
              <li className="hover:visible flex p-4 pr-4 focus-within:bg-gray-50 hover:bg-gray-50">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    Maple syrup museum
                  </p>
                  <time
                    dateTime="2022-01-22T15:00"
                    className="mt-2 flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="mr-2 h-5 w-5 text-gray-400">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    3PM
                  </time>
                </div>
                <a
                  href="#"
                  className="ml-6 flex-none add rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 hover:opacity-100">
                  Edit<span className="sr-only">, Maple syrup museum</span>
                </a>
              </li>
              <li className="hover:visible flex p-4 pr-4 focus-within:bg-gray-50 hover:bg-gray-50">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Hockey game</p>
                  <time
                    dateTime="2022-01-22T19:00"
                    className="mt-2 flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="mr-2 h-5 w-5 text-gray-400">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    7PM
                  </time>
                </div>
                <a
                  href="#"
                  className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 hover:opacity-100">
                  Edit<span className="sr-only">, Hockey game</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
