import book1 from "../images/book1.jpg"
import book2 from "../images/book2.jpg"
import book3 from "../images/book3.jpg"
import book4 from "../images/book4.jpg"
import book5 from "../images/book5.jpg"
import book6 from "../images/book6.jpg"
import book7 from "../images/book7.jpg"
import book8 from "../images/book8.jpg"

export default function Main1() {
  return (
    <>
        <main className="bg-[#3B2F4A] flex flex-col items-center py-30">
          <div className="text-center mb-20">
            <p className="text-[#FFFFFF] font-sans font-bold text-[26px]">Best Seller</p>
            <p className="text-[#FFFFFF]/50 font-sans font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et <br /> ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-8 ">
              <img className="w-50 h-auto" src={book1} alt="book1" />
              <img className="w-50 h-auto" src={book2} alt="book2" />
              <img className="w-50 h-auto" src={book3} alt="book3" />
              <img className="w-50 h-auto" src={book4} alt="book4" />
              <img className="w-50 h-auto" src={book5} alt="book5" />
              <img className="w-50 h-auto" src={book6} alt="book6" />
              <img className="w-50 h-auto" src={book7} alt="book7" />
              <img className="w-50 h-auto" src={book8} alt="book8" />
            </div>
          </div>
        </main>
    
    
    </>
  )
}
