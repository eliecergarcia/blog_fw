import React from 'react';

export const Hero = () => {
  return (
    <div className="flex-grow p-5 bg-primary h-full xl:p-10 xl:relative">
      <h1 className="pb-4 mx-auto text-3xl top-[35%] right-24 text-white text-center font-bold w-2/3 xl:absolute xl:w-[18%] xl:text-5xl">
        <span className="text-secondary">CONECTANDO</span> EL
        <span className="text-secondary"> FUTURO</span> TECH
      </h1>
      <img
        src="https://s3-alpha-sig.figma.com/img/8a17/a662/13447c271143bc469160b5c112c30203?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJQLY9sXXyzXpWx5v-Zh~mIxE0HPQJYnAQEuYUer~M-hDt9rQdD~fuJ9IvMqNxOohTlCtLEHjGSidFPvdH5oBZ7AS7r1FCcS3sapQfe3RynhF0Okesr2z-4wkzkqP9ZZqRPRyGpwHK35D-2ML0u~tqf7KZeIQQ2afTll2UPEDvjSbpGwbgl39rK6PJ8HOYpw4Swuk5D-BsgcFxzndgkWtYGIVs4bnuh6WrVFi9wpiiqDEgReDtXfIOfS4GayIl2d9e7GodTyFWudyr5izOPzqoE0OfB0enbR17cK~Sr83atIHaqus~HUFIZ2-MyoPAtoOiwSdFVMF1zcZF50WyuZaQ__"
        alt="heroImage"
        className="rounded-[50px] w-full h-[80%] object-cover lg:w-full"
      />
    </div>
  );
};
