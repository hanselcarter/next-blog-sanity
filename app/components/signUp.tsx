function SignUp() {
  return (
    <div className="w-full xs-nav-menu:w-[640px] border-t-[12px] border-t-solid border border-black bg-white flex flex-col items-center justify-center py-[59px] mb-[111px]">
      <p className="text-[#090909] text-center font-['New_York_Extra_Large'] text-[36px]  font-bold leading-[28px]">
        Sign up for the newsletter
      </p>
      <p className="max-w-[500px] text-[#090909] text-center font-['SF_Pro_Text'] text-[20px] font-normal leading-[28px] mt-[18px]">
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p>
      <div className=" border border-black mt-[36px] flex w-[70%]">
        <input
          placeholder="Enter your email"
          className="focus:outline-none flex-grow p-2"
        />
        <button className="bg-black text-white p-2 text-center text-[15px] font-bold leading-normal tracking-[1px] uppercase w-[139px]">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
