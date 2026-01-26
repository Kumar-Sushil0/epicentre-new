"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface EventCalendarContextType {
    isOpen: boolean;
    openCalendar: () => void;
    closeCalendar: () => void;
}

const EventCalendarContext = createContext<EventCalendarContextType | undefined>(undefined);

export function EventCalendarProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openCalendar = () => setIsOpen(true);
    const closeCalendar = () => setIsOpen(false);

    return (
        <EventCalendarContext.Provider value={{ isOpen, openCalendar, closeCalendar }}>
            {children}
        </EventCalendarContext.Provider>
    );
}

export function useEventCalendar() {
    const context = useContext(EventCalendarContext);
    if (context === undefined) {
        throw new Error("useEventCalendar must be used within an EventCalendarProvider");
    }
    return context;
}
