import { useEffect, useState } from "react";

const Pagination = ({pages, setCurrentPage,currentEmployees,sortedEmployees}) => {

	const numberOfPages = [];

	for (let i = 1; i <= pages; i++) {
		numberOfPages.push(i)
	};

	const [currentButton, setCurrentButton] = useState(1);
   
	useEffect(() => {
		setCurrentPage(currentButton);
	  },[currentButton]);
	  //setCurrentPage


	return (
		<div className="clearfix">

			<div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}
			</b> entries</div>
			<ul className="pagination">
				<li className={`${currentButton === 1 ? `disabled` : `page-item`}`}>
					<a className="page-link" href="#!"
						onClick={() =>
							setCurrentButton((previous) => previous === 1 ? previous : previous-1)}>
						Previous</a></li>

						{

                       numberOfPages.map((page , index) => {
						return(
							<li key={index} className={`${currentButton === page ? `page-item active` : `page-item`}`}>
							<a onClick={() => setCurrentButton(page) } href="#!" className="page-link">{page}</a></li>
						)
						
					   })


						}

				<li className={`${currentButton === numberOfPages.length ? `disabled` : `page-item`}`}>
					<a className="page-link" href="#!"
						onClick={() =>
							setCurrentButton((previous) => previous === numberOfPages.length ? previous : previous+1)}>
						Next</a></li>

			</ul>
		</div>
	)
}

export default Pagination;

                    // <li className="page-item"><a href="#" className="page-link">1</a></li>
					// <li className="page-item"><a href="#" className="page-link">2</a></li>
					// <li className="page-item active"><a href="#" className="page-link">3</a></li>
					// <li className="page-item"><a href="#" className="page-link">4</a></li>
					// <li className="page-item"><a href="#" className="page-link">5</a></li>
					// <li className="page-item"><a href="#" className="page-link">Next</a></li>