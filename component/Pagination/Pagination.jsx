import React from "react";
import { useRouter } from "next/router";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  
  const router = useRouter();
  let temp = router.query;

  const prevPageHandler = () => {
    if (props.data.meta.current_page > 1) {
      temp = (parseInt(temp.page) - 1).toString();
      router.push("works?page=" + temp);
    }
  };
  const nextPageHandler = () => {
    if (Object.keys(temp).length === 0) {
        router.push("works?page=2");
    } else {
        if(temp.page === 'NaN') {
            router.push("works?page=2");
        } else if (props.data.meta.current_page < props.data.meta.last_page) {
            temp = (parseInt(temp.page) + 1).toString();
            router.push("works?page=" + temp);
        }
    }   
  };
  return (
    <section className="flex justify-center items-center w-full bg-second text-white">
      <ReactPaginate
        previousLabel={
          <button
            id="btn-prev"
            onClick={prevPageHandler}
            className="flex justify-center items-center border px-3 py-2 rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl hover:bg-second hover:text-white"
          >
            <MdNavigateBefore size={24} />
            Prev
          </button>
        }
        nextLabel={
          <button
            id="btn-next"
            onClick={nextPageHandler}
            className="flex justify-center items-center border px-3 py-2 rounded-tl-md rounded-tr-xl rounded-br-md rounded-bl-xl hover:bg-second hover:text-white"
          >
            Next
            <MdNavigateNext size={24} />
          </button>
        }
        containerClassName="flex justify-between items-center w-[90%] gap-2 my-4"
      />
    </section>
  );
}

export default Pagination;
