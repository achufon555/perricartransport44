type QuoteEmailData = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  fromCity: string;
  toCity: string;
  vehicleType: string;
  serviceType: string;
  message: string | null;
  createdAt: Date;
};

const SERVICE_LABELS: Record<string, string> = {
  open: "Open Transport",
  enclosed: "Enclosed Transport",
  "door-to-door": "Door-to-Door Delivery",
};

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #f1f1f1;width:150px;vertical-align:top;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#9a9a9a;text-transform:uppercase;letter-spacing:0.06em;">${label}</span>
      </td>
      <td style="padding:14px 0;border-bottom:1px solid #f1f1f1;vertical-align:top;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#1a1a1a;">${value}</span>
      </td>
    </tr>`;
}

export function quoteNotificationEmail(quote: QuoteEmailData): { subject: string; html: string } {
  const dateStr = quote.createdAt.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  });
  const serviceLabel = SERVICE_LABELS[quote.serviceType] || quote.serviceType;
  const waNumber = quote.phone.replace(/[^0-9]/g, "");
  const reference = `SM-${String(quote.id).padStart(6, "0")}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#f97316 0%,#dc2626 100%);background-color:#ea580c;padding:32px 32px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:900;color:#ffffff;letter-spacing:0.02em;">Wise <span style="color:#1a1a1a;">Move</span></span><br/>
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:0.12em;">Transport</span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background-color:rgba(255,255,255,0.2);color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;padding:6px 12px;border-radius:999px;">New Lead</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:28px 32px 4px;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;color:#1a1a1a;">New Quote Request</span><br/>
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#9a9a9a;">Ref ${reference} &middot; ${dateStr}</span>
            </td>
          </tr>

          <!-- Route highlight -->
          <tr>
            <td style="padding:20px 32px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff7ed;border:1px solid #fed7aa;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:800;color:#1a1a1a;">${quote.fromCity}</td>
                        <td width="32" align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#ea580c;">&rarr;</td>
                        <td align="right" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:800;color:#1a1a1a;">${quote.toCity}</td>
                      </tr>
                    </table>
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:0.06em;">${serviceLabel} &middot; ${quote.vehicleType}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:12px 32px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Customer", quote.name)}
                ${row("Phone", quote.phone)}
                ${row("Email", quote.email || "Not provided")}
                ${quote.message ? row("Notes", quote.message) : ""}
              </table>
            </td>
          </tr>

          <!-- CTA buttons -->
          <tr>
            <td style="padding:28px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="border-radius:10px;background-color:#16a34a;">
                    <a href="https://wa.me/${waNumber}" style="display:block;padding:13px 0;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">WhatsApp Customer</a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="border-radius:10px;background-color:#ea580c;">
                    <a href="tel:+${waNumber}" style="display:block;padding:13px 0;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Call Customer</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #f1f1f1;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9a9a9a;">This lead was submitted through the quote form on wisemovetransport.co.za. Reply directly to this email to reach the customer.</span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: `New Lead: ${quote.name} (${quote.fromCity} → ${quote.toCity})`,
    html,
  };
}
