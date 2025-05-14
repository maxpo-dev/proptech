import InvestorPitchContent from '@/app/components/Investor-ptch'
import PitchBenefits from '@/app/components/pitch-benefits'

export default function InvestorPitch() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mb-0">
        <InvestorPitchContent />
      </div>
      <div className="mt-0">
        <PitchBenefits />
      </div>
    </main>
  )
}


