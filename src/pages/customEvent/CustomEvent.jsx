import React, { useState, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const VAT_RATE = 0.2;

const CustomEvent = () => {
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();
  const [card_name, setName] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [expiry_month, setExpiryMonth] = useState("");
  const [expiry_year, setexpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    setErrors(newErrors);
  };

  // const validateCvv = (cvv) => /^[0-9]{3,4}$/.test(cvv);

  const handleChangeCardNumber = (e) => {
    setCardNumber(
      e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };

  const handleExpiryMonthChange = (e) => {
    setExpiryMonth(e.target.value);
    validateExpiryDate(e.target.value, expiry_year);
  };

  const handleExpiryYearChange = (e) => {
    setexpiryYear(e.target.value);
    validateExpiryDate(expiry_month, e.target.value);
  };

  const validateExpiryDate = (month, year) => {
    const newErrors = {};

    // Check if month and year are selected
    if (!month) newErrors.expiry_month = "Please select an expiry month.";
    if (!year) newErrors.expiry_year = "Please select an expiry year.";

    // Validate that the selected date is in the future
    if (month && year) {
      const today = new Date();
      const expiryDate = new Date(year, month - 1); // Months are zero-based

      if (expiryDate <= today) {
        newErrors.expiry_month = "Expiry date must be in the future.";
        newErrors.expiry_year = "Expiry date must be in the future.";
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Success", "Payment Successful!").then(() => {
      handleBookingSubmit();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let cost = 0;
    if (guestCount === "1-10") cost = 2; // Assuming a cost per guest for 1-10
    else if (guestCount === "1-20") cost = 3; // Assuming a cost per guest for 1-20
    const vat = cost * VAT_RATE;
    setTotalCost(cost + vat);
  }, [guestCount]);

  const isValidDateTime = (selectedDate, selectedTime) => {
    const now = new Date();
    const eventDate = new Date(selectedDate);
    const [hour, minute] = selectedTime.split(":").map(Number);
    eventDate.setHours(hour, minute);

    return eventDate >= now;
  };

  const handleNext = () => {
    if (!eventType || !date || !time || !guestCount) {
      Swal.fire(
        "Missing Information!",
        "Please fill all required fields before proceeding.",
        "warning"
      );
      return;
    }

    if (!isValidDateTime(date, time)) {
      Swal.fire(
        "Invalid Date or Time!",
        "The event date and time cannot be in the past.",
        "error"
      );
      return;
    }

    setShowPaymentSection(true);
  };

  const handleBookingSubmit = () => {
    Swal.fire(
      "Success",
      "Your event request has been submitted.",
      "success"
    ).then(() => navigate("/"));
  };

  return (
    <div className="container mx-auto px-4">
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/YbNwSg0/birthday.jpg')",
          backgroundSize: "cover",
          borderRadius: "6px",
          height: 200,
        }}
      >
        <div className="h-[200px] bg-black bg-opacity-70 flex items-center justify-start p-8">
          <div>
            <h1 className="text-5xl text-white font-bold">Create Your Event</h1>
            <p className="text-xl text-white mt-2 flex items-center gap-2">
              <a href="/">Home</a>
              <CiPlay1 className="text-pink-600" />
              <span className="text-red-500">Create your event</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-8">
        {!showPaymentSection ? (
          <>
            <h2 className="text-3xl font-semibold mb-6">
              Let us know about your event
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <div className="border p-6 rounded-lg bg-rose-50/50">
                  <h2 className="text-lg font-semibold mb-4">
                    Fill up this form
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block font-medium">Event Type</label>
                      <select
                        required
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full border rounded-md p-2"
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Arts and Culture Festival">
                          Arts and Culture Festival
                        </option>
                        <option value="Corporate Event">Corporate Event</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium">Date</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border rounded-md p-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium">Event Time</label>
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full border rounded-md p-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium">Total Guests</label>
                      <select
                        required
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full border rounded-md p-2"
                      >
                        <option value="">Select guests count</option>
                        <option value="1-10">1-10</option>
                        <option value="1-20">1-20</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-medium">
                        Special Request (optional)
                      </label>
                      <textarea
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        rows={4}
                        className="w-full border rounded-md p-2"
                        placeholder="Type here..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="border p-6 rounded-lg bg-rose-50/50">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <p>Event Type: {eventType || "N/A"}</p>
                  <p>Date: {date || "N/A"}</p>
                  <p>Time: {time || "N/A"}</p>
                  <p>Guests: {guestCount || "N/A"}</p>
                  <p>
                    Total Cost:{" "}
                    {totalCost > 0 ? `£${totalCost.toFixed(2)}` : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="border p-6 rounded-lg bg-rose-50/50">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block font-medium">Name on Card</label>
                  <input
                    type="text"
                    required
                    value={card_name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium">Card Number</label>
                  <input
                    type="text"
                    required
                    value={card_number}
                    onChange={handleChangeCardNumber}
                    className="w-full border rounded-md p-2"
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.card_number && (
                    <p className="text-red-500 text-sm">{errors.card_number}</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium">Expiry Month (MM)</label>
                  <select
                    required
                    value={expiry_month}
                    onChange={handleExpiryMonthChange}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Select Expiry Month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option
                        key={i + 1}
                        value={(i + 1).toString().padStart(2, "0")}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                  {errors.expiry_month && (
                    <p className="text-red-500 text-sm">
                      {errors.expiry_month}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium">
                    Expiry Year (YYYY)
                  </label>
                  <select
                    required
                    value={expiry_year}
                    onChange={handleExpiryYearChange}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Select Expiry Year</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const year = new Date().getFullYear() + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                  {errors.expiry_year && (
                    <p className="text-red-500 text-sm">{errors.expiry_year}</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium">CVV</label>
                  <input
                    type="text"
                    required
                    value={cvv}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // Only allow digits
                      setCvv(value);
                    }}
                    className="w-full border rounded-md p-2"
                    maxLength={3}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm">{errors.cvv}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                Pay Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomEvent;
