import React from 'react';
import ReactPaginate from 'react-paginate';

// todo, when loading, disable all button and show loading information
// todo, you can use tailwind pointer-event-none or hide the ReactPaginate element when loading
// todo, get the loading process from React Query

const Pagination = ({ pageCount, currentPage, paginationHandler }) => {
	console.log(currentPage);

	return (
		<div className="justify-center align-center mx-auto text-center mt-12">
			<p className="text-4xl mb-5">Pagination with API</p>
			{/* <ul className="m-10">
				{posts.map((post) => (
					<li key={post.id}>{post.name}</li>
				))}
			</ul> */}

			<ReactPaginate
				containerClassName="inline-flex -space-x-px"
				pageClassName=" px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
				activeClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
				// disableInitialCallback={true}
				onPageChange={(event) => {
					paginationHandler(event);
					console.log(event);
				}}
				pageCount={pageCount}
				breakLabel={
					<p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						...
					</p>
				}
				previousLabel={
					<button
						// disabled={page === 0}
						className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
					>
						Previous
					</button>
				}
				nextLabel={
					<button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Next
					</button>
				}
				pageRangeDisplayed={2} // todo, if it's mobile then 1 otherwise 2
				marginPagesDisplayed={1}
				initialPage={currentPage - 1}
			/>
		</div>
	);
};

export default Pagination;
