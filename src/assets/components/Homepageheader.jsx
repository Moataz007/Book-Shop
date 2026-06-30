export default function Homepageheader() {
  return (
    <>
      <header className="bg-[url(book-bg.png)] bg-no-repeat bg-center bg-cover w-full min-h-[92vh]">
        <nav className="flex items-center justify-between px-35 py-6  bg-[#FFFFFF33] mb-69">
          <div className="flex gap-1.5 items-center text-white text-[16px] font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-2v7l-2.5-1.5L11 11V4H6zm0 0V4zm5-9l2.5-1.5L16 11l-2.5-1.5z"
              />
            </svg>
            BookShoop
            <div className="houraizonhr w-8 bg-[#FFFFFF4D] opacity-30"></div>
            <div className="flex gap-10 text-white text-[16px] font-semibold">
              <p>Home</p>
              <p>Books</p>
              <p>About us</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className=" bg-[#D9176C] py-2.75 px-3 rounded-full overflow-hidden text-white">
              Log in
            </p>
            <p className=" bg-white py-2.75 px-3 rounded-lg text-[#D9176C] border border-[#D9176C]">
              Sing up
            </p>
          </div>
        </nav>

        <div className="search-bar flex justify-between w-134 h-14.75 bg-[#FFFFFF] border[#22222233]/20 rounded-[50px] mb-130">
          <p className=" pl-6 py-3 text-[20px] text-[#22222280]/50 text-center">
            Search
          </p>
          <div className="flex justify-center items-center gap-2 ">
            <button className="mic-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 23v-3m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 5c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"
                />
              </svg>
            </button>
            <button className=" w-16 h-full bg-[#D9176C] flex items-center justify-center rounded-r-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
        <main className="flex justify-evenly px-15 m-30 gap-x-15">
          <div className="flex flex-col"> 
          <div>
            <svg className="text-[#22222280]/50"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg text-[#222222] font-bold font-sans">Fast & Reliable Shipping</p>
            <p className="text-[#22222280]/50 font-sans font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
          </div>
          <div className="flex flex-col"> 
          <div>
            <svg className="text-[#22222280]/50"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg text-[#222222] font-bold font-sans">Fast & Reliable Shipping</p>
            <p className="text-[#22222280]/50 font-sans font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
          </div>
          <div className="flex flex-col"> 
          <div>
            <svg className="text-[#22222280]/50"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg text-[#222222] font-bold font-sans">Fast & Reliable Shipping</p>
            <p className="text-[#22222280]/50 font-sans font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
          </div>
          <div className="flex flex-col"> 
          <div>
            <svg className="text-[#22222280]/50"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg text-[#222222] font-bold font-sans">Fast & Reliable Shipping</p>
            <p className="text-[#22222280]/50 font-sans font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
          </div>
        </main>
    </>
  );
}
