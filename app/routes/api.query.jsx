import { json } from "@remix-run/node";

export const action = async ({ request }) => {
  const formData = await request.formData();

  // Extract data
  const orderChoice = formData.get("order-choice");
  const name = formData.get("name");
  const email = formData.get("email");
  const otherQuery = formData.get("otherQuery");
  const orderQuery = formData.get("order-inquiry");
  const preSaleQuestion = formData.get("pre-sale-question");
  const brandAmbassadorQuestion = formData.get("brand-ambassador-question");

  // Example: Log the form data
  console.log({ orderChoice, name, email, otherQuery,orderQuery,preSaleQuestion,brandAmbassadorQuestion });

  // You can now store the data in your database or send it to an API

  return json({ success: true, message: "Query submitted successfully!" });
};
