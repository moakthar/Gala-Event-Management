import { useState } from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { MdOutlineReviews, MdOutlinePayment } from "react-icons/md";

const DashboardHome = () => {
  // Hardcoded values for total reviews, bookings, payments, and product orders
  const [totalReview] = useState(15); // Replace with any static value
  const [totalBookings_Payment] = useState(8); // Replace with any static value
  const [totalProductsOrder] = useState(22); // Replace with any static value

  const [widgets] = useState({
    totalOrder: true,
    totalBookings: true,
    totalPayment: true,
    totalReview: true,
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {widgets.totalOrder && (
        <Widget
          icon={<HiOutlineEye className="text-indigo-500" size={30} />}
          title="Total Order"
          count={totalProductsOrder}
        />
      )}

      {widgets.totalBookings && (
        <Widget
          icon={<HiOutlineClock className="text-green-600" size={30} />}
          title="Total Bookings"
          count={totalBookings_Payment}
        />
      )}

      {widgets.totalPayment && (
        <Widget
          icon={<MdOutlinePayment className="text-primary" size={30} />}
          title="Total Payment"
          count={totalBookings_Payment}
        />
      )}

      {widgets.totalReview && (
        <Widget
          icon={<MdOutlineReviews className="text-amber-600" size={30} />}
          title="Total Review"
          count={totalReview}
        />
      )}
    </div>
  );
};

const Widget = ({ icon, title, count }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md">
    <div className="mb-2">{icon}</div>
    <h4 className="text-xl font-bold text-black dark:text-white">{count}</h4>
    <span className="text-sm text-neutral-500 font-light">{title}</span>
  </div>
);

export default DashboardHome;
