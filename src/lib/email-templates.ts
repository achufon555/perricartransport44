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

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const ICONS = {
  phone: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#ea580c" style="vertical-align:middle;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  email: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#ea580c" style="vertical-align:middle;"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  message: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#ea580c" style="vertical-align:middle;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
};

const WHATSAPP_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" style="vertical-align:middle;"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.93.55 3.72 1.49 5.24L2 22l4.88-1.45A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.94 7.94 0 01-4.24-1.23l-.31-.18-2.9.86.87-2.83-.2-.31A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>`;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function detailRow(icon: string, label: string, value: string, href?: string): string {
  const content = href
    ? `<a href="${href}" style="color:#1a1a1a;text-decoration:none;">${value}</a>`
    : value;
  return `
    <tr>
      <td width="36" style="padding:12px 0;border-bottom:1px solid #f1f1f1;vertical-align:top;">
        <div style="width:28px;height:28px;border-radius:8px;background-color:#fff7ed;text-align:center;line-height:28px;">${icon}</div>
      </td>
      <td style="padding:12px 0 12px 10px;border-bottom:1px solid #f1f1f1;vertical-align:middle;">
        <span style="display:block;font-family:${FONT};font-size:11px;font-weight:700;color:#9a9a9a;text-transform:uppercase;letter-spacing:0.06em;">${label}</span>
        <span style="display:block;font-family:${FONT};font-size:15px;font-weight:600;color:#1a1a1a;margin-top:2px;">${content}</span>
      </td>
    </tr>`;
}

function ctaButton(href: string, bg: string, label: string, icon?: string): string {
  return `
    <td style="border-radius:10px;background-color:${bg};">
      <a href="${href}" style="display:block;padding:13px 0;text-align:center;font-family:${FONT};font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">${icon ? `${icon} ` : ""}${label}</a>
    </td>`;
}

export function quoteNotificationEmail(quote: QuoteEmailData): { subject: string; html: string } {
  const dateStr = quote.createdAt.toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  });
  const serviceLabel = SERVICE_LABELS[quote.serviceType] || quote.serviceType;
  const waNumber = quote.phone.replace(/[^0-9]/g, "");
  const reference = `ORT-${String(quote.id).padStart(6, "0")}`;
  const preheader = `${quote.name} wants to move a ${quote.vehicleType} from ${quote.fromCity} to ${quote.toCity}. Ref ${reference}.`;

  const buttons = [
    ctaButton(`https://wa.me/${waNumber}`, "#16a34a", "WhatsApp", WHATSAPP_ICON),
    ctaButton(`tel:+${waNumber}`, "#1a1a1a", "Call", ICONS.phone.replace('fill="#ea580c"', 'fill="#ffffff"')),
  ];
  if (quote.email) {
    buttons.push(ctaButton(`mailto:${quote.email}`, "#ea580c", "Email", ICONS.email.replace('fill="#ea580c"', 'fill="#ffffff"')));
  }
  const buttonCells = buttons
    .map((btn, i) => (i === 0 ? btn : `<td width="3%"></td>${btn}`))
    .join("");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:${FONT};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;opacity:0;">${preheader}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#f97316 0%,#dc2626 100%);background-color:#ea580c;padding:28px 32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family:${FONT};font-size:20px;font-weight:900;color:#ffffff;letter-spacing:0.02em;">Open <span style="color:#1a1a1a;">Road</span></span><br/>
                    <span style="font-family:${FONT};font-size:11px;font-weight:700;color:rgba(255,255,255,0.85);text-transform:uppercase;letter-spacing:0.12em;">Transport</span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background-color:rgba(255,255,255,0.2);color:#ffffff;font-family:${FONT};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;padding:6px 12px;border-radius:999px;">&#9679; New Lead</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Meta bar -->
          <tr>
            <td style="background-color:#171717;padding:10px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:${FONT};font-size:12px;font-weight:600;color:#a3a3a3;">Ref ${reference}</td>
                  <td align="right" style="font-family:${FONT};font-size:12px;font-weight:600;color:#a3a3a3;">${dateStr} SAST</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead summary -->
          <tr>
            <td style="padding:28px 32px 4px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" style="vertical-align:top;">
                    <div style="width:44px;height:44px;border-radius:12px;background-color:#fff7ed;color:#ea580c;font-family:${FONT};font-size:16px;font-weight:800;text-align:center;line-height:44px;">${initials(quote.name)}</div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;">
                    <span style="display:block;font-family:${FONT};font-size:19px;font-weight:800;color:#1a1a1a;">${quote.name}</span>
                    <span style="display:block;font-family:${FONT};font-size:13px;color:#71717a;margin-top:2px;">Wants to move a ${quote.vehicleType} from ${quote.fromCity} to ${quote.toCity}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Route highlight -->
          <tr>
            <td style="padding:18px 32px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff7ed;border:1px solid #fed7aa;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-family:${FONT};font-size:16px;font-weight:800;color:#1a1a1a;">${quote.fromCity}</td>
                        <td width="32" align="center" style="font-family:${FONT};font-size:16px;color:#ea580c;">&rarr;</td>
                        <td align="right" style="font-family:${FONT};font-size:16px;font-weight:800;color:#1a1a1a;">${quote.toCity}</td>
                      </tr>
                    </table>
                    <span style="display:inline-block;margin-top:8px;font-family:${FONT};font-size:11px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:0.06em;background-color:#ffffff;border:1px solid #fed7aa;border-radius:999px;padding:4px 10px;">${serviceLabel}</span>
                    <span style="display:inline-block;margin-top:8px;margin-left:6px;font-family:${FONT};font-size:11px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:0.06em;background-color:#ffffff;border:1px solid #fed7aa;border-radius:999px;padding:4px 10px;">${quote.vehicleType}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:16px 32px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${detailRow(ICONS.phone, "Phone", quote.phone, `tel:+${waNumber}`)}
                ${quote.email ? detailRow(ICONS.email, "Email", quote.email, `mailto:${quote.email}`) : detailRow(ICONS.email, "Email", "Not provided")}
              </table>
            </td>
          </tr>

          ${
            quote.message
              ? `<!-- Notes -->
          <tr>
            <td style="padding:20px 32px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fafafa;border-left:3px solid #ea580c;border-radius:6px;">
                <tr>
                  <td style="padding:14px 16px;">
                    <span style="display:block;font-family:${FONT};font-size:11px;font-weight:700;color:#9a9a9a;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">${ICONS.message} &nbsp;Customer Notes</span>
                    <span style="display:block;font-family:${FONT};font-size:14px;color:#3f3f46;line-height:1.5;font-style:italic;">&ldquo;${quote.message}&rdquo;</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`
              : ""
          }

          <!-- CTA buttons -->
          <tr>
            <td style="padding:28px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  ${buttonCells}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #f1f1f1;">
              <span style="font-family:${FONT};font-size:12px;color:#9a9a9a;">This lead was submitted through the quote form on openroadtransport.co.za. Reply directly to this email to reach the customer.</span>
            </td>
          </tr>

        </table>
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td align="center" style="padding:16px 32px;">
              <span style="font-family:${FONT};font-size:11px;color:#a1a1aa;">Open Road Transport &middot; South Africa</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: `New Quote Request: ${quote.name} (${quote.fromCity} → ${quote.toCity})`,
    html,
  };
}
