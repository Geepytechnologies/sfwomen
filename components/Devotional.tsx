import React from "react";

type Props = {};

const Devotional = (props: Props) => {
  return (
    <div>
      <div className="bg-[url('/devote.png')] min-h-[300px] bg-cover bg-center">
        <div>
          <div className="text-white font-[500]">
            Devotional
            <br />
            Coming soon
          </div>
          <div className="bg-primary text-white py-2 px-3 rounded-lg text-center font-[500] w-[200px]">
            Get Notified
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devotional;
