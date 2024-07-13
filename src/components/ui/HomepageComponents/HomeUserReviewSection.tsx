import { Rate } from "antd";

const HomeUserReviewSection = () => {
  return (
    <section>
      <div className="my-6  p-5  max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            What our happy clients say
          </h2>
          <p className="text-sm mt-4 leading-relaxed text-black">
            Our plants have transformed homes, offices, and gardens with their
            beauty and freshness. Hear what our satisfied customers have to say!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
          <div className="rounded-md p-5 bg-[#dcffcb]">
            <div className="flex flex-col items-center">
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-sm font-extrabold text-gray-800">
                  Emily Johnson
                </h4>
                <p className="text-xs text-[#4d6429] font-bold mt-1">
                  Office Category
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-gray-800">
                The plants I bought for my office have made a huge difference.
                They create a calming environment and improve the air quality.
                Highly recommend!
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              <Rate defaultValue={5} value={5} disabled allowHalf />
            </div>
          </div>

          <div className="rounded-md  p-5 bg-[#dcffcb]">
            <div className="flex flex-col items-center">
              <img
                src="https://readymadeui.com/team-3.webp"
                className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-sm font-extrabold text-gray-800">
                  Michael Brown
                </h4>
                <p className="text-xs  text-[#4d6429] font-bold mt-1">
                  Home Category
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-gray-800">
                My home feels so much more alive with the new plants I got. They
                are beautiful and require very little maintenance. Great for
                anyone looking to add some green to their space!
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              <Rate defaultValue={5} value={5} disabled allowHalf />
            </div>
          </div>

          <div className="rounded-md  p-5 bg-[#dcffcb]">
            <div className="flex flex-col items-center">
              <img
                src="https://readymadeui.com/team-4.webp"
                className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-sm font-extrabold text-gray-800">
                  Sarah Williams
                </h4>
                <p className="text-xs t text-[#4d6429] font-bold mt-1">
                  Garden Category
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-gray-800">
                The plants from the garden category are perfect for my outdoor
                space. They are thriving and have added a wonderful touch to my
                garden. I'm very happy with my purchase!
              </p>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              <Rate defaultValue={5} value={4.5} disabled allowHalf />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeUserReviewSection;
