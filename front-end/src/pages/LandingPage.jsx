const LandingPage = () => {
  return (
    <>
      <section>
        <div className='flex justify-center items-center h-[80vh]'>
          <div className='text-center'>
            <h1 className="text-3xl font-semibold ">Wellcome To TASKio</h1>
            <h5 className="text-md font-medium leading-[150%] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam ex doloribus.</h5>
            <span className="font-medium">Lets Make It Happain {"-->"}</span> <button className="px-[20px] py-[14px] bg-zinc-600 text-white rounded-[10px] mt-[20px] font-bold">Get Starts</button> 
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;