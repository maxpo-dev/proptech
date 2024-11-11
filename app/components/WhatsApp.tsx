import Script from 'next/script'

export default function YourComponent() {
  return (
    <div>
      {/* Other component code */}
      
      {/* HubSpot Embed Code */}
      <Script
        id="hs-script-loader"
        src="//js-na1.hs-scripts.com/48095805.js"
        strategy="afterInteractive"
      />

      {/* Other component code */}
    </div>
  )
}
