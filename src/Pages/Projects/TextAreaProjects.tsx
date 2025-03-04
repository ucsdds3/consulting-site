import { forwardRef, LegacyRef } from "react";
const Text = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="flex flex-col justify-center mt-[20vh]"
      id="textarea"
      ref={ref}
    >
      <div className="">
      <div className="grid grid-flow-row grid-cols-4">
        <div className="col-span-2">
          <p className="text-2xl text-white mg mb-2">Want to build your resume?</p>
          <p className="text-5xl text-white mb-4 font-semibold">PROJECTS</p>
          <p className="text-white text-md">
            Assisting students with 25+ projects to gain practical data-science experience by working on real-world problems, in collaboration with both faculty and industry.
          </p>
        </div>
</div>
      </div>
    </div>
  );
});
export default Text;
