import React from "react";

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <img
        src="https://media.graphassets.com/eDbmNcAUTOSyWhDpPu2Z"
        alt="formBanner"
        className="md:max-w-2xl mt-4 mx-auto rounded-lg"
      />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSePYwPkXxUwfyaGO3vSFMcUYCrnN4a4VFiR4TkzE0S0qJEEUA/viewform?embedded=true"
        className="max-w-2xl w-screen h-[138rem] mx-auto"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default IndexPage;
