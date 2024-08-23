import { sculptureList } from "./data";
import BookStatus from "./BookStatus";

 
export default function Example() {
  return (

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-cyan-300 sm:text-4xl">นิยายจีน</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {sculptureList.map((sculptureList) => (
            <a key={sculptureList.code} href={sculptureList.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={sculptureList.cover}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-lg text-gray-700">{sculptureList.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">ราคาปก:{sculptureList.price}</p>
              <p className="mt-1 text-sm text-gray-900">{sculptureList.category}</p>
              <p className="mt-1 text-sm text-gray-900">โปรโมชั่น:{sculptureList.promotion}</p>
              <p className="mt-1 text-sm text-gray-900">รายละเอียดหนังสือ: {sculptureList.betails}</p>
              <p className="mt-1 text-sm text-red-500">ชื่อผู้แต่ง: {sculptureList.author}</p>
              <BookStatus Bestseller={sculptureList.bestseller} Recommended={sculptureList.recommended} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
