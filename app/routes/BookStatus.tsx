export default function BookStatus({ Bestseller , Recommended }) {
    return (
      <div className="flex space-x-2">
        {Bestseller && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 sm:text-1xl">
            สินค้าขายดี
          </span>
        )}
        {Recommended && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800 sm:text-1xl">
            สินค้าแนะนำ
          </span>
        )}
      </div>
    );
  }