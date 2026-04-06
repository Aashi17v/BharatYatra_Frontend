// ✅ LOAD RAZORPAY SCRIPT
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const handlePayment = async ({
  amount,
  name,
  email,
  destination,
  persons,
}) => {
  const isLoaded = await loadRazorpayScript();

  if (!isLoaded) {
    alert("Razorpay SDK failed to load ❌");
    return;
  }

  try {
    // ✅ CREATE ORDER
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message || "Order creation failed ❌");
      return;
    }

    const order = data.order;

    if (!order || !order.id) {
      alert("Invalid order ❌");
      return;
    }

    // ✅ RAZORPAY OPTIONS
    const options = {
      key: "rzp_test_SZ44gYbXKUqrV2", // Replace with your live key in production
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "Bharat Yatra",
      description: `Booking for ${destination}`,

      handler: async function (response) {
        try {
          // ✅ SAVE BOOKING & SEND EMAIL
          const saveRes = await fetch(
            "http://localhost:5000/api/booking/save",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                destination,
                amount,
                persons,
                paymentId: response.razorpay_payment_id,
              }),
            }
          );

          const result = await saveRes.json();

          if (!result.success) {
            alert("Payment successful, but booking/email failed ❌");
            return;
          }

          // ✅ SUCCESS ALERT & REDIRECT
          alert("Payment Successful & Email Sent ✅");
          window.location.href = "/thankyou";

        } catch (err) {
          console.error(err);
          alert("Payment done, but booking/email failed ❌");
        }
      },

      prefill: {
        name,
        email,
      },

      theme: {
        color: "#6a1b2e",
      },
    };

    // ✅ INITIATE RAZORPAY
    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      console.error(response.error);
      alert(
        `Payment failed ❌\nReason: ${response.error.description || "Unknown"}`
      );
    });

    rzp.open();

  } catch (error) {
    console.error(error);
    alert("Something went wrong ❌");
  }
};