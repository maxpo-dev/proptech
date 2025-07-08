import { Clock } from 'lucide-react'
import ScheduleHeroSection from '../components/ScheduleHerosection'

const scheduleData = [
  {
    day: 1,
    date: 'April 19, 2025',
    sessions: [
      { time: '09:00 AM - 09:30 AM', title: 'Opening Keynote: The Future of Proptech', speaker: 'John Doe' },
      { time: '09:45 AM - 10:30 AM', title: 'Panel: Blockchain in Real Estate Transactions', speaker: 'Jane Smith, Mike Johnson, David Brown' },
      { time: '10:45 AM - 11:30 AM', title: 'AI and Machine Learning in Property Management', speaker: 'Sarah Lee' },
      { time: '11:45 AM - 12:30 PM', title: 'Virtual and Augmented Reality in Property Showcasing', speaker: 'Emily Chen' },
      { time: '02:00 PM - 02:45 PM', title: 'The Rise of Smart Cities and IoT in Real Estate', speaker: 'Mike Johnson' },
      { time: '03:00 PM - 03:45 PM', title: 'Fractional Ownership: Democratizing Real Estate Investment', speaker: 'David Brown' },
      { time: '04:00 PM - 04:45 PM', title: 'Closing Panel: The Road Ahead for Proptech', speaker: 'All Speakers' },
    ]
  },
  {
    day: 2,
    date: 'April 20, 2025',
    sessions: [
      { time: '09:00 AM - 09:30 AM', title: 'Day 2 Keynote: Proptech Investment Landscape', speaker: 'David Brown' },
      { time: '09:45 AM - 10:30 AM', title: 'Workshop: Implementing Blockchain in Your Real Estate Business', speaker: 'Jane Smith' },
      { time: '10:45 AM - 11:30 AM', title: 'Panel: The Future of Work and Its Impact on Commercial Real Estate', speaker: 'John Doe, Sarah Lee, Emily Chen' },
      { time: '11:45 AM - 12:30 PM', title: 'Sustainable Buildings and Green Technology', speaker: 'Mike Johnson' },
      { time: '02:00 PM - 02:45 PM', title: 'Data Analytics and Big Data in Real Estate', speaker: 'Sarah Lee' },
      { time: '03:00 PM - 03:45 PM', title: 'The Evolution of Property Management Software', speaker: 'John Doe' },
      { time: '04:00 PM - 04:45 PM', title: 'Closing Remarks and Networking Session', speaker: 'All Speakers' },
    ]
  }
]

export default function Schedule() {
  return (
    <div>
      <ScheduleHeroSection />
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-black">Event Schedule</h1>
        {scheduleData.map((day) => (
          <div key={day.day} className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-slate-800">Day {day.day} - {day.date}</h2>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              {day.sessions.map((session, index) => (
                <div key={index} className={`p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="mb-2 flex items-center">
                    <Clock className="mr-2 text-blue-600" size={20} />
                    <span className="font-semibold text-blue-600">{session.time}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-700">{session.title}</h3>
                  <p className="text-gray-600">Speaker(s): {session.speaker}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}