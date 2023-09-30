"use client";

import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reservation = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-10">
      <h1
        className="text-blue-500 text-4xl font-normal"
        style={{ fontFamily: "Sedgwick Ave" }}
      >
        Reserve a table
      </h1>
      <p
        className="text-[#03233C] text-lg font-light leading-6"
        style={{ fontFamily: "Roboto" }}
      >
        To help us find the best table for you, select the preferred party size,
        date, and time of your reservation.
      </p>
      <div className="flex items-end gap-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Party Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="two">2 Guests</SelectItem>
            <SelectItem value="four">4 Guests</SelectItem>
            <SelectItem value="six">6 Guests</SelectItem>
            <SelectItem value="eight">8 Guests</SelectItem>
            <SelectItem value="ten">10 Guests</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div className="flex flex-col items-start gap-2.5">
          <label htmlFor="time" className="text-[#03233C] font-light">
            Time
          </label>
          <input id="time" type="time" className="p-2 border rounded-md" />
        </div>
        <button
          className="px-8 py-2 bg-blue-500 text-white rounded-md font-normal text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ fontFamily: "Roboto" }}
        >
          Find a Table
        </button>
      </div>
    </div>
  );
};

export default Reservation;
