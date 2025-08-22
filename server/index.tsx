import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

// ENV necesarios
const SMTP_USER = process.env.SMTP_USER || "arnedoaalejandro@gmail.com";
const SMTP_PASS = process.env.SMTP_PASS || ""; // App Password de Gmail

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { nombre, telefono, email, consulta } = req.body || {};
    if (!nombre || !telefono || !email || !consulta) {
      return res.status(400).json({ ok: false, error: "Campos inválidos" });
    }

    await transporter.sendMail({
      from: `"Portal Seguros" <${SMTP_USER}>`,
      to: "arnedoaalejandro@gmail.com",
      subject: `Nueva consulta de ${nombre}`,
      replyTo: email,
      text: `Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}

Consulta:
${consulta}`,
      html: `
        <h3>Consulta desde el sitio</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Consulta:</b></p>
        <pre style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace">${consulta}</pre>
      `,
    });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log("API ready on http://localhost:" + PORT);
});