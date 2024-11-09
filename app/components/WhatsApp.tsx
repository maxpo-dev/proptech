'use client'

import Script from 'next/script'

export default function BrevoScript() {
  return (
    <Script id="brevo-script" strategy="afterInteractive">
      {`
        (function(d, w, c) {
            w.BrevoConversationsID = '636f816781c4317b217ae8f0';
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
            var s = d.createElement('script');
            s.async = true;
            s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
            if (d.head) d.head.appendChild(s);
        })(document, window, 'BrevoConversations');
      `}
    </Script>
  )
}