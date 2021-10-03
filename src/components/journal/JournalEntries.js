import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  // No necesito pasarle argumentos al JournalEntries porque la data la saca del storage
  // const entries = [1, 2, 3, 4, 5];

  const { notes } = useSelector((state) => state.notes);
  

  return (
    <div className="journal__entries">
      {
        notes.map((note) => (
        <JournalEntry 
                key={note.id} 
                {...note}
                />
      ))
      }
    </div>
  );
};
