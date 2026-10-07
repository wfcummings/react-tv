import { useState } from "react";
import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return (
      <section className="details">
        <p>Please select a show to learn more.</p>
      </section>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList name={show.name} />
      <EpisodeDetails />
    </div>
  );
}
