/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from '../../components/Link';

type Pagination = {
  pageContext?: any;
  pageCount?: any;
  page?: any;
  selected?: any;
};

export const Pagination: FC<Pagination> = ({
  pageContext,
  pageCount,
  page,
}: Pagination) => {
  return (
    <div
      sx={{
        '& ul': {
          display: 'flex',
          justifyContent: 'center',
        },
        li: {
          display: 'flex',
          alignItems: 'center',
          ':not(:first-child)': {
            ml: [1, null, null, null, 2],
          },
        },
      }}
    >
      <ReactPaginate
        previousLabel={
          pageContext?.page !== 1 && (
            <Link kind="primary" href={`/blog/${page - 1}/`}>
              Previous page
            </Link>
          )
        }
        nextLabel={
          pageCount !== pageContext.page && (
            <Link kind="primary" href={`/blog/${page + 1}/`}>
              Next page
            </Link>
          )
        }
        onPageChange={({ selected }) => {
          const page = selected + 1;
          const path = page === 1 ? `/blog/` : `/blog/${page}/`;
          path;
        }}
        disableInitialCallback
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        containerClassName={'pagination'}
        activeClassName={'active'}
        initialPage={pageContext.page - 1}
      />
    </div>
  );
};

Pagination.defaultProps = {
  pageCount: 10,
  pageContext: {
    offset: 0,
    page: 1,
    perPage: 12,
    totalPages: 5,
  },
};
