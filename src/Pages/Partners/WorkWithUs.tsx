import Button from "../../Components/Button";

const WorkWithUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center font-albert-sans py-32">
        {/* Work with us Section */}
        <div className="flex flex-col justify-between gap-8 md:order-1">
          <div className="flex flex-col gap-4">
            <h3 className="pt-16 text-xl text-white text-center">
              WANT TO WORK WITH US?
            </h3>
            <h2 className="text-5xl text-white text-center">DS3 CONSULTING</h2>
            <p className="text-white text-center">
              Taste some sweet, sweet child labor and hit up our consulting site
            </p>
            <div className="flex justify-center">
              <Button contents="LEARN MORE" onclick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
