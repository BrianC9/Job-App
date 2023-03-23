import { JobAbout } from "../..";
import Specifics from "../specifics/Specifics";

function InfoTabs({ activeTab, job }) {
  switch (activeTab) {
    case "Qualifications":
      return (
        <Specifics
          title={activeTab}
          points={
            job?.job_highlights.Qualifications ?? [
              "No qualifications especified",
            ]
          }
        />
      );
      break;
    case "Responsibilities":
      return (
        <Specifics
          title={activeTab}
          points={
            job?.job_highlights.Responsibilities ?? [
              "No responsibilities especified",
            ]
          }
        />
      );
      break;
    case "Benefits":
      return (
        <Specifics
          title={activeTab}
          points={job?.job_highlights.Benefits ?? ["No benefits especified"]}
        />
      );
      break;
    default:
      return <JobAbout />;
      break;
  }
}

export default InfoTabs;
