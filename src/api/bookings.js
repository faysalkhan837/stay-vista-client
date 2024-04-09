import axiosSecure from "."

// Create payment intent
export const createPaymentIntent = async (price) => {
    const { data } = await axiosSecure.post('/create-payment-intent', price)
    return data;
}

// Save booking info in db...
export const saveBookingIngs = async (paymentInfo) => {
    const { data } = await axiosSecure.post('/bookings', paymentInfo)
    return data;
}

// Update room status after booking in db...
export const updateStatus = async (id, status) => {
    const { data } = await axiosSecure.patch(`/rooms/status/${id}`, { status })
    return data;
}