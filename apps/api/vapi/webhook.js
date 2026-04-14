export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Vapi hit:", req.body);
    return res.status(200).json({ success: true });
  }

  return res.status(200).send("Webhook working");
}